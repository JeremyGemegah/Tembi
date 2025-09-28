import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {  ArrowRight, CautionIcon, FireIcon, BackIcon } from '../assets/icons/svgIcons'
import CustomButton from './CustomButton'
import DiscountCard from './discountCard'
import Paystack from './paystack'
import PaymentSuccess from './paymentSuccess' 
import { apiCall } from './functions/functions'
import AddCustomAmount from './addCustomAmount'
import { Modal } from 'react-native'


const InsufficientBalance = ({visibility, onClose}) => {
  const [modal, setModal] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [deposit, setDeposit] = useState()
  const [addCustomAmount, setAddCustomAmount] = useState(false)
  const [paymentUri, setPaymentUri] = useState('')
  const [offers, setOffers] = useState([{index:1,title: '30 minute Ride', originalPrice: '6.00', discountedPrice: '5.40', secondary: '#AB5200', border: '#FBDC5C', background: '#FEF9D9', Icon: FireIcon, primary: '#863A00', category: 'Popular', active:false},
     {index:2,title: '30 minute Ride', discountedPrice: '6.00', secondary: '#5D6C87', border: '#E9F0F4', background: 'transparent',  primary: '#2E3748', active:false}, 
     {index:3,title: '30 minute Ride', discountedPrice: '6.00',secondary: '#5D6C87', border: '#E9F0F4', background: 'transparent',  primary: '#2E3748', active:false}])

     const selectOffer = (index) => {
        setOffers(previous => previous.map( item => {
          if(item.index === index) {
            setDeposit(item.discountedPrice)
            return{...item,active: true}
          } else {
            return {...item, active: false}
          }
        }) )
    }

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

  return (
    <Modal animationType="slide"  visible={visibility} onRequestClose={onClose} >
    <SafeAreaView className="flex-1">
      <View  className="flex-row pt-[15px]">
                                  <TouchableOpacity onPress={onClose} className="w-16 h-16 items-center justify-center">
                                      <BackIcon/>
                                  </TouchableOpacity>
                                  <View className="justify-center">
                                  <Text className="text-[18px]  font-pregular">Back</Text>
                                  
                                  </View>
                              </View>
      <View className="h-full justify-center items-center px-[20px] pb-[80px] bg-neutral-10">
        <View>
        <View className="items-center gap-[8px]">
            <View className=" items-center justify-center">
                <CautionIcon/>
            </View>
            <View>
            <Text className="font-pmedium text-[18px] text-center text-critical-80">Insufficient Balance</Text>
            <Text className="font-pregular text-[14px] text-center text-neutral-70">You need at least ₵6.00 to start a ride.Your current balance is ₵0.50.</Text>
            </View>
        </View>
        <View>
        <View className="mt-[20px]">
            <Text className="font-pregular text-[16px] text-secondary-950">Available Packages</Text>
        </View>
        <View className="mt-[20px]">
            <View className="gap-[12px]">
              {offers.map((offer) => (
                <TouchableOpacity key={offer.index} onPress={() => selectOffer(offer.index)}>
                  <DiscountCard key={offer.index} title={offer.title} originalPrice={offer.originalPrice} discountedPrice={offer.discountedPrice} secondary={offer.secondary} border={offer.border} background={offer.background} Icon={offer.Icon} primary={offer.primary} category={offer.category} activeBorderColor={'#AB5200'} activeBorderWidth={3} active={offer.active} />
                  </TouchableOpacity>
              ))}
            
              <TouchableOpacity className="justify-center py-[12px] px-[24px] border border-neutral-50 rounded-[12px]" onPress={() => setAddCustomAmount(true)}>
                <Text className="font-pregular text-[12px] text-neutral-90">Enter custom amount</Text>
                <View className="absolute right-4 top-4">
                  <ArrowRight color={'#5D6C87'}/>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <CustomButton title={'Proceed to Pay'} handlePress={handlePay}  containerStyles={'bg-primary-50 w-full mt-[20px]'} textStyles={'text-secondary-950 text-[14px] font-pregular'} disabled={!offers.some(offer => offer.active)}/>
            </View>
        </View>
      </View>
      </View>
      </View>
       <Paystack visible={modal} uri={paymentUri} onClose={() => setModal(false)} /* onPaymentComplete={handlePaymentComplete} */ />
        <PaymentSuccess visibility={paymentSuccess} /* onClose={handleSuccessClose} */ amount={deposit} />
        <AddCustomAmount visibility={addCustomAmount} onClose={() => setAddCustomAmount(false)} />

    </SafeAreaView>
    </Modal>
  )
}

export default InsufficientBalance