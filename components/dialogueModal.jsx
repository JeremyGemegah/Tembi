import { View, Text, Modal, Animated } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from './CustomButton'
import { DeleteIcon } from '../assets/icons/svgIcons'

const DialogueModal = ({visibility,onResponse,Title, titleStyles, content,userInput,affirmText,negativeText, affirmButtonContainerStyles, negativeButtonContainerStyles, negativeTextStyles,affirmTextStyles, Icon, buttonIcon, centered}) => {
  return (
    <Modal visible={visibility} transparent={true}>
        <SafeAreaView style={{flex: 1, backgroundColor:'#1D212DCC' }} >
            <View style={{flex:1}} className='w-full h-full px-[18px] justify-center'>
                <View className='gap-[16px] bg-neutral-10 rounded-[12px] px-[16px] py-[20px]' style={{opacity:1}}>
                    <View>
                        <View className='items-center mb-[8px]'>{Icon && <Icon />}</View>
                    <Text className={`${titleStyles}`}  style={{textAlign: centered? 'center' : 'left'}}>{Title}</Text>
                    <Text className='text-neutral-70 font-pregular text-[14px]' style={{textAlign: centered? 'center' : 'left'}}>{content}</Text>
                    </View>
                    <Animated.View className='flex-row w-full gap-[8px]' style={{display: affirmText && negativeText? 'flex' : 'none'}}>
                        <View style={{width:'auto', flexGrow: 2, flexShrink: 0}} ><CustomButton title={negativeText} containerStyles={negativeButtonContainerStyles} textStyles={negativeTextStyles} handlePress={() => onResponse(false)} /></View>
                        <View style={{width:'auto', flexGrow: 1, flexShrink: 1}} ><CustomButton title={affirmText} containerStyles={affirmButtonContainerStyles} Icon={buttonIcon && buttonIcon} textStyles={affirmTextStyles} handlePress={() => onResponse(true)} /></View>
                    </Animated.View>
                </View>
            </View>
        </SafeAreaView>
    </Modal>
  )
}

export default DialogueModal