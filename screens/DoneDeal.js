import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import Restaurant from './../components/Restaurant';
import RestaurantCard from '../components/RestaurantCard';
import FloatingButton from './../components/FloatingButton';
import Icon from "react-native-vector-icons/Ionicons";
import COLORS from "../constants/colors";

export default function DoneDeal({ navigation, route }) {

    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        setIsLoading(true)
        // setTimeout(() => setIsLoading(false), 3000)
    }, []);
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <TouchableOpacity activeOpacity={0.8} onPress={navigation.goBack}>
                <View style={styles.header}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#fff",
                    }}>
                        Đang chờ xử lý....
                    </Text>
                </View>
            </TouchableOpacity>
            {isLoading ?
                (<View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 200,
                }}>
                    <ActivityIndicator size="large" color='#32b768' />
                </View>)
                :
                (<>
                 
                </>)}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        paddingVertical: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
    },
});