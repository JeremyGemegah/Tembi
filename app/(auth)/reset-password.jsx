import { View, Text, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import TextField from '../../components/TextField'
import GoogleSigninButton from '../../components/GoogleSigninButton'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import { BackIcon } from '../../assets/icons/svgIcons'


const ResetPassword = () => {


    const [form, setForm] = useState({
      password: '',
      confirm_password: '',
    });
    const [formState, setFormState] = useState({password:{state:'normal', message:'',error:false},confirm_password:{state:'normal', message:'',error:false}})
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

        const handleSubmit = async () => {
          const validInputs = Object.values(formState).every(
            (element) => element.error === false
          );
      
          if (validInputs) {
            setDisplayMessages(false);
            try {
              const url = 'https://tembi.onrender.com/api/users/reset-password/uid/token/';
      
              const payload = {

                password: form.password,
                confirm_password: form.confirm_password
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
               /*  await saveToken('signedup', 'true');
                await saveToken('verified', 'false'); */
                router.push('/sign-in');
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
        }

  return (
    <SafeAreaView>
      <ScrollView>
         <TouchableOpacity className="pl-[28px] mt-[40px] mb-[32px] w-[24px]" onPress={() => router.back()} >
                   
                    <BackIcon />
                </TouchableOpacity>
        <View className="px-[16px]  ">
          <View className="flex-1 items-center  pb-[64px]">
          <Text className="text-[24px]">Reset Password</Text>
          <Text className="text-[14px] text-neutral-70">Please type something you'll remember</Text>
          </View>
          
          <View className="flex-1 gap-[24px]">

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
            
            <CustomButton title={"Reset Password"} containerStyles={"mt-[24px]"} handlePress={handleSubmit} />
      
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ResetPassword