import { View, Text, Alert } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import TextField from '../../components/TextField'
import GoogleSigninButton from '../../components/GoogleSigninButton'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import * as SecureStore from 'expo-secure-store'
import { LoaderIcon } from '../../assets/icons/svgIcons'
import LoaderModal from '../../components/loaderModal'


const SignIn = () => {

    const [form, setForm] = useState({
      email: '',
      password: ''
    });
    const [formState, setFormState] = useState({email:{state:'normal', message:'',error:false},password:{state:'normal', message:'',error:false}})
    const [displayMessages, setDisplayMessages] = useState(false)
    const [loading, setLoading] = useState(false)

   const handleFormChange = (fieldName, value) => {

    setForm((prevForm) => ({
      ...prevForm,
      [fieldName]: value,
    }));
  }

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
        

   }else{
    setFormState((prevFormState) => ({
            ...prevFormState,
            [element]: { state: 'normal', message: '', error: false  }})
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
  

    const  handleSubmit = async () => {
    const validInputs = Object.values(formState).every(element => element.error === false)
    
   
    if(validInputs){
      setLoading(true)
      try {
        console.log(form)
        setDisplayMessages(false)
        const url = 'https://tembi.onrender.com/api/users/login/';

        const payload = {
          email: form.email,
          password: form.password,
        };

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          const errorData = await response.json();
          if(Object.keys(errorData)[0] === 'password'){
            setFormState((prevFormState) => ({
              ...prevFormState,
              password: { state: 'error', message: Object.values(errorData).flat().join('\n'), error: true },

            }))

          }else if(Object.keys(errorData)[0] === 'email'){
            setFormState((prevFormState) => ({
              ...prevFormState,
              email: { state: 'error', message: Object.values(errorData).flat().join('\n'), error: true },

            }))
          }
        
          const errorMessage = `{'${Object.keys(errorData)[0]}:${Object.values(errorData).flat().join('\n') }}`|| 'Login failed. Please check your credentials.';
          throw new Error(errorMessage);
        } else {
          const responseData = await response.json();
          
          

          const userData = {
            name: responseData.user?.full_name,
            token: responseData?.token,
            avatar: responseData.user?.avatar,
            phone: responseData.user?.phone_number,
            email: responseData.user?.email,
          };
          

          console.log(userData.token)

          await saveToken('user', JSON.stringify(userData));
          await saveToken('api_token', userData.token)
          await saveToken('displayedOnboarding', 'true')
          router.replace('/(tabs)/home');
        }
      } catch (error) {
        setDisplayMessages(true)
        console.log('Error:', error.message);
       
      }finally{
        setLoading(false)
      }
    }
  
}



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

            <TextField 
              state={formState.email.state} 
              error={formState.email.error && displayMessages}
              errorMessage={formState.email.message}
              type={'email'} 
              placeholder={'eg. ebecks419@gmail.com'} 
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

            <Text className="text-primary-60 text-center" onPress={() => router.push('/forgot-password')}>Forgot Password</Text>
            
            <CustomButton title={"Sign in"} containerStyles={"mt-[24px]"} handlePress={handleSubmit} />
            
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
          <LoaderModal visibility={loading} Title={'Wait a minute...'} content={'Logging you in.'} Icon={() => <LoaderIcon />} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn