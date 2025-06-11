import { ScrollView, Text,View, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { BackIcon, LocationIcon, LocationMarkerIcon } from '../assets/icons/svgIcons'
import { router } from "expo-router"
import { LinearGradient } from "expo-linear-gradient"
import MapView, {Marker} from "react-native-maps"
import MapViewDirections from "react-native-maps-directions"
import { useState } from "react"
import { Modal } from "react-native"






const RideDetails = ({visibility,onClose,title}) => {
    const [destination, setDestination] = useState({
        latitude: 6.5792,
        longitude: 79.9629,})

    const [origin, setOrigin] = useState({
                latitude: 6.9271,
                longitude: 79.8612,
                })

    return(
        <Modal animationIn="slideInLeft"  visible={visibility}  onLayout={()=> setDisplay(true)}>
        <SafeAreaView>
        <ScrollView className="h-full bg-neutral-10 w-full" >
     
        <View  className="flex-row pt-[15px]">
            <TouchableOpacity onPress={() => onClose()} className="w-16 h-16 items-center justify-center">
                <BackIcon/>
            </TouchableOpacity>
            <View className="justify-center">
            <Text className="text-[18px]  font-pregular">{title}</Text>
            <Text className="text-[12px]  font-plight ">Mon, 3 Feb 2025</Text>
            </View>
        </View>


        <View className='px-[16px] pb-[120]'>
            
        <View className='border-[2px] border-neutral-30 mb-[20px] mt-[16px] h-[260px] rounded-[12px]'>
            <MapView
            style={{flex:1}}
                initialRegion={{
                        latitude: 7.8731,
                        longitude: 80.7718,
                        latitudeDelta: 5,
                        longitudeDelta: 1,
                    }}>
                        <MapViewDirections
                            origin={origin}
                            destination={destination}
                            strokeWidth={4}
                            apikey="AIzaSyAeyi0XeQSbqEMzKVvpFmuNpwkyVhk4W_Y"
                            strokeColor="red"
                        />

                        <Marker coordinate={origin} title="starting point" />
                        <Marker coordinate={destination} title="end point" />
            </MapView>
        </View>

            <View className='px-[12px]'>
                <View className='flex-row gap-[12px]'>
                    <View>
                    <View className=' p-[8px] rounded-full bg-[#1A73E9]' >
                    <LocationIcon color={'white'} />
                    </View>
                    </View>
                    <View>
                        <Text className='font-pregular text-[16px] text-neutral-90'>Brunei Station</Text>
                        <Text className='font-plight text-[12px]'>07:38 AM</Text>
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
                        <Text className='font-pregular text-[16px] text-neutral-90'>Engineering Station</Text>
                        <Text className='font-plight text-[12px]'>07:45 AM</Text>
                    </View>
                </View>
                   
            </View>

            <View className='mt-[20px]'>
                <Text className='font-pregular text-[18px]'>Payment</Text>
                <View className='px-[8px] mt-[20px] gap-[8px]'>
                    <View className='px-[8px] flex-row justify-between'>
                        <Text className='text-secondary-800 font-pregular text-[16px]'>Subtotal</Text>
                        <Text className='text-secondary-800 font-pregular text-[16px]'>GH₵0.78</Text>
                    </View>
                    <View className='px-[8px] flex-row justify-between pb-[8px] border-b border-neutral-30'>
                        <View className='flex-row gap-[8px]'><Text className='text-secondary-800 font-pregular text-[16px]'>Tax</Text><View className='px-[12px] py-[2px] border rounded-full border-primary-20 bg-primary-10'><Text className='text-primary-60'>7.8%</Text></View></View>
                        <Text className='text-secondary-800 font-pregular text-[16px]'>GH₵0.78</Text>
                    </View>

                    {/* border */}

                    <View  className='px-[8px] flex-row justify-between pt-[4px]'>
                        <Text className=' font-pregular text-[16px]'>Total:</Text>
                        <Text className=' font-pregular text-[16px]'>GH₵0.88</Text>
                    </View>
                </View>
            </View>
        </View>
        
        
        </ScrollView>
        </SafeAreaView>
        </Modal>
    )
}

export default RideDetails