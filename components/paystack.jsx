import { Modal, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { WebView } from 'react-native-webview'
import { MaterialIcons } from '@expo/vector-icons'

const Paystack = ({visible, onClose, uri, onPaymentComplete}) => {

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