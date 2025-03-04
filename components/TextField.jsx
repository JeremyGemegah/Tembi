import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {EyeOpen, MailIcon} from '../assets/icons/fieldIcons'


const TextField = () => {
  return (
    <View>
      <Text>Full Name</Text>
      <View className="border-[1px] border-neutral-60 rounded-full px-[16px] py-[12px]">
        <View className="flex-row h-[20px] w-full items-center gap-[12px]">
        
            <MailIcon style={{color:'red'}} />
        

        <TextInput 
         className="h-16 flex-1  text-left text-[16px] py-0 font-pregular  items-end content-end"
         placeholder='eg. Enoch Bekor'
         placeholderTextColor={'#5D6C87'}
        />

        <EyeOpen />

        </View>
      </View>
    </View>
  )
}

export default TextField