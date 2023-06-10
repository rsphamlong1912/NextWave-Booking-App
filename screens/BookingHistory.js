import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../constants/colors";
import foods from "../constants/foods";
import { PrimaryButton, SecondaryButton } from "../components/Button";
import ItemCard from "../components/ItemCard";

const BookingHistory = () => {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.light, flex: 1 }}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Booking History
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={foods}
        renderItem={({ item }) => <ItemCard item={item} />}
        ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Total Price
              </Text>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>$50</Text>
            </View>
            <View style={{ marginHorizontal: 30 }}>
              <PrimaryButton title="CHECKOUT" />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
});

export default BookingHistory;
