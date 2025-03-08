import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MapView from 'react-native-maps'

const Home = () => {
  return (
    <SafeAreaView style={{}}>
    <View className=" w-full h-full"  >
      <MapView style={StyleSheet.absoluteFill} />
    </View>
    </SafeAreaView>
  )
}

export default Home