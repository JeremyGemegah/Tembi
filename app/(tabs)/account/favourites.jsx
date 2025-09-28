import { Text, TouchableOpacity, View, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { BackIcon } from "../../../assets/icons/svgIcons"
import { router } from "expo-router"
import FavouriteListing from "../../../components/FavouriteListing"
import { ScrollView } from "react-native"

const data = [
/*     {
        location: "Parade Grounds Station",
        distance: 300,
        bikes: 7
    },
    {
        location: "Commercial Area Station",
        distance: 879,
        bikes: 1
    },{
        location: "Pharmacy Building Station",
        distance: 989,
        bikes: 3
    } */
]
const Favourites = () => {
    return(
        <SafeAreaView>
        <ScrollView className="bg-neutral-10 h-full">
            <View  className="flex-row">
                <TouchableOpacity onPress={() => router.back()} className="w-16 h-16 items-center justify-center">
                    <BackIcon/>
                </TouchableOpacity>
                <View className="justify-center">
                <Text className="text-[18px] leading-[3.3] font-pregular line-3">Favourites</Text>
                </View>
            </View>
            

            <View className="px-[16px] gap-[16px] pt-[24px]">
            {data.length > 0 ? data.map((dock,index) => (
                    <FavouriteListing title={dock.location} distance={dock.distance} bikes={dock.bikes} key={index} />
                )) : <View className="items-center justify-center" style={{flex:1}}>
                              <View className='mt-[70px]'>
                              <Image
                                source={require('../../../assets/images/noFavourites.png')}
                                resizeMode="contain"
                                className="h-[248px] self-center"
                              />
                              <View className="items-center">
                                <Text className="font-pmedium text-[18px]">Nothing Saved</Text>
                            <Text className="text-center text-neutral-70 text-[14px]">Keep your best spots close! Favourite a bike or station to see it here.</Text>
                                </View>
                            </View>
                            </View>
                }              
            </View>
        </ScrollView>
        </SafeAreaView>
    )
}

export default Favourites