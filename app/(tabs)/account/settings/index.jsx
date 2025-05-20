import { View, Text,Pressable, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { ArrowRight, BellIcon, SettingsIcon, BackIcon, Lock, SunIcon, NightIcon, EmailIcon, LicenseIcon, TermsIcon, ShieldIcon, SmartphoneIcon, LogoutIcon } from '../../../../assets/icons/svgIcons'
import { Link,router } from 'expo-router'

const Settings = () => {
    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled(previous => !previous)
  return (
    <SafeAreaView>
    <ScrollView>
      <View className="mb-[90]">

        <View  className="flex-row">
                    <TouchableOpacity onPress={() => router.back()} className="w-16 h-16 items-center justify-center">
                        <BackIcon/>
                    </TouchableOpacity>
                    <View className="justify-center">
                    <Text className="text-[18px] leading-[3.3] font-pregular line-3">Settings</Text>
                    </View>
                </View>

    <View className="gap-[20px] pt-[24px]">

    {/* section */}
    <View>
      <Text className="font-pregular text-[14px] text-[#5D6C87] tracking-[-0.42px] uppercase px-[28px]">Account</Text>
      
      <View className="px-[36px] gap-[8px]">
        <Link href="###" push asChild><Pressable  className="flex-row items-center w-full py-[8px]"><View className=" self-start mr-[12px]"><Lock color={'#00806E'} style={{ alignItems:'flex-start'}}/></View><Text className="font-pregular text-[14px] text-[#002520] self-center">Change Password</Text><View style={{ marginLeft:'auto'}}><ArrowRight color={'#5D6C87'}/></View></Pressable></Link>
        
      </View>

    </View>
    
    
    {/* section */}
    <View>
      <Text className="font-pregular text-[14px] text-[#5D6C87] tracking-[-0.42px] uppercase px-[28px]">theme</Text>
      
      <View className="px-[36px] gap-[8px]">
        <Pressable  className="flex-row items-center w-full py-[8px]"><View className=" self-start mr-[12px]"><SunIcon color={'#00806E'} style={{ alignItems:'flex-start'}}/></View><Text className="font-pregular text-[14px] text-[#002520] self-center">Light</Text><View style={{ marginLeft:'auto'}}><ArrowRight color={'#5D6C87'}/></View></Pressable>
        <Pressable  className="flex-row items-center w-full py-[8px]"><View className=" self-start mr-[12px]"><NightIcon color={'#00806E'} style={{ alignItems:'flex-start'}}/></View><Text className="font-pregular text-[14px] text-[#002520] self-center">Dark</Text><View style={{ marginLeft:'auto'}}><ArrowRight color={'#5D6C87'}/></View></Pressable>
        <Pressable className="flex-row items-center w-full py-[8px]"><View className=" self-start mr-[12px]"><SettingsIcon color={'#00806E'} style={{ alignItems:'flex-start'}}/></View><Text className="font-pregular text-[14px] text-[#002520] self-center">System Default</Text><View style={{ marginLeft:'auto'}}><ArrowRight color={'#5D6C87'}/></View></Pressable>
     
      </View>

    </View>
    
    
    {/* section */}
    <View>
      <Text className="font-pregular text-[14px] text-[#5D6C87] tracking-[-0.42px] uppercase px-[28px]">Notification</Text>
      
      <View className="px-[36px] gap-[8px]">
        <View className="flex-row items-center w-full py-[8px]"><View className=" self-start mr-[12px]"><BellIcon color={'#00806E'} style={{ alignItems:'flex-start'}}/></View><Text className="font-pregular text-[14px] text-[#002520] self-center">Push Notifications</Text><View style={{ marginLeft:'auto'}}><Switch 
            trackColor={{true: '#00806E', false:'#D3DFE7'}}
            thumbColor={'#FBFCFE'}
            onValueChange={toggleSwitch}
            value={isEnabled}
        /></View></View>
        <View className="flex-row items-center w-full py-[8px]"><View className=" self-start mr-[12px]"><EmailIcon color={'#00806E'} style={{ alignItems:'flex-start'}}/></View><Text className="font-pregular text-[14px] text-[#002520] self-center">Email Notifications</Text><View style={{ marginLeft:'auto'}}><ArrowRight color={'#5D6C87'}/></View></View>

     
      </View>

    </View>


    
    {/* section */}
    <View>
      <Text className="font-pregular text-[14px] text-[#5D6C87] tracking-[-0.42px] uppercase px-[28px]">Legal</Text>
      
      <View className="px-[36px] gap-[8px]">
        <Link href="###" push asChild><Pressable  className="flex-row items-center w-full py-[8px]"><View className=" self-start mr-[12px]"><TermsIcon color={'#00806E'} style={{ alignItems:'flex-start'}}/></View><Text className="font-pregular text-[14px] text-[#002520] self-center">Terms of Service</Text><View style={{ marginLeft:'auto'}}><ArrowRight color={'#5D6C87'}/></View></Pressable></Link>
        <Link href="###" push asChild><Pressable  className="flex-row items-center w-full py-[8px]"><View className=" self-start mr-[12px]"><ShieldIcon color={'#00806E'} style={{ alignItems:'flex-start'}}/></View><Text className="font-pregular text-[14px] text-[#002520] self-center">Privacy Policy</Text><View style={{ marginLeft:'auto'}}><ArrowRight color={'#5D6C87'}/></View></Pressable></Link>
        <Link href="###" push asChild><Pressable  className="flex-row items-center w-full py-[8px]"><View className=" self-start mr-[12px]"><SmartphoneIcon color={'#00806E'} style={{ alignItems:'flex-start'}}/></View><Text className="font-pregular text-[14px] text-[#002520] self-center">App Version</Text><View style={{ marginLeft:'auto'}}><ArrowRight color={'#5D6C87'}/></View></Pressable></Link>
        <Link href="###" push asChild><Pressable  className="flex-row items-center w-full py-[8px]"><View className=" self-start mr-[12px]"><LicenseIcon color={'#00806E'} style={{ alignItems:'flex-start'}}/></View><Text className="font-pregular text-[14px] text-[#002520] self-center">Licences</Text><View style={{ marginLeft:'auto'}}><ArrowRight color={'#5D6C87'}/></View></Pressable></Link>
        
      </View>

    </View>

    {/* section */}

    <View className="px-[36px] gap-[8px]">
    <View className="flex-row items-center w-full py-[8px]"><View className=" self-start mr-[12px]"><LogoutIcon color={'#00806E'} style={{ alignItems:'flex-start'}}/></View><Text className="font-pregular text-[14px] text-[#A3072B] self-center">Logout</Text><View style={{ marginLeft:'auto'}}><ArrowRight color={'#5D6C87'}/></View></View> 
    </View>
    
    

    </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Settings