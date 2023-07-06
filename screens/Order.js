import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  ActivityIndicator
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import COLORS from "../constants/colors";
import FloatingButton from './../components/FloatingButton'
import { ScrollView } from "react-native-gesture-handler";
import { SelectList } from 'react-native-dropdown-select-list';
import RestaurantCard from '../components/RestaurantCard';


const time = [
  {
    id: '1',
    time: '10:00'
  },
  {
    id: '2',
    time: '10:30'
  },
  {
    id: '3',
    time: '11:00'
  },
  {
    id: '4',
    time: '11:30'
  },
  {
    id: '5',
    time: '12:00'
  },
  {
    id: '6',
    time: '12:30'
  },
  {
    id: '7',
    time: '13:00'
  },
]
const Order = ({ navigation, route }) => {
  const [dateOrder, setDateOrder] = React.useState('1');
  const [customerOrder, setCustomerOrder] = React.useState('1');
  const [timeOrder, setTimeOrder] = React.useState('');

  const [clickTime, setClickTime] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [item, setItem] = React.useState(route.params.detail)

  const setOrder = () => {
    // setItem({ ...item, dateOrder: dateOrder, customerOrder: customerOrder, timeOrder: timeOrder });
    navigation.navigate('ComboDecoration', { detail: { ...item, dateOrder: dateOrder, customerOrder: customerOrder, timeOrder: timeOrder } });
  }

  React.useEffect(() => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 300)
  }, []);

  React.useEffect(() => {
    setItem(route.params.detail);
  }, [route.params.detail]);

  const date = [
    {
      id: '1',
      value: '07/04/2023'
    },
    {
      id: '2',
      value: '08/04/2023'
    },
    {
      id: '3',
      value: '09/04/2023'
    },
    {
      id: '4',
      value: '10/04/2023'
    },
    {
      id: '5',
      value: '11/04/2023'
    },
    {
      id: '6',
      value: '12/04/2023'
    },
    {
      id: '7',
      value: '13/04/2023'
    },
  ]
  const customer = [
    {
      id: '1',
      value: '1'
    },
    {
      id: '2',
      value: '2'
    },
    {
      id: '3',
      value: '3'
    },
    {
      id: '4',
      value: '4'
    },
    {
      id: '5',
      value: '5'
    },
    {
      id: '6',
      value: '6'
    },
    {
      id: '7',
      value: '7'
    },
  ]
  return (
    <>
      <SafeAreaView>
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
              Chọn thời gian và số khách
            </Text>
          </View>
        </TouchableOpacity>
        {isLoading ?
          (<View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 200,
            marginTop: 150
          }}>
            <ActivityIndicator size="large" color='#32b768' />
          </View>)
          : (
            <>
              <View style={{ marginBottom: 20 }}>
                <Text style={{ marginHorizontal: 20, fontWeight: '500', fontSize: 16 }}>Chọn thời gian</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginLeft: 10 }}>
                  {time.map((item, index) => (
                    <Pressable
                      key={index}
                      style={[{ margin: 10, borderRadius: 7, padding: 15, borderColor: 'gray', borderWidth: 0.8, backgroundColor: '#fff' },
                      clickTime === item && { backgroundColor: '#32b768', borderColor: '#fff' }]}
                      onPress={() => { setClickTime(item); setTimeOrder(item.time) }}>
                      <Text style={clickTime === item && { color: '#fff', fontWeight: 'bold' }}>{item.time}</Text>
                    </Pressable>
                  ))}
                </ScrollView>
                <Text style={{ marginHorizontal: 20, fontWeight: '500', fontSize: 16 }}>Chọn ngày</Text>
                <View style={{ paddingHorizontal: 10, paddingTop: 10, marginLeft: 10, }}>
                  <SelectList
                    setSelected={setDateOrder}
                    data={date}
                    placeholder={"Ngày"}
                    defaultOption={{ id: '1', value: '07/04/2023' }}
                    search={false}
                    boxStyles={{ backgroundColor: '#fff' }}
                    dropdownStyles={{ backgroundColor: '#fff', }}
                  />
                </View>
                <Text style={{ marginHorizontal: 20, fontWeight: '500', fontSize: 16, marginTop: 10 }}>Số khách</Text>
                <View style={{ paddingHorizontal: 10, paddingTop: 10, width: 200, marginLeft: 10 }}>
                  <SelectList
                    setSelected={setCustomerOrder}
                    data={customer}
                    placeholder={"Số khách"}
                    defaultOption={{ id: '1', value: '1' }}
                    search={false}
                    boxStyles={{ backgroundColor: '#fff' }}
                    dropdownStyles={{ backgroundColor: '#fff' }}
                  />
                </View>
              </View>
              <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 10 }}>
                <RestaurantCard item={route.params.detail} navigation={navigation} />
              </ScrollView>
            </>)}
      </SafeAreaView>
      <FloatingButton title="Chọn gói combo" onPress={setOrder} />

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

export default Order;
