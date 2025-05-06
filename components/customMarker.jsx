import { View } from 'react-native'
import React, { useEffect } from 'react'
import { RidesIcon } from '../assets/icons/svgIcons'

const CustomMarker = ({focus}) => {
  
  

  return (
        <View className='p-[12px] rounded-full border-[16px]' style={{backgroundColor: focus? '#F2A900' : '#002520', borderColor: focus? '#F5BA3366' : '#00806E66'}} >
            <View style={{  justifyContent:'center', alignItems:'center',position:'relative'}}>
            <RidesIcon color={focus? '#002520' : '#FBFCFE'} />
            </View>
           
           </View>
  )
}

export default CustomMarker