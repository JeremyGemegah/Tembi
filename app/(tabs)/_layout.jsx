import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { AccountIcon, HomeIcon, RidesIcon } from '../../assets/icons/svgIcons'

//Icons for the various tabs
const HomeTabIcon = ({color,name,focused, highlightColor}) => {
    return(
        <View className=" gap-2 items-center justify-start h-full">
            <View className={`p-[10px] ${focused? `bg-primary-50`: ``} rounded-[10px] w-full`}>
            <HomeIcon color={color} fill={focused? color: 'none'} highlightColor={focused? highlightColor : color}/>
            </View>
            <Text className="text-secondary-950 text-nowrap w-full font-pregular text-[12px]" style={{color:color}}>{name}</Text>
        </View>
    )
}

const RidesTabIcon = ({color,name,focused}) => {
    return(
        <View className=" gap-2  items-center justify-start h-full">
            <View className={`p-[10px]  ${focused? `bg-primary-50`: ``} rounded-[10px] w-full`}>
            <RidesIcon color={color} />
            </View>
            <Text className="text-secondary-950 text-nowrap w-full font-pregular text-[12px] " style={{color:color}}>{name}</Text>
        </View>
    )
}

const AccountTabIcon = ({color,name, focused}) => {
    return(
        <View className=" gap-2 items-center justify-start h-full">
            <View className={`p-[10px] ${focused? `bg-primary-50`: ``} rounded-[10px] w-full`}>
            <AccountIcon  color={color}/>
            </View>
            <Text className="text-secondary-950 text-nowrap w-full font-pregular text-[12px] " style={{color:color}}>{name}</Text>
        </View>
    )
}

const TabsLayout = () => {
    const TabHighlightColor = '#F2A900'
  return (
    <Tabs 
        screenOptions={{
            tabBarActiveTintColor:'#002520'
            ,tabBarInactiveTintColor:'#5D6C87'
            ,tabBarShowLabel:false
            ,animation:'shift'
            ,tabBarStyle:{
                height: 84
            },
            tabBarButton: (props) => (
                <Pressable 
                    {...props}
                    android_ripple={{ color: 'transparent'}}
                />
            )
                        
              
        }}
        
    >

        {/* home tab */}
        <Tabs.Screen 
            name='home'
            options={{
                title:'Home',
                headerShown: false,
                tabBarIcon: ({color,name, focused}) => (
                    <HomeTabIcon color={color} name={'Home'} focused={focused} highlightColor={TabHighlightColor}/>
                )
            }}
        />
        
       {/*  rides tab */}
        <Tabs.Screen 
            name='rides'
            options={{
                title:'Rides',
                headerShown: false,
                tabBarIcon: ({color,name, focused}) => (
                    <RidesTabIcon color={color} name={'Rides'} focused={focused} />
                )
            }}
        />
        
       {/*  account tab */}
        <Tabs.Screen 
            name='account'
            options={{
                title:'Account',
                headerShown: false,
                tabBarIcon: ({color,name, focused}) => (
                    <AccountTabIcon color={color} name={'Account'} focused={focused} />
                )
            }}
        />

    </Tabs>
  )
}

export default TabsLayout