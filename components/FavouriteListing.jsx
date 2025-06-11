import { View,Text } from "react-native"
import { HeartIcon, LocHistoryIcon } from "../assets/icons/svgIcons"

const FavouriteListing = ({title,distance,bikes}) => {
    return(
        <View className="p-[8px]">
            <View className="flex-row ">
                <View className="p-[8px] border-[1px] self-start rounded-[12px] border-primary-20 bg-primary-10 ">
                <LocHistoryIcon />
                </View>
                <View className="flex-1 pl-[12px]">
                    <View>
                        <Text className="text-[14px] font-pregular">{title}</Text>
                    </View>
                    <View className="flex-row">
                        <Text className="text-[12px] text-neutral-70 font-plight">{distance}m away </Text>
                        <Text className="text-neutral-70">• </Text>
                        <Text className="font-plight text-[12px] " style={{ color: bikes > 6? "#449C0A" : ( bikes > 2? "#CE7100" : "#DD214F" ) }} >{bikes} Bike{bikes > 1? "s" : null} Available</Text>
                    </View>
                </View>
                <View className="self-center p-[8px] bg-[#A8B9CA66] rounded-full">
                    <HeartIcon color={"#DD214F"} secondary={"#DD214F"}/>
                </View>
            </View>
        </View>
    )
}

export default FavouriteListing