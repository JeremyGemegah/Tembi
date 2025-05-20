import { SafeAreaView } from "react-native-safe-area-context"
import { View,Text, Image, ScrollView } from "react-native"
import CustomButton from "../../../../components/CustomButton"
import { router } from "expo-router"



const SuccessPage = () => {
    return(
        <SafeAreaView>
           
                <View className="h-full w-full justify-center pb-[100px]">
            <View className="px-[16px] gap-[28px] ">
                <View className="items-center">
                    <Text className=" font-pmedium text-[24px] text-[#235C04]">Issue Submitted!</Text>
                    <Text className="text-[14px] font-pregular text-neutral-70 text-center">Thank you for taking the time to report the issue.</Text>
                </View>

                <View>
                <Image
                    source={require("../../../../assets/images/SuccessIllustration.jpg")}
                    resizeMode="contain"
                    className="h-[248px] self-center"
                />
              </View>

              <View>
                <Text className="font-pregular text-[14px] text-neutral-70 text-center">We will look into this issue as soon as possible.</Text>
              </View>
              <View>
                <CustomButton title={'Return Home'} containerStyles={"bg-primary-50"} textStyles={"color-secondary-950 font-pregular text-[14px]"} handlePress={() => router.navigate('/home') } />
              </View>
            </View>
            </View>
           
        </SafeAreaView>
    )
}

export default SuccessPage