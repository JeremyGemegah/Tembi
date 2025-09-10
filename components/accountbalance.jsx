import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Dwibble, PlusIcon } from '../assets/icons/svgIcons'


const AccountBalance = () => {
  return (
    <View>
        <View style={{width: '100%', overflow:'hidden'}} className='rounded-[16px]' >
            <LinearGradient 
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                colors={['#f2a900', '#614400']}
                style={styles.container}
                className=' rounded-[16px]  m-[20px]'
                
            >
                <View style={{overflow:'hidden', flex:1}} className='w-full h-full px-[20px] py-[24px] rounded-[16px]' >
                    <View style={{flex:1, justifyContent:'space-between', flexDirection:'row'}}>
                    <View style={{zIndex:100}}>
            <Text className='text-[14px] text-neutral-10 font-pregular tracking-tight'>My Balance</Text>
            <Text className='text-[28px] text-neutral-10 font-pregular'>¢0.00</Text>
            <View style={{flexDirection:'row', gap:8, alignItems:'center'}}>
                <Text className='text-neutral-90 font-plight text-[10px] tracking-tighter text-neutral-30'>05 July, 2025</Text>
                <Text className='text-neutral-90 font-plight text-[10px] tracking-tighter text-neutral-30'>|</Text>
                <Text className='text-neutral-90 font-plight text-[10px] tracking-tighter text-neutral-30'>04:39 PM</Text>
            </View>


                
                    </View>

            <View style={{alignSelf:'center', zIndex:200 }} className='bg-primary-10 rounded-full p-[8px]'>
                <PlusIcon/>
            </View>

                    </View>
            <View style={{display: 'flex', flexDirection: 'row', gap:'3px', position:'absolute', top:-60, left:50, zIndex:0 }} >
                
                <View style={{position:'absolute', margin:5}}><View style={{position:'absolute'}}><Dwibble /></View>
                <View style={{position:'absolute'}}><Dwibble /></View></View>
                
                <View style={{position:'absolute', margin:10}}><View style={{position:'absolute'}}><Dwibble /></View>
                <View style={{position:'absolute'}}><Dwibble /></View></View>
                
                <View style={{position:'absolute', margin:15}}><View style={{position:'absolute'}}><Dwibble /></View>
                <View style={{position:'absolute'}}><Dwibble /></View></View>
                
                <View style={{position:'absolute', margin:20}}><View style={{position:'absolute'}}><Dwibble /></View>
                <View style={{position:'absolute'}}><Dwibble /></View></View>
                
                <View style={{position:'absolute', margin:25}}><View style={{position:'absolute'}}><Dwibble /></View>
                <View style={{position:'absolute'}}><Dwibble /></View></View>
                
                <View style={{position:'absolute', margin:30}}><View style={{position:'absolute'}}><Dwibble /></View>
                <View style={{position:'absolute'}}><Dwibble /></View></View>
                
                <View style={{position:'absolute', margin:35}}><View style={{position:'absolute'}}><Dwibble /></View>
                <View style={{position:'absolute'}}><Dwibble /></View></View>
                
                <View style={{position:'absolute', margin:40}}><View style={{position:'absolute'}}><Dwibble /></View>
                <View style={{position:'absolute'}}><Dwibble /></View></View>
                
                <View style={{position:'absolute', margin:45}}><View style={{position:'absolute'}}><Dwibble /></View>
                <View style={{position:'absolute'}}><Dwibble /></View></View>
                
                <View style={{position:'absolute', margin:50}}><View style={{position:'absolute'}}><Dwibble /></View>
                <View style={{position:'absolute'}}><Dwibble /></View></View>
                
                <View style={{position:'absolute', margin:55}}><View style={{position:'absolute'}}><Dwibble /></View>
                <View style={{position:'absolute'}}><Dwibble /></View></View>
                
                <View style={{position:'absolute', margin:60}}><View style={{position:'absolute'}}><Dwibble /></View>
                <View style={{position:'absolute'}}><Dwibble /></View></View>
                
                <View style={{position:'absolute', margin:65}}><View style={{position:'absolute'}}><Dwibble /></View>
                <View style={{position:'absolute'}}><Dwibble /></View></View>
                
                <View style={{position:'absolute', margin:70}}><View style={{position:'absolute'}}><Dwibble /></View>
                <View style={{position:'absolute'}}><Dwibble /></View></View>
                
                <View style={{position:'absolute', margin:75}}><View style={{position:'absolute'}}><Dwibble /></View>
                <View style={{position:'absolute'}}><Dwibble /></View></View>
                
                <View style={{position:'absolute', margin:80}}><View style={{position:'absolute'}}><Dwibble /></View>
                <View style={{position:'absolute'}}><Dwibble /></View></View>
                
                <View style={{position:'absolute', margin:85}}><View style={{position:'absolute'}}><Dwibble /></View>
                <View style={{position:'absolute'}}><Dwibble /></View></View>
                
                <View style={{position:'absolute', margin:90}}><View style={{position:'absolute'}}><Dwibble /></View>
                <View style={{position:'absolute'}}><Dwibble /></View></View>
                
                <View style={{position:'absolute', margin:95}}><View style={{position:'absolute'}}><Dwibble /></View>
                <View style={{position:'absolute'}}><Dwibble /></View></View>
                
                <View style={{position:'absolute', margin:100}}><View style={{position:'absolute'}}><Dwibble /></View>
                <View style={{position:'absolute'}}><Dwibble /></View></View>
                
                <View style={{position:'absolute', margin:105}}><View style={{position:'absolute'}}><Dwibble /></View>
                <View style={{position:'absolute'}}><Dwibble /></View></View>

            </View>

                </View>
            </LinearGradient>
        </View>
    </View>
  )
}

export default AccountBalance

const styles = StyleSheet.create({
    container: {
      borderRadius: 16,
      overflow: 'hidden',
      flex: 1,
    }

})