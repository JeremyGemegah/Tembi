import { View, Text, Modal, Pressable } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { Camera, CameraView } from 'expo-camera'


const ScanCode = ({visibility, onClose}) => {
  return (
    <View>
      <Modal animationType='slide'  visible={visibility}>
        <CameraView facing='back'  style={{flex:1}}>

             <Pressable onPress={() => onClose()}>
                <MaterialIcons name="close" color="#fff" size={30} />
             </Pressable>
          
        </CameraView>
      </Modal>
    </View>
  )
}

export default ScanCode