import React from 'react';
import { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';

export default function Map() {
    const [mapRegion, setMapRegion] = useState({
        latitude: 10.8441,
        longitude: 106.78288,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
    });
    const [mapSaSin, setMapSaSin] = useState({
        latitude: 10.845155010253894, 
        longitude: 106.78701818285423,
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
    // const [address, setAddress] = useState();
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                region={mapRegion}
            >
                <Marker coordinate={mapRegion} title='Bơ Bán Bò' />
            </MapView>
            {/* <MapView style={styles.map}
                region={mapSaSin}
            >
                <Marker coordinate={mapSaSin} title='Mì cay Sasin' />
            </MapView> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    map: {
        // width: '100%',
        // height: '100%',
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
});