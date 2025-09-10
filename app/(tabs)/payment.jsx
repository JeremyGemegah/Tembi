import { View, Text, ScrollView,TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AccountBalance from '../../components/accountbalance'
import DiscountCard from '../../components/discountCard'
import PaymentItem from '../../components/paymentItem'
import CustomButton from '../../components/CustomButton'
import { Lock, LockIcon } from '../../assets/icons/svgIcons'
import Paystack from '../../components/paystack'
import { apiCall } from '../../components/functions/functions'

const payment = () => {
  const [modal, setModal] = useState(false)
  const [paymentUri, setPaymentUri] = useState('')

  const handlePay = async () => {
    console.log('pay')
    apiCall('payments/wallet/fund/',null,'POST',{amount:12})
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
    <SafeAreaView className="flex-1">
        <ScrollView>
            <View className='px-[16px] pb-10'>

              {/* base view */}
            <View style={{display:'none'}}>
             {/*  wallet */}
              <View>
                <Text>Wallet</Text>
                <AccountBalance />

              </View>

             {/*  disconted ride deals */}
              <View>

                <Text>Discounted Ride Deals</Text>
                <Text>Buy more, ride more. Enjoy exclusive discounts.</Text>
                <DiscountCard />
              </View>

              {/* Recent Transactions */}
              <View>
                <Text>Recent Transactions</Text>
                <PaymentItem />
              </View>
              </View>
            
            
            
            {/* when payment is being made */}
            
            <View style={{display:'flex'}}>
             {/*  wallet */}
              <View>
                
                <AccountBalance />

              </View>

            {/*   Enter Amount */}
              <View>
                <Text>Enter Amount</Text>

                <View className="flex-row h-[20px] w-full items-center gap-[12px]">
                        
                
                        <TextInput 
                         className={`h-16 flex-1  text-left text-[16px] py-0 font-pregular  items-end content-end`}
                         /* style={{color: textColor}} */
                         placeholder= {'12.00'}
                         placeholderTextColor={'#5D6C87'}
                         /* onChangeText={handleTextChange} */
                        /*  value={value}
                          onFocus={onFocus} */
                         keyboardType= 'phone-pad' 
                        />
                
                        </View>
                    

                {/* suggested amounts */}
                <View>
                   <ScrollView className=' gap-[8px]' horizontal={true} showsHorizontalScrollIndicator={false} >
                                  {['6.00','12.00','24.00','36.00'].map((offer,index) => (
                                      <TouchableOpacity onPress={() => {}} className='py-[8px] pl-[12px] pr-[20px] flex-row gap-[12px] border-[1px] rounded-[12px] mr-[8px]' key={index} style={{ borderColor: offer.active? '#F7CB66': '#E9F0F4', backgroundColor: offer.active? '#FEF6E5': '#F5F8FA', flexShrink: 0, flexGrow:1}}>
                                          <View>
                                              
                                              <View className='flex-row gap-[2px]'><Text className='font-pregular text-[18px] ' style={{color: offer.active? '#916500': '#2E3748'}}>₵ {offer}</Text></View>
                                          </View>
                                      </TouchableOpacity>
                                  ))}
                                  </ScrollView>
                </View>
              </View>

              <View>
                <CustomButton title={'Proceed to Pay'} containerStyles={'w-full mt-7 bg-primary-50 '} textStyles={'text-secondary-950'}  handlePress={handlePay} />
              <View style={{flexDirection: 'row', gap:8, justifyContent:'center'}}><LockIcon/><Text>Payment secured by Paystack</Text></View>
              </View>

            
              </View>


            </View>
        </ScrollView>
        <Paystack visible={modal} uri={paymentUri} onClose={() => setModal(false)} onPaymentComplete={handlePaymentComplete} />
    </SafeAreaView>
  )
}

export default payment