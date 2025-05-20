import { ScrollView,View,TouchableOpacity,Text,Pressable } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { BackIcon, ArrowRight } from "../../../../assets/icons/svgIcons"
import { router,Link } from "expo-router"


const ReportIssue = () => {
    return(
        <SafeAreaView>
            <ScrollView className="bg-neutral-10 h-full">
            <View  className="flex-row">
                <TouchableOpacity onPress={() => router.back()} className="w-16 h-16 items-center justify-center">
                    <BackIcon/>
                </TouchableOpacity>
                <View className="justify-center">
                <Text className="text-[18px] leading-[3.3] font-pregular line-3">Report an issue</Text>
                </View>
            </View>
            

            <View className="px-[16px] gap-[32px] pt-[8px]">
                <Text className="font-pregular text-[14px] text-neutral-70">Help us improve your experience by reporting any issues you face while using Tembi. </Text>

                <View className="gap-[16px]">

                    
                     <Link href="/account/report/bikeMalfunction" push asChild><Pressable className="flex-row items-center w-full py-[12px] px-[16px] border-[1px] border-neutral-30 rounded-[12px]">
                        <View>
                            <Text className="font-pregular text-[14px] ">Bike Malfunction</Text>
                            <Text className="font-plight text-[12px] color-neutral-70">e.g., flat tire, chain issue, etc.</Text>
                        </View>
                        <View style={{ marginLeft:'auto'}}><ArrowRight color={'#5D6C87'}/></View></Pressable></Link>


                     <Link href="###" push asChild><Pressable className="flex-row items-center w-full py-[12px] px-[16px] border-[1px] border-neutral-30 rounded-[12px]">
                        <View>
                            <Text className="font-pregular text-[14px] ">Safety Concern</Text>
                            <Text className="font-plight text-[12px] color-neutral-70">e.g., dangerous route, missing bike lane, etc.</Text>
                        </View>
                        <View style={{ marginLeft:'auto'}}><ArrowRight color={'#5D6C87'}/></View></Pressable></Link>


                     <Link href="###" push asChild><Pressable className="flex-row items-center w-full py-[12px] px-[16px] border-[1px] border-neutral-30 rounded-[12px]">
                        <View>
                            <Text className="font-pregular text-[14px] ">Locking Issue</Text>
                            <Text className="font-plight text-[12px] color-neutral-70">e.g., unable to lock/unlock bike, etc.</Text>
                        </View>
                        <View style={{ marginLeft:'auto'}}><ArrowRight color={'#5D6C87'}/></View></Pressable></Link>


                     <Link href="###" push asChild><Pressable className="flex-row items-center w-full py-[12px] px-[16px] border-[1px] border-neutral-30 rounded-[12px]">
                        <View>
                            <Text className="font-pregular text-[14px] ">Other Issue</Text>
                            <Text className="font-plight text-[12px] color-neutral-70">Different issue not listed.</Text>
                        </View>
                        <View style={{ marginLeft:'auto'}}><ArrowRight color={'#5D6C87'}/></View></Pressable></Link>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ReportIssue