import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ClockIcon } from '../assets/icons/svgIcons'

const DiscountCard = ({originalPrice, discountedPrice,title,Icon,primary,border,secondary,background, category,activeBorderColor,active,activeBorderWidth}) => {
    const colors = {
        primary: primary || '#A3072B',
        border: border || '#FED2D9',
        secondary: secondary || '#DD214F',
        background: background || '#FEF4F5',
        active: activeBorderColor || '#FEF4F5',

    }

  return (
    <View >
      <View style={{borderRadius: 16, borderColor: active? colors.active : colors.border, borderWidth: active? activeBorderWidth : 1 , backgroundColor: colors.background}} className='px-[24px] py-[20px]'>
        <Text style={{color: colors.secondary}} className='font-pregular text-[12px]'>{title}</Text>
        <View style={{display:'flex', flexDirection:'row', gap:4}}>
            <Text style={{display: 'flex',color: colors.primary}} className='font-pregular text-[12px]' >GH₵</Text>
            <Text className='font-pregular text-[20px] ' style={{color: colors.primary}}>{discountedPrice}</Text>
            {originalPrice && (<Text style={{display: 'flex',color: colors.secondary, textDecorationLine:'line-through', alignSelf:'flex-end'}} className='font-pregular text-[12px]' >GH₵ {originalPrice}</Text>)}
        </View>
        {category && (<View style={{backgroundColor: colors.secondary, display:'flex', justifyContent:'flex-end', alignItems:'center', alignSelf:'flex-start', position:'absolute', left:20, top:-10, flexDirection:'row', gap:4}} className='px-[12px] py-[4px] rounded-full'><View style={{justifyContent:'flex-start'}}>{Icon &&<Icon/>}</View><Text className='text-neutral-10 font-pregular text-[10px]' style={{justifyContent:'center', alignSelf:'flex-end'}}>{category}</Text></View>)}
        </View>
    </View>
  )
}

export default DiscountCard

const styles = StyleSheet.create({})