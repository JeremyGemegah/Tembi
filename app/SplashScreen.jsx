import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import { Image } from 'react-native';

import "../global.css";
import { StatusBar } from 'expo-status-bar';

const SplashScreen = () => {
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

export default SplashScreen