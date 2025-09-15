import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RidesIcon, WalletIcon } from '../assets/icons/svgIcons'

const PaymentItem = ({item}) => {
    const date = new Date(item.timestamp);
    const formattedDate = date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

  return (
    <View >
        <View style={{flex:1, flexDirection:'row', gap: 12}}>
            <View className='bg-secondary-800 rounded-full p-[12px]' >
                {/* <RidesIcon color={'white'} /> */}
                {item?.transaction_type === 'deposit'? <RidesIcon color={'#FBFCFE'} /> : <WalletIcon />}
            </View>
            <View>
                <View style={{flexDirection:'column'}}>
                    <Text className='text-[14px] font-pregular text-neutral-90'>{item.transaction_type}</Text>
                    <View style={{flexDirection:'row', gap:8, alignItems:'center'}}>
                                    <Text className='text-neutral-90 font-plight text-[12px] tracking-tighter '>{formattedDate}</Text>
                                    <Text className='text-neutral-70 font-plight text-[12px] tracking-tighter '>|</Text>
                                    <Text className='text-neutral-70 font-plight text-[12px] tracking-tighter '>{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</Text>
                                </View>
                </View>
            </View>
            <View style={{marginLeft:'auto', alignItems:'center', justifyContent:'center'}}>
                <Text className='text-[14px] font-pmedium' style={{color: item.transaction_type === 'deposit'? '#449C0A' : '#DD214F'}}>{item.amount} ₵</Text>
            </View>
        </View>
    </View>
  )
}

export default PaymentItem

const styles = StyleSheet.create({})