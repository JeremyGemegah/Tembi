import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React,{forwardRef, useEffect, useImperativeHandle, useState} from 'react'
import Animated,{ useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { BillIcon, CancelIcon, HeartIcon, RateIcon, RidesIcon, WalkIcon } from '../assets/icons/svgIcons'



const {height: SCREEN_HEIGHT} = Dimensions.get('window')
const MAX_TRANSLATE_Y = SCREEN_HEIGHT /1
const MIN_TRANSLATE_Y = SCREEN_HEIGHT /5

const DockerDetails = forwardRef((props,ref) => {
    const [modal, setModal] = useState(true)
    const translateY = useSharedValue(0)
    const context = useSharedValue({y:0})
    const [opened, setOpened] = useState(true)
    const [favourite, setFavourite] = useState(false)

    useImperativeHandle(ref, () => ({
      scrollTo: () => {
        scrollTo(-SCREEN_HEIGHT/3)
      }
      
    }))

    const makeFavourite = () => {
      setFavourite(previous => !previous)
    }


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
        translateY.value = withSpring(SCREEN_HEIGHT)
      }
      if(translateY.value < -MIN_TRANSLATE_Y){
        translateY.value = withSpring(-MAX_TRANSLATE_Y)
      }
    })


 
    const scrollTo = (destination) => {
      'worklet'
      translateY.value = withSpring(destination, {damping: 10})
    }
    
  
    
    

  return (
    <GestureDetector gesture={gesture}>
   
    <Animated.View style={[styles.bottomsheet_container,reanimatedBottomStyle]} className='bg-neutral-10'>
        <View style={styles.line} className='bg-neutral-50' />
        <View className='mt-[16px] mx-[16px]'>
          <View>
          <View className='flex-row justify-between items-center w-full '>
            <View style={{ width: '70%'}}>
              <Text className='font-pregular text-[18px] text-secondary-950'>Parade Grounds Station</Text>
              <View className='flex-row items-center gap-[4px]'><WalkIcon /><Text className='text-neutral-70'>300 m | 4 min walk</Text></View>
            </View>

            <View className='flex-row items-center gap-[8px] '>
              <TouchableOpacity className='bg-neutral-30 p-[8px] rounded-full' onPress={makeFavourite}><HeartIcon color={favourite? '#DD214F': '#5D6C87'} secondary={favourite? '#DD214F': ''} /></TouchableOpacity>
              <TouchableOpacity className='bg-neutral-30 p-[8px] rounded-full' onPress={() => scrollTo(0)}><CancelIcon /></TouchableOpacity>
            </View>

            
          </View>
          <View className='flex-row items-center mt-[8px] justify-start'><View style={{backgroundColor: opened? '#449C0A' : '#DD214F'}} className='px-[12px] py-[2px] items-center text-center rounded-full'><Text className='text-neutral-10 font-pregular text-[10px]'>{opened? 'Open': 'closed'}</Text></View><Text className='font-pregular text-neutral-90'> ● </Text><Text className='font-pregular text-[12px] text-neutral-90'>Closes 10 pm</Text></View>
          </View>

          <View>
            <View>
              <View>
                <View className='flex-row items-center gap-[8px] '><RidesIcon color={'#449C0A'} /><Text>Bicycles Available</Text></View>
                <Text>07</Text>
                <Text>8 Docks Free</Text>

                <View className='flex-row gap-[4px] items-center'><RateIcon /><Text>Rate</Text></View>
                <Text>GH₵0.20/min</Text>
              </View>


              <View>
                <View><Image 
                  source={require("../assets/images/bicycle.png")}
                  style={{width: 300, height:200}}
                  resizeMode='cover'
                /></View>
              </View>
            </View>
          </View>
        </View>
    </Animated.View>
  
    </GestureDetector>
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

export default DockerDetails