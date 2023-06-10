import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Header from '../components/Header';
import Restaurant from './../components/Restaurant';
import RestaurantCard from '../components/RestaurantCard';

export default function RestaurantDetail({navigation, route}) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <RestaurantCard item={route.params.detail} navigation={navigation}/>
                <Restaurant />
                <View><Text>{route.params.detail.name}</Text></View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});