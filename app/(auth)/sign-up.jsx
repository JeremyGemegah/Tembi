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
            <TextField state={'normal'} type={'profile'} placeholder={'eg. Enoch Bekor'} title={'Full Name'} />
            <TextField state={'normal'} type={'email'} placeholder={'eg. ebecks419@gmail.com'} title={'Email'} />
            <TextField state={'normal'} type={'password'} placeholder={'minimum 8 characters'} title={'Password'} />
            <TextField state={'normal'} type={'password'} placeholder={'minimum 8 characters'} title={'Confirm Password'} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp