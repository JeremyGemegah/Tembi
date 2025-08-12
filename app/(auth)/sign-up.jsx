import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import TextField from '../../components/TextField'
import GoogleSigninButton from '../../components/GoogleSigninButton'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store'




const SignUp = () => {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    password: '',
    confirm_password: '',
  });
  const [formState, setFormState] = useState({full_name:{state:'normal', message:'',error:false},email:{state:'normal', message:'',error:false},phone:{state:'normal', message:'',error:false},password:{state:'normal', message:'',error:false},confirm_password:{state:'normal', message:'',error:false}})
  const [displayMessages, setDisplayMessages] = useState(false)

  const handleFormChange = (fieldName, value) => {
    const processedValue = fieldName === 'phone' ? value.replace(/[^0-9]/g, '') : value;
    setForm((prevForm) => ({
      ...prevForm,
      [fieldName]: processedValue,
    }));
  };

  const validateFormElement = (element) => {
   if(element === 'email'){
      // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const error = !form.email || !emailRegex.test(form.email)
        const status = error? 'error' : 'success'
        const message = !form.email? 'Email is required' : 'Invalid email address'

         setFormState((prevFormState) => ({
            ...prevFormState,
            [element]: { state: status, message: message, error: error  }})
          )
        

   }else if(element === 'password'){
      // Validate password

          //compare check
          const error =  form.password.length < 6 
          const status = error ? 'error' : 'success'
          const message = error ?  'Password must be at least 6 characters': ''
           setFormState((prevFormState) => ({
            ...prevFormState,
            [element]: { state: status, message: message, error: error  }})
          )
        

        }else if(element === 'full_name'){
          
          //Validate name
          const error = form.full_name.length < 1
          const status = error ? 'error' : 'success'
          const message = error ? 'Name is required' : ''
           setFormState((prevFormState) => ({
            ...prevFormState,
            [element]: { state: status, message: message, error: error  }})
          )
        
        }else if(element === 'confirm_password'){
          // Validate phone)
        const error = form.password !== form.confirm_password
        const status = error ? 'error' : 'success'
        const message = 'Passwords do not match'
          setFormState((prevFormState) => ({
            ...prevFormState,
            [element]: { state: status, message: message, error: error  }})
          )
        }
       
        
        
      }
      


async function saveToken(key, value) {
  try {
    await SecureStore.setItemAsync(key, value)
    console.log('Token saved successfully!')
  } catch (error) {
    console.error('Error saving token:', error)
  }
}

  
 


  const handleRegister = async () => {
    const validInputs = Object.values(formState).every(
      (element) => element.error === false
    );

    if (validInputs) {
      setDisplayMessages(false);
      try {
        const url = 'https://tembi.onrender.com/api/users/register/';

        const payload = {
          email: form.email,
          full_name: form.full_name,
          phone_number: form.phone,
          password: form.password,
          confirm_password: form.confirm_password,
        };

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          await response.json();
          Alert.alert(
            'Registration Successful',
            'Please check your email to verify your account.'
          );
          await saveToken('signedup', 'true');
          await saveToken('verified', 'false');
          await saveToken('displayedOnboarding', 'true');
         
        } else {
          const errorData = await response.json();
          const errorMessage = Object.values(errorData).flat().join('\n') || 'Registration failed. Please try again.';
          throw new Error(errorMessage);
        }
      } catch (error) {
        console.error('Error:', error);
        Alert.alert('Registration Error', error.message);
      }
    } else {
      setDisplayMessages(true);
    }
  };


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
              state={formState.full_name.state} 
              error={formState.full_name.error && displayMessages}
              errorMessage={formState.full_name.message}
              type={'profile'} 
              placeholder={'eg. John Doe'} 
              title={'Full Name'}
              maxLength={255}
              onFocus={() => setFormState((prevFormState) => ({
                ...prevFormState,
                full_name: { state: 'warning', message: '' },
              }))}
               onBlur={() => validateFormElement('full_name')}
              value={form.full_name}
              handleTextChange={(text) => handleFormChange('full_name', text)}
            />
            <TextField 
              state={formState.email.state} 
              error={formState.email.error && displayMessages}
              errorMessage={formState.email.message}
              type={'email'} 
              placeholder={'eg. johndoe@example.com'} 
              title={'Email'}
              onFocus={() => setFormState((prevFormState) => ({
                ...prevFormState,
                email: { state: 'warning', message: '' },
              }))}
              maxLength={255}
              value={form.email}
               onBlur={() => validateFormElement('email')}
              handleTextChange={(text) => handleFormChange('email', text)}
            />
            
            <TextField 
              state={formState.phone.state} 
              type={'phone'} 
              placeholder={'000 000 0000'} 
              title={'Phone Number'}
              maxLength={15}
              value={form.phone}
              onFocus={() => setFormState((prevFormState) => ({
                ...prevFormState,
                phone: { state: 'warning', message: '', error:false},
              }))}
               onBlur={() => setFormState((prevFormState) => ({
                ...prevFormState,
                phone: { state: 'normal', message: '', error:false },
              }))}
              handleTextChange={(text) => handleFormChange('phone', text)}
            />
            <TextField 
              state={formState.password.state}
              error={formState.password.error && displayMessages}
              errorMessage={formState.password.message} 
              type={'password'} 
              placeholder={'minimum 8 characters'} 
              title={'Password'}
              value={form.password}
              onFocus={() => setFormState((prevFormState) => ({
                ...prevFormState,
                password: { state: 'warning', message: '', error: false },
              }))}
               onBlur={() => validateFormElement('password')}
              handleTextChange={(text) => handleFormChange('password', text)}
            />
            <TextField 
              state={formState.confirm_password.state}
              error={formState.confirm_password.error && displayMessages}
              errorMessage={formState.confirm_password.message} 
              type={'password'} 
              placeholder={'minimum 8 characters'} 
              title={'Confirm Password'}
              value={form.confirm_password}
              onFocus={() => setFormState((prevFormState) => ({
                ...prevFormState,
                confirm_password: { state: 'warning', message: '', error: false },
              }))}
              onBlur={() => validateFormElement('confirm_password')}
              handleTextChange={(text) => handleFormChange('confirm_password', text)}
            />
            
            <CustomButton title={"Create Account"} containerStyles={"mt-[24px] bg-primary-50"} handlePress={handleRegister} />
            {/* <View className="flex-1 items-center flex-row">
              <View className="h-[1px] flex-1 bg-neutral-50 ">

              </View>
            <Text className="px-[24px] text-neutral-70">OR</Text>
            <View className="h-[1px] flex-1 bg-neutral-50">

              </View>
            </View>
            <GoogleSigninButton title={'Sign in with Google'}/> */}

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