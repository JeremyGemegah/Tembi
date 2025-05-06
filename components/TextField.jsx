import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import {EyeClosed, EyeOpen, Lock, MailIcon, PhoneIcon, Profile} from '../assets/icons/svgIcons'


const TextField = ({type='profile', state='normal', placeholder, handleTextChange, title}) => {
    let borderColor ;
    let iconColor;
    let textColor;

    const [showPassword, setShowPassword] = useState(false)
    
    switch (state) {
        case 'error':
            borderColor = '#F64669'
            textColor = '#A3072B'
            iconColor='#DD214F'
            break;
        case 'warning':
            borderColor = '#F2A900'
            textColor = '#C18700'
            iconColor='#C18700'
            break;
        case 'success':
            borderColor = '#00806E'
            textColor = '#00806E'
            iconColor='#00806E'
            break;
    
        default:
            borderColor = '#798AA3'
            textColor = '#5D6C87'
            iconColor='#5D6C87'
            break;
    }

  return (
    <View>
      <Text className="pb-[8px] text-secondary-950 font-pregular text-[14px] font-normal tracking-[-0.42px]">{title}</Text>
      <View className={`border-[1px] rounded-full px-[16px] py-[12px]`} style={{borderColor:borderColor}}>
        <View className="flex-row h-[20px] w-full items-center gap-[12px]">
        
            { type ==='email'? (<MailIcon style={{color: iconColor}} />) : ( type === 'password'? (<Lock style={{color: iconColor}} />) : (type === 'profile'? (<Profile style={{color: iconColor}} />) : <PhoneIcon color={iconColor} />))}
        

        <TextInput 
         className={`h-16 flex-1  text-left text-[16px] py-0 font-pregular  items-end content-end`}
         style={{color: textColor}}
         placeholder= {placeholder}
         placeholderTextColor={'#5D6C87'}
         onChangeText={handleTextChange}
         secureTextEntry={type === 'password' && !showPassword}
        />
      {type === 'password' && (<TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
        { showPassword? <EyeOpen style={{color: iconColor}} /> : <EyeClosed style={{color: iconColor}}/> }
    </TouchableOpacity>)}

        </View>
      </View>
    </View>
  )
}

export default TextField