import React from "react";
import { View, Button, StyleSheet } from "react-native"
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

    if (user) {
        // AsyncStorage.setItem(
        //     "UserLoggedInData",
        //     JSON.stringify({ user, loggedIn: true })
        // );
        navigation.navigate("Home")

    } else {
        console.log("NO USER")
    }

    return (
        <View style={styles.container}>
            <Button
                title="Sign in with Google "
                onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
            />
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