import { View, Text,Dimensions, FlatList, ImageBackground} from 'react-native'
import React, { useState,useRef, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import { BackHandler } from 'react-native'


import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import Animated,{ LinearTransition } from 'react-native-reanimated'

const OnboardingScreens = () => {


    const [current, setCurrent] = useState(0)
    const flatListRef = useRef(null)
    const data = [{id:1, color:'bg-primary-50', source: require('../../assets/images/onboarding-1.jpeg'), title: (<Text><Text className="text-primary-50">Quick</Text> and <Text className="text-primary-50">Easy Rides</Text> Around Campus</Text>), content:'Find bikes at designated hubs, reserve in seconds, and get to your destination hassle-free', resizeMode:''},{id: 2, color:'bg-secondary-100', source: require('../../assets/images/onboarding-2.png'), title: (<Text>Save Money,<Text className="text-primary-50">Save the Planet</Text></Text>), content:'Affordable rides designed for students and a greener campus with reduced carbon emmissions', resizeMode:''}, {id:3, color:'bg-primary-80', source: require('../../assets/images/onboarding-3.jpeg'), title: (<Text><Text className="text-primary-50">Safe</Text>,<Text className="text-primary-50">Secure</Text>, and Always <Text className="text-primary-50">Available</Text>.</Text>), content:'Smart locks, GPS tracking, and geofenced areas ensure your rides are safe and always on campus', resizeMode:''}]


    const autoRotate = (forward) => {
        const nextIndex = forward? (current + 1) % data.length : (current-1) % data.length
        console.log(nextIndex)
        if(nextIndex >= 0 && nextIndex < data.length) {
            const nextItemOffset = (Dimensions.get('window').width ) * nextIndex

            flatListRef?.current?.scrollToOffset({
                animated: true,
                offset: nextItemOffset,
            })
            setCurrent(nextIndex)
        }else{
            setCurrent(0)
        }
    }

    

    useEffect(() => {
        const backAction = () => {
        if(current === 0){
            return false;
        }
        autoRotate(false)
        return true;
        }

        const backhandler = BackHandler.addEventListener('hardwareBackPress', backAction)

        return () => backhandler.remove()
    })

 
    
   const _layoutTransition = LinearTransition.springify().damping(80).stiffness(200)
    



  return (
    <SafeAreaView className="h-full">
        <FlatList 
            ref={flatListRef}
            className="bg-primary-100"
            data={data}
            scrollEnabled={false}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <ImageBackground  style={{width: Dimensions.get('window').width}} source={item.source} resizeMode={item.resizeMode}>
                     <LinearGradient
                       // Background Linear Gradient
                        colors={['transparent','rgba(0,0,0,0.85)']}
                        style={{position:'absolute', height:600, left: 0,right:0, bottom:0}}
                    />
                    
                <View className="flex-1 justify-end mb-[160] items-center px-[32px]">
                    <Text className="text-neutral-10 text-[28px] text-center">{item.title}</Text>
                    <Text className="text-neutral-10 text-center text-[14px]">{item.content}</Text>

                </View>
                </ImageBackground>
            )}
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            snapToInterval={Dimensions.get('window').width }
            decelerationRate="normal"
        />
        <View className="justify-start items-end absolute top-[30] right-0 ">
                        <Text className="text-neutral-10 text-[16px] mr-[24px] mt-[16px] font-medium" onPress={() => router.replace('/home')}>Skip</Text>
                    </View>

        <View className="h-[160] pt-7 px-[16px]" style={{position:'absolute', left:0, right: 0, bottom:0}}>
           <Animated.View className="flex-row justify-center mb-7 gap-[8px]" layout={_layoutTransition}> 
            {data.map((_,index) => (
                <Animated.View key={index} className={` h-[8px]   rounded-full ${current === index? 'bg-primary-50' : 'bg-primary-90'} transition-all duration-300`} style={{width: current === index? 20 : 8}} layout={_layoutTransition} ></Animated.View>
            ))}
            </Animated.View>
            <CustomButton title={'Next'} transition={true} layout={_layoutTransition} SecondTitle='Start Riding' queue={current === 2}  containerStyles={"bg-primary-50 "} handlePress={current === 2? () => router.replace('/sign-up') : () => autoRotate(true)} />
        </View>
    </SafeAreaView>
  )
}

export default OnboardingScreens