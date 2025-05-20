import { ScrollView, View,Text,TouchableOpacity, TextInput, Pressable} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { router } from "expo-router"
import { BackIcon, UploadImageIcon } from "../../../../assets/icons/svgIcons"
import CustomButton from "../../../../components/CustomButton"
import { useState } from "react"



const BikeMalfunction = () => {

    const [selectedTabs, setSelectedTabs] = useState([])
    const [bikeId, setBikeId] = useState("")
    const [description, setDescription] = useState("")
    const tabs = ["Bike Failure", "Flat Tire", "Loose Chain", "Handlebar Misalignment", "Pedal Issue", "Strange Noise", "Seat Adjustment Problem", "Other"]

    const toggleTab = (tab) => {
        setSelectedTabs((previous) => 
            previous.includes(tab) ? previous.filter( item => item !== tab) : [...previous, tab]
        )
    }

    const handleDescriptionChange = (text) => {
        setDescription(text)
    }

    const handleBikeIdChange = (text) => {
        setBikeId(text)
    }

    const enablebutton =  bikeId === "" || description === "" || selectedTabs.length === 0

    return(
        <SafeAreaView>
            <ScrollView className="bg-neutral-10 h-full ">
                <View className="pb-[100]">
                 <View  className="flex-row">
                    <TouchableOpacity onPress={() => router.back()} className="w-16 h-16 items-center justify-center">
                        <BackIcon/>
                    </TouchableOpacity>
                    <View className="justify-center">
                    <Text className="text-[18px] leading-[3.3] font-pregular line-3">Bike Malfunction</Text>
                    </View>
                </View>

                <View className="p-[16px] gap-[32px]">

                    {/* section */}

                    <View className="gap-[8px]">
                        <Text className="font-pregular text-[14px]">Bike ID</Text>

                        <View>
                            <View className={`border-[1px] rounded-full`} style={{borderColor:'#A8B9CA'}}>
                            <TextInput 
                                     className={`h-[48px] flex-1  text-left text-[14px] px-[16px] font-pregular  items-start justify-end`}
                                     style={{color: '#5D6C87'}}
                                     placeholder= {'Unique number on bike'}
                                     placeholderTextColor={'#5D6C87'}
                                     value={bikeId}
                                     onChangeText={handleBikeIdChange}
                                     
                                    />
                                    </View>
                        </View>
                    </View>
                    

                    {/* section */}

                    <View className="gap-[8px]">
                        <Text className="font-pregular text-[14px]">Select all issues that apply</Text>

                        <View className="flex-row flex-wrap gap-[8px]">
                            {tabs.map((tab, index) => (
                                <TouchableOpacity key={index} className="px-[16px] py-[6px] text-[12px] font-pregular rounded-full" style={{borderWidth:1, borderColor: selectedTabs.includes(tab)? '#F2A900' : '#D3DFE7', backgroundColor: selectedTabs.includes(tab)? '#F2A900': null}} onPress={() => toggleTab(tab)}>
                                    <Text style={{color: !selectedTabs.includes(tab) ? '#5D6C87' : null}}>{tab}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    {/* section */}

                    <View className="gap-[8px]">
                        <Text className="font-pregular text-[14px]">Describe the issue</Text>

                        <View>
                            <View className={`border-[1px] rounded-[16px] `} style={{borderColor:'#A8B9CA'}}>
                            <TextInput 
                                    editable
                                    multiline
                                    textAlignVertical="top"
                                    numberOfLines={6}
                                     className={`text-left text-[14px] px-[16px] py-[12px] font-pregular `}
                                     style={{color: '#5D6C87'}}
                                     placeholder= {'Provide details about the issue you encountered'}
                                     placeholderTextColor={'#5D6C87'}
                                     defaultValue={description}
                                     onChangeText={handleDescriptionChange}
                                     
                                    />
                                    </View>
                        </View>
                    </View>

                    {/* section */}

                    <View className="gap-[8px]">
                        <Text className="font-pregular text-[14px]">Upload Image(Optional)</Text>

                        <View className="gap-[4px]">
                            <Pressable className={`border-[1px] rounded-[16px] px-[24px] py-[16px] gap-[8px] items-center`} style={{borderColor:'#A8B9CA', borderStyle:'dashed'}}>
                                <UploadImageIcon />
                                <Text className="font-pregular text-[14px] text-neutral-50">Add image of issue</Text>
                                    </Pressable>
                        </View>
                        <Text className="font-plight text-[12px] text-neutral-50">Max size: 10M</Text>
                    </View>

                    <CustomButton title={'Submit Report'} containerStyles={enablebutton? "bg-neutral-50" : "bg-primary-50"} textStyles={enablebutton? "color-neutral-70 font-pregular text-[14px]" : "color-secondary-950 font-pregular text-[14px]"} disabled={enablebutton} handlePress={() => !enablebutton && router.push("./successPage") } />

                </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default BikeMalfunction