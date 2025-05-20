import { View,Text } from "react-native";
import { BillIcon, HornIcon, ReminderIcon, SuccessIcon } from "../assets/icons/svgIcons";

const parseHighlights = (text,color) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return (
        <Text className="font-pregular text-[14px] text-wrap" style={{flexWrap:'wrap', flexShrink: 1}}>
            {
            parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <Text key={index} style={{color: color }}>
            {part.slice(2, -2)}
          </Text>
        );
      }
      return <Text key={index} className="text-wrap" style={{flexWrap:'wrap', flexShrink: 1}}>{part}</Text>;
    })
    }</Text>)
  };

const NotificationItem = ({type,message,time}) => {
    let icon
    let color
    switch (type) {
        case 1:
            icon = <BillIcon/>
            color = '#449C0A'
            break;
        case 2:
            icon = <ReminderIcon />
            color = '#CE7100'
            break;
        case 3:
            icon = <SuccessIcon />
            color = '#449C0A'
            break;
    
        default:
            icon = <HornIcon />
            
            break;
    }
    return(

        <View className="box-content p-[12px] rounded-[16px] border-neutral-30 border-[1px]  gap-[12px]" style={{flexDirection:'row', backgroundColor: type == 4? '#002520' : null}} >
            <View className="p-[12px] rounded-[12px] border-neutral-30 border-[1px] self-start bg-[#F5F8FA]" >{icon}</View>
            <View>
            
                {type == 4? <Text className="font-pregular text-[14px] text-neutral-10">{message}</Text> : <Text className="text-balance"  >{parseHighlights(message, color)}</Text>}
            
            <Text style={{color: type == 4? '#A8B9CA': '#5D6C87'}}>
                {time}
            </Text>
            </View>
        </View>
    )
}

export default NotificationItem