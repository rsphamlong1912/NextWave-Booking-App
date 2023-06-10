import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Header from '../components/Header';
// import { ScrollView } from 'react-native-gesture-handler';
import listCarousel from '../constants/listCarousel'
import TopPlacesCarousel from './../components/TopPlacesCarousel'


export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="auto" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousel />      
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});


