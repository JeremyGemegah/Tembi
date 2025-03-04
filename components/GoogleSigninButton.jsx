import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { GoogleLogo } from '../assets/icons/svgIcons'

const GoogleSigninButton = ({title, handlePress, isLoading, containerStyles,textStyles}) => {
  return (
    <TouchableOpacity
        activeOpacity={0.7}
        onPress={handlePress}
        className={`bg-white rounded-full min-h-[48px] justify-center items-center ${containerStyles} ${isLoading? 'opacity-50': ''} border-[1px] border-[#E0E0E0]`}
        
        >
            <View className="flex-row items-center gap-[16px] ">
                <GoogleLogo />
            <Text
              className={`text-[#0000008A] font-roboto text-[14px] ${textStyles}` }>{title}
            
              </Text>
              </View>
        </TouchableOpacity>
  )
}

export default GoogleSigninButton