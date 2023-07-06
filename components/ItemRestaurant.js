import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import COLORS from "../constants/colors";
import { DetailButton } from "./Button";


const ItemRestaurant = ({ item, navigation }) => {
  return (
    <View style={style.itemCard}>
      <Image source={{uri: item.image}} style={{ height: 80, width: 80, borderRadius: 5 }} />
      <View
        style={{
          height: 100,
          marginLeft: 15,
          paddingVertical: 15,
          flex: 1,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 5 }}>{item.name}</Text>
        <Text style={{ fontSize: 13, color: COLORS.grey }}>
        <Icon name="location-sharp" size={15} color="#32b768"/>
          {item.address}
        </Text>
      </View>
      <View style={{alignItems: "center", marginTop: 60 }}>
        <View style={{ }}>
          <DetailButton title="Đặt chỗ" onPress={()=>navigation.navigate('RestaurantDetail',{detail: item})}/>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  itemCard: {
    height: 100,
    elevation: 1,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 5,
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ItemRestaurant;
