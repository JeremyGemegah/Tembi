import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Animated,{FadeInDown, FadeOutUp} from 'react-native-reanimated'

const CustomButton = ({title,handlePress,containerStyles,textStyles,isLoading, transition,queue, SecondTitle="no second text",animated=true,Icon,disabled, visible=true, layout={}}) => {
 
  return (
    <TouchableOpacity
    activeOpacity={0.7}
    onPress={handlePress}
    className={`rounded-full min-h-[48px] flex-row justify-center items-center ${containerStyles} ${isLoading? 'opacity-50': ''}`}
    disabled={disabled}
    style={{display: visible? 'flex': 'none'}}
    >
        {transition && queue? (<Animated.Text 
          layout={layout}
          entering={FadeInDown.springify().damping(80).stiffness(200)}
          exiting={FadeOutUp.springify().damping(80).stiffness(200)}
          key="secondTitle" className={` ${textStyles}` }>{SecondTitle}</Animated.Text>) : 
          (<Animated.Text
            style={{display: visible? 'flex': 'none'}}
            entering={FadeInDown.springify().damping(80).stiffness(200)}
            exiting={animated? FadeOutUp.springify().damping(80).stiffness(200) : undefined}
          key="title" ><View style={{ flexDirection:'row', alignItems:'center', flex:1}}>{Icon && (<View style={{paddingRight:12, display: Icon? 'flex': 'none'}}><Icon /></View>)}<Text style={{display: visible? 'flex': 'none', flex:1}} className={`font-pregular ${textStyles} ` }>{title}</Text></View></Animated.Text>) }
    </TouchableOpacity>
  )}


export default CustomButton