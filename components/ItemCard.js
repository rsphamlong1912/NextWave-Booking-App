import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../constants/colors";

const ItemCard = ({ item }) => {
  return (
    <View style={style.itemCard}>
      <Image source={item.image} style={{ height: 80, width: 80 }} />
      <View
        style={{
          height: 100,
          marginLeft: 25,
          paddingVertical: 20,
          flex: 1,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.name}</Text>
        <Text style={{ fontSize: 13, color: COLORS.grey }}>
          {item.ingredients}
        </Text>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>${item.price}</Text>
      </View>
      <View style={{ marginRight: 20, alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>3</Text>
        <View style={style.actionBtn}>
          <Icon name="remove" size={25} color={COLORS.white} />
          <Icon name="add" size={25} color={COLORS.white} />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  itemCard: {
    height: 100,
    width: 350,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ItemCard;
