import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React,{forwardRef, useEffect, useImperativeHandle, useState} from 'react'
import Animated,{ useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { BillIcon, CancelIcon, CriticalIcon, DirectionsIcon, HeartIcon, RateIcon, RidesIcon, VideoIcon, WalkIcon } from '../assets/icons/svgIcons'
import CustomButton from './CustomButton'



const {height: SCREEN_HEIGHT} = Dimensions.get('window')
const MAX_TRANSLATE_Y = SCREEN_HEIGHT /1
const MIN_TRANSLATE_Y = SCREEN_HEIGHT /5

const DockerDetails = forwardRef((props,ref) => {
    const [modal, setModal] = useState(true)
    const translateY = useSharedValue(0)
    const context = useSharedValue({y:0})
    const [opened, setOpened] = useState(true)
    const [favourite, setFavourite] = useState(false)
    const [critical, setCritical] = useState(false)
    const [videoNotification, setVideoNotification] = useState(true)

    useImperativeHandle(ref, () => ({
      scrollTo: () => {
        scrollTo(-SCREEN_HEIGHT/3)
      }
      
    }))

    const makeFavourite = () => {
      setFavourite(previous => !previous)
    }

    const seenvideo = () => {
      setVideoNotification(false)
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
        <View className='mt-[16px] mx-[16px] gap-[16px]'>
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

          <View >
            <View className='flex-row  w-full px-[8px] py-[12px] border-[1px] border-neutral-30 rounded-[12px]'>
              <View className='pr-[12px]'>
                <View className='flex-row items-center gap-[8px] '><RidesIcon color={critical? '#DD214F': '#449C0A'} /><Text className='font-pregular text-[14px] items-center' style={{color: critical? '#DD214F': '#449C0A'}} >Bicycles Available</Text></View>
                <Text className='text-[48px] font-pregular' style={{color: critical? '#A3072B' : '#235C04'}}>07</Text>
                <Text className='text-[12px] font-plight'>8 Docks Free</Text>

                <View className='flex-row gap-[4px] items-center'><RateIcon /><Text className='text-[12px] font-plight'>Rate</Text></View>
                <Text className='text-[14px] font-pregular text-neutral-90'>GH₵0.20/min</Text>
              </View>


              <View style={{width:'50%' , borderLeftWidth: 1}} className='justify-center border-neutral-30 pr-[12px]'>
                <View><Image 
                  source={require("../assets/images/bicycle.png")}
                  style={{width: '100%', height: 96, justifyContent:'flex-end'}}
                  resizeMode='contain'
                /></View>
              </View>
            </View>
          </View>

          <TouchableOpacity className='p-[8px] rounded-[12px] border-[1px] border-neutral-30 flex-row gap-[8px]' style={{display: videoNotification? 'flex': 'none'}}>
            <View className='justify-center'><View className='p-[8px] rounded-[8px] border-[1px] border-neutral-30 bg-neutral-20 justify-center items-center'><VideoIcon/></View></View>
            <View className='flex-1'>
              <Text className='font-pregular text-[14px] text-neutral-90'>How to Unlock bike</Text>
              <Text className='font-plight text-[10px] text-wrap ' style={{}}>Watch a video tutorial on how to unlock bicycles.</Text>
            </View>
            <View className='justify-center' ><TouchableOpacity onPress={seenvideo} className='items-center justify-center '><CancelIcon /></TouchableOpacity></View>

          </TouchableOpacity>


          <View className='gap-[8px]'>
            <View className='flex-row w-full gap-[8px]'>
             <View style={{width:'auto', flexGrow:2}} ><CustomButton title={'Get Directions'} textStyles={'text-[#1A73E9]'} containerStyles={'bg-[#DBE8F9] '} Icon={() => <DirectionsIcon />} /></View>
             <View style={{width:'auto', flexGrow:2}} ><CustomButton title={'Report issue'} textStyles={'text-neutral-90'} containerStyles={'bg-neutral-30'} Icon={() => <CriticalIcon />} /></View>
            </View>

            <CustomButton title={'Reserve a Bike'} containerStyles={'bg-primary-50'} Icon={() => <RidesIcon color={'#002520'} />} handlePress={props.reservebike}/>
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