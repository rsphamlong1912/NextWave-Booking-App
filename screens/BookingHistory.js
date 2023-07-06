import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Octicons";
import COLORS from "../constants/colors";
import ItemCard from "../components/ItemCard";

const restaurantsBooking = [
  {
    id: "1",
    name: "Bơ bán bò",
    address: "203 Đ.Lê Văn Việt, Hiệp Phú",
    time: "10:00 AM - 11:00 PM",
    image: require("./../assets/Carousel/222.webp"),
  },
  {
    id: "4",
    name: "Vua Hải Sản",
    address: "95E Quang Trung, Hiệp Phú",
    time: "10:00 AM - 11:00 PM",
    image: require("./../assets/Carousel/333.jpg"),
  },
];

const BookingHistory = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1 }}>
      <View style={style.header}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          Lịch sử đặt chỗ
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={restaurantsBooking}
        renderItem={({ item }) => <ItemCard item={item} />}
        ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
        ListFooterComponent={() => (
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Pressable onPress={() => navigation.navigate('Home1')}>
              <View style={style.btnContainer}>
                <Text style={style.btnText}>
                  <Text>
                    <Icon name="plus" size={15} /> Đặt thêm chỗ
                  </Text>
                </Text>
              </View>
              </Pressable>
            </TouchableOpacity>
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
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: COLORS.primary,
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
  btnText: {
    color: COLORS.grey,
    fontWeight: "500",
    fontSize: 15,
  },
  btnContainer: {
    backgroundColor: COLORS.white,
    height: 40,
    width: 200,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BookingHistory;
