import { View, Text, Pressable, TouchableOpacity, Animated } from 'react-native'
import React, { useEffect, useState,useRef } from 'react'
import { Tabs } from 'expo-router'
import { AccountIcon, HomeIcon, LocationIcon, QRIcon, RidesIcon } from '../../assets/icons/svgIcons'
import { useCameraPermissions } from 'expo-camera'
import ScanCode from '../../components/ScanCode'
import { EventEmitter } from 'expo'
import { customEventEmitter } from '../../components/eventEmitters/eventEmitter'

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

const myeventEmitter = new EventEmitter()

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

/////////////////////////////////////////////////////////////////////////////////////////////

const TabsLayout = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [permission, requestPermission] = useCameraPermissions()
    const scaleAnim = useRef(new Animated.Value(1)).current; 
   
    
    useEffect(() => {
      const navigateAction = myeventEmitter.addListener('customTabPress', (e) => {
        Animated.timing(scaleAnim, {
            toValue: e === 'Home' ? 1 : 0, // Scale down when tab is not focused
            duration: 300, // Smooth animation duration
            useNativeDriver: true,
          }).start();
      })
    
      return () => navigateAction.remove()
      
    }, [])
    

    

    const onModalClose = () => {
        setModalVisible(false)
    }

    const openModal = () => {
        setModalVisible(true)
    }

    const getPermissions = async () => {
        if(permission?.granted){
            return openModal()

        }
        try {
            await requestPermission() 
            .then((permission) => {
                if (permission.granted) openModal()
            })
       
            
        } catch (error) {
            console.log("could  not open camera")
        }
               

    }

    const TabHighlightColor = '#F2A900'
  return (
    <View className="flex-1" style={{position:'relative'}}>

    <View style={{position:'absolute', zIndex:1, bottom:100, right:16}} className="flex gap-4">
        <Animated.View style={{transform: [{ scale: scaleAnim }]}}>
            <TouchableOpacity className="p-[12px] rounded-full bg-neutral-10" style={{ shadowOffset: { width: 0, height: 2 }, shadowColor: 'rgba(0, 0, 0, 0.5)', shadowOpacity: 1,shadowRadius: 64, elevation: 20}} onPress={() => customEventEmitter.emit('FindLocationFired')}>
                <LocationIcon />
            </TouchableOpacity>
        </Animated.View>


        <Animated.View style={{transform: [{ scale: scaleAnim }]}}>
            <TouchableOpacity className="p-[12px] rounded-full bg-neutral-10" onPress={() => getPermissions()} style={{ shadowOffset: { width: 0, height: 2 }, shadowColor: 'rgba(0, 0, 0, 0.5)', shadowOpacity: 1,shadowRadius: 64, elevation: 20}}>
                <QRIcon />
            </TouchableOpacity>
        </Animated.View>
        </View>

        <ScanCode visibility={modalVisible} onClose={onModalClose} />
    
   

    <Tabs 
        screenOptions={{
            tabBarActiveTintColor:'#002520'
            ,tabBarInactiveTintColor:'#5D6C87'
            ,tabBarShowLabel:false
            ,animation:'shift'
            ,tabBarStyle:{
                height: 84,
                borderTopColor:'#E9F0F4',
                borderTopLeftRadius: 24,
                borderTopEndRadius: 24,
                borderTopWidth:1,
                position:'absolute',
               
            },
            tabBarButton: (props) => (
                <Pressable 
                    {...props}
                    onPress={(e) => {
                        myeventEmitter.emit('customTabPress',props.accessibilityLargeContentTitle)
                        props.onPress?.(e)
                    }}
                    android_ripple={{ color: 'transparent'}}
                />
            ),
            
                        
              
        }}
        
 
    >
         



        {/* home tab */}
        <Tabs.Screen 
            name='home'
            options={{
                title:'Home',
                headerShown: false,
                tabBarIcon: ({color, focused}) => (
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
                tabBarIcon: ({color, focused}) => (
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
                tabBarIcon: ({color, focused}) => (
                    <AccountTabIcon color={color} name={'Account'} focused={focused} />
                )
            }}
        />

    </Tabs>
    </View>
  )
}

export default TabsLayout