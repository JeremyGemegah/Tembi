import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AccountBalance from '../../components/accountbalance'
import DiscountCard from '../../components/discountCard'
import PaymentItem from '../../components/paymentItem'
import { apiCall } from '../../components/functions/functions'
import { ClockIcon } from '../../assets/icons/svgIcons'
import AddCustomAmount from '../../components/addCustomAmount'


const payment = () => {
  
  const [addscreen, setAddscreen] = useState(false)
  const [balance, setBalance] = useState()
  const [transactions, setTransactions] = useState()


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


    const checkTransactions = async () => {
      apiCall('payments/wallet/transactions/')
      .then(response => {
        console.log('transactions response:', response)

        // Handle the response data here
        setTransactions(response)
      })
      .catch(error => {
        console.error('transactions error:', error)
        // Handle any errors here
      })
    }

    checkBalance()
    checkTransactions()
  
    return () => {
      // Cleanup if needed
    }
  }, [])
  




  return (
    <SafeAreaView className="flex-1">
        <ScrollView>
            <View className='px-[16px] pb-10 pt-[24px]'>

              {/* base view */}
            <View style={{gap:40}}>
             {/*  wallet */}
              <View>
                <Text className="font-pregular text-[18px] text-neutral-950 py-[8px]">Wallet</Text>
                <AccountBalance addoption={true} onAdd={() => setAddscreen(true)} balance={balance} />

              </View>

             {/*  disconted ride deals */}
              <View>

                <Text className="font-pregular text-[16px] text-neutral-950">Discounted Ride Deals</Text>
                <Text className="text-[14px] font-pregular text-neutral-70">Buy more, ride more. Enjoy exclusive discounts.</Text>
                <View className='mt-[32px]'>
                <DiscountCard title={'30 minute Ride'} originalPrice={'24.00'} discountedPrice={'12.00'}  Icon={ClockIcon} category={'Limited Time'} />
                </View>
              </View>

              {/* Recent Transactions */}
              <View>
                <View className='flex-row justify-between items-center'>
                <Text className="text-[16px] font-pregular text-neutral-950">Recent Transactions</Text>
                <TouchableOpacity><Text className="font-pregular text-[14px] text-neutral-70">See all ›</Text></TouchableOpacity>
                </View>
                <View className='mt-[8px] px-[8px] gap-[8px]'>
                  {transactions && transactions.length === 0 ? (
                     <Text className='text-neutral-70'>No recent transactions</Text>)
                    : 
                    transactions && transactions.map((item, index) => (
                      <PaymentItem key={index} item={item} />
                    ))
                  }


                </View>
              </View>
              </View>
            
            
            
        
            
           </View>
        </ScrollView>
        <AddCustomAmount visibility={addscreen} onClose={() => setAddscreen(false)} />
    </SafeAreaView>
  )
}

export default payment