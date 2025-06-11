import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React,{useRef, useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MapView, { PROVIDER_GOOGLE ,Marker} from 'react-native-maps'
import * as Location from 'expo-location'
import { customEventEmitter } from '../../components/eventEmitters/eventEmitter'
import CustomMarker from '../../components/customMarker'
import DockerDetails from '../../components/dockerDetailsModal'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const markers = [
  {
    id: 0,
    latitude: 6.6726,
    longitude: -1.5729999
},
  {
    id: 1,
    latitude: 6.6759,
    longitude: -1.5729999
  }
]

const Home = () => {

  const initial_position ={"latitude": 6.673174393359494, "latitudeDelta": 0.04, "longitude": -1.5720686875283718, "longitudeDelta": 0.02, "zoom": 10}
    
    const [currentLocation, setCurrentLocation] = useState(null);
    const [initialRegion, setInitialRegion] = useState(null);
    const [selectedMarker, setSelectedMarker] = useState(null)
    const modal = useRef()

    const handleMarkerSelect = (markerId) => {
        modal.current.scrollTo(500)
        setSelectedMarker(markerId)
    }    

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
      <GestureHandlerRootView style={{flex:1}}>
    <SafeAreaView style={{}}>
    <View className=" w-full h-full "  >
   
        <MapView ref={mapRef} style={StyleSheet.absoluteFill} initialRegion={initial_position} provider={PROVIDER_GOOGLE}  showsUserLocation={true} showsMyLocationButton={false}   >
           
           {markers.map((marker, index) => (
              <Marker key={index}
              
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude
              }}
              onPress={() => handleMarkerSelect(marker.id)}
              tracksViewChanges={selectedMarker === marker.id}
              >
            
              <CustomMarker focus={selectedMarker === marker.id} />
              
             </Marker>
           ))}
        </MapView>
        <DockerDetails ref={modal} />
    </View>
    </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default Home