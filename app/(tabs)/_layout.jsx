import { View, Text, Pressable, TouchableOpacity, Animated, Dimensions } from 'react-native'
import React, { useEffect, useState,useRef, createContext, useContext } from 'react'
import { router, Tabs, usePathname } from 'expo-router'
import { AccountIcon, BellIcon, HeartIcon, HomeIcon, LocationIcon, QRIcon, RidesIcon, SearchIcon } from '../../assets/icons/svgIcons'
import { useCameraPermissions } from 'expo-camera'
import ScanCode from '../../components/ScanCode'
import { EventEmitter } from 'expo'
import { customEventEmitter } from '../../components/eventEmitters/eventEmitter'
import { Image } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { checkLoggedIn, getAPIToken, getUserData } from '../../components/functions/functions'
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { Platform } from 'react-native';
import {registerForPushNotificationsAsync} from '../../utils/registerForPushNotificationsAsync'



//push notifications configuration
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});





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

export const GlobalContext = createContext()

const {height: SCREEN_HEIGHT} = Dimensions.get('screen')


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
    const [modalOpened, setModalOpened] = useState(false)
    const [displayIcons, setDisplayIcons] = useState(false)
    const [userData, setUserData] = useState()
    const [apiToken, setAPIToken] = useState()
    const [permission, requestPermission] = useCameraPermissions()
    const scaleAnim = useRef(new Animated.Value(1)).current; 
   const pathname = usePathname()
   const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(undefined);



   useEffect(() => {
    registerForPushNotificationsAsync()
      .then(token => setExpoPushToken(token ?? ''))
      .catch((error) => setExpoPushToken(`${error}`));

    const notificationListener = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    const responseListener = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      notificationListener.remove();
      responseListener.remove();
    };
  }, []);
    
    useEffect(() => {
      const navigateAction = myeventEmitter.addListener('customTabPress', (e) => {
        Animated.timing(scaleAnim, {
            // change native display property too *****************************************************************
            toValue: e === 'Home' ? 1 : 0, // Scale down when tab is not focused
            duration: 300, // Smooth animation duration
            useNativeDriver: true,
          }).start();
      })

      const modalOpenedListener = customEventEmitter.addListener('modalOpened', (options) => {
        setModalOpened(options.isOpen)
        
      })
    
      return () => {
        navigateAction.remove()
        modalOpenedListener.remove()
    }
      
    }, [])

    useEffect(() => {
      const checkAuthStatus = async () => {
        const loggedIn = await checkLoggedIn();
        if (!loggedIn) {
          router.replace('/sign-in');
        } else {
          try {
            const userD = await getUserData();
            const userToken = await getAPIToken();
            if (userD) {
              // You can now use the parsed user data
              const mydata = JSON.parse(userD)
              setUserData(mydata)
              setAPIToken(userToken)
              
            }
          } catch (e) {
            console.error('Failed to parse user data:', e);
          }
        }
      };
      checkAuthStatus();
    }, []);

     useEffect(() => {
      // This effect will run whenever the user navigates.
      // The icons should only be visible on the home screen.
      if (pathname === '/home') {
        setDisplayIcons(true);
      } else {
        setDisplayIcons(false);
      }
    }, [pathname])
    

    

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

    <GlobalContext.Provider value={{SCREEN_HEIGHT,userData,apiToken,expoPushToken}} >
    <View className="flex-1" style={{position:'relative'}}>

        <View style={{flexDirection:'row', justifyContent:'space-between',width:'100%', marginTop:10, position:'absolute', top:0, zIndex:1, paddingLeft:16, alignItems:'center',paddingTop:12}}>{/* top buttons */}
            <View>
            <Animated.View style={{transform: [{ scale: scaleAnim }]}}>
                <TouchableOpacity  className="p-[12px] rounded-full bg-neutral-10" style={{ shadowOffset: { width: 0, height: 2 }, shadowColor: 'rgba(0, 0, 0, 0.5)', shadowOpacity: 1,shadowRadius: 64, elevation: 20, width:48, height:48, overflow:'hidden', justifyContent:'center', alignItems:'center', display:displayIcons? 'flex': 'none'}} onPress={() => router.push('/account/profile')}>
                    <Image 
                    source={userData?.avatar || require('../../assets/images/profile.jpg')}
                    resizeMode='contain'
                    style={{width:58, height:58}}
                   
                    
                    />
                    
                </TouchableOpacity>
                <View style={{width:12, height: 12, position: 'absolute', bottom:'-1%', right:0, zIndex:2}} className="bg-[#6ACE13] rounded-full border-neutral-10 border-[1px]"></View>
            </Animated.View>
            </View>


            <View style={{flexDirection:'row', gap:8, paddingRight: 16}}>
            <Animated.View style={{transform: [{ scale: scaleAnim }]}}>
                <TouchableOpacity className="p-[12px] rounded-full bg-neutral-10" style={{ shadowOffset: { width: 0, height: 2 }, shadowColor: 'rgba(0, 0, 0, 0.5)', shadowOpacity: 1,shadowRadius: 64, elevation: 20}} >  
                    <SearchIcon />
                </TouchableOpacity>
            </Animated.View>

            <Animated.View style={{transform: [{ scale: scaleAnim }]}}>
               <TouchableOpacity className="p-[12px] rounded-full bg-neutral-10" style={{ shadowOffset: { width: 0, height: 2 }, shadowColor: 'rgba(0, 0, 0, 0.5)', shadowOpacity: 1,shadowRadius: 64, elevation: 20}} onPress={() => router.push('/account/favourites')}>
                <HeartIcon />
               </TouchableOpacity>
            </Animated.View>
            
            <Animated.View style={{transform: [{ scale: scaleAnim }]}}>
                <TouchableOpacity className="p-[12px] rounded-full bg-neutral-10" style={{ shadowOffset: { width: 0, height: 2 }, shadowColor: 'rgba(0, 0, 0, 0.5)', shadowOpacity: 1,shadowRadius: 64, elevation: 20}} onPress={() => router.push('/account/notifications')}>
                    <BellIcon/>
                </TouchableOpacity>
                <View style={{width:24, height: 24, position: 'absolute', top:'-20%', right:'-10%', zIndex:2, justifyContent:'center', alignItems:'center'}} className="bg-primary-50 rounded-full "><Text>3</Text></View>
            </Animated.View>
            </View>
        </View>

    <View style={{position:'absolute', zIndex:1, bottom:100, right:16, display: modalOpened? 'none': 'flex'}} className="flex gap-4">
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
        screenOptions={ ({route}) => ({
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
                position: 'absolute'
                ,display: modalOpened? 'none': 'flex'
                ,zIndex:2
                
               
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
            
                        
              
        })}
        
 
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
                resetOnBlur: true,
                tabBarIcon: ({color, focused}) => (
                    <AccountTabIcon color={color} name={'Account'} focused={focused} />
                )
            }}
        />

    </Tabs>
    </View>
    </GlobalContext.Provider>
  )
}

export default TabsLayout