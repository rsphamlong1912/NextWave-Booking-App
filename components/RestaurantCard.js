import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Card, ListItem, Button} from 'react-native-elements'
import COLORS from "../constants/colors";
import Icon from "react-native-vector-icons/Ionicons";



const RestaurantCard = ({navigation, item}) => {
  return (
    // <View style={styles.container}>
    //   <View style={styles.cardContainer}>
    <SafeAreaView style={{ backgroundColor: COLORS.light, flex: 1}}>
      <TouchableOpacity activeOpacity={0.8} onPress={navigation.goBack}>
      <View style={styles.header}>
        <Icon name="chevron-back" size={28} color={'#fff'}/>
        <Text style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#fff",
          }}>
          Chi tiết nhà hàng
        </Text>
      </View>
      </TouchableOpacity>
      <Card containerStyle={{ borderRadius: 10, marginBottom: 20, elevation: 0}}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.address}>
          <Icon name="location-sharp" size={15} color="#32b768" />
          {item.address}
        </Text>
        <Card.Image source={item.image} style={{ borderRadius: 10 }} />
        <Text style={styles.sub}>
          <Icon name="time-sharp" size={15} color="#32b768" />
          Giờ mở cửa
        </Text>
        <Text style={styles.time}>
        {item.time}
        </Text>
        <TouchableOpacity style={styles.positionMap} onPress={()=> {navigation.navigate('Map', {item: item})}} >
        <Text style={styles.map}>Xem địa chỉ</Text>
        </TouchableOpacity>
        
      </Card>
    </SafeAreaView>
  );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
  container: {
    width: deviceWidth - 20,
    alignItems: 'center',
    marginTop: 25,
  },
  name: {
    marginLeft: 3,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  address: {
    marginLeft: 1,
    fontSize: 13,
    color: '#908e8c',
    marginBottom: 7
  },
  sub: {
    marginLeft: 1,
    fontSize: 13,
    color: '#908e8c',
    marginTop: 15
  },

  time: {
    marginLeft: 1
  },
  map: {
    fontSize: 12,
    textDecorationLine: 'underline',
    color: '#32b768'
  },
  positionMap: {
    position: 'absolute',
    right: 0,
    top: 20,
  },
  Card: {
    backgroundColor: '#fffff',
    height: 100,
    borderRadius: radius,

    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },

  // header: {
  //   paddingVertical: 20,
  //   flexDirection: "row",
  //   alignItems: "center",
  //   marginHorizontal: 20,
  // },
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: COLORS.primary,
  },

  // cardContainer: {
  //   width: deviceWidth - offset,
  //   backgroundColor: '#a29bfe',
  //   height: 80,
  //   borderRadius: radius,

  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 5,
  //     height: 5,
  //   },
  //   shadowOpacity: 0.75,
  //   shadowRadius: 5,
  //   elevation: 9,
  // },
  // imageStyle: {
  //   height: 130,
  //   width: deviceWidth - offset,
  //   borderTopLeftRadius: radius,
  //   borderTopRightRadius: radius,
  //   opacity: 0.9,
  //   alignContent: 'center',
  //   alignSelf: 'center',
  // },
  // titleStyle: {
  //   fontSize: 20,
  //   fontWeight: '800',
  // },
  // categoryStyle: {
  //   fontWeight: '200',
  // },
  // infoStyle: {
  //   marginHorizontal: 10,
  //   marginVertical: 5,
  // },
  // iconLabelStyle: {
  //   flexDirection: 'row',
  //   marginTop: 10,
  // },
});

export default RestaurantCard;
