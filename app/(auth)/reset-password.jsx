import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import TextField from '../../components/TextField'
import GoogleSigninButton from '../../components/GoogleSigninButton'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import { BackIcon } from '../../assets/icons/svgIcons'


const ResetPassword = () => {
  return (
    <SafeAreaView>
      <ScrollView>
         <TouchableOpacity className="pl-[28px] mt-[40px] mb-[32px] w-[24px]" onPress={() => router.back()} >
                   
                    <BackIcon />
                </TouchableOpacity>
        <View className="px-[16px]  ">
          <View className="flex-1 items-center  pb-[64px]">
          <Text className="text-[24px]">Reset Password</Text>
          <Text className="text-[14px] text-neutral-70">Please type something you'll remember</Text>
          </View>
          
          <View className="flex-1 gap-[24px]">

            <TextField state={'normal'} type={'password'} placeholder={'minimum 8 characters'} title={'Password'} />
            <TextField state={'normal'} type={'password'} placeholder={'minimum 8 characters'} title={'Confirm Password'} />
            
            <CustomButton title={"Reset Password"} containerStyles={"mt-[24px]"} />
      
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ResetPassword