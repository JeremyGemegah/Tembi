import { ScrollView, Text,View, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import NotificationItem from "../../../components/NotificationItem"
import { BackIcon } from "../../../assets/icons/svgIcons"
import { router } from "expo-router"


/* "payment"=1 "reminder"=2 "success"=3 "alert"=4 */
const messages= [
    {
        type:1,
        message: "**Payment of GH¢ 0.56** for trip to Parade Grounds Station was successful.",
        time: "56 mins ago"
    },
    {
        type:2,
        message: "You have reserved **Bike #13** at the Parade Grounds Station for 30 minutes.",
        time: "1 hr ago"
    },
    {
        type:1,
        message: "**Payment of GH¢ 0.86** for trip to KSB Station was successful.",
        time: "9:44 am"
    },
    {
        type:1,
        message: "**Payment of GH¢ 0.53** for trip to Engineering Station was successful.",
        time: "Yesterday"
    },
    {
        type:4,
        message: "New bike stations at Gaza!",
        time: "03 Mar"
    },
    {
        type:1,
        message: "**Payment of GH¢ 1.08** for trip to Brunei Station was successful.",
        time: "03 Mar"
    },
    {
        type:1,
        message: "**Payment of GH¢ 0.77** for trip to Pharmacy Building Station was successful.",
        time: "02 Mar"
    },
    {
        type:3,
        message: "Your **reported issue** with Bike #15 has been resolved.",
        time: "02 Mar"
    },
    {
        type:1,
        message: "**Payment of GH¢ 1.08** for trip to Brunei Station was successful.",
        time: "02 Mar"
    },
    {
        type:4,
        message: "All faulty bikes repaired and replaced.",
        time: "27 Feb"
    },
    {
        type:1,
        message: "**Payment of GH¢ 1.08** for trip to Brunei Station was successful.",
        time:"27 Feb"
    }
]

const today = messages.slice(0,3)
const older = messages.slice(3)



const Notifications = () => {
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
        <View className="gap-[8px]">
        <Text className="pl-[8px] font-pregular text-neutral-70">Today</Text>
        {today.length > 0 ? today.map((item,index) => (
            <NotificationItem type={item.type} key={index} message={item.message} time={item.time} />
        )) : <Text className="pl-[8px] font-pregular text-neutral-70 text-[14px] text-center">No notifications today</Text>}
        </View>
        
        {older.length > 0 && (<View className="gap-[8px]">
        <Text className="pl-[8px] font-pregular text-neutral-70">Older</Text>
        {older.map((item,index) => (
            <NotificationItem type={item.type} key={index} message={item.message} time={item.time} />
        ))}
        </View>)}
        </View>
        
        </ScrollView>
        </SafeAreaView>
    )
}

export default Notifications