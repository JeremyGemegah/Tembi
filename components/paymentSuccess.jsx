import { ScrollView, Text,View, TouchableOpacity,Image} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { BackIcon, LocationIcon, LocationMarkerIcon } from '../assets/icons/svgIcons'
import { router } from "expo-router"
import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"
import { Modal } from "react-native"
import CustomButton from "./CustomButton"






const PaymentSuccess = ({visibility,onClose,amount,channel,reference,date,time}) => {




    return(
        <Modal animationIn="slideInLeft"  visible={visibility}  onLayout={()=> setDisplay(true)}>
        <SafeAreaView>
        
     
       

        <View className='px-[16px] h-full justify-center'>

            <View className="items-center">
                                    <Text className=" font-pmedium text-[24px] text-[#235C04]">Deposit Successful!</Text>
                                    <Text className="text-[14px] font-pregular text-neutral-70 text-center">₵{amount}.00 has been added to your wallet.</Text>
                                </View>
                <View>
                                    <Image
                                        source={require("../assets/images/PaymentSucess.png")}
                                        resizeMode="contain"
                                        className="h-[248px] self-center"
                                    />
                                  </View>
           
            <View className='px-[12px]'>

                <View className='border border-neutral-30 rounded-[8px] p-[12px]'>
                    <View className="justify-center items-center mb-[12px] ">
                        <Text className='text-[16px] font-pregular text-neutral-950'>Transaction Details</Text>
                    </View>
                    <View>

                        
                        <View className="flex-row justify-between py-[6px] px-[8px] border-b border-b-neutral-30">
                            <Text className="text-neutral-70 font-plight text-[12px]">Reference</Text>
                            <Text className="text-neutral-90 font-plight text-[12px]" >{reference}</Text>
                        </View>


                        <View className="flex-row justify-between py-[6px] px-[8px] border-b border-b-neutral-30">
                            <Text className="text-neutral-70 font-plight text-[12px]">Channel</Text>
                            <Text className="text-neutral-90 font-plight text-[12px]" >{channel}</Text>
                        </View>


                        <View className="flex-row justify-between py-[6px] px-[8px] border-b border-b-neutral-30">
                            <Text className="text-neutral-70 font-plight text-[12px]">Date</Text>
                            <Text className="text-neutral-90 font-plight text-[12px]" >{date}</Text>
                        </View>


                        <View className="flex-row justify-between py-[6px] px-[8px] border-b border-b-neutral-30">
                            <Text className="text-neutral-70 font-plight text-[12px]">Time</Text>
                            <Text className="text-neutral-90 font-plight text-[12px]" >{time}</Text>
                        </View>


                        <View className="flex-row justify-between py-[6px] px-[8px] ">
                            <Text className="text-neutral-70 font-plight text-[12px]">Amount</Text>
                            <Text className="text-neutral-90 font-plight text-[12px]" >₵{amount}.00</Text>
                        </View>
                    </View>
                </View>
                
                   
            </View>

            <View className='mt-[20px]'>

                <View className='px-[8px]  gap-[16px]'>
                

                    
                   <View className="gap-[8px]">
                    <CustomButton title={'Return to Wallet'}  handlePress={onClose} containerStyles={'border-[1px] border-[#D3DFE7]'}  />
                   <CustomButton title={'Start a Ride'} containerStyles={'bg-primary-50'} handlePress={() => {router.push('/home'); onClose()}} />
                   </View>
                </View>
            </View>
        </View>
        
        
      
        </SafeAreaView>
        </Modal>
    )
}

export default PaymentSuccess