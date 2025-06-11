import { View,Text, TouchableOpacity } from "react-native";
import { BillIcon, RidesIcon } from "../assets/icons/svgIcons";




const RideItem = ({place,price,date,time, onPress}) => {
 
    return(

        <TouchableOpacity className="box-content p-[12px] rounded-[16px]   gap-[12px]" style={{flexDirection:'row'}} onPress={onPress}>
            <View className="p-[12px] rounded-[12px] border-neutral-30 border-[1px] self-center bg-[#F5F8FA]" ><RidesIcon color={'#00806E'} /></View>
            <View style={{flex: 1}}>
            
            <Text className="text-neutral-70 text-[10px] font-pregular font-light ">{date} • {time}</Text>
                 <Text className="text-balance text-secondary-950 font-pregular text-[16px]"  >{place}</Text>
            <View className="flex-row gap-[6px]">
                <BillIcon color={'#C18700'} />
            <Text style={{color: '#C18700'}} className="text-[14px] font-pregular">
                GH₵{price}
            </Text>
            </View>
            </View>
        </TouchableOpacity>
    )
}

export default RideItem