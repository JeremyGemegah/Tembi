import { View } from 'react-native'
import React from 'react'
import { RidesIcon } from '../assets/icons/svgIcons'

const CustomMarker = () => {
  return (
        <View className=" bg-[#F2A900] p-[12px] rounded-full border-[#F5BA3366] border-[16px]" >
            <View style={{  justifyContent:'center', alignItems:'center',position:'relative'}}>
            <RidesIcon color={'#002520'} />
            </View>
           
           </View>
  )
}

export default CustomMarker