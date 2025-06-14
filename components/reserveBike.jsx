import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React,{forwardRef, useEffect, useImperativeHandle, useState} from 'react'
import Animated,{ useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { BillIcon, CancelIcon, CriticalIcon, DirectionsIcon, HeartIcon, LocationAlternativeIcon, LocationIcon, LocationMarkerIcon, RateIcon, RidesIcon, VideoIcon, WalkIcon } from '../assets/icons/svgIcons'
import CustomButton from './CustomButton'
import CustomRadio from './Customradio'



const {height: SCREEN_HEIGHT} = Dimensions.get('window')
const MAX_TRANSLATE_Y = SCREEN_HEIGHT /1.2
const MIN_TRANSLATE_Y = SCREEN_HEIGHT /5

const ReserveBike = forwardRef((props,ref) => {
    const [offers, setOffers] = useState([{price: 0, time: 15,active: true},{price: 0.5, time: 30,active: false},{price: 1, time: 45,active: false}])
    const translateY = useSharedValue(0)
    const context = useSharedValue({y:0})


    useImperativeHandle(ref, () => ({
      scrollTo: () => {
        scrollTo(-SCREEN_HEIGHT/3)
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

    const selectOffer = () => {
        
    }
    
  
    
    

  return (
    <GestureDetector gesture={gesture}>
   
    <Animated.View style={[styles.bottomsheet_container,reanimatedBottomStyle]} className='bg-neutral-10'>
        <View style={styles.line} className='bg-neutral-50' />
        <View className='mt-[16px] mx-[16px] gap-[16px]'>
          <View>
          <View className='flex-row justify-between items-center w-full '>
            <View style={{ width: '70%'}}>
              <Text className='font-pregular text-[18px] text-secondary-950'>Reserve Bike</Text>
      
            </View>

            <View className='flex-row items-center  '>
              
              <TouchableOpacity onPress={() => scrollTo(0)}><CancelIcon /></TouchableOpacity>
            </View>

            
          </View>
            <Text className='font-plight text-[12px] text-neutral-70'>Reserve a bike for a few minutes to ensure it’s yours when you arrive. The reservation fee will be charged upon confirmation.</Text>
          </View>

          <View >
            <View className='flex-row  w-full px-[8px] py-[12px] border-[1px] border-neutral-30 rounded-[12px]'>
              <View className='pr-[12px] '  style={{width:'50%', flexGrow:1, flexShrink:0}}>
                <View className='flex-row items-center gap-[8px] '><RidesIcon color={ '#00806E'} /><Text className='font-pregular text-[14px] items-center' style={{color:'#00806E'}} >Assigned Bicycle</Text></View>
                <Text className='text-[12px] font-plight text-neutral-70 mt-[8px]'>BIKE ID</Text>
                <Text className='text-[28px] font-pregular text-primary-60 ' >PGH013</Text>
                

                <View className='flex-row gap-[4px] items-center'><LocationAlternativeIcon /><Text className='text-[12px] font-plight text-neutral-70'>Location</Text></View>
                <Text className='text-[14px] font-pregular text-neutral-90'>Parade Grounds Station</Text>
              </View>


              <View style={{width:'45%' , borderLeftWidth: 1, flexShrink:0, flexGrow: 1}} className='justify-center border-neutral-30 pr-[12px]'>
                <View><Image 
                  source={require("../assets/images/bicycle.png")}
                  style={{width: '100%', height: 96, justifyContent:'flex-end'}}
                  resizeMode='contain'
                /></View>
              </View>
            </View>
          </View>

          
            <View >
              <Text className='font-pregular text-[16px] text-neutral-90'>Select Plan</Text>
              <View className='w-full'>
              <View className='flex-row gap-[8px] ' >
                {offers.map((offer,index) => (
                    <TouchableOpacity onPress={() => selectOffer(offer.price)} className='py-[8px] pl-[12px] pr-[20px] flex-row gap-[12px] border-[1px] rounded-[12px]' key={index} style={{ borderColor: offer.active? '#F7CB66': '#E9F0F4', backgroundColor: offer.active? '#FEF6E5': '#F5F8FA', flexShrink: 0, flexGrow:1}}>
                        <View><CustomRadio isActive={offer.active} setIsActive={() => {}} /></View>
                        <View>
                            <Text>{offer.time} min</Text>
                            <View className='flex-row gap-[2px]'><Text style={{display: offer.price == 0? 'none': 'flex',color: offer.active? '#916500': '#2E3748'}} className='font-pregular text-[12px]' >GH₵</Text><Text className='font-pregular text-[18px] ' style={{color: offer.active? '#916500': '#2E3748'}}>{offer.price == 0? 'Free': offer.price}</Text></View>
                        </View>
                    </TouchableOpacity>
                ))}
                </View>
              </View>
             
            

          </View>


          <View className='gap-[8px]'>
            

            <CustomButton title={'Reserve & Pay'} containerStyles={'bg-primary-50'}  />
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

export default ReserveBike