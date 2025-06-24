import { View, Text, Image, Modal, TouchableOpacity,Dimensions} from 'react-native'
import React,{useRef} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from './CustomButton'
import RideGuideModal from './rideGuideModal'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const {height: SCREEN_HEIGHT} = Dimensions.get('window')

const UnlockSuccessModal = ({visibility, onClose}) => {
    const guideLines = useRef()

  return (
    <Modal visible={visibility} animationType='slide' >
    <GestureHandlerRootView>
    <SafeAreaView >
               
                    <View className="h-full w-full justify-center ">
                <View className="px-[16px] gap-[28px] ">
                    <View className="items-center">
                        <Text className=" font-pmedium text-[24px] text-[#235C04]">Your Ride Has Started</Text>
                        <Text className="text-[14px] font-pregular text-neutral-70 text-center">Bike successfully unlocked. Enjoy your ride!</Text>
                    </View>
    
                    <View>
                    <Image
                        source={require("../assets/images/Rideabicycle 1.jpg")}
                        resizeMode="contain"
                        className="h-[248px] self-center"
                    />
                  </View>
    
                  <View>
                    <Text className="font-pregular text-[14px] text-neutral-70 text-center">You can check Safety Guidelines to ensure a safe and enjoyable ride.</Text>
                  </View>
                  <View className='gap-[12px]'>
                    <CustomButton title={'Continue Ride'} containerStyles={"bg-primary-50"} textStyles={"color-secondary-950 font-pregular text-[14px]"} handlePress={onClose} />
                        <TouchableOpacity onPress={() => guideLines.current.scrollTo()}><Text className='text-center text-[#1A73E9]' >Check Safety Guidelines</Text></TouchableOpacity>
                  </View>
                </View>
                </View>
                <RideGuideModal ref={guideLines} mu={SCREEN_HEIGHT} />
               
            </SafeAreaView>
            </GestureHandlerRootView>
            </Modal>
  )
}

export default UnlockSuccessModal