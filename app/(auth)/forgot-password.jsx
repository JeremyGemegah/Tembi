import { View, Text, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import TextField from '../../components/TextField'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import { BackIcon, LoaderIcon } from '../../assets/icons/svgIcons'
import { apiCall } from '../../components/functions/functions'



const ForgotPassword = () => {

   const [form, setForm] = useState({
        email: ''
      });
      const [formState, setFormState] = useState({email:{state:'normal', message:'',error:false}})
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
        

   }        
  }

  const  handleSubmit = async () => {
    const validInputs = Object.values(formState).every(element => element.error === false)
    
   
    if(validInputs){
      setLoading(true)
      try {
        setDisplayMessages(false)
        const response = await apiCall('users/forgot-password/', null, 'POST', { email: form.email });
        console.log("Password reset email sent:", response);
        // Navigate to a confirmation screen or the next step
        router.push('/reset-password');
      } catch (error) {
        console.error('Forgot password error:', error);
        // You can add more specific error handling here if needed
        setFormState((prev) => ({
          ...prev,
          email: { state: 'error', message: 'An error occurred. Please try again.', error: true }
        }));
        setDisplayMessages(true);
      } finally {
        setLoading(false);
      }
    }
   else{
    setDisplayMessages(true)
  }
}


  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableOpacity className="pl-[28px] mt-[40px] mb-[32px] w-[24px]" onPress={() => router.back()} >
           
            <BackIcon />
        </TouchableOpacity>
        <View className="px-[16px] ">
          <View className="flex-1 items-center  pb-[48px]">
          
          <Text className="text-[24px] text-secondary-950">Forgot Password</Text>
          <Text className="text-[14px] text-neutral-70 text-center">Don't worry, it happens. Please enter the email{"\n"} associated with the account</Text>
          </View>
          
          <View className="flex-1 gap-[16px]">

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
            
            <CustomButton title={"Continue"} containerStyles={"mt-[24px] bg-primary-50"} handlePress={handleSubmit} isLoading={loading} />

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ForgotPassword