import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React,{forwardRef, useEffect, useImperativeHandle, useState, useRef} from 'react'
import Animated,{ useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { BillIcon, CancelIcon, CautionIcon, CriticalIcon, DeleteIcon, DirectionsIcon, HeartIcon, InfoIcon, InfoIconAlt, LocationAlternativeIcon, LocationIcon, LocationMarkerIcon, RateIcon, RidesIcon, UnlockIcon, VideoIcon, WalkIcon } from '../assets/icons/svgIcons'
import CustomButton from './CustomButton'
import CustomRadio from './Customradio'
import { ScrollView } from 'react-native-gesture-handler'
import CircleTimer from './circleTimer'
import DialogueModal from './dialogueModal'



const {height: SCREEN_HEIGHT} = Dimensions.get('window')
const MAX_TRANSLATE_Y = SCREEN_HEIGHT /1.2
const MIN_TRANSLATE_Y = SCREEN_HEIGHT /5

const ReserveBike = forwardRef((props,ref) => {
    const [offers, setOffers] = useState([{price: 0, time: 1,active: true},{price: 0.5, time: 30,active: false},{price: 1, time: 45,active: false}])
    const timeInSeconds = offers.find( item => item.active === true).time * 60
    const timerRef = useRef()
    const [reservationActive, setReservationActive] = useState(false)
    const translateY = useSharedValue(0)
    const context = useSharedValue({y:0})
    const [dialogueVisible, setDialogueVisible] = useState(false)

    useImperativeHandle(ref, () => ({
      scrollTo: () => {
        scrollTo(-SCREEN_HEIGHT/3)
      },
      scrollDown: () => {
        scrollTo(SCREEN_HEIGHT)
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

    const selectOffer = (price) => {
        setOffers(previous => previous.map( item => {
          if(item.price === price) {
            return{...item,active: true}
          } else {
            return {...item, active: false}
          }
        }) )
    }
   
  const unlockBike = () => {
    cancelReservation()
    scrollTo(SCREEN_HEIGHT)
  }
    
  const cancelReservation = () => {
    timerRef.current?.stopAnim()
    setReservationActive(false)
    props.setReservationActive(false)
  }

  const endReservation = () => {
    setReservationActive(false)
    props.setReservationActive(false)
  }

  const startReservation = () => {
    //check if a reservation is already active and if not start a reservation
   if(!props.reservationActive){
    props.setReservationActive(true)
     setReservationActive(true)
      timerRef.current?.startAnim()
   }else{
    console.log('another reservation is active')
   }
  }

  const onResponse = (boolans) => {
    if(boolans){
      setDialogueVisible(false)
      cancelReservation()
    } else{

    }
  }
    
  const confirmCancel = () => {
    setDialogueVisible(true)

  }
    

  return (
    <View>
    <GestureDetector gesture={gesture}>
   
    <Animated.View style={[styles.bottomsheet_container,reanimatedBottomStyle]} className='bg-neutral-10'>
        <View style={styles.line} className='bg-neutral-50' />
        <View className='mt-[16px] mx-[16px] gap-[16px]'>
          <View>
          <View className='flex-row justify-between items-center w-full '>
            <View style={{ width: '70%'}}>
              <Text className='font-pregular text-[18px] ' style={{color: reservationActive? '#235C04': '#002520'}}>{reservationActive? 'Reservation Active': 'Reserve Bike'}</Text>
      
            </View>

            <View className='flex-row items-center  '>
              
              <TouchableOpacity onPress={() => scrollTo(0)}><CancelIcon /></TouchableOpacity>
            </View>

            
          </View>
            <Text className='font-plight text-[12px] text-neutral-70' style={styles.reservationInactiveStyles(reservationActive)}>Reserve a bike for a few minutes to ensure it’s yours when you arrive. The reservation fee will be charged upon confirmation.</Text>
          </View>

          <View >
            <View className='flex-row  w-full px-[8px] py-[12px] border-[1px] border-neutral-30 rounded-[12px]'>
              <View className='pr-[12px] '  style={{width:'53%', flexGrow:1, flexShrink:0}}>
                <View className='flex-row items-center gap-[8px] '><RidesIcon color={ '#00806E'} /><Text className='font-pregular text-[14px] items-center' style={{color:'#00806E'}} >Assigned Bicycle</Text></View>
                <View className=' justify-center' style={styles.reservationInactiveStyles(reservationActive)}>
                <Text className='text-[12px] font-plight text-neutral-70 mt-[8px]'>BIKE ID</Text>
                <Text className='text-[28px] font-pregular text-primary-60 ' >PGH013</Text>
                </View>
                
                <View className='flex-1 justify-center' style={styles.reservationActiveStyles(reservationActive)}>
                <Text className='text-[12px] font-plight text-neutral-70 mt-[8px]'>BIKE ID</Text>
                <Text className='text-[28px] font-pregular text-primary-60 ' >PGH013</Text>
                </View>

                <View className='flex-row gap-[4px] items-center' style={styles.reservationInactiveStyles(reservationActive)}><LocationAlternativeIcon /><Text className='text-[12px] font-plight text-neutral-70'>Location</Text></View>
                <Text className='text-[14px] font-pregular text-neutral-90' style={styles.reservationInactiveStyles(reservationActive)}>Parade Grounds Station</Text>
              </View>


              <View style={[{width:'45%' , borderLeftWidth: 1, flexShrink:0, flexGrow: 1},styles.reservationInactiveStyles(reservationActive)]} className='justify-center border-neutral-30 '>
                <View ><Image 
                  source={require("../assets/images/bicycle.png")}
                  style={{width: '100%', height: 96, justifyContent:'flex-end'}}
                  resizeMode='contain'
                /></View>

                
              </View>
                            
              <View style={[{width:'45%' , flexShrink:0, flexGrow: 1}, styles.reservationActiveStyles(reservationActive)]} className='justify-center'>
                <View className='items-end'><InfoIconAlt /></View>
                <View className='' style={{ width:'100%'}}>
                  <CircleTimer radius={66} max={timeInSeconds} endReservation={endReservation} ref={timerRef} />
                </View>
                
              </View>
            </View>
          </View>

          
            <View style={styles.reservationInactiveStyles(reservationActive)} >
              <Text className='font-pregular text-[16px] text-neutral-90'>Select Plan</Text>
              <View  >
              <ScrollView className=' gap-[8px]' horizontal={true} showsHorizontalScrollIndicator={false} >
                {offers.map((offer,index) => (
                    <TouchableOpacity onPress={() => selectOffer(offer.price)} className='py-[8px] pl-[12px] pr-[20px] flex-row gap-[12px] border-[1px] rounded-[12px] mr-[8px]' key={index} style={{ borderColor: offer.active? '#F7CB66': '#E9F0F4', backgroundColor: offer.active? '#FEF6E5': '#F5F8FA', flexShrink: 0, flexGrow:1}}>
                        <View><CustomRadio isActive={offer.active} setIsActive={() => {}} /></View>
                        <View>
                            <Text>{offer.time} min</Text>
                            <View className='flex-row gap-[2px]'><Text style={{display: offer.price == 0? 'none': 'flex',color: offer.active? '#916500': '#2E3748'}} className='font-pregular text-[12px]' >GH₵</Text><Text className='font-pregular text-[18px] ' style={{color: offer.active? '#916500': '#2E3748'}}>{offer.price == 0? 'Free': offer.price}</Text></View>
                        </View>
                    </TouchableOpacity>
                ))}
                </ScrollView>
              </View>
             
            

          </View>

          <View style={styles.reservationActiveStyles(reservationActive)}>
            <View className='p-[8px] rounded-[12px] border-[1px] border-neutral-30 flex-row gap-[8px]' >
                        <View className='justify-center'><View className='p-[8px] rounded-[8px] border-[1px] border-neutral-30 bg-neutral-20 justify-center items-center'><LocationMarkerIcon color={'#2E3748'} dotcolor={'#FBFCFE'} /></View></View>
                        <View className='flex-1'>
                          <Text className='font-pregular text-[14px] text-neutral-90'>College of Engineering Station</Text>
                          <View className='flex-row items-center gap-[4px]'><WalkIcon /><Text className='text-neutral-70'>300 m | 4 min walk</Text></View>
                        </View>
            
                      </View>
          </View>


          <View className='gap-[8px]'>
            
            <View className='flex-row w-full gap-[8px] mb-[4px]' style={styles.reservationActiveStyles(reservationActive)}>
             <View style={{width:'auto', flexGrow:2}} ><CustomButton title={'Get Directions'} textStyles={'text-[#1A73E9]'} containerStyles={'bg-[#DBE8F9] '} Icon={() => <DirectionsIcon />} handlePress={props.getDirections} visible={reservationActive}/></View>
             <View style={{width:'auto', flexGrow:2}} ><CustomButton title={'Report issue'} textStyles={'text-neutral-90'} containerStyles={'bg-neutral-30'} Icon={() => <CriticalIcon />} visible={reservationActive} /></View>
            </View>

            <View style={styles.reservationActiveStyles(reservationActive)}><CustomButton title={'Cancel Reservation'} containerStyles={'border-[1px] border-critical-80'} textStyles={' text-critical-60'} handlePress={confirmCancel} /></View>
            <CustomButton title={reservationActive? 'Unlock Bike':'Reserve & Pay'} containerStyles={'bg-primary-50'} textStyles={'text-secondary-950'} Icon={ () => reservationActive && <UnlockIcon />} handlePress={reservationActive? unlockBike :startReservation} />
          </View>
        </View>
        <DialogueModal visibility={dialogueVisible} onResponse={onResponse} buttonIcon={() => <DeleteIcon />} affirmButtonContainerStyles={'bg-critical-80'} negativeButtonContainerStyles={'border-[1px] border-neutral-50'} affirmTextStyles={'font-pregular text-[12px] leading-2 text-neutral-50'} negativeTextStyles={'text-neutral-70 text-[12px]'} Title={'Cancel Reservation?'} content={"This can't be undone."} titleStyles={'text-neutral-90 font-pmedium text-[16px]'}  affirmText={'Yes, Cancel'} negativeText={'No'} />
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
  },
  reservationActiveStyles: Rstatus =>  ({
    display: Rstatus? 'flex' : 'none'
  }),
  reservationInactiveStyles: Rstatus =>  ({
    display: Rstatus? 'none' : 'flex'
  }),
  
})

export default ReserveBike