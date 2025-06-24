import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React,{forwardRef, useEffect, useImperativeHandle, useState, useRef} from 'react'
import Animated,{ runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { runOnUI } from 'react-native-reanimated'
import { useGlobal } from '../app/(tabs)/_layout'





const {SCREEN_HEIGHT} = Dimensions.get('window')
const RideGuideModal = forwardRef((props,ref) => {
    
    const MAX_TRANSLATE_Y = SCREEN_HEIGHT
    const MIN_TRANSLATE_Y = SCREEN_HEIGHT
    const translateY = useSharedValue(0)
    const context = useSharedValue({y:0})
    
    useImperativeHandle(ref, () => ({
        scrollTo: () => {
            runOnUI(() => {
                'worklet'
                translateY.value = withSpring(-MAX_TRANSLATE_Y);
  })();
}

}))





const reanimatedBottomStyle = useAnimatedStyle( e => {
    return{
        transform: [ {translateY: translateY.value}]
    }
})

const gesture = Gesture.Pan()
    .onStart(e => {
      context.value = {y: translateY.value}
    })
    .onUpdate(e => {
        translateY.value = e.translationY + context.value.y;
        translateY.value = Math.max(translateY.value, -MAX_TRANSLATE_Y)
    })
    .onEnd(e => {
      if(translateY.value > -MIN_TRANSLATE_Y){
        translateY.value = withSpring(-SCREEN_HEIGHT)
      }
      if(translateY.value < -MIN_TRANSLATE_Y){
        translateY.value = withSpring(-MAX_TRANSLATE_Y)
      }
    })

    const closeModal = () => {
      scrollTo(0)
  
    }
 
    const scrollTo = (destination) => {
      'worklet'
      translateY.value = withSpring(destination, {damping: 15})
    }

    

  return (
      <View>
    <GestureDetector gesture={gesture}>
   
    <Animated.View style={[styles.bottomsheet_container,reanimatedBottomStyle]} className='bg-neutral-10'>
        <View style={styles.line} className='bg-neutral-50' />
       <View className='h-full'>
            <Image
                                    source={require("../assets/images/Rideabicycle 1.jpg")}
                                    resizeMode="contain"
                                    className="h-[248px] self-center"
                                />
       </View>

    </Animated.View>
  
    </GestureDetector>
    </View>
  )
})

const styles = StyleSheet.create({
  bottomsheet_container:{
    width:'100%'
    ,height: SCREEN_HEIGHT
    ,position:'absolute'
    ,top: SCREEN_HEIGHT 
    ,elevation: 9999
    ,zIndex: 12000
    ,borderRadius: 25
    ,paddingHorizontal: 10
  },
  line:{
    width: 64
    ,height: 6
    ,borderRadius: 20
    ,alignSelf:'center'
    ,marginVertical: 10
  }
  
})

export default RideGuideModal

