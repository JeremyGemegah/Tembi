import { View, Text,Pressable, TouchableOpacity, Switch } from 'react-native'
import React, { useState,useContext} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { ArrowRight, BellIcon, SettingsIcon, BackIcon, Lock, SunIcon, NightIcon, EmailIcon, LicenseIcon, TermsIcon, ShieldIcon, SmartphoneIcon, LogoutIcon } from '../../../../assets/icons/svgIcons'
import { Link,router } from 'expo-router'
import CustomSwitch from '../../../../components/customSwitch'
import CustomRadio from '../../../../components/Customradio'
import DialogueModal from '../../../../components/dialogueModal'
import * as SecureStore from 'expo-secure-store'
import { GlobalContext } from '../../_layout'
import { apiCall } from '../../../../components/functions/functions'






const Settings = () => {
      const [pnotifications,setPnotifications] = useState(false)
      const [enotifications,setEnotifications] = useState(false)
      const [isLight,setIsLight] = useState(false)
      const [isDark,setIsDark] = useState(false)
      const [logoutModal,setLogoutModal] = useState(false)
      const [logoutError,setLogoutError] = useState(false)
      const [isSystemDefault,setIsSystemDefault] = useState(false)
      const {apiToken} = useContext(GlobalContext)

      async function deleteToken(key) {
  try {
    await SecureStore.deleteItemAsync(key)
    console.log(`Token with key '${key}' deleted successfully!`)
  } catch (error) {
    console.error(`Error deleting token with key '${key}':`, error)
  }
}


      const logoutModalResponse = async (val) => {
        if(val){
          try {
                  // Use the apiCall function for the logout request.
                  await apiCall('users/logout/', null, 'POST');
                  
                  setLogoutModal(false);
                  deleteToken('api_token');
                  deleteToken('user');
                  
                  router.replace('/sign-in');
                } catch (error) {
                  console.error('Logout failed:', error);
                  setLogoutError(true);
                } finally {
                  setLogoutModal(false);
                }
      }
        else{
          setLogoutModal(false)
        }
      }
    
  return (
  
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
        <Pressable  className="flex-row items-center w-full py-[8px]"><View className=" self-start mr-[12px]"><SunIcon color={'#00806E'} style={{ alignItems:'flex-start'}}/></View><Text className="font-pregular text-[14px] text-[#002520] self-center">Light</Text><View style={{ marginLeft:'auto'}}><CustomRadio isActive={isLight} setIsActive={setIsLight} /></View></Pressable>
        <Pressable  className="flex-row items-center w-full py-[8px]"><View className=" self-start mr-[12px]"><NightIcon color={'#00806E'} style={{ alignItems:'flex-start'}}/></View><Text className="font-pregular text-[14px] text-[#002520] self-center">Dark</Text><View style={{ marginLeft:'auto'}}><CustomRadio isActive={isDark} setIsActive={setIsDark} /></View></Pressable>
        <Pressable className="flex-row items-center w-full py-[8px]"><View className=" self-start mr-[12px]"><SettingsIcon color={'#00806E'} style={{ alignItems:'flex-start'}}/></View><Text className="font-pregular text-[14px] text-[#002520] self-center">System Default</Text><View style={{ marginLeft:'auto'}}><CustomRadio isActive={isSystemDefault} setIsActive={setIsSystemDefault} /></View></Pressable>
     
      </View>

    </View>
    
    
    {/* section */}
    <View>
      <Text className="font-pregular text-[14px] text-[#5D6C87] tracking-[-0.42px] uppercase px-[28px]">Notification</Text>
      
      <View className="px-[36px] gap-[8px]">
        <View className="flex-row items-center w-full py-[8px]"><View className=" self-start mr-[12px]"><BellIcon color={'#00806E'} style={{ alignItems:'flex-start'}}/></View><Text className="font-pregular text-[14px] text-[#002520] self-center">Push Notifications</Text><View  style={{position:'relative', marginLeft:'auto'}}><CustomSwitch isOn={pnotifications} setIsOn={setPnotifications} /></View>
        </View>
        <View className="flex-row items-center w-full py-[8px]"><View className=" self-start mr-[12px]"><EmailIcon color={'#00806E'} style={{ alignItems:'flex-start'}}/></View><Text className="font-pregular text-[14px] text-[#002520] self-center">Email Notifications</Text><View  style={{position:'relative', marginLeft:'auto'}}><CustomSwitch isOn={enotifications} setIsOn={setEnotifications} /></View></View>

     
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
    <Pressable onPress={() => setLogoutModal(true)} className="flex-row items-center w-full py-[8px]"><View className=" self-start mr-[12px]"><LogoutIcon  style={{ alignItems:'flex-start'}}/></View><Text className="font-pregular text-[14px] text-[#A3072B] self-center">Logout</Text><View style={{ marginLeft:'auto'}}><ArrowRight color={'#5D6C87'}/></View></Pressable> 
    </View>
    
    

    </View>
    </View>
     <DialogueModal visibility={logoutModal} Title={'Logout of account?'} content={'You can always log back in.'}  titleStyles={'text-neutral-90 font-pregular text-[16px]'} affirmText={'Logout'} negativeText={'Cancel'} buttonIcon={() => <LogoutIcon color={'#FBFCFE'} />} affirmButtonContainerStyles={'bg-critical-80'} affirmTextStyles={'text-neutral-10 font-plight text-[12px]'} negativeTextStyles={'text-neutral-90 font-plight text-[12px]'} negativeButtonContainerStyles={'border-[1px] border-neutral-60'} onResponse={logoutModalResponse} />
       <DialogueModal visibility={logoutError} onResponse={() => setLogoutError(false)} Title={'We encountered an error'} content={'Please try again another time'} affirmText={'Ok'}  affirmButtonContainerStyles={'bg-primary-50'}  affirmTextStyles={'font-pregular text-[12px] leading-2 text-secondary-950'}  titleStyles={'text-critical-70 font-pmedium text-[16px]'}/>
    </ScrollView>
 
  )
}

export default Settings