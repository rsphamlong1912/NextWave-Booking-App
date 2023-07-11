import React from "react";
import { View, Text, TouchableOpacity, Image, Button, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors'
import Icon from "react-native-vector-icons/Ionicons";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import "expo-dev-client"
import AsyncStorage from "@react-native-async-storage/async-storage";

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

    // if (user) {
    //     navigation.navigate("Home")
    // } else {
    //     console.log("NO USER")
    // }

    return (
        // <View style={styles.container}>
        //     <Button
        //         title="Sign in with Google "
        //         onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
        //     />
        // </View>
        <View className="flex-1 bg-white" style={{ backgroundColor: COLORS.primary }}>
            <SafeAreaView className="flex ">
                <View className="flex-row justify-center">
                    <Image source={require('./../assets/logoLogin.png')}
                        style={{ width: 205, height: 205 }} />
                </View>
            </SafeAreaView>
            <View
                style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
                className="flex-1 bg-white px-8 pt-8">
                <View className="form space-y-2">
                    <Text className="text-gray-700 ml-4">Email Address</Text>
                    <TextInput
                        className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                        placeholder="khai@gmail.com"
                        value=""
                    />
                    <Text className="text-gray-700 ml-4">Password</Text>
                    <TextInput
                        className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                        secureTextEntry
                        placeholder="*******"
                        value=""
                    />
                    <TouchableOpacity className="flex items-end">
                        <Text className="text-gray-700 mb-5">Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="py-3 bg-green-400 rounded-xl">
                        <Text
                            className="text-xl font-bold text-center text-gray-700"
                        >
                            Login
                        </Text>
                    </TouchableOpacity>

                </View>
                <Text className="text-xl text-gray-700 font-bold text-center py-5">Or</Text>
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
                        Don't have an account?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text className="font-semibold text-yellow-500"> Sign Up</Text>
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