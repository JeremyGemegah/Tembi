import { ScrollView, Text,View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import NotificationItem from "../../../components/NotificationItem"


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
        <ScrollView className="h-full bg-neutral-10" >
        <Text>Notifications</Text>
        <View className="pb-[100] px-[16px] gap-[8px]">
        {messages.map((item,index) => (
            <NotificationItem type={item.type} key={index} message={item.message} time={item.time} />
        ))}
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

export default Notifications