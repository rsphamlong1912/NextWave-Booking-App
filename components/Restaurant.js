import React from "react";
import { SafeAreaView, StyleSheet, View, Text, FlatList } from "react-native";
import ItemRestaurant from "./../components/ItemRestaurant";


const restaurant = [
    {
        id: "1",
        name: "Bơ Bán Bò",
        address: "203 Đ.Lê Văn Việt, Hiệp Phú",
        time: "10:00 AM - 11:00 PM",
        image: require("./../assets/Carousel/222.webp"),
        latitude: 10.8441, 
        longitude: 106.78288,
    },
    {
        id: "2",
        name: "Mỳ cay SaSin",
        address: "402 Đ.Lê Văn Việt, Hiệp Phú",
        time: "09:00 AM - 11:00 PM",
        image: require("./../assets/Carousel/111.jpg"),
        latitude: 10.844881042642191, 
        longitude: 106.78698599634549,
    },
    {
        id: "3",
        name: "Cơm tấm Phúc Lộc Thọ",
        address: "139 Hẻm 445, Phước Long B",
        time: "08:00 AM - 08:00 PM",
        image: require("./../assets/Carousel/333.jpg"),
        latitude: 10.848490623116383, 
        longitude: 106.77529661169041,
    },
    {
        id: "4",
        name: "Vua Hải Sản",
        address: "95E Quang Trung, Hiệp Phú",
        time: "10:00 AM - 11:00 PM",
        image: require("./../assets/Carousel/222.webp"),
        latitude: 10.837008026767474, 
        longitude: 106.78176886750917,
    },
];


const Restaurant = ({navigation}) => {

    return (
        <View >
            <View style={style.container}>
                <Text style={style.mainTitle}>Đặt chỗ nhà hàng</Text>
                <Text style={style.subTitle}>Những nhà hàng gần bạn</Text>
                <Text style={style.moreTitle}>Xem thêm</Text>

            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 80 }}
                data={restaurant}
                renderItem={({ item }) => <ItemRestaurant item={item} navigation={navigation} />}
            />
        </View>

    )

}

const style = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 20
    },
    mainTitle: {
        fontSize: 17,
        fontWeight: 'bold',

    },
    subTitle: {
        fontSize: 12,
        color: '#908e8c'
    },
    moreTitle: {
        fontSize: 12,
        textDecorationLine: 'underline',
        position: 'absolute',
        right: 0,
        top: 20,
        color: '#908e8c'
    },
});
export default Restaurant;