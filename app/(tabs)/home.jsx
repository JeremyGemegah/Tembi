import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React,{useRef, useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MapView, { PROVIDER_GOOGLE ,Marker} from 'react-native-maps'
import * as Location from 'expo-location'
import { customEventEmitter } from '../../components/eventEmitters/eventEmitter'
import CustomMarker from '../../components/customMarker'
import DockerDetails from '../../components/dockerDetailsModal'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import ReserveBike from '../../components/reserveBike'
import UnlockSuccessModal from '../../components/unlockSuccessModal'
import { Dimensions } from 'react-native'
import axios from 'axios'





const Home = () => {
 
  const [markers, setMarkers] = useState()
  const initial_position ={"latitude": 6.673174393359494, "latitudeDelta": 0.04, "longitude": -1.5720686875283718, "longitudeDelta": 0.02, "zoom": 10}
    
    const [currentLocation, setCurrentLocation] = useState(null);
    const [initialRegion, setInitialRegion] = useState(null);
    const [selectedMarker, setSelectedMarker] = useState(null)
    const [getDirectionsActive, setGetDirectionsActive] = useState(false)
    const [reservationActive, setReservationActive] = useState(false)
    const [dockerDetailsActive, setDockerDetailsActive] = useState(false) // helps to track if the dockerdetails bottomsheet is being show
    const [reservationModalActive, setReservationModalActive] = useState(false) // helps to track if the reservation bottomsheet is being shown
    const [rideActive, setRideActive] = useState(false) // tracks whether a ride is in progress
    const [unlockModal, setUnlockModal] = useState(false) // tracks whether the modal for docker code acception is opened
    const modal = useRef()
    const ReserveBikeModal = useRef()
  


    const handleMarkerSelect = (markerId) => {
      //this should be a toggle effect rather **************************************************************
      customEventEmitter.emit('modalOpened',{isOpen: true})
      if(reservationActive){
        ReserveBikeModal?.current.scrollTo()
      }else{

        modal.current.scrollTo(500)
      }
        setSelectedMarker(markerId)
    }   
    
    const getDirections = () => {
      setGetDirectionsActive(true)
      ReserveBikeModal?.current.scrollDown()
      modal?.current.scrollPartial()
    }

    const openReserveBike = () => {
      modal?.current.scrollDown()
      ReserveBikeModal?.current.scrollTo()
    }

    const onArrive = () => {
      //change variables
      setGetDirectionsActive(false)
      
      //open right modal
      if(reservationActive){
        ReserveBikeModal?.current.scrollTo()
        modal?.current.scrollDown()
      }else{
        modal?.current.scrollTo()
        ReserveBikeModal?.current.scrollDown()
      }
    }

    const checkForReservationModalDisplayed = () => {
        customEventEmitter.emit('modalOpened',{isOpen: dockerDetailsActive})
     
    }

    const checkForDockerModalDisplayed = () => {
        customEventEmitter.emit('modalOpened',{isOpen: reservationModalActive})
     
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
    
    const scanCode = customEventEmitter.addListener('DockerCodeAccepted',() => {
      setUnlockModal(true)
      setRideActive(true)
      modal.current.startTimer()
    })

    return () => {
      listener.remove()
    scanCode.remove()
  }
  },[])

  

  useEffect(() => {

  const getStationsData = async () => {
      try {
        console.log('request started')
       await fetch('https://tembi.onrender.com/api/bikes/stations/', {
  method: 'GET',
  headers: {
    'Accept': '*/*',
    'Accept-Encoding': 'deflate, gzip', // Note: This is usually handled automatically by the browser
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0',
    'Authorization': 'Token b1f0a54255e502e81f535c67585d007ab0963d7e'
  }
})
       .then(res => res.text())
       .then(text => JSON.parse(text))
       .then(data => {setMarkers(data); console.log(data)})
      .catch(err => console.log(err)
      )
      
      
    } catch(error) {
      console.log(error)
    } finally {
      console.log('request ended')
    }
  } 

    getStationsData()
  },[])

const mapRef = useRef()
  return (
      <GestureHandlerRootView >
    <SafeAreaView>
    <View className=" w-full h-full "  >
   
        <MapView ref={mapRef} style={StyleSheet.absoluteFill} initialRegion={initial_position} provider={PROVIDER_GOOGLE}  showsUserLocation={true} showsMyLocationButton={false}   >
           
           {markers?.map((marker, index) => (
              <Marker key={index}
              
              coordinate={{
                latitude: marker.location_point?.latitude,
                longitude: marker.location_point?.longitude
              }}
              onPress={() => handleMarkerSelect(marker.id)}
              tracksViewChanges={selectedMarker === marker.id}
              >
            
              <CustomMarker focus={selectedMarker === marker.id} />
              
             </Marker>
           ))}
        </MapView>
        <DockerDetails ref={modal} docker={selectedMarker && markers?.find(marker => marker.id === selectedMarker)} setRideActive={setRideActive} modalRegister={checkForDockerModalDisplayed} setDockerDetailsActive={setDockerDetailsActive} reservebike={openReserveBike} getDirections={getDirections} directionsActive={getDirectionsActive} onArrive={onArrive} rideActive={rideActive}  />
        <ReserveBike ref={ReserveBikeModal} modalRegister={checkForReservationModalDisplayed} setReservationModalActive={setReservationModalActive} getDirections={getDirections} reservationActive={reservationActive} setReservationActive={setReservationActive} />
        <UnlockSuccessModal visibility={unlockModal} onClose={() => {setUnlockModal(false); modal.current.scrollTo(500); customEventEmitter.emit('modalOpened',{isOpen: true})}} />
    </View>
    </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default Home


