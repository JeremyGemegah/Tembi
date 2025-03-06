import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import TextField from '../../components/TextField'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import { BackIcon } from '../../assets/icons/svgIcons'



const ForgotPassword = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableOpacity className="pl-[28px] mt-[40px] mb-[32px] w-[24px]" onPress={() => router.back()} >
           
            <BackIcon />
        </TouchableOpacity>
        <View className="px-[16px] ">
          <View className="flex-1 items-center  pb-[48px]">
          
          <Text className="text-[24px] text-secondary-950">Forgot Password</Text>
          <Text className="text-[14px] text-neutral-70 text-center">Don't worry, it happens. Please enter the email{"\n"} associated with the account</Text>
          </View>
          
          <View className="flex-1 gap-[16px]">

            <TextField state={'normal'} type={'email'} placeholder={'eg. ebecks419@gmail.com'} title={'Email'} />
            
            <CustomButton title={"Continue"} containerStyles={"mt-[24px]"} handlePress={() => router.push('reset-password')}/>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ForgotPassword