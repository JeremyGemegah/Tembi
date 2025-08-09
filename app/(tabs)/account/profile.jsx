import { Image, Text, TouchableOpacity, View, ActivityIndicator, Alert } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { BackIcon, EditIcon } from "../../../assets/icons/svgIcons"
import { router } from "expo-router"
import TextField from "../../../components/TextField"
import { ScrollView } from "react-native"
import CustomButton from "../../../components/CustomButton"
import { useState, useEffect, useContext } from "react"
import { GlobalContext } from "../_layout"
import { apiCall } from "../../../components/functions/functions"


const Profile = () => {
    const { apiToken,userData } = useContext(GlobalContext);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            if (!apiToken) {
                setLoading(false);
                Alert.alert("Error", "Authentication token not found. Please log in again.");
                return;
            }

            try {
                setLoading(true);
                // Assuming 'auth/user/' is the endpoint to get the current user's profile
                const data = await apiCall('users/profile/', null, 'GET');
                if (data) {
                    setFullName(data.full_name || '');
                    setEmail(data.email || '');
                    setPhoneNumber(data.phone_number || '');
                }
            } catch (error) {
                console.error("Failed to fetch profile:", error);
                Alert.alert("Error", "Could not load your profile. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [apiToken]);

    const handleSaveChanges = async () => {
        // Add logic to save changes to the API
        setSaving(true);
        try {
           
            const profileData = {
                full_name: fullName,
                phone_number: phoneNumber,
                email: userData.email,
                // Email is typically not updatable, so we don't send it.
            };

            // Using 'PATCH' is ideal for updating only specific fields.
            const response = await apiCall('users/profile/',null, 'PUT',profileData);

            Alert.alert("Success", "Your profile has been updated successfully.");
            console.log("Profile updated:", response);
        } catch (error) {
            console.error("Failed to save profile:", error);
            const errorMessage = error.message || "An unexpected error occurred. Please try again.";
            Alert.alert("Update Failed", errorMessage);
        } finally {
            setSaving(false);
        }
    };

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
                    {loading ? (
                        <ActivityIndicator size="large" color="#FADD99" className="mt-8" />
                    ) : (
                        <View>
                            <TextField 
                                value={fullName} 
                                state="success"
                                handleTextChange={setFullName} 
                                title={"Full Name"} 
                                type={"profile"} />

                            <TextField 
                                value={userData.email}
                                title={"Email"}
                                state="normal"
                                type={"email"}
                                disabled={true}
                                />
                                


                        <TextField type={"phone"} state={"success"} value={phoneNumber} placeholder={"+233"} handleTextChange={setPhoneNumber} title={"Phone Number"} />

                    <View className="px-[16px] mt-[72px]">
                    <CustomButton 
                        title={"Save Changes"} 
                        containerStyles={'w-full mt-7 bg-primary-50'}
                        handlePress={handleSaveChanges}
                        isLoading={saving}
                    />
                    </View>
                </View>
                )}
                </View>
            </View>
            </View>
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

export default Profile