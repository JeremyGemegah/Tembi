import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Animated,{FadeInDown, FadeOutUp, LinearTransition} from 'react-native-reanimated'

const CustomButton = ({title,handlePress,containerStyles,textStyles,isLoading, transition,queue, SecondTitle="no second text", layout={}}) => {
  return (
    <TouchableOpacity
    activeOpacity={0.7}
    onPress={handlePress}
    className={`bg-primary-50 rounded-full min-h-[48px] justify-center items-center ${containerStyles} ${isLoading? 'opacity-50': ''}`}
    
    >
        {transition && queue? (<Animated.Text 
          layout={layout}
          entering={FadeInDown.springify().damping(80).stiffness(200)}
          exiting={FadeOutUp.springify().damping(80).stiffness(200)}
          key="secondTitle" className={`text-secondary-950 font-psemibold text-lg ${textStyles}` }>{SecondTitle}</Animated.Text>) : 
          (<Animated.Text
            entering={FadeInDown.springify().damping(80).stiffness(200)}
            exiting={FadeOutUp.springify().damping(80).stiffness(200)}
          key="title" className={`text-secondary-950 font-psemibold text-lg ${textStyles}` }>{title}</Animated.Text>) }
    </TouchableOpacity>
  )
}

export default CustomButton