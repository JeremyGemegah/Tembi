import { View, Text, ScrollView,TextInput, TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AccountBalance from './accountbalance'
import CustomButton from './CustomButton'
import {LockIcon, BackIcon } from '../assets/icons/svgIcons'
import Paystack from './paystack'
import { apiCall } from './functions/functions'
import PaymentSuccess from './paymentSuccess'
import { Modal } from 'react-native'

const AddCustomAmount = ({visibility, onClose}) => {

     const [modal, setModal] = useState(false)
      const [paymentSuccess, setPaymentSuccess] = useState(false)
      const [paymentUri, setPaymentUri] = useState('')
      const [deposit, setDeposit] = useState()
      const [addscreen, setAddscreen] = useState(false)
      const [balance, setBalance] = useState()

    
       const handleSuccessClose = () => {
        setPaymentSuccess(false)
      }
    
      const handleTextChange = (text) => {
        // Remove any non-numeric characters except for the decimal point
        const mytext= text
        const cleanedText = mytext.replace(/[^0-9.]/g, '');
        setDeposit(cleanedText);
      }
    
      useEffect(() => {
    
        
        const checkBalance = async () => {
          apiCall('payments/wallet/')
          .then(response => {
            console.log('Balance response:', response)
    
            // Handle the response data here
            setBalance(response.balance)
          })
          .catch(error => {
            console.error('Balance error:', error)
            // Handle any errors here
          })
        }
    
    
        
    
        checkBalance()
      
        return () => {
          // Cleanup if needed
        }
      }, [modal, addscreen])
      
    
    
      const handlePay = async () => {
        console.log('pay')
        apiCall('payments/wallet/fund/',null,'POST',{amount: deposit})
        .then(response => {
          console.log('Payment response:', response.authorization_url)
          setPaymentUri(response.authorization_url)
          setModal(true)
          
         
        })
        .catch(error => {
          console.error('Payment error:', error)
        })
      }
    
      const handlePaymentComplete = (url) => {
        // You can parse the URL to get the transaction reference if needed
        console.log('Payment completion URL:', url);
    
        // Close the modal
        setModal(false);
    
        // IMPORTANT: For security, make an API call to your backend to verify 
        // the transaction status using the reference from the URL before 
        // crediting the user's wallet.
        alert('Payment process completed! We will verify your transaction shortly.');
      }

  return (
    <Modal animationType="slide"  visible={visibility} onRequestClose={onClose} >

        <ScrollView  >
                   <View  className="flex-row pt-[15px]">
                            <TouchableOpacity onPress={onClose} className="w-16 h-16 items-center justify-center">
                                <BackIcon/>
                            </TouchableOpacity>
                            <View className="justify-center">
                            <Text className="text-[18px]  font-pregular">Deposit</Text>
                            
                            </View>
                        </View>
             <View className='px-[16px] pb-10'>
         <View style={{flex: 1,gap: 32}}>
             {/*  wallet */}
              <View >
                <TouchableOpacity onPress={() => setAddscreen(false)} >
                <AccountBalance onAdd={() => setPaymentSuccess(true)} balance={balance} />
                  </TouchableOpacity>

              </View>

            {/*   Enter Amount */}
              <View className='justify-center flex-1'>
                <View className="justify-center items-center"><Text className='font-pregular text-[14px] text-neutral-70'>Enter Amount</Text></View>

                <View className="flex-row h-[20px] w-full items-center justify-center py-[20px] mb-[16px]  border-b-[2px] border-b-neutral-30">
                    
                
                        <TextInput 
                         className={`h-16 text-[16px] font-pregular px-[12px]`}
                         style={{color: '#2E3748', fontSize: 36}}
                         placeholder= {'12.00'}
                         placeholderTextColor={'#5D6C87'}
                         onChangeText={handleTextChange}
                        value={deposit}
                          
                         keyboardType= {'phone-pad'} 
                        />
                
                        </View>
                    

                {/* suggested amounts */}
                <View>
                   <ScrollView className=' gap-[8px]' horizontal={true} showsHorizontalScrollIndicator={false} >
                                  {['6.00','12.00','24.00','36.00'].map((offer,index) => (
                                      <TouchableOpacity onPress={() => {setDeposit(offer)}} className='py-[6px] pl-[16px] pr-[16px] flex-row gap-[12px] border-[1px] rounded-full mr-[8px]' key={index} style={{ borderColor:'#D3DFE7', flexShrink: 0, flexGrow:1}}>
                                          <View>
                                              
                                              <View className='flex-row gap-[2px]'><Text className='font-light text-[12px] text-neutral-70' >₵ {offer}</Text></View>
                                          </View>
                                      </TouchableOpacity>
                                  ))}
                                  </ScrollView>
                </View>
              </View>

              <View className='gap-[16px]'>
                <CustomButton title={'Proceed to Pay'} containerStyles={'w-full mt-7 bg-primary-50 '} textStyles={'text-secondary-950'}  handlePress={handlePay} />
              <View style={{flexDirection: 'row', gap:8, justifyContent:'center'}}><LockIcon/><Text className="text-neutral-70">Payment secured by Paystack</Text></View>
              </View>

            
              </View>
              </View>
            </ScrollView>
            <Paystack visible={modal} uri={paymentUri} onClose={() => setModal(false)} onPaymentComplete={handlePaymentComplete} />
          <PaymentSuccess visibility={paymentSuccess} onClose={handleSuccessClose} amount={deposit} />
            

    </Modal>
  )
}

export default AddCustomAmount