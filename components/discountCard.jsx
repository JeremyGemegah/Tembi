import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ClockIcon } from '../assets/icons/svgIcons'

const DiscountCard = () => {
    const colors = {
        primary: '#A3072B',
        border: '#FED2D9',
        secondary: '#DD214F',
        background: '#FEF4F5',

    }

  return (
    <View >
      <View style={{flex:1, borderRadius: 16, borderColor: colors.border, borderWidth: 1, backgroundColor: colors.background}} className='px-[24px] py-[20px]'>
        <Text style={{color: colors.secondary}} className='font-pregular text-[12px]'>2 hour ride</Text>
        <View style={{display:'flex', flexDirection:'row', gap:4}}>
            <Text style={{display: 'flex',color: colors.primary}} className='font-pregular text-[12px]' >GH₵</Text>
            <Text className='font-pregular text-[20px] ' style={{color: colors.primary}}>12.00</Text>
            <Text style={{display: 'flex',color: colors.secondary, textDecorationLine:'line-through', alignSelf:'flex-end'}} className='font-pregular text-[12px]' >GH₵ 24.00</Text>
        </View>
        <View style={{backgroundColor: colors.secondary, display:'flex', justifyContent:'flex-end', alignItems:'center', alignSelf:'flex-start', position:'absolute', left:20, top:-10, flexDirection:'row', gap:4}} className='px-[12px] py-[4px] rounded-full'><View style={{justifyContent:'flex-start'}}><ClockIcon/></View><Text className='text-neutral-10 font-pregular text-[10px]' style={{justifyContent:'center', alignSelf:'flex-end'}}>Limited Time</Text></View>
        </View>
    </View>
  )
}

export default DiscountCard

const styles = StyleSheet.create({})