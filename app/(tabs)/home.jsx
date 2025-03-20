import { View, Text, StyleSheet } from 'react-native'
import React,{useRef, useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MapView, { PROVIDER_GOOGLE ,Marker} from 'react-native-maps'
import * as Location from 'expo-location'
import { customEventEmitter } from '../../components/eventEmitters/eventEmitter'
import CustomMarker from '../../components/customMarker'


const Home = () => {

  const initial_position ={"latitude": 6.673174393359494, "latitudeDelta": 0.04, "longitude": -1.5720686875283718, "longitudeDelta": 0.02, "zoom": 10}
    
    const [currentLocation, setCurrentLocation] = useState(null);
    const [initialRegion, setInitialRegion] = useState(null);
    

    useEffect(() => {

      


    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location.coords);
      mapRef.current.animateToRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
        })

      setInitialRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    };



    getLocation();

    

   
  }, []);

  useEffect(() => {
    
    const listener = customEventEmitter.addListener('FindLocationFired', async () => {
      await Location.getCurrentPositionAsync({})
      .then((location) => {
        mapRef.current.animateToRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
        })
      })
    }) 

    return () => {listener.remove()}
  },[])

const mapRef = useRef()
  return (
    <SafeAreaView style={{}}>
    <View className=" w-full h-full "  >
   
        <MapView ref={mapRef} style={StyleSheet.absoluteFill} initialRegion={initial_position} provider={PROVIDER_GOOGLE}  showsUserLocation={true} showsMyLocationButton={false}   >
           <Marker 
            coordinate={{
              latitude: 6.6726,
              longitude: -1.5729999
            }}
            tracksViewChanges={false}
            >
           
            <CustomMarker/>
            
          
           
            
           </Marker>
        </MapView>
    </View>
    </SafeAreaView>
  )
}

export default Home