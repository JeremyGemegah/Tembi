import { View,Text } from "react-native";
import { BillIcon, HornIcon, ReminderIcon, SuccessIcon } from "../assets/icons/svgIcons";

const parseHighlights = (text,color) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return (
        <Text className="font-pregular text-[14px]">
            {
            parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <Text key={index} style={{color: color }}>
            {part.slice(2, -2)}
          </Text>
        );
      }
      return <Text key={index}>{part}</Text>;
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

        <View className="p-[12px] rounded-[16px] border-neutral-30 border-[1px] flex-row gap-[12px]">
            <View >{icon}</View>
            <View>
        
                {type == 4? <Text className="font-pregular text-[14px]">{message}</Text> : parseHighlights(message, color)}
            
            <Text>
                {time}
            </Text>
            </View>
        </View>
    )
}

export default NotificationItem