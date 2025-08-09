import { ScrollView, Text,View, TouchableOpacity,Image} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { BackIcon, LocationIcon, LocationMarkerIcon } from '../assets/icons/svgIcons'
import { router } from "expo-router"
import { LinearGradient } from "expo-linear-gradient"
import MapView, {Marker} from "react-native-maps"
import MapViewDirections from "react-native-maps-directions"
import { useState } from "react"
import { Modal } from "react-native"
import CustomButton from "./CustomButton"






const RideCompleteModal = ({visibility,onClose,rideDetails}) => {
    const [destination, setDestination] = useState({
        latitude: 6.5792,
        longitude: 79.9629,})

        const rideStartDate = new Date(rideDetails?.start_time)
        const rideEndDate =new Date(rideDetails?.end_time)
        const price = rideDetails?.cost ? parseFloat(rideDetails.cost).toFixed(2) : 0.00


    const [origin, setOrigin] = useState({
                latitude: 6.9271,
                longitude: 79.8612,
                })

    return(
        <Modal animationIn="slideInLeft"  visible={visibility}  onLayout={()=> setDisplay(true)}>
        <SafeAreaView>
        
     
       

        <View className='px-[16px] h-full justify-center'>

            <View className="items-center">
                                    <Text className=" font-pmedium text-[24px] text-[#235C04]">Ride Completed!</Text>
                                    <Text className="text-[14px] font-pregular text-neutral-70 text-center">You have successfully parked the bike.</Text>
                                </View>
                <View>
                                    <Image
                                        source={require("../assets/images/bike parking.jpg")}
                                        resizeMode="contain"
                                        className="h-[248px] self-center"
                                    />
                                  </View>
            <View><Text className='font-pregular text-[16px] pb-[16px] text-secondary-950 text-center'>Ride Summary</Text></View>
            <View><Text className='font-pregular text-[14px] pb-[8px] text-neutral-70'>ROUTE</Text></View>
            <View className='px-[12px]'>
                <View className='flex-row gap-[12px]'>
                    <View>
                    <View className=' p-[8px] rounded-full bg-[#1A73E9]' >
                    <LocationIcon color={'white'} />
                    </View>
                    </View>
                    <View>
                        <Text className='font-pregular text-[16px] text-neutral-90'>{rideDetails?.start_docker?.split(' | ').pop().trim() }</Text>
                        <Text className='font-plight text-[12px]'>{rideStartDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</Text>
                    </View>
                </View>
                <View>
                    <LinearGradient
                     colors={['#1A73E9', '#002520']}
                     start={{x:0, y:0}}
                     end={{x:0, y:1}}
                     className='w-[4px] h-[34px] rounded-full ml-[18px] mt-[-2px] mb-[4px]'
                     style={{ borderRadius:8}}
                    ></LinearGradient>
                </View>
                
                <View className='flex-row gap-[12px]'>
                    <View>
                    <View className=' p-[8px] rounded-full bg-secondary-950' >
                    <LocationMarkerIcon color={'white'} />
                    </View>
                    </View>
                    <View>
                        <Text className='font-pregular text-[16px] text-neutral-90'>{rideDetails?.end_docker?.split(' | ').pop().trim() || 'Unknown Station'}</Text>
                        <Text className='font-plight text-[12px]'>{rideEndDate?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }) || 'Unknown Time'}</Text>
                    </View>
                </View>
                   
            </View>

            <View className='mt-[20px]'>
                <Text className='font-pregular text-[14px] text-neutral-70'>PAYMENT</Text>
                <View className='px-[8px]  gap-[16px]'>
                  {/* border */}

                    <View  className='px-[8px] flex-row justify-between '>
                        <Text className='text-secondary-800 font-pregular text-[18px]'>Total:</Text>
                        <Text className=' font-pregular text-[16px]'>GH₵ { price }</Text>
                    
                    </View>
                    <CustomButton title={'Return Home'} containerStyles={'bg-primary-50'} handlePress={onClose} />
                </View>
            </View>
        </View>
        
        
      
        </SafeAreaView>
        </Modal>
    )
}

export default RideCompleteModal