import { View, Text,Modal } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const LoaderModal = ({visibility,Title, content,Icon,titleStyles}) => {
  return (
    <Modal visible={visibility} transparent={true}>
        <SafeAreaView style={{flex: 1, backgroundColor:'#1D212DCC' }} >
            <View style={{flex:1}} className='w-full h-full px-[18px] justify-center'>
                <View className='gap-[16px] bg-neutral-10 rounded-[12px] px-[16px] py-[20px]' style={{opacity:1}}>
                    <View>
                    <Text className={`${titleStyles}`}  style={{textAlign: 'center' }}>{Title}</Text>
                    <Text className='text-neutral-70 font-pregular text-[14px]' style={{textAlign:'center'}}>{content}</Text>
                    </View>
                   
                        <View className='items-center mb-[8px]'>{Icon && <Icon />}</View>
                </View>
            </View>
        </SafeAreaView>
    </Modal>
  )
}

export default LoaderModal