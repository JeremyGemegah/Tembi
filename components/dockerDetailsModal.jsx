import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React,{forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react'
import Animated,{ runOnJS, useAnimatedStyle, useSharedValue, withSpring,withClamp } from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { ArrowIcon, BillIcon, CancelIcon, CautionIcon, CriticalIcon, DirectionsIcon, HeartIcon, LoaderIcon, RateIcon, RidesIcon, SearchIcon, TimeIcon, VideoIcon, WalkIcon } from '../assets/icons/svgIcons'
import CustomButton from './CustomButton'
import LoaderModal from './loaderModal'
import DialogueModal from './dialogueModal'
import RideCompleteModal from './rideCompleteModal'
import { GlobalContext } from '../app/(tabs)/_layout'
import { useContext } from 'react'
import { sendPushNotification } from './functions/functions'


const {height: SCREEN_HEIGHT} = Dimensions.get('window')

//fix the height of modal dynamically **********************************************************************************************
const DockerDetails = forwardRef((props,ref) => {
  let MAX_TRANSLATE_Y = props.rideActive? SCREEN_HEIGHT /1.26 -290 : SCREEN_HEIGHT /1.26
  let MIN_TRANSLATE_Y = SCREEN_HEIGHT /5
  const [modal, setModal] = useState(true)
  const [loading, setLoading] = useState(false)
  const [rideError, setRideError] = useState(false)
  const [outofBounds, setOutofBounds] = useState(false)
  const [rideComplete, setRideComplete] = useState(false)
  const translateY = useSharedValue(0)
  const sliderTranslateX = useSharedValue(0)
  const context = useSharedValue({y:0})
  const sliderContext = useSharedValue({x:0})
  const [opened, setOpened] = useState(true)
  const [sliderWidth, setSliderWidth] = useState()
  const [favourite, setFavourite] = useState(false)
  const [completedRide, setCompletedRide] = useState()
  const [count, setCount] = useState(0)
  const [videoNotification, setVideoNotification] = useState(true)
  const MAX_TRANSLATE_X = sliderWidth - 52
  const MIN_TRANSLATE_X = 0.85*MAX_TRANSLATE_X
  const timerInterval = useRef(null)
  const loaderInterval = useRef(null)
  const {apiToken, expoPushToken} = useContext(GlobalContext)
  
  
    useImperativeHandle(ref, () => ({
      scrollTo: () => {
        scrollTo(-MAX_TRANSLATE_Y)
        props.setDockerDetailsActive(true)
      },
      scrollDown: () => {
        scrollTo(SCREEN_HEIGHT)
        props.setDockerDetailsActive(false)
      },
      scrollPartial: () => {
        scrollTo(-SCREEN_HEIGHT/3,100)
        props.setDockerDetailsActive(true)
      },
      startTimer: () => {
        startRideTiming()
      },
      endAndPayRide: (message) => {
        endAndPayRide(message)
      }
      
    }))

    const makeFavourite = () => {
      setFavourite(previous => !previous)
    }

    const seenvideo = () => {
      setVideoNotification(false)
    }

    const startRideTiming = () => {
      
       timerInterval.current = setInterval(() => {
                setCount(previous => previous + 1)
                },1000)
                
            }
    

    const reanimatedBottomStyle = useAnimatedStyle( e => {
      return{
        transform: [ {translateY: translateY.value}]
      }
    })

    const reanimatedSliderStyle = useAnimatedStyle( e => {
      return{
        transform: [ {translateX: sliderTranslateX.value}]
      }
    })
    
    const endRide = async () => {
      console.log('ending ride')
        setLoading(true)
      
        try {
          const response = await fetch('https://tembi.onrender.com/api/rentals/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Accept-Encoding': 'deflate, gzip', // Note: This is usually handled automatically by the browser
          'User-Agent': 'Mozilla/5  .0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0',
          'Authorization': `Token ${apiToken}`
        }
    
      })

      const data = await response.json()
      

          await fetch(`https://tembi.onrender.com/api/rentals/${data[0].id}/`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Accept-Encoding': 'deflate, gzip', // Note: This is usually handled automatically by the browser
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0',
          'Authorization': `Token ${apiToken}`
        }
    
      })
            .then(data => {return data.json()})
            .then((data) => {
              if (!data.id) {
                throw new Error(data);
              }
              return data;
            })
            .then(data => {
              if (data.status === 'completed') {
                setCompletedRide(data)
                console.log('Ride ended successfully:', data);
                endAndPayRide()
              }else{
                throw new Error()
              }
            })
            .catch(err => {throw new Error(err)}
            )

          
        } catch (error) {
          setRideError(true) //when there is an error packing
          console.log('Error ending ride:', error)
        } finally{
          
          setLoading(false)
        }
        
         
     
    }


    //for modal
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
        runOnJS(props.setDockerDetailsActive)(false)
        runOnJS(props.modalRegister)()
      }
      if(translateY.value < -MIN_TRANSLATE_Y){
        translateY.value = withSpring(-MAX_TRANSLATE_Y)
      }
    })
    
    
    //for slider
    const sliderGesture = Gesture.Pan()
    .onStart(e => {
      sliderContext.value = {x: sliderTranslateX.value}
      
    })
    .onUpdate(e => {
      sliderTranslateX.value = e.translationX + sliderContext.value.x;
      sliderTranslateX.value = Math.max(sliderTranslateX.value, -MAX_TRANSLATE_X)
 
    })
    .onEnd(e => {
      if(sliderTranslateX.value > -MIN_TRANSLATE_X){
        sliderTranslateX.value = withSpring(0, {
          mass: 0.5,
        stiffness: 96,
        velocity: e.velocityX,
    
        restDisplacementThreshold: 0.1,
        restSpeedThreshold: 0.1,
        
      })
      
    }
    if(sliderTranslateX.value > MIN_TRANSLATE_X){
      sliderTranslateX.value = withSpring(MAX_TRANSLATE_X, {damping: 10,stiffness:96, mass:0.5})
      //make this a try catch ********************************************************************
      runOnJS(endRide)()
      }
    })

    const closeModal = () => {
      props.setDockerDetailsActive(false)
      props.modalRegister()
      scrollTo(0)
    }

 
    const scrollTo = (destination,damping=15) => {
      'worklet'
      translateY.value = withSpring(destination, {damping: damping})
    }

    const endAndPayRide = async (message) => {
      sendPushNotification(expoPushToken,title='Ride Ended', body=message || 'Your ride has ended successfully. Thank you for using Tembi!')

    await fetch('https://tembi.onrender.com/api/rentals/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Accept-Encoding': 'deflate, gzip', // Note: This is usually handled automatically by the browser
          'User-Agent': 'Mozilla/5  .0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0',
          'Authorization': `Token ${apiToken}`
        }
    
      }).then(response => {return response.json()})
      .then(data => { setCompletedRide(data[0])})

      props.setRideActive(false)
        clearInterval(timerInterval.current)
        setRideError(false)
        setCount(0)
        sliderTranslateX.value = withSpring(0, {
          mass: 0.5,
        stiffness: 96,
        
    
        restDisplacementThreshold: 0.1,
        restSpeedThreshold: 0.1,
        
      })

        //modal
        setRideComplete(true)
      
    }
    

    const onResponse = (response) => {
      if(response){
        setRideError(false)
        setRideComplete(false)
        endRide()
        } else {
        setRideError(false)
        sliderTranslateX.value = withSpring(0, {
          mass: 0.5,
        stiffness: 96,
        
    
        restDisplacementThreshold: 0.1,
        restSpeedThreshold: 0.1,
        
      })
        
      }
    }

    const completeRide = () => {
      setRideComplete(false)
    }
  
    let critical = props.docker && (props.docker.bikes_count < 1)? true : false
    
    

  return (
    <GestureDetector gesture={gesture}>
   
    <Animated.View style={[styles.bottomsheet_container,reanimatedBottomStyle]} className='bg-neutral-10'>
        <View style={styles.line} className='bg-neutral-50' />

       {/* when a ride is active */}
       <View className='px-[16px] py-[12px]' style={styles.rideActive(props.rideActive)}>
        <View>
          <Text className='font-pregular text-[16px] text-neutral-90'>Biking in progress...</Text>

          <View className='py-[8px]' >
                                  <View className={`border-[1px] rounded-full px-[16px] py-[12px]`} style={{borderColor: '#E9F0F4'}}>
                                          <View className="flex-row h-[20px] w-full items-center gap-[12px]">
                                          
                                          <View>
                                            <SearchIcon color={'#A8B9CA'} />
                                          </View>
                                          <TextInput 
                                           className={`h-16 flex-1  text-left text-[16px] py-0 font-pregular  items-end content-end`}
                                           style={{color: '#2E3748'}}
                                           placeholder= {'Where to?'}
                                           
                                           placeholderTextColor={'#5D6C87'}
                                           
                                          />
                                       
                                         
                                    
                                  
                                          </View>
                  </View>
          </View>

          <View className='px-[8px] py-[12px] border-[1px] border-neutral-30 rounded-[16px] flex-row'>
            
            <View className='px-[8px] py-[4px] flex-1'>
              <View className='flex-row gap-[4px] justify-center'><TimeIcon/><Text className='font-plight text-primary-60 text-[12px] text-center' >Time</Text></View>
              <View className='flex-row justify-center'><Text className='font-pregular text-[20px] text-secondary-800 text-center' >{Math.floor(count/3600)}:{Math.floor(count/60)}:{count % 60}</Text></View>
            </View>
            
            <View className='px-[8px] py-[4px] flex-1 '>
              <View className='flex-row gap-[4px] justify-center'><TimeIcon/><Text className='font-plight text-primary-60 text-[12px] text-center' >Speed</Text></View>
              <View className='flex-row justify-center'><Text className='font-pregular text-[20px] text-secondary-800 text-center' >8 km/h</Text></View>
            </View>
            
            <View className='px-[8px] py-[4px] flex-1 self-start'>
              <View className='flex-row gap-[4px] justify-center'><TimeIcon/><Text className='font-plight text-primary-60 text-[12px] text-center' >Distance</Text></View>
              <View className='flex-row justify-center'><Text className='font-pregular text-[20px] text-secondary-800 text-center' >12 m</Text></View>
            </View>
          </View>

          <View>
            <View className='w-full rounded-full bg-neutral-30 p-[4px] overflow-hidden mt-[16px] flex-row items-center' onLayout={(event) => {
    const { width } = event.nativeEvent.layout;
    setSliderWidth(width);
  }}>
              <GestureDetector gesture={sliderGesture}><Animated.View className='py-[16px] px-[12] bg-primary-50 rounded-full self-start' style={[reanimatedSliderStyle, {zIndex:2}]}><ArrowIcon/></Animated.View></GestureDetector>
              <View  style={{zIndex: 1, position:'absolute',width:'100%', justifyContent:'center'}}><Text className='text-[16px] font-pregular text-secondary-950  text-center '>End Ride</Text></View>
            </View>
          </View>

        </View>

       </View>

        {/* when a ride is not active */}
        <View className='mt-[16px] mx-[16px] gap-[16px]' style={styles.rideActive(!props.rideActive)}>
          <View>
          <View className='flex-row justify-between items-center w-full mb-[8px] '>
            <View style={{ width: '70%'}}>
              <View className='flex-row gap-[8px] '>{ props.directionsActive? (<><WalkIcon /><Text className='font-pregular text-[18px] text-secondary-950'>4 min</Text></>) : (<Text className='font-pregular text-[18px] text-secondary-950'>{props.docker?.name}</Text>)}</View>
              <View className='flex-row items-center gap-[4px]'>{!props.directionsActive && <WalkIcon />}<Text className='text-neutral-70'>300 m {props.directionsActive? 'left ● Arrival at 12:34 pm' : '| 4 min walk'}</Text></View>
            </View>

            <View className='flex-row items-center gap-[8px] '>
              <TouchableOpacity className='bg-neutral-30 p-[8px] rounded-full' style={[styles.getDirectionsInactive(props.directionsActive)]} onPress={makeFavourite}><HeartIcon color={favourite? '#DD214F': '#5D6C87'} secondary={favourite? '#DD214F': ''} /></TouchableOpacity>
              <TouchableOpacity className='bg-neutral-30 p-[8px] rounded-full' onPress={closeModal} ><CancelIcon /></TouchableOpacity>
            </View>

            
          </View>
          <Text className='font-pregular text-[16px] text-primary-60' style={[styles.getDirectionsInactive(!props.directionsActive)]}>{props.docker?.name}</Text>
          <View className='flex-row items-center justify-start' ><View style={{backgroundColor: opened? '#449C0A' : '#DD214F'}} className='px-[12px] py-[2px] items-center text-center rounded-full'><Text className='text-neutral-10 font-pregular text-[10px]'>{opened? 'Open': 'closed'}</Text></View><Text className='font-pregular text-neutral-90'> ● </Text><Text className='font-pregular text-[12px] text-neutral-90'>Closes 10 pm</Text></View>
          </View>

          <View style={[styles.getDirectionsInactive(props.directionsActive)]}>
            <View className='flex-row  w-full px-[8px] py-[12px] border-[1px] border-neutral-30 rounded-[12px]'>
              <View className='pr-[12px]'>
                <View className='flex-row items-center gap-[8px] '><RidesIcon color={critical? '#DD214F': '#449C0A'} /><Text className='font-pregular text-[14px] items-center' style={{color: critical? '#DD214F': '#449C0A'}} >Bicycles Available</Text></View>
                <Text className='text-[48px] font-pregular' style={{color: critical? '#A3072B' : '#235C04'}}>{props.docker?.bikes_count}</Text>
                <Text className='text-[12px] font-plight'>{props.docker?.capacity - props.docker?.bikes_count} Docks Free</Text>

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
        
        <View style={[styles.getDirectionsInactive(props.directionsActive)]}>
          <TouchableOpacity className='p-[8px] rounded-[12px] border-[1px] border-neutral-30 flex-row gap-[8px]' style={[{display: videoNotification? 'flex': 'none'}]}>
            <View className='justify-center'><View className='p-[8px] rounded-[8px] border-[1px] border-neutral-30 bg-neutral-20 justify-center items-center'><VideoIcon/></View></View>
            <View className='flex-1'>
              <Text className='font-pregular text-[14px] text-neutral-90'>How to Unlock bike</Text>
              <Text className='font-plight text-[10px] text-wrap ' style={{}}>Watch a video tutorial on how to unlock bicycles.</Text>
            </View>
            <View className='justify-center' ><TouchableOpacity onPress={seenvideo} className='items-center justify-center '><CancelIcon /></TouchableOpacity></View>

          </TouchableOpacity>
          </View>


          <View className='gap-[8px]' style={[styles.getDirectionsInactive(props.directionsActive)]}>
            <View className='flex-row w-full gap-[8px]'>
             <View style={{width:'auto', flexGrow:2}} ><CustomButton title={'Get Directions'} textStyles={'text-[#1A73E9]'} containerStyles={'bg-[#DBE8F9] '} Icon={() => <DirectionsIcon />} handlePress={props.getDirections} /></View>
             <View style={{width:'auto', flexGrow:2}} ><CustomButton title={'Report issue'} textStyles={'text-neutral-90'} containerStyles={'bg-neutral-30'} Icon={() => <CriticalIcon />} /></View>
            </View>

            <CustomButton title={'Reserve a Bike'} containerStyles={'bg-primary-50'} Icon={() => <RidesIcon color={'#002520'} />} handlePress={props.reservebike} disabled={props.docker?.bikes_count === 0}/>
          </View>

          <View style={[styles.getDirectionsInactive(!props.directionsActive)]}>
              <CustomButton title={"I've Arrived"} containerStyles={'bg-primary-50'} visible={props.directionsActive} handlePress={props.onArrive} />
          </View>
        </View>
    <LoaderModal visibility={loading} Title={'Ending ride...'} content={'Confirming return of bike'} Icon={() => <LoaderIcon />} />
    <DialogueModal visibility={rideError} onResponse={onResponse} Title={'Bike not detected!'} content={'You will need to properly place bike in docker to end ride.'} affirmText={'Try Again'} negativeText={'Continue Ride'} affirmButtonContainerStyles={'bg-primary-50'} negativeButtonContainerStyles={'border-[1px] border-neutral-50'} affirmTextStyles={'font-pregular text-[12px] leading-2 text-secondary-950'} negativeTextStyles={'text-neutral-70 text-[12px]'} titleStyles={'text-critical-70 font-pmedium text-[16px]'}/>
    <DialogueModal visibility={outofBounds} Title={'You’ve left KNUST!'} content={'Bike use is limited to campus. Please return to continue riding.'}  titleStyles={'text-critical-70 font-pmedium text-[16px]'} centered Icon={() => <CautionIcon/>}/>
    <RideCompleteModal visibility={rideComplete} onClose={completeRide} rideDetails={completedRide}  />
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
  },
  getDirectionsInactive: active => ({
    display: active? 'none' : 'flex'
  }),
  rideActive: active => ({
    display: active? 'flex' : 'none'
  })
})

export default DockerDetails