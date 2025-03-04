import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import TextField from '../../components/TextField'


const SignUp = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="px-[16px]">
          <Text>Let's Get You Started</Text>
          
          <View>
            <TextField />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp