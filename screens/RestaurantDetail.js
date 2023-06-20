import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Header from '../components/Header';
import Restaurant from './../components/Restaurant';
import RestaurantCard from '../components/RestaurantCard';
import FloatingButton from './../components/FloatingButton';

export default function RestaurantDetail({navigation, route}) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <RestaurantCard item={route.params.detail} navigation={navigation}/>
                <Restaurant navigation={navigation}/>
                
            </ScrollView>
            <FloatingButton title="Chọn gói combo" onPress={()=>navigation.navigate('ComboDecoration')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});