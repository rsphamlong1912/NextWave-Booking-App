import React from 'react';
import { useState, useEffect } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Icon from "react-native-vector-icons/Ionicons";
import { StyleSheet, View, Dimensions, TouchableOpacity, Text, SafeAreaView, Image, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import COLORS from "../constants/colors";

export default function Map({ navigation, route }) {
    const [mapRegion, setMapRegion] = useState({
        latitude: route.params.item.latitude,
        longitude: route.params.item.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
    });
    const userLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status != 'granted') {
            setErrorMsg('Permission to access location was denied');
        }
        let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
        setMapRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        })
        setMapSaSin({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        })
    }
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        setIsLoading(true)
        setTimeout(() => setIsLoading(false), 300)
    }, []);
    // const [address, setAddress] = useState();
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} onPress={navigation.goBack}>
                <View style={styles.header}>
                    <Icon name="chevron-back" size={28} color={'#fff'} />
                    <Text style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#fff",
                    }}>
                        Xem vị trí
                    </Text>
                </View>
            </TouchableOpacity>
            {/* <MapView style={styles.map}
                region={mapRegion}
                provider={PROVIDER_GOOGLE}>
                <Marker coordinate={mapRegion} title={route.params.item.name} />
            </MapView>   */}
             {isLoading ?
                (<View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 200,
                    marginTop: 150
                }}>
                    <ActivityIndicator size="large" color='#32b768' />
                </View>)
                : (
            <View style={{ flex: 1 }}>
                <Image source={route.params.item.map}
                    style={{
                        width: Dimensions.get("window").width,
                        height: Dimensions.get("window").height,
                    }} />
            </View>)}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    map: {
        // width: '100%',
        // height: '100%',
        flex: 1,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    header: {
        paddingVertical: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 0,
        backgroundColor: COLORS.primary,
    },
});