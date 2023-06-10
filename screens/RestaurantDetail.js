import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Header from '../components/Header';
import Restaurant from './../components/Restaurant';
import RestaurantCard from '../components/RestaurantCard';

export default function RestaurantDetail() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <RestaurantCard />
                <Restaurant />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});