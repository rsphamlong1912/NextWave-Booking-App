import React from "react";
import { SafeAreaView, StyleSheet, View, Text, FlatList } from "react-native";
import ItemRestaurant from "./../components/ItemRestaurant";


const restaurant = [
    {
        id: "1",
        name: "Bơ bán bò",
        address: "203 Đ.Lê Văn Việt, Hiệp Phú",
        time: "10:00 AM - 11:00 PM",
        image: require("./../assets/Carousel/222.webp"),
    },
    {
        id: "2",
        name: "Mỳ cay SaSin",
        address: "402 Đ.Lê Văn Việt, Hiệp Phú",
        time: "09:00 AM - 11:00 PM",
        image: require("./../assets/Carousel/111.jpg"),
    },
    {
        id: "3",
        name: "Cơm tấm Phúc Lộc Thọ",
        address: "139 Hẻm 445, Phước Long B",
        time: "08:00 AM - 08:00 PM",
        image: require("./../assets/Carousel/333.jpg"),
    },
    {
        id: "4",
        name: "Vua Hải Sản",
        address: "95E Quang Trung, Hiệp Phú",
        time: "10:00 AM - 11:00 PM",
        image: require("./../assets/Carousel/222.webp"),
    },
];


const Restaurant = () => {

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
                renderItem={({ item }) => <ItemRestaurant item={item} />}
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