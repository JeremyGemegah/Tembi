import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React,{forwardRef, useEffect, useImperativeHandle, useState, useRef} from 'react'
import Animated,{ runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { runOnUI } from 'react-native-reanimated'
import { BoundaryIcon, HelmetIcon, PedestrianIcon, RidesIcon, TrafficIcon } from '../assets/icons/svgIcons'
import { ScrollView } from 'react-native'






const SCREEN_HEIGHT = Dimensions.get('window').height
const RideGuideModal = forwardRef((props,ref) => {
    
    const MAX_TRANSLATE_Y = SCREEN_HEIGHT * 2
    const MIN_TRANSLATE_Y = SCREEN_HEIGHT + SCREEN_HEIGHT * 0.5
    const translateY = useSharedValue(0)
    const context = useSharedValue({y:0})
    
    useImperativeHandle(ref, () => ({
        scrollTo: () => {
            runOnUI(() => {
                'worklet'
                translateY.value = withSpring(-MAX_TRANSLATE_Y,{damping: 40, stiffness: 250, mass: 2});
                
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
 
    const scrollTo = (destination) => {
      'worklet'
      translateY.value = withSpring(destination, {damping: 15})
    }

    

  return (
   
    <View>
    <Animated.View style={[styles.bottomsheet_container,reanimatedBottomStyle]} className='bg-neutral-10'>
        <ScrollView style={{flex:1}}>
        <View style={styles.line} className='bg-neutral-50' />
       <View style={{position:'relative'}}>
    <GestureDetector gesture={gesture}>
            <Image
                                    source={require("../assets/images/Banner.png")}
                                    resizeMode="contain"
                                    className="h-[184px] self-center mx-[57px]"
                                    style={{borderTopRightRadius:25, borderTopLeftRadius:25}}
                                    />
                                    </GestureDetector>
       </View>
       <View className='px-[16px]'>
        <View className='pt-[24px] pb-[16px]'>
          <Text className='text-neutral-90 text-center font-pmedium text-[18px]'>Ride Safely with Tembi</Text>
          <Text className='font-pregular text-[14px] text-neutral-70 text-center'>Follow these safety guidelines to ensure a smooth and secure ride on campus.</Text>
        </View>
        <View>


          <View className="box-content p-[12px] rounded-[16px]   gap-[12px]" style={{flexDirection:'row'}} >
                      <View className="p-[12px] rounded-[12px] border-neutral-30 border-[1px] self-center bg-[#F5F8FA]" ><HelmetIcon/></View>
                      <View style={{flex: 1}}>
                      
                      <Text className="text-seconary-950 text-[14px] font-pregular ">Wear a Helmet</Text>
                           <Text className=" text-neutral-70 font-plight text-[12px]"  >Always wear a properly fitted helmet to protect yourself in case of an accident.</Text>
                      
                      </View>
                  </View>


          <View className="box-content p-[12px] rounded-[16px]   gap-[12px]" style={{flexDirection:'row'}} >
                      <View className="p-[12px] rounded-[12px] border-neutral-30 border-[1px] self-center bg-[#F5F8FA]" ><RidesIcon color={'#1A73E9'} /></View>
                      <View style={{flex: 1}}>
                      
                      <Text className="text-seconary-950 text-[14px] font-pregular ">Check Your Bike Before Riding</Text>
                           <Text className=" text-neutral-70 font-plight text-[12px]"  >Inspect the brakes, tires, and frame before starting your ride to ensure everything is in good condition.</Text>
                      
                      </View>
                  </View>


          <View className="box-content p-[12px] rounded-[16px]   gap-[12px]" style={{flexDirection:'row'}} >
                      <View className="p-[12px] rounded-[12px] border-neutral-30 border-[1px] self-center bg-[#F5F8FA]" ><TrafficIcon /></View>
                      <View style={{flex: 1}}>
                      
                      <Text className="text-seconary-950 text-[14px] font-pregular ">Follow Campus Traffic Rules</Text>
                           <Text className=" text-neutral-70 font-plight text-[12px]"  >Slow down near walkways and always yield to pedestrians to avoid collisions.</Text>
                      
                      </View>
                  </View>


          <View className="box-content p-[12px] rounded-[16px]   gap-[12px]" style={{flexDirection:'row'}} >
                      <View className="p-[12px] rounded-[12px] border-neutral-30 border-[1px] self-center bg-[#F5F8FA]" ><PedestrianIcon/></View>
                      <View style={{flex: 1}}>
                      
                      <Text className="text-seconary-950 text-[14px] font-pregular ">Be Mindful of Pedestrians</Text>
                           <Text className=" text-neutral-70 font-plight text-[12px]"  >Slow down near walkways and always yield to pedestrians to avoid collisions.</Text>
                      
                      </View>
                  </View>


          <View className="box-content p-[12px] rounded-[16px]   gap-[12px]" style={{flexDirection:'row'}} >
                      <View className="p-[12px] rounded-[12px] border-neutral-30 border-[1px] self-center bg-[#F5F8FA]" ><BoundaryIcon /></View>
                      <View style={{flex: 1}}>
                      
                      <Text className="text-seconary-950 text-[14px] font-pregular ">Ride Within the Campus Boundary</Text>
                           <Text className=" text-neutral-70 font-plight text-[12px]"  >Tembi bicycles are restricted to campus use only. Do not attempt to ride beyond the designated area.</Text>
                      
                      </View>
                  </View>
        </View>
        
       </View>
</ScrollView>
    </Animated.View>
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
    ,zIndex: 120
    ,borderRadius: 25
    
  },
  line:{
    width: 64
    ,height: 6
    ,borderRadius: 20
    ,alignSelf:'center'
    ,marginVertical: 10
    ,position:'absolute'
    ,zIndex: 121
  }
  
})

export default RideGuideModal

