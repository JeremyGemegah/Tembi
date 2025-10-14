import { View, Text, Modal, TouchableOpacity, Dimensions} from 'react-native'
import React, { useEffect, useState, useRef} from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import {CameraView } from 'expo-camera'
import { FlashLightIcon, KeypadIcon, QuestionIcon } from '../assets/icons/svgIcons'
import CustomButton from './CustomButton'
import Svg,{Rect,Defs,Mask,Path} from 'react-native-svg'
import { StyleSheet } from 'react-native'
import DialogueModal from './dialogueModal'
import { customEventEmitter } from './eventEmitters/eventEmitter'
import { CautionIcon } from '../assets/icons/svgIcons'
import LoaderModal from './loaderModal'
import { GlobalContext } from '../app/(tabs)/_layout'
import Insufficientbalance from './insufficientbalance'
import { useContext } from 'react'
import { apiCall } from './functions/functions'

const { width, height: screenHeight } = Dimensions.get('window');


const ScanCode = ({visibility, onClose}) => {
    const [flashMode, setFlashMode] = useState(false)
    const [manualEnter, setManualEnter] = useState(false);
    const [dockerCode, setDockerCode] = useState('');
    const [rentalError, setRentalError] = useState(false);
    const [rentalErrorMessage, setRentalErrorMessage] = useState({tite:'',message:''})
    const [loading, setLoading] = useState(false)
    const [balanceModal, setBalanceModal] = useState(false)
    const {apiToken, expoPushToken} = useContext(GlobalContext)
   
    const startRental = async (code) => {
      setLoading(true)

      try{
/*         const jsonData = JSON.parse(code);
 */        console.log(code)
    
        const response = await apiCall('rentals/start/', null, 'POST', JSON.parse(code));
        
        setLoading(false);
        setManualEnter(false);
        return response;
  } catch (error) {
      setLoading(false)
      setBalanceModal(true)
      console.log('Error starting rental:', error)
      throw error; // Re-throw the error to be handled by the calling function
  }
}

    const handleScan = async (scannedCode) => {
      const code = scannedCode || dockerCode;
      if(loading) return; // Prevent multiple scans while loading
      

      if (!code) {
          setRentalErrorMessage({title:'No code entered', message:'You must enter or scan a code to start'})
          setRentalError(true)
          setManualEnter(false);
          return;
      }

      // This callback will be invoked by the listener in home.jsx
      // to report back whether the post-scan setup (like WebSocket) was successful.
      const rideStatusCallback = (error) => {
        setLoading(false);
        if (error) {
          // The listener in home.jsx reported an error.
          setRentalErrorMessage({ title: 'Session Error', message: error.message });
          throw error; // Re-throw the error to be caught by the catch block below
          setRentalError(true);
        } else {
          // Success! The listener is ready, so we can close the scanner.
          onClose();
        }
      };

      try {
          setLoading(true);
          // Pass the raw code string to startRental
          const data = await startRental(code);
          console.log("Rental started (API):", data);
          // Pass the callback to the listener. It will be called to confirm success/failure.
          customEventEmitter.emit('DockerCodeAccepted', rideStatusCallback, data);
      } catch (error) {
          setLoading(false);
          setRentalErrorMessage({title:'there was an error', message:error.message})
          setRentalError(true)
      } finally {
          setManualEnter(false);
          setDockerCode('');
      }
    }

    useEffect(() => {
      if (!visibility) {
        setFlashMode(false);
      }
    }, [visibility]);
    

  return (
    <View >
      <Modal animationType='slide'  visible={visibility}>
        <CameraView facing='back'  style={{flex:1}}
            barcodeScannerSettings={{
                barcodeTypes: ["qr"],
                
            }}
          enableTorch={flashMode}  

          onBarcodeScanned={(bar) => {
           handleScan(bar.data);
          }}
          
        >
            <View className="h-full" style={{ height:'100%'}} >
         
                <Svg style={{position:'absolute', width:230, height:230, left:70, top:125}}>  
                <Path d="M172 1V1C184.085 1 190.128 1 195.119 2.17933C211.331 6.0104 223.99 18.6689 227.821 34.8812C229 39.8719 229 45.9146 229 58V58M58 1V1C45.9146 1 39.8719 1 34.8812 2.17933C18.6689 6.0104 6.0104 18.6689 2.17933 34.8812C1 39.8719 1 45.9146 1 58V58M172 229V229C184.085 229 190.128 229 195.119 227.821C211.331 223.99 223.99 211.331 227.821 195.119C229 190.128 229 184.085 229 172V172M58 229V229C45.9146 229 39.8719 229 34.8812 227.821C18.6689 223.99 6.0104 211.331 2.17933 195.119C1 190.128 1 184.085 1 172V172" stroke="#fadd99" stroke-width="2" stroke-linecap="round" fill="none" />
                </Svg>
             
             
                 {/*    <Svg style={{position:'absolute', bottom:0, left:0, right:0}}>
                <Defs>
                <Mask id="mask">
                    <Rect x="0" y="0" width="100%" height="100%" fill="white" />
                    
                    <Rect
                    x="85"
                    y="140"
                    width="200"
                    height="200"
                    fill="black"
                    rx={40} // Rounded corners
                    />
                    
                </Mask>
                </Defs>

                <Rect
                x="0"
                y="0"
                width="100%"
                height="500%"
                fill="rgba(0, 0, 0, 0.5)"
                mask="url(#mask)"
                />
            </Svg> */}
           

                <View style={{flexDirection:'row', justifyContent:'space-between'}} className="p-[16px]">
                    <TouchableOpacity onPress={() => onClose()}>
                        <MaterialIcons name="close" color="#fff" size={30} />
                    </TouchableOpacity>

                    <TouchableOpacity className="bg-neutral-10 rounded-full p-[6px]">
                        <QuestionIcon />
                    </TouchableOpacity>
             </View>
             <View className="px-[16px] flex-column content-end " style={{marginTop:280, position:'relative'}}>
             
             
                <View>
                    <Text className="text-center text-neutral-10 font-pregular py-[16px]">Scan QR Code to start biking</Text>
                </View>
                <View style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity className="p-[12px] rounded-full bg-neutral-10" onPress={() => setFlashMode(!flashMode)}>
                    <FlashLightIcon />
                    </TouchableOpacity>
                    
                </View>
                <Text className="text-neutral-10 py-[16px] text-center font-pregular">OR</Text>
                <CustomButton title={"Enter code manually"} containerStyles={"bg-neutral-10"} animated={false} Icon={() => <KeypadIcon />} handlePress={() => setManualEnter(true)} />
             </View>
             </View>
        </CameraView>
        <DialogueModal visibility={manualEnter} Title={'Enter code'} centered={true} content={'Please type in the code located below the QR Code'} affirmText={'Confirm'} negativeText={'Cancel'} titleStyles={'text-neutral-90 font-pmedium text-[16px]'} negativeButtonContainerStyles={'border-[1px] border-neutral-50'} affirmButtonContainerStyles={'bg-primary-50'} affirmTextStyles={'font-pregular text-[12px] leading-2'} negativeTextStyles={'text-neutral-70 text-[12px]'} textInput={dockerCode} setTextInput={setDockerCode} onResponse={(confirmed) => confirmed? handleScan() : setManualEnter(false)}  />
        <DialogueModal visibility={rentalError} Title={rentalErrorMessage.tite} content={rentalErrorMessage.message}  titleStyles={'text-critical-70 font-pmedium text-[16px]'} affirmText={'OK'} centered Icon={() => <CautionIcon/>} onResponse={() => setRentalError(false)}/>
        <LoaderModal visibility={loading} Title={'Wait a minute...'} content={'Verifying code'} Icon={() => <LoaderIcon />} />
        <Insufficientbalance visibility={balanceModal} onClose={() => setBalanceModal(false)} />
      </Modal>
    </View>
  )
}


export default ScanCode