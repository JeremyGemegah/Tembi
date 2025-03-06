import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import TextField from '../../components/TextField'
import GoogleSigninButton from '../../components/GoogleSigninButton'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'


const SignIn = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="px-[16px] pt-[73px] pb-[31px]">
          <View className="flex-1 items-center  pb-[48px]">
          <Text className="text-[32px] font-comfortaa mb-[1px] text-primary-90">Tembi</Text>
          <Text className="text-[24px] text-secondary-950">Welcome Back!</Text>
          <Text className="text-[14px] text-neutral-70">Sign in to your account</Text>
          </View>
          
          <View className="flex-1 gap-[16px]">

            <TextField state={'normal'} type={'email'} placeholder={'eg. ebecks419@gmail.com'} title={'Email'} />
            <TextField state={'normal'} type={'password'} placeholder={'minimum 8 characters'} title={'Password'} />

            <Text className="text-primary-60 text-center" onPress={() => router.push('/forgot-password')}>Forgot Password</Text>
            
            <CustomButton title={"Sign in"} containerStyles={"mt-[24px]"} />
            
              <View className="flex-1 items-center flex-row">
                            <View className="h-[1px] flex-1 bg-neutral-50 ">
              
                            </View>
                          <Text className="px-[24px] text-neutral-70">OR</Text>
                          <View className="h-[1px] flex-1 bg-neutral-50">
              
                            </View>
                          </View>

            <GoogleSigninButton title={'Sign in with Google'}/>

            <View className="flex-1 items-center ">
            <Text >Don't have an account? <Text className="text-primary-60" onPress={() => router.push('/sign-up')}>Register</Text></Text>
              </View>
           
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn