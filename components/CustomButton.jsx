import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Animated,{FadeInDown, FadeOutUp} from 'react-native-reanimated'

const CustomButton = ({title,handlePress,containerStyles,textStyles,isLoading, transition,queue, SecondTitle="no second text",animated=true,Icon,disabled, layout={}}) => {
  return (
    <TouchableOpacity
    activeOpacity={0.7}
    onPress={handlePress}
    className={`rounded-full min-h-[48px] justify-center items-center ${containerStyles} ${isLoading? 'opacity-50': ''}`}
    disabled={disabled}
    >
        {transition && queue? (<Animated.Text 
          layout={layout}
          entering={FadeInDown.springify().damping(80).stiffness(200)}
          exiting={FadeOutUp.springify().damping(80).stiffness(200)}
          key="secondTitle" className={` ${textStyles}` }>{SecondTitle}</Animated.Text>) : 
          (<Animated.Text
            entering={FadeInDown.springify().damping(80).stiffness(200)}
            exiting={animated? FadeOutUp.springify().damping(80).stiffness(200) : undefined}
          key="title" ><View style={{ flexDirection:'row', alignItems:'center'}}><View style={{paddingRight:12}}>{Icon && <Icon />}</View><Text style={{display:'flex', justifyContent:'center', alignItems:'center'}} className={` ${textStyles}` }>{title}</Text></View></Animated.Text>) }
    </TouchableOpacity>
  )
}

export default CustomButton