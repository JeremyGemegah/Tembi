import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import TextField from '../../components/TextField'
import GoogleSigninButton from '../../components/GoogleSigninButton'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import axios from 'axios'


const Base_URL = 'https://tembi.onrender.com'

const SignUp = () => {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const handleFormChange = (fieldName, value) => {
    setForm(prevForm => ({
      ...prevForm,
      [fieldName]: value,
    }));
  };

  const  handleRegister = async () => {
    try {
      await axios.post(`${Base_URL}/api/users/register/`, form)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.response.data)
      })
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <SafeAreaView>
      <ScrollView>
        <View className="px-[16px] pt-[40px] pb-[31px]">
          <View className="flex-1 items-center  pb-[24px]">
          <Text className="text-[24px]">Let's Get You Started</Text>
          <Text className="text-[14px] text-neutral-70">Enter details to register</Text>
          </View>
          
          <View className="flex-1 gap-[16px]">
            <TextField 
              state={'normal'} 
              type={'profile'} 
              placeholder={'eg. Enoch Bekor'} 
              title={'Full Name'}
              value={form.full_name}
              handleTextChange={(text) => handleFormChange('full_name', text)}
            />
            <TextField 
              state={'normal'} 
              type={'email'} 
              placeholder={'eg. ebecks419@gmail.com'} 
              title={'Email'}
              value={form.email}
              handleTextChange={(text) => handleFormChange('email', text)}
            />
            <TextField 
              state={'normal'} 
              type={'password'} 
              placeholder={'minimum 8 characters'} 
              title={'Password'}
              value={form.password}
              handleTextChange={(text) => handleFormChange('password', text)}
            />
            <TextField 
              state={'normal'} type={'password'} 
              placeholder={'minimum 8 characters'} 
              title={'Confirm Password'}
              value={form.confirm_password}
              handleTextChange={(text) => handleFormChange('confirm_password', text)}
            />
            
            <CustomButton title={"Create Account"} containerStyles={"mt-[24px]"} handlePress={handleRegister} />
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