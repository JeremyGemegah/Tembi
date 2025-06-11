import { useRef, useState } from 'react'
import {Animated, Easing, Pressable, Text, View} from 'react-native'

const CustomSwitch = ({isOn,setIsOn}) => {

    
    const translateX = useRef(new Animated.Value(0)).current
    const bgAnim = useRef(new Animated.Value(0)).current

    const toggleSwitch = () => {
        const toValue = isOn ? 0 : 16;

        Animated.parallel([
            Animated.timing(translateX, {
                toValue,
                duration: 200,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true
            }),
            Animated.timing(bgAnim, {
                toValue: isOn ? 0: 1,
                duration: 200,
                easing: Easing.out(Easing.ease),
                useNativeDriver: false,
            })]).start();
        setIsOn(!isOn)
    }

    const interpolatedBgColor = bgAnim.interpolate({
        inputRange: [0,1]
        ,outputRange: ['#D3DFE7','#00806E']
    })

    return(
     <Pressable onPress={toggleSwitch}>
        <Animated.View className="w-[40px] p-[2px] rounded-[24px] flex  " style={{backgroundColor: interpolatedBgColor}}>
            
            <Animated.View className='w-[20px] h-[20px] bg-white rounded-full flex' style={{transform: [{ translateX }]}}></Animated.View>
        </Animated.View>
     </Pressable>
    )
}

export default CustomSwitch