import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import Header from '../components/Header';
import Restaurant from './../components/Restaurant';
import RestaurantCard from '../components/RestaurantCard';
import FloatingButton from './../components/FloatingButton';
import Icon from "react-native-vector-icons/Ionicons";
import COLORS from "../constants/colors";

export default function RestaurantDetail({ navigation, route }) {

    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        setIsLoading(true)
        setTimeout(() => setIsLoading(false), 300)
    }, []);
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <TouchableOpacity activeOpacity={0.8} onPress={navigation.goBack}>
                <View style={styles.header}>
                    <Icon name="chevron-back" size={28} color={'#fff'} />
                    <Text style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#fff",
                    }}>
                        Chi tiết nhà hàng
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
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <RestaurantCard item={route.params.detail} navigation={navigation} />
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ marginVertical: 20 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                                    Menu của quán
                                </Text>
                            </View>
                            <Image source={{ uri: route.params.detail.menu }}
                                style={{ height: 400, width: 360, borderRadius: 5, resizeMode: 'contain' }} />
                        </View>
                        <Restaurant navigation={navigation} />
                    </ScrollView>
                    <FloatingButton title="Đặt chỗ" onPress={() => navigation.navigate('Order', { detail: route.params.detail })} />
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