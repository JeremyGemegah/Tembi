import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { AccountIcon, ArrowRight, BellIcon, BillIcon, HeartIcon, InfoIcon, RidesIcon, SettingsIcon, WarningIcon } from '../../../assets/icons/svgIcons'
import { Link } from 'expo-router'

const Account = () => {
  return (
    <SafeAreaView>
    <ScrollView>
      <View className="mb-[90]">
    
    <View className="items-center pt-[36px] pb-[24px]">
      <Image
        source={require('../../../assets/images/profile.jpg')}
        resizeMode='contain'
        style={{width:80, height:80}}
        className="rounded-full"
      />
      <Text className="font-pmedium text-[#C18700] text-[16px] pt-[8px] "> Jeremy Gemegah</Text>
      <Text className="font-pregular text-[#5D6C87] text-[12px] "> jeremygemegah@gmail.com</Text>
    </View>

    <View className="gap-[20px]">

    {/* section */}
    <View>
      <Text className="font-pregular text-[14px] text-[#5D6C87] tracking-[-0.42px] uppercase px-[28px]">Account</Text>
      
      <View className="px-[36px] gap-[8px]">
        <Link href="/account/profile" push asChild><Pressable  className="flex-row items-center w-full py-[8px]"><View className=" self-start mr-[12px]"><AccountIcon color={'#00806E'} style={{ alignItems:'flex-start'}}/></View><Text className="font-pregular text-[14px] text-[#002520] self-center">Profile Management</Text><View style={{ marginLeft:'auto'}}><ArrowRight color={'#5D6C87'}/></View></Pressable></Link>
        <View className="flex-row items-center w-full py-[8px]"><View className=" self-start mr-[12px]"><BillIcon style={{ alignItems:'flex-start'}}/></View><Text className="font-pregular text-[14px] text-[#002520] self-center">Payment Details</Text><View style={{ marginLeft:'auto'}}><ArrowRight color={'#5D6C87'}/></View></View>
        <View className="flex-row items-center w-full py-[8px]"><View className=" self-start mr-[12px]"><RidesIcon color={'#00806E'} style={{ alignItems:'flex-start'}}/></View><Text className="font-pregular text-[14px] text-[#002520] self-center">Ride History</Text><View style={{ marginLeft:'auto'}}><ArrowRight color={'#5D6C87'}/></View></View>
     
      </View>

    </View>
    
    
    {/* section */}
    <View>
      <Text className="font-pregular text-[14px] text-[#5D6C87] tracking-[-0.42px] uppercase px-[28px]">general</Text>
      
      <View className="px-[36px] gap-[8px]">
        <Link href="/account/favourites"  push asChild><Pressable  className="flex-row items-center w-full py-[8px]"><View className=" self-start mr-[12px]"><HeartIcon color={'#00806E'} style={{ alignItems:'flex-start'}}/></View><Text className="font-pregular text-[14px] text-[#002520] self-center">Favourites</Text><View style={{ marginLeft:'auto'}}><ArrowRight color={'#5D6C87'}/></View></Pressable></Link>
        <Link href="/account/notifications" push asChild><Pressable  className="flex-row items-center w-full py-[8px]"><View className=" self-start mr-[12px]"><BellIcon color={'#00806E'} style={{ alignItems:'flex-start'}}/></View><Text className="font-pregular text-[14px] text-[#002520] self-center">Notifications</Text><View style={{ marginLeft:'auto'}}><ArrowRight color={'#5D6C87'}/></View></Pressable></Link>
        <View className="flex-row items-center w-full py-[8px]"><View className=" self-start mr-[12px]"><SettingsIcon color={'#00806E'} style={{ alignItems:'flex-start'}}/></View><Text className="font-pregular text-[14px] text-[#002520] self-center">Settings</Text><View style={{ marginLeft:'auto'}}><ArrowRight color={'#5D6C87'}/></View></View>
     
      </View>

    </View>
    
    
    {/* section */}
    <View>
      <Text className="font-pregular text-[14px] text-[#5D6C87] tracking-[-0.42px] uppercase px-[28px]">support</Text>
      
      <View className="px-[36px] gap-[8px]">
        <View className="flex-row items-center w-full py-[8px]"><View className=" self-start mr-[12px]"><WarningIcon color={'#00806E'} style={{ alignItems:'flex-start'}}/></View><Text className="font-pregular text-[14px] text-[#002520] self-center">Report issue</Text><View style={{ marginLeft:'auto'}}><ArrowRight color={'#5D6C87'}/></View></View>
        <View className="flex-row items-center w-full py-[8px]"><View className=" self-start mr-[12px]"><InfoIcon color={'#00806E'} style={{ alignItems:'flex-start'}}/></View><Text className="font-pregular text-[14px] text-[#002520] self-center">Help center</Text><View style={{ marginLeft:'auto'}}><ArrowRight color={'#5D6C87'}/></View></View>

     
      </View>

    </View>

    </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Account