import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Pressable
} from "react-native";
import Snackbar from 'react-native-snackbar';
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import COLORS from "../constants/colors";
import ItemCardDecor from "../components/ItemCardDecor";
import FloatingButton from './../components/FloatingButton'

const restaurantsBooking = [
  {
    id: "1",
    name: "Combo Tiệc sinh nhật",
    category: 500000,
    image: require("./../assets/Decoration/ComboBirthday.jpg"),
    status: false
  },
  {
    id: "2",
    name: "Combo Ngày kỷ niệm",
    category: 500000,
    image: require("./../assets/Decoration/ComboAnniversary.jpg"),
    status: false
  },
  {
    id: "3",
    name: "Combo Hẹn hò",
    category: 800000,
    image: require("./../assets/Decoration/ComboDating.jpg"),
    status: false
  },
  {
    id: "4",
    name: "Combo Tỏ tình",
    category: 1500000,
    image: require("./../assets/Decoration/ComboPropose.jpeg"),
    status: false
  },
  {
    id: "5",
    name: "Hoa",
    category: 300000,
    image: require("./../assets/Decoration/Flower.webp"),
    status: false
  },
  {
    id: "6",
    name: "Nến",
    category: 100000,
    image: require("./../assets/Decoration/Candle.webp"),
    status: false
  },  
  {
    id: "7",
    name: "Bóng bay",
    category: 160000,
    image: require("./../assets/Decoration/Balloon.jpg"),
    status: false
  },
  {
    id: "8",
    name: "Đèn trang trí",
    category: 120000,
    image: require("./../assets/Decoration/Light.webp"),
    status: false
  },
];

const ComboDecoration = ({ navigation, route }) => {

  const [item, setItem] = React.useState(route.params.detail)
  const [comboOrder, setComboOrder] = React.useState([])
  const [isChose, setIsChose] = React.useState(false)

  React.useEffect(() => {
    setItem(route.params.detail);
  }, [route.params.detail]);

  const addCombo = (newCombo) => {
    setComboOrder([...comboOrder, newCombo])
    showSnackbar('Thêm thành công!');
    console.log('Add success')

  }
  const showSnackbar = (message) => {
    Snackbar.show({
      text: message,
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: 'green',
      textColor: 'white',
    });
  }
  const removeCombo = (deleteCombo) => {
    setComboOrder(comboOrder.filter((item) => item.id !== deleteCombo.id));
    console.log('Remove success');
  };

  const handleComboPress = (combo) => {
    if (comboOrder.some((item) => item.id === combo.id)) {
      removeCombo(combo);
    } else {
      addCombo(combo);
    }
  };

  const setOrder = () => {
    navigation.navigate('Checkout', { detail: { ...item, comboOrder: comboOrder}});
  }

  return (
    <>
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
          renderItem={({ item }) => <ItemCardDecor item={item} onPress={()=> handleComboPress(item)} isChosen={comboOrder.some((combo) => combo.id === item.id)}/>}
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

      </SafeAreaView>
      <FloatingButton title="Thanh toán" onPress={setOrder} />
    </>
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
