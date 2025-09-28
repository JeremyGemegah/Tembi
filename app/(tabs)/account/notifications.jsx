import { ScrollView, Text,View, TouchableOpacity,ActivityIndicator, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import NotificationItem from "../../../components/NotificationItem"
import { BackIcon } from "../../../assets/icons/svgIcons"
import { router } from "expo-router"
import { useContext, useEffect, useState } from "react"
import { apiCall } from "../../../components/functions/functions"
import { GlobalContext } from "../_layout"



/**
 * Formats a date string into a relative time string (e.g., "5 mins ago", "Yesterday", "12 Mar").
 * @param {string} dateString - The ISO date string to format.
 * @returns {string} The formatted relative time string.
 */
const formatRelativeTime = (dateString) => {
  if (!dateString) return '';
  const now = new Date();
  const date = new Date(dateString);
  const diffInSeconds = (now.getTime() - date.getTime()) / 1000;

  if (diffInSeconds < 60) {
    return 'Just now';
  }
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} min${diffInMinutes > 1 ? 's' : ''} ago`;
  }

  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  if (date >= todayStart) {
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 8) {
        return `${diffInHours} hr${diffInHours > 1 ? 's' : ''} ago`;
    }
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  }

  const yesterdayStart = new Date(new Date().setDate(todayStart.getDate() - 1));
  if (date >= yesterdayStart) {
    return 'Yesterday';
  }

  return date.toLocaleDateString([], { day: 'numeric', month: 'short' });
};

const Notifications = () => {
    const {apiToken} = useContext(GlobalContext)
    const [allNotifications, setAllNotifications] = useState([]);
    const [today, setToday] = useState([]);
    const [older, setOlder] = useState([]);
    const [loading, setLoading] = useState(true);


      useEffect(() => {
    if (!apiToken) return;

    const requestNotifications = async () => {
      setLoading(true);
      try {
        const response = await apiCall('rentals/notifications/', null, 'GET');
        setAllNotifications(response || []);
        console.log('Notifications data fetched successfully:', response);
      } catch (error) {
        console.error('Error fetching notifications data:', error);
      } finally {
        setLoading(false);
      }
    };

    requestNotifications();
  }, [apiToken]);

  useEffect(() => {
    if (!allNotifications || allNotifications.length === 0) {
        setToday([]);
        setOlder([]);
        return;
    }

    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const todayNotifications = [];
    const olderNotifications = [];

    allNotifications.forEach(notification => {
        // Assuming the timestamp is in a field named 'created_at'
        const notificationDate = new Date(notification.created_at);
        if (notificationDate >= todayStart) {
            todayNotifications.push(notification);
        } else {
            olderNotifications.push(notification);
        }
    });
    setToday(todayNotifications);
    setOlder(olderNotifications);
  }, [allNotifications]);
  
    return(
        <SafeAreaView>
        <ScrollView className="h-full bg-neutral-10 w-full" >
     
        <View  className="flex-row">
            <TouchableOpacity onPress={() => router.back()} className="w-16 h-16 items-center justify-center">
                <BackIcon/>
            </TouchableOpacity>
            <View className="justify-center">
            <Text className="text-[18px] leading-[3.3] font-pregular line-3">Notifications</Text>
            </View>
        </View>

        <View className="pb-[100] px-[16px] mt-[16px] gap-[24px]">
            {loading ? (
                <ActivityIndicator size="large" color="#FADD99" className="mt-8" />
            ) : allNotifications.length === 0 ? (
                 <View className="items-center justify-center" style={{flex:1}}>
                                              <View className='mt-[70px]'>
                                              <Image
                                                source={require('../../../assets/images/noNotifications.png')}
                                                resizeMode="contain"
                                                className="h-[248px] self-center"
                                              />
                                              <View className="items-center">
                                                <Text className="font-pmedium text-[18px]">No Notifications Yet</Text>
                                            <Text className="text-center text-neutral-70 text-[14px]">You’ll see updates about your rides and activity here.</Text>
                                                </View>
                                            </View>
                                            </View>
            ) : (
                <>
                    <View className="gap-[8px]">
                        <Text className="pl-[8px] font-pregular text-neutral-70">Today</Text>
                        {today.length > 0 ? today.map((item) => (
                            <NotificationItem type={item.type} key={item.id} message={item.message} time={formatRelativeTime(item.created_at)} />
                        )) : <Text className="pl-[8px] font-pregular text-neutral-70 text-[14px] text-center">No new notifications today</Text>}
                    </View>
                    
                    {older.length > 0 && (<View className="gap-[8px]">
                        <Text className="pl-[8px] font-pregular text-neutral-70">Older</Text>
                        {older.map((item) => (
                            <NotificationItem type={item.type} key={item.id} message={item.message} time={formatRelativeTime(item.created_at)} />
                        ))}
                    </View>)}
                </>
            )}
        </View>
        
        </ScrollView>
        </SafeAreaView>
    )
}

export default Notifications