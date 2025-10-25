import { Modal, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { WebView } from 'react-native-webview'
import { MaterialIcons } from '@expo/vector-icons'
import { GlobalContext } from '../app/(tabs)/_layout'

const Paystack = ({visible, onClose, uri, onPaymentComplete, onPaymentStatus}) => {
  const { apiToken } = useContext(GlobalContext);
  const ws = useRef(null);
  
  const handleNavigationStateChange = (navState) => {
    const { url } = navState;
    if (!url) return;

    // Check if the URL is the callback URL after a transaction
    // Paystack appends 'trxref' and 'reference' to your callback URL
    if (url.includes('?trxref=') && url.includes('&reference=')) {
      // Call the function to handle completion and pass the URL
      onPaymentComplete(url);
    }
  };

  useEffect(() => {
    if (!visible) {
      if (ws.current) {
        ws.current.close();
      }
      return;
    }

    const connectWebSocket = () => {
      if (!apiToken) {
        console.error("WebSocket connection failed: No API token.");
        return;
      }

      console.log('Attempting to establish WebSocket connection for payment status...');
      ws.current = new WebSocket(`wss://tembi.onrender.com/ws/notifications/?token=${apiToken}`);

      ws.current.onopen = () => {
        console.log('Payment WebSocket connection established.');
      };

      ws.current.onmessage = e => {
        try {
          const message = JSON.parse(e.data);
          // IMPORTANT: Adjust this condition based on the actual message from your backend
          if (message?.type === 'payment_update' && message?.data?.status === "success") {
            console.log('Payment status received:', message.data.status);
            if (onPaymentStatus) {
              onPaymentStatus(message.data.status); // e.g., 'successful' or 'failed'
            }
            ws.current.close();
            onClose();
          } // Close connection after getting the status
            
          
        } catch (error) {
          console.error('Error parsing WebSocket message:', error);
        }
      };

      ws.current.onerror = e => {
        console.error('WebSocket error:', e.message);
      };

      ws.current.onclose = e => {
        console.log('WebSocket closed:', e.code, e.reason);
        ws.current = null;
        // Optional: Simple reconnect logic if connection drops unexpectedly
        if (visible && e.code !== 1000) { // 1000 is normal closure
          console.log('WebSocket disconnected unexpectedly. Reconnecting in 3s...');
          setTimeout(connectWebSocket, 3000);
        }
      };
    };

    connectWebSocket();

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [visible, apiToken, onPaymentStatus]);

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
        <SafeAreaView style={{ flex: 1 }}>
            <View className="p-2 flex-row justify-end items-center">
                <TouchableOpacity onPress={onClose}>
                    <MaterialIcons name="close" size={30} color="#333" />
                </TouchableOpacity>
            </View>
            <WebView
                source={{ uri: uri }}
                style={{ flex: 1 }}
                startInLoadingState={true}
                onNavigationStateChange={handleNavigationStateChange}
            />
        </SafeAreaView>
    </Modal>
  )
}

export default Paystack