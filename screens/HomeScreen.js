import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Header from '../components/Header';
// import { ScrollView } from 'react-native-gesture-handler';
import listCarousel from '../constants/listCarousel'
import TopPlacesCarousel from './../components/TopPlacesCarousel'
import Restaurant from './../components/Restaurant'
import RestaurantCard from '../components/RestaurantCard';
import RestaurantDetail from './RestaurantDetail';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="auto" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousel />
        <Restaurant navigation={navigation} />     
        {/* <RestaurantDetail/> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});


