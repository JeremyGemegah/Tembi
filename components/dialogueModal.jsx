import { View, Text, Modal, Animated } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from './CustomButton'
import { DeleteIcon } from '../assets/icons/svgIcons'
import { TextInput } from 'react-native'



const DialogueModal = ({visibility,onResponse,Title, titleStyles, content,affirmText,negativeText, affirmButtonContainerStyles, negativeButtonContainerStyles, negativeTextStyles,affirmTextStyles, Icon, buttonIcon, centered,setTextInput,textInput}) => {
    
    const handleTextChange = (text) =>{
        const numericValue = text.replace(/[^0-9]/g, '');
        setTextInput(numericValue)
    }
    
    

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
                    <View className='pb-[8px]' style={{display: setTextInput? 'flex': 'none'}}>
                        <View className={`border-[1px] rounded-[16px] px-[16px] py-[12px]`} style={{borderColor: '#00806E'}}>
                                <View className="flex-row h-[20px] w-full items-center gap-[12px]">
                                
                        
                                <TextInput 
                                 className={`h-16 flex-1  text-left text-[16px] py-0 font-pregular  items-end content-end`}
                                 style={{color: '#C18700'}}
                                 placeholder= {''}
                                 inputMode='numeric'
                                 placeholderTextColor={'#5D6C87'}
                                 onChangeText={handleTextChange}
                                 value={textInput}
                                />
                             
                               
                          
                        
                                </View>
                              </View>
                    </View>
                    <Animated.View className='flex-row w-full gap-[8px]' style={{display: affirmText && negativeText? 'flex' : 'none'}}>
                        <View style={{width:'auto', flexGrow: 2, flexShrink: 0, flex:1}} ><CustomButton title={negativeText} containerStyles={negativeButtonContainerStyles} textStyles={negativeTextStyles} handlePress={() => onResponse(false)} /></View>
                        <View style={{width:'auto', flexGrow: 2, flexShrink: 0, flex:1}} ><CustomButton title={affirmText} containerStyles={affirmButtonContainerStyles} Icon={buttonIcon && buttonIcon} textStyles={affirmTextStyles} handlePress={() => onResponse(true)} /></View>
                    </Animated.View>
                </View>
            </View>
        </SafeAreaView>
    </Modal>
  )
}

export default DialogueModal