import { Image, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { BackIcon, EditIcon } from "../../../assets/icons/svgIcons"
import { router } from "expo-router"
import TextField from "../../../components/TextField"
import { ScrollView } from "react-native"
import CustomButton from "../../../components/CustomButton"


const Profile = () => {
    return(
        <SafeAreaView>
            <ScrollView>
        <View className="mb-[100]">
            <View>
                <TouchableOpacity className="pl-[28px] mt-[24px] mb-[8px] w-[24px]" onPress={() => router.back()}>
                    <BackIcon/> 
                </TouchableOpacity>
            </View>

            <View>
                <View className="items-center ">
                <View>
                    <Image
                            source={require('../../../assets/images/profile.jpg')}
                            resizeMode='contain'
                            style={{width:96, height:96}}
                            className="rounded-full"
                          />
                          <TouchableOpacity className="bg-neutral-10 rounded-full p-[8px]" style={{position:'absolute', bottom:0, right:0 }}>
                            <EditIcon/>
                          </TouchableOpacity>
                          </View>

                          
                </View>


                <View className="mt-[32px]">
                    <View className="gap-[16px] px-[16px]">
                    <Text className="text-center text-[18px] font-pregular">Edit Profile</Text>

                  
                    
                        <TextField state={"success"} placeholder={"Jeremy Gemegah"} title={"Full Name"} type={"profile"} />

                        <TextField type={"email"} state={"success"} placeholder={"jeremygemegah@gmail.com"} title={"Email"}/>

                        <TextField type={"phone"} state={"success"} placeholder={"055 992 7730"} title={"Phone Number"} />

                    </View>
                    <View className="px-[16px] mt-[72px]">
                    <CustomButton title={"Save Changes"} containerStyles={'w-full mt-7 bg-primary-50'}/>
                    </View>
                </View>
            </View>
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

export default Profile