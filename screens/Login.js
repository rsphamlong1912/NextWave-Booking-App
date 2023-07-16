import React from "react";
import { View, Text, TouchableOpacity, Image, Button, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors'
import Icon from "react-native-vector-icons/Ionicons";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import "expo-dev-client"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from 'expo-status-bar';

const Login = ({ navigation }) => {

    GoogleSignin.configure({
        webClientId: '503063319327-9mujhkdc2um01hcesmhfaa9grhhe5phg.apps.googleusercontent.com',
    });

    const onGoogleButtonPress = async () => {
        console.log("----------Huu---------------")
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        // return auth().signInWithCredential(googleCredential);
        const user_sign_in = auth().signInWithCredential(googleCredential);
        user_sign_in.then((user) => {
            console.log(user)
        })
            .catch((error) => {
                console.log(error)
            })
    }

    const [initializing, setInitializing] = React.useState(true);
    const [user, setUser] = React.useState();

    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();
    const [noti, setNoti] = React.useState();

    const handleLogin = () => {
        if(username === 'customer' && password === '123456789'){
        let user = {
            photoURL: 'https://banner2.cleanpng.com/20180619/epr/kisspng-avatar-photo-booth-computer-icons-email-stewardess-5b292bfebc29e1.5698032815294248947707.jpg',
            displayName: 'Customer Nextwave',
            email: 'CustomerofNextwaveApp@gmail.com'
        }
        AsyncStorage.setItem(
                "UserLoggedInData",
                JSON.stringify({ user, loggedIn: true })
            )
                .then(() => {
                    navigation.navigate("Home");
                })
                .catch((error) => {
                    console.log(error);
                });
        navigation.navigate('Home');
        }else {
            setNoti("Sai tài khoản hoặc mật khẩu!")
        }
    }

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) {
            setInitializing(false);
            if (user) {
                AsyncStorage.setItem(
                    "UserLoggedInData",
                    JSON.stringify({ user, loggedIn: true })
                )
                    .then(() => {
                        navigation.navigate("Home");
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else {
                console.log("NO USER");
            }
        }
    }

    React.useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    return (
        <View className="flex-1 bg-white" style={{ backgroundColor: COLORS.primary }}>
                  <StatusBar style="auto" />
            <SafeAreaView className="flex ">
                <View className="flex-row justify-center">
                    <Image source={require('./../assets/logoLogin.png')}
                        style={{ width: 250, height: 250 }} />
                </View>
            </SafeAreaView>
            <View
                style={{ borderTopLeftRadius: 35, borderTopRightRadius: 35 }}
                className="flex-1 bg-white px-8 pt-8">
                <View className="form space-y-2">
                    <Text className="text-gray-700 ml-4 font-bold">Tên đăng nhập</Text>
                    <TextInput
                        className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                        placeholder="Username"
                        onChangeText={(value)=> {setUsername(value)}}
                    />
                    <Text className="text-gray-700 ml-4 font-bold">Mật khẩu</Text>
                    <TextInput
                        className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                        secureTextEntry
                        placeholder="Password"
                        onChangeText={(value)=> {setPassword(value)}}
                    />
                    <TouchableOpacity className="flex items-end">
                        <Text className="text-gray-700 mb-5 font-bold">Quên mật khẩu?</Text>
                    </TouchableOpacity>
                    {noti && <Text className="text-red-700 ml-5 mb-5 font-bold">{noti}</Text>}
                    <TouchableOpacity
                        onPress={handleLogin}
                        className="py-3 bg-green-400 rounded-xl">
                        <Text className="text-xl font-bold text-center text-gray-700">
                            Đăng nhập
                        </Text>
                    </TouchableOpacity>

                </View>
                <Text className="text-md text-gray-500 font-bold text-center py-5">hoặc</Text>
                <View className="flex-row justify-center space-x-12">
                    <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl" onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}>
                        <Image source={require('./../assets/google1.png')} className="w-10 h-10" />
                    </TouchableOpacity>
                    <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                        <Image source={require('./../assets/facebook.png')} className="w-10 h-10" />
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-center mt-7">
                    <Text className="text-gray-500 font-semibold">
                        Chưa có tài khoản?
                    </Text>
                    <TouchableOpacity onPress={()=>{}}>
                        <Text className="font-semibold text-yellow-500"> Đăng ký</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default Login;