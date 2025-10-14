import { View, Text, StyleSheet, TouchableOpacity, Alert, Pressable } from 'react-native'
import React,{useRef, useState, useEffect, useContext} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MapView,{PROVIDER_GOOGLE ,Marker} from 'react-native-maps'
/* import {MapView,PROVIDER_GOOGLE ,Marker, NavigationView} from '@googlemaps/react-native-navigation-sdk' */
import * as Location from 'expo-location'
import { customEventEmitter } from '../../components/eventEmitters/eventEmitter'
import CustomMarker from '../../components/customMarker'
import DockerDetails from '../../components/dockerDetailsModal'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import ReserveBike from '../../components/reserveBike'
import UnlockSuccessModal from '../../components/unlockSuccessModal'
import { Dimensions } from 'react-native'
import axios from 'axios'
import { router } from 'expo-router'
import { GlobalContext } from './_layout';
import { getSocket } from '../../components/functions/socket';
import Animated,{withTiming, SharedTransition,SharedTransitionType} from 'react-native-reanimated'
import { Link } from 'expo-router'
import { SearchIcon } from '../../assets/icons/svgIcons'
import { apiCall } from '../../components/functions/functions'






const Home = () => {
 const {apiToken} = useContext(GlobalContext)
  const [markers, setMarkers] = useState()
  const initial_position ={"latitude": 6.673174393359494, "latitudeDelta": 0.04, "longitude": -1.5720686875283718, "longitudeDelta": 0.02, "zoom": 10}

    const ws = useRef(null)
    const [currentLocation, setCurrentLocation] = useState(null);
    const [initialRegion, setInitialRegion] = useState(null);
    const [reservedBike, setReservedBike] = useState()
    const [fetchingDockers, setFetchingDockers] = useState(false);
    const [selectedMarker, setSelectedMarker] = useState(null)
    const [getDirectionsActive, setGetDirectionsActive] = useState(false)
    const [reservationActive, setReservationActive] = useState(false)
    const [dockerDetailsActive, setDockerDetailsActive] = useState(false) // helps to track if the dockerdetails bottomsheet is being show
    const [reservationModalActive, setReservationModalActive] = useState(false) // helps to track if the reservation bottomsheet is being shown
    const [rideActive, setRideActive] = useState(false) // tracks whether a ride is in progress
    const [unlockModal, setUnlockModal] = useState(false) // tracks whether the modal for docker code acception is opened
    const modal = useRef()
    const ReserveBikeModal = useRef()
    const reconnectAttempt = useRef(0);
    
   

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
      // ReserveBikeModal?.current.scrollDown()
      modal?.current.scrollPartial()
    }

    const openReserveBike = async () => {
      //get bike details to reserve
      if (!apiToken || !selectedMarker) {
        console.error("Cannot reserve bike: missing token or selected marker.");
        return;
      }
      // NOTE: The endpoint `/api/bikes/bikes/{id}` seems to expect a bike ID, 
      // but you are passing a station ID (`selectedMarker`). You may need to adjust your logic 
      // to get an available bike ID from the selected station first.
      const bikeIdToReserve = selectedMarker; // This is likely incorrect, it should be a bike ID.

      try {
        /* const response = await fetch(`https://tembi.onrender.com/api/bikes/bikes/${bikeIdToReserve}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Token ${apiToken}`
          }
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to reserve bike: ${response.status} ${errorText}`);
        }

        const data = await response.json(); */

        const data = apiCall(`bikes/bikes/${bikeIdToReserve}`, null, 'GET');
        setReservedBike(data);
        

        modal?.current.scrollDown()
        ReserveBikeModal?.current.scrollTo()
      } catch (error) {
        console.log(error)
      }
    }

    const onArrive = () => {
      setGetDirectionsActive(false)
      
      // The call to `scrollTo()` without a value was an error.
      if(reservationActive){
        ReserveBikeModal?.current.scrollTo()
        modal?.current.scrollDown()
      }else{
        // Show the docker details again on arrival.
        modal?.current.scrollTo(500) // Or use a dynamic height
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
    // When a ride is no longer active, close the WebSocket connection.
    if (!rideActive && ws.current) {
      console.log('Ride ended, closing WebSocket connection.');
      ws.current.close();
      ws.current = null;
    }
  }, [rideActive]);


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
    
    const scanCode = customEventEmitter.addListener('DockerCodeAccepted', (callback, rentalData) => {
      // The callback is the function passed from ScanCode.jsx
      try {
        setUnlockModal(true)
        setRideActive(true)
        modal.current.startTimer()

        const connectWebSocket = (cb) => {
          if (ws.current) {
            ws.current.close();
          }
  
          if (!apiToken) {
            const authError = new Error("Could not connect to real-time service. Please log in again.");
            if (cb) cb(authError);
            return;
          }
  
          console.log('Attempting to establish WebSocket connection...');
          ws.current = new WebSocket(`wss://tembi.onrender.com/ws/notifications/?token=${apiToken}`);
          
          ws.current.onopen = () => {
            console.log('Native WebSocket connection established.');
            reconnectAttempt.current = 0; // Reset on successful connection
            // Use the callback to signal success to the ScanCode component
            if (cb) cb(null);
          };
          
          ws.current.onmessage = e => {
            const data = JSON.parse(e.data);
            if(data?.data?.status === 'completed'){
              console.log('Ride completed message received:', e.data);
              setRideActive(false);
              setUnlockModal(false);
              modal.current.endAndPayRide(data?.data?.message);
            }
          };
          
          ws.current.onerror = e => {
            console.log('WebSocket error:', e.message);
            // The onclose event will be fired next, which will handle reconnection.
            const wsError = new Error('Real-time connection failed. Please try again.');
            if (cb) cb(wsError);
          };
          
          ws.current.onclose = e => {
            console.log('WebSocket closed:', e.code, e.reason);
            ws.current = null; // Nullify the ref on close
            if (rideActive) { // Only reconnect if the ride is supposed to be active
              reconnectAttempt.current += 1;
              const delay = Math.min(30000, (2 ** reconnectAttempt.current) * 1000); // Exponential backoff
              console.log(`WebSocket disconnected. Attempting to reconnect in ${delay / 1000}s...`);
              setTimeout(() => {
                if (rideActive) { // Double-check if ride is still active before reconnecting
                  connectWebSocket(); // Reconnect without the initial callback
                }
              }, delay);
            }
          };
        }

        // Initial connection
        connectWebSocket(callback);
      } catch (error) {
        // Catch any other synchronous errors and report them
        if (callback) callback(error);
      }
    })

    return () => {
      listener.remove()
      scanCode.remove()
      if (ws.current) {
        ws.current.close();
      }
  }
  },[apiToken])

  

  useEffect(() => {

    const getStationsData = async () => {
      if (!apiToken) {
        return; // Don't fetch if token is not available yet
      }
      try {
        setFetchingDockers(true);
        const data = await apiCall('bikes/stations', null, 'GET');
        setMarkers(data);

      } catch (error) {
        console.error('Error fetching stations:', error);
        if (error.status === 401 || error.status === 403) {
          router.replace('/sign-in');
        }
      } finally {
        setFetchingDockers(false);
      }
    }

    getStationsData();
  }, [apiToken]); // Re-run this effect when apiToken changes

const mapRef = useRef()
  return (
      <GestureHandlerRootView >
    <SafeAreaView>
    <View className=" w-full h-full "  >
      <View style={{position:'absolute', top:100, zIndex:3000, justifyContent:'center', alignItems:'center', width:'100%', display: fetchingDockers? 'flex':'none'}}><View style={{flex:1, paddingVertical:6, paddingHorizontal:12}} className='bg-primary-30 border-[1px] border-primary-70' ><Text className='text-primary-90'>Loading...</Text></View></View>
 
                      <Link href={'/search'} asChild>
                      <Pressable style={{top:100, zIndex:3000,flexDirection:'row', alignItems:'center'}}>
                      <Animated.View sharedTransitionTag='searchTag'  className="p-[12px] rounded-full bg-neutral-10" style={{ shadowOffset: { width: 0, height: 2 }, shadowColor: 'rgba(0, 0, 0, 0.5)', shadowOpacity: 1,shadowRadius: 64, elevation: 20,left:16, right:200}} >  
                                          <SearchIcon />
                                      </Animated.View>
                      </Pressable>
                      </Link>
                  
   
        <MapView  ref={mapRef}  style={StyleSheet.absoluteFill}  initialRegion={initial_position} provider={PROVIDER_GOOGLE}  showsUserLocation={true} showsMyLocationButton={false}    >
           
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
        <DockerDetails ref={modal}  docker={selectedMarker && markers?.find(marker => marker.id === selectedMarker)} setRideActive={setRideActive} modalRegister={checkForDockerModalDisplayed} setDockerDetailsActive={setDockerDetailsActive} reservebike={openReserveBike} getDirections={getDirections} directionsActive={getDirectionsActive} onArrive={onArrive} rideActive={rideActive}  />
        <ReserveBike ref={ReserveBikeModal} docker={selectedMarker && markers?.find(marker => marker.id === selectedMarker)} modalRegister={checkForReservationModalDisplayed} setReservationModalActive={setReservationModalActive} getDirections={getDirections} reservationActive={reservationActive} setReservationActive={setReservationActive} reservedBike={reservedBike} />
        <UnlockSuccessModal visibility={unlockModal} onClose={() => {setUnlockModal(false); modal.current.scrollTo(500); customEventEmitter.emit('modalOpened',{isOpen: true})}} />
    </View>
    </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default Home
