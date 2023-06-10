import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import COLORS from "../constants/colors";
import ItemCardDecor from "../components/ItemCardDecor";
import FloatingButton from './../components/FloatingButton'
const restaurantsBooking = [
  {
    id: "1",
    name: "Combo Decor Table",
    category: "Table Decor",
    image: require("./../assets/Decoration/Table.jpeg"),
  },
  {
    id: "2",
    name: "Flower",
    category: "Flower Decor",
    image: require("./../assets/Decoration/Flower.webp"),
  },
  {
    id: "3",
    name: "Candle",
    category: "Candle Decor",
    image: require("./../assets/Decoration/Candle.webp"),
  },
];

const ComboDecoration = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity activeOpacity={0.8} onPress={navigation.goBack}>
        <View style={style.header}>
          <Icon name="chevron-back" size={28} color={'#fff'} />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Chọn gói Combo Decoration
          </Text>
        </View>
      </TouchableOpacity>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={restaurantsBooking}
        renderItem={({ item }) => <ItemCardDecor item={item} />}
        ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
        ListFooterComponent={() => (
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <View style={style.btnContainer}>
                <Text style={style.btnText}>
                  <Text>
                    <Icon name="add" size={14} /> Đặt thêm
                  </Text>
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
      <FloatingButton title="Đặt chỗ và thanh toán" onPress={()=>navigation.navigate('ComboDecoration')}/>

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
    fontSize: 14,
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

export default ComboDecoration;
