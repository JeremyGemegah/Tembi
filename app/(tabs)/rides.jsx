import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import RideItem from '../../components/Rideitem'
import RideDetails from '../../components/Ridedetails'
import { apiCall } from '../../components/functions/functions'
import { GlobalContext } from './_layout'

// Helper component to render each section of rides
const RideSection = ({ title, rides, openModal }) => {
  if (!rides || rides.length === 0) {
    return null;
  }

  return (
    <View className="gap-[8px] mb-4">
      <View className='px-[8px]'>
        <Text className='font-pregular text-[14px] text-neutral-70'>{title}</Text>
      </View>
      {rides.map((item) => {
        const rideDate = new Date(item.start_time);
        const formattedDate = rideDate.toLocaleDateString([], { day: 'numeric', month: 'short' });
        const formattedTime = rideDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

        return (
          <RideItem
            key={item.id}
            place={
              item.start_docker? item.start_docker.split(' | ').pop().trim()
                : 'Unknown Station'
            }
            time={formattedTime}
            date={formattedDate}
            price={item.cost ? parseFloat(item.cost).toFixed(2) : '0.00'}
            onPress={() => openModal(item)}
          />
        );
      })}
    </View>
  );
};

const Rides = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRide, setSelectedRide] = useState(null);
  const [allRides, setAllRides] = useState([]);
  const [categorizedRides, setCategorizedRides] = useState({});
  const [loading, setLoading] = useState(true);
  const { apiToken } = useContext(GlobalContext);

  const onClose = () => {
    setModalVisible(false)
  }

  const openModal = (ride) => {
    setSelectedRide(ride)
    setModalVisible(true)
  }

  // Fetch ride history from the API
  useEffect(() => {
    if (!apiToken) return;

    const requestRidesData = async () => {
      setLoading(true);
      try {
        const response = await apiCall('rentals/', null, 'GET');
        // Assuming the API returns rides sorted by date descending
        setAllRides(response || []);
        console.log('Rides data fetched successfully:', response);
      } catch (error) {
        console.error('Error fetching rides data:', error);
      } finally {
        setLoading(false);
      }
    };

    requestRidesData();
  }, [apiToken]);
  
  // Categorize rides whenever the fetched data changes
  useEffect(() => {
    if (!allRides || allRides.length === 0) {
      setCategorizedRides({});
      return;
    }

    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterdayStart = new Date(new Date().setDate(todayStart.getDate() - 1));
    const sevenDaysAgoStart = new Date(new Date().setDate(todayStart.getDate() - 7));

    const categories = {
      today: [],
      yesterday: [],
      last7Days: [],
      older: [],
    };

    allRides.forEach(ride => {
      const rideDate = new Date(ride.start_time);
      
      if (rideDate >= todayStart) {
        categories.today.push(ride);
      } else if (rideDate >= yesterdayStart) {
        categories.yesterday.push(ride);
      } else if (rideDate >= sevenDaysAgoStart) {
        categories.last7Days.push(ride);
      } else {
        categories.older.push(ride);
      }
    });

    setCategorizedRides(categories);
  }, [allRides]);

  return (
    <SafeAreaView>
      <ScrollView className="bg-neutral-10 h-full">
        <View style={{flex:1}} className='px-[16px] pb-[100]' >
          <View className='pb-[8px] mb-[21px]'><Text className='font-pregular text-[18px] text-secondary-950 pt-[21px] '>Rides</Text></View>
          
          {loading ? (
            <ActivityIndicator size="large" color="#FADD99" className="mt-8" />
          ) : allRides.length === 0 ? (
            <Text className="text-center text-neutral-500 mt-8">You have no past rides.</Text>
          ) : (
            <View>
              <RideSection title="Today" rides={categorizedRides.today} openModal={openModal} />
              <RideSection title="Yesterday" rides={categorizedRides.yesterday} openModal={openModal} />
              <RideSection title="Last 7 Days" rides={categorizedRides.last7Days} openModal={openModal} />
              <RideSection title="Older" rides={categorizedRides.older} openModal={openModal} />
            </View>
          )}
        </View>
        {selectedRide && (
          <RideDetails visibility={modalVisible} onClose={onClose} ride={selectedRide} />
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Rides