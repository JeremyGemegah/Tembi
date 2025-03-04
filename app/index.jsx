import { View, Text, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import CustomButton from '../components/CustomButton'
import { router } from 'expo-router'

export default function App(){
    

  return (
    <SafeAreaView className="h-full">
        <ScrollView contentContainerStyle={{height:'100%'}}>
            <ImageBackground source={require('../assets/images/welcome.jpeg')} className="h-full w-full" >
                <LinearGradient
                    // Background Linear Gradient
                    colors={['transparent','rgba(0,0,0,0.85)']}
                    style={{position:'absolute', height:500, left: 0,right:0, bottom:0}}
                />
                <View className="flex-1 justify-end items-center w-full px-4">
                    <Text className="text-primary-10 text-[18px] mb-0 leading-none">
                        Welcome to
                    </Text>
                    <Text className="text-[48px] text-[#fbfcfe] leading-none mt-4 font-comfortaa">Bee
                        <Text className="text-primary-50">Cycle</Text>
                    </Text>
                    <Text className="text-[#fbfcfe] mt-2 text-[14px] font-normal font-pregular px-5 text-center">Eco-friendly, secure, and convenient bicycle rides</Text>
                <CustomButton title={'Get Started'} containerStyles={'w-full mt-7'} handlePress={() => router.push('/onboarding-screens')} />
                    <Text className="text-[#e9f0f4] text-[12px] font-light my-6">Already have an account? <Text className="text-primary-50" onPress={() => router.push('/sign-in')}>Sign In</Text></Text>
                </View>
            </ImageBackground>
        </ScrollView>
        <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  )
}

