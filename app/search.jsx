import { View, Text, ScrollView, TouchableOpacity,Pressable} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BlurView } from 'expo-blur'
import { SearchIcon } from '../assets/icons/svgIcons'
import Animated from 'react-native-reanimated'


const Search = () => {
  return (
    <BlurView intensity={100} tint='light' style={{flex:1}}>
    <SafeAreaView>
        <ScrollView>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:16}}>
                <Text>Search</Text>
               <Pressable style={{flexDirection:'row', alignItems:'center'}}>
                                     <Animated.View sharedTransitionTag='searchTag'  className="p-[12px] rounded-full bg-neutral-10" style={{ shadowOffset: { width: 500, height: 2 }, shadowColor: 'rgba(0, 0, 0, 0.5)', shadowOpacity: 1,shadowRadius: 64, elevation: 20,left:16, right:200}} >  
                                                         <SearchIcon />
                                                     </Animated.View>
                                     </Pressable>
            </View>
        </ScrollView>
    </SafeAreaView>
    </BlurView>
  )
}

export default Search