import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import TextField from '../../components/TextField'
import GoogleSigninButton from '../../components/GoogleSigninButton'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'


const SignUp = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="px-[16px] pt-[40px] pb-[31px]">
          <View className="flex-1 items-center  pb-[24px]">
          <Text className="text-[24px]">Let's Get You Started</Text>
          <Text className="text-[14px] text-neutral-70">Enter details to register</Text>
          </View>
          
          <View className="flex-1 gap-[16px]">
            <TextField state={'normal'} type={'profile'} placeholder={'eg. Enoch Bekor'} title={'Full Name'} />
            <TextField state={'normal'} type={'email'} placeholder={'eg. ebecks419@gmail.com'} title={'Email'} />
            <TextField state={'normal'} type={'password'} placeholder={'minimum 8 characters'} title={'Password'} />
            <TextField state={'normal'} type={'password'} placeholder={'minimum 8 characters'} title={'Confirm Password'} />
            
            <CustomButton title={"Create Account"} containerStyles={"mt-[24px]"} />
            <View className="flex-1 items-center flex-row">
              <View className="h-[1px] flex-1 bg-neutral-50 ">

              </View>
            <Text className="px-[24px] text-neutral-70">OR</Text>
            <View className="h-[1px] flex-1 bg-neutral-50">

              </View>
            </View>
            <GoogleSigninButton title={'Sign in with Google'}/>

            <View className="flex-1 items-center ">
            <Text >Already have an account? <Text className="text-primary-60" onPress={() => router.push('/sign-in')}>Sign In</Text></Text>

           
              <Text>By signing up, you agree with our{"\n"}<Text className="text-primary-60">Terms of Service</Text> and <Text className="text-primary-60">Privacy Policy</Text></Text>
              </View>
           
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp