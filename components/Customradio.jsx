import { useState } from "react"
import { Pressable, View } from "react-native"


const CustomRadio = ({isActive, setIsActive}) => {
    

    const toggleActive = () => {
        setIsActive(previous => !previous)
    }

    return(
        <Pressable onPress={toggleActive} className={`w-[24px] h-[24px] p-[4px] rounded-full border-[1px] ${isActive? 'border-secondary-800' : 'border-neutral-50'} items-center content-center justify-center`} >
            <View className={`w-[16px] h-[16px] ${isActive? 'bg-secondary-800' : 'bg-transparent'} rounded-full`}></View>
        </Pressable>
    )
}

export default CustomRadio