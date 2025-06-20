import { View, Text, Animated, TextInput, StyleSheet } from 'react-native'
import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import Svg, { Circle, G } from 'react-native-svg'

const AnimatedCircle = Animated.createAnimatedComponent(Circle)
const AnimatedText = Animated.createAnimatedComponent(TextInput)

const CircleTimer = forwardRef(({
    percentage = 59,
    radius = 40,
    strokeWidth = 12,
    duration = 1000,
    color = '#6ACE13',
    textColor='#449C0A',
    delay = 100,
    max = 100
},ref) => {

    const animatedValue = useRef( new Animated.Value(0)).current
    const InputRef = useRef()
    const circleRef = useRef()
    const invertedCircle = useRef()
    const halfCircle = radius + strokeWidth;
    const circleCircumference = 2 * Math.PI * radius;


    const countdownInterval = useRef(null)
    const initialAnimRef = useRef(null)
    


    const startAnim = () => {

        //reset
        
        animatedValue.setValue(0)


        initialAnimRef.current =  Animated.spring(animatedValue, {
            toValue: max,
            mass:2,
            stiffness: 35,
            damping: 15,
            overshootClamping: true,
            useNativeDriver: true
        })
        
        initialAnimRef.current.start(() => {
            let current = max
            countdownInterval.current = setInterval(() => {
                current -=1 
                if(current < 0) {
                    clearInterval(interval)
                    return;
                }
                animatedValue.setValue(current)
            },1000)
            
        })
    }

    const stopAnim = () => {
        if(initialAnimRef.current){
            initialAnimRef.current.stop()
        }
        if(countdownInterval.current){
            clearInterval(countdownInterval.current)
            countdownInterval.current = null
        }
    }
    useEffect(() => {
            
          
            animatedValue.addListener( v => {
                if(circleRef?.current){

                      const maxPerc = (100 * v.value)/max;
            const strokeDashoffset = circleCircumference - (circleCircumference * maxPerc) /100;


                    circleRef.current.setNativeProps({
                        strokeDashoffset,
                    })
                }

                if(invertedCircle?.current){

                      const maxPerc = (100 * v.value)/max;
                    const strokeDashoffset = -((circleCircumference * maxPerc)/100) -36;


                    invertedCircle.current.setNativeProps({
                        strokeDashoffset,
                    })
                }
                
                if(InputRef?.current){
                    InputRef.current.setNativeProps({
                        text: `${Math.floor(v.value/60)}: ${Math.round(v.value) % 60}`,
                    })
                }
            })

            return () => {
                animatedValue.removeAllListeners()
                clearInterval();
                stopAnim()
            }
    }, [max])

    useImperativeHandle(ref, () => ({
        startAnim,
        stopAnim,
    }))

  return (
    <View style={{ alignItems:'center', position:'relative'}}>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
        >
        <G
            rotation='-90' origin={`${halfCircle},${halfCircle}`}
        >
            <AnimatedCircle
            ref={invertedCircle}
            cx={halfCircle}
            cy={halfCircle}
            stroke={'#E9F0F4'}
            strokeWidth={strokeWidth}
            r={radius}
            fill='transparent'
            
            strokeDasharray={`${circleCircumference}`}
            strokeDashoffset={0}
            strokeLinecap='round'
            rotation={-15}
            origin={`${halfCircle}, ${halfCircle}`}
            />
            <AnimatedCircle
                ref={circleRef}
                cx={halfCircle}
                cy={halfCircle}
                stroke={color}
                strokeWidth={strokeWidth}
                r={radius}
                fill='transparent'
                strokeDasharray={`${circleCircumference}`}
                strokeDashoffset={0}
                strokeLinecap='round'
            />
        </G>
      </Svg>
      <View style={[StyleSheet.absoluteFill]} className='justify-center items-center flex-1'>
        <Text style={[{textAlign:'center'}]} className='font-plight text-[12px] leading-[1.2] mt-[12px] text-neutral-70'>TIME LEFT</Text>
      <AnimatedText
        ref={InputRef}
        editable={false}
        underlineColorAndroid={'transparent'}
        defaultValue={max}
        style={[{ color: textColor ?? color, textAlign:'center'}]}
        className='font-pregular text-[28px] leading-none'
      />
      </View>
    </View>
  )
})

export default CircleTimer