import { View, Text, ImageBackground } from 'react-native';
import React,{useEffect} from 'react';
import { Image } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import "../global.css";
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';




// Example usage:


export default function App() {

  async function getToken(key) {
  console.log('starting')
  try {
    const token = await SecureStore.getItemAsync(key)
    if (token) {
      return token
    } else {
      return null

    }
  } catch (error) {
    console.log('Error retrieving token2:', error)
    return null
  }
}

  useEffect(() => {
    getToken('api_token').then((token) => {
  if (token) {
    // Use the token
    router.replace('/(tabs)/home')
  } else {
    // Handle the case where the token is not found
    getToken('displayedOnboarding').then((displayedOnboarding) => {
      if (displayedOnboarding === 'true') {
        router.replace('/sign-in')
      } else {
        router.replace('/homemain')
      }
    })
  }
})

 
  }, [])
  

  return (
    <ImageBackground source={require('../assets/images/Background.png')} style={{width:'100%', height:'100%'}} className="bg-primary">
    <View className="flex-1 justify-center items-center">
        <StatusBar className="bg-primary" />
      <Image source={require('../assets/images/bikehive.png')} 
      style={{width: 100, height: 100}} />
    </View>
    </ImageBackground>
  )
}