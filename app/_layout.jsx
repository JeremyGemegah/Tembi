import { StyleSheet } from 'react-native'
import React,{useEffect} from 'react'
import { Stack,SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font'
import { configureReanimatedLogger } from 'react-native-reanimated'



configureReanimatedLogger({
  strict: false,
})

const MainLayout = () => {

 

  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
    "comfortaa": require("../assets/fonts/comfortaa/Comfortaa-Regular.ttf"),
  });

  useEffect(() => {
    if(error) throw error;

    if(fontsLoaded) SplashScreen.hideAsync();
  },[fontsLoaded, error])




  if(!fontsLoaded && !error) return null;


  return (
    <Stack style={styles.container}>
        <Stack.Screen name='index' options={{ headerShown: false}} />
        <Stack.Screen name='homemain' options={{ headerShown: false}} />
        <Stack.Screen name='(onboarding)' options={{ headerShown: false}} />
        <Stack.Screen name='(auth)' options={{headerShown: false}} />
        <Stack.Screen name='(tabs)' options={{headerShown: false}} />
        <Stack.Screen name='search' options={{headerShown: false, presentation: 'transparentModal', animation: 'fade'}} />
    </Stack> 
  )
}

export default MainLayout

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})