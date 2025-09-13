import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RidesIcon, WalletIcon } from '../assets/icons/svgIcons'

const PaymentItem = () => {
  return (
    <View >
        <View style={{flex:1, flexDirection:'row', gap: 12}}>
            <View className='bg-secondary-800 rounded-full p-[12px]' >
                {/* <RidesIcon color={'white'} /> */}
                <WalletIcon />
            </View>
            <View>
                <View style={{flexDirection:'column'}}>
                    <Text className='text-[14px] font-pregular text-neutral-90'>Rental Payment</Text>
                    <View style={{flexDirection:'row', gap:8, alignItems:'center'}}>
                                    <Text className='text-neutral-90 font-plight text-[12px] tracking-tighter '>05 July, 2025</Text>
                                    <Text className='text-neutral-70 font-plight text-[12px] tracking-tighter '>|</Text>
                                    <Text className='text-neutral-70 font-plight text-[12px] tracking-tighter '>04:39 PM</Text>
                                </View>
                </View>
            </View>
            <View style={{marginLeft:'auto', alignItems:'center', justifyContent:'center'}}>
                <Text className='text-[14px] font-pmedium text-critical-70'>-₵ 0.97</Text>
            </View>
        </View>
    </View>
  )
}

export default PaymentItem

const styles = StyleSheet.create({})