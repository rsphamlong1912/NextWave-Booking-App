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
        image: require("./../assets/Carousel/com.webp"),
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
    {
        id: "5",
        name: "Hanuri-Korean Fast Food",
        address: "284 Nguyễn Đình Chiểu, Phường 6, Quận 3",
        time: "099:00 AM - 11:30 PM",
        image: require("./../assets/Carousel/Hanuri.jpg"),
        latitude: 10.775584235106257, 
        longitude: 106.68713606625653,
    },
    {
        id: "6",
        name: "Vee Ayy",
        address: "345/84 Đ. Trần Hưng Đạo, Cầu Kho, Quận 1",
        time: "10:00 AM - 10:30 PM",
        image: require("./../assets/Carousel/vee-ayy.jpg"),
        latitude: 10.760440824011862, 
        longitude: 106.6896795572887,
    },
    {
        id: "7",
        name: "Kichi Kichi",
        address: "Số 338 Đỗ Xuân Hợp, Phước Long A, Quận 9",
        time: "10:00 AM - 10:00 PM",
        image: require("./../assets/Carousel/kichi-kichi.png"),
        latitude: 10.822944055835185, 
        longitude: 106.77066314829463,
    },
    {
        id: "8",
        name: "King BBQ",
        address: "50 Lê Văn Việt, Hiệp Phú, Quận 9",
        time: "10:00 AM - 09:00 PM",
        image: require("./../assets/Carousel/King.jpg"),
        latitude: 10.84732517428933, 
        longitude: 106.77628480436397,
    },
    {
        id: "9",
        name: "Cơm tấm Sà Bì Chưởng",
        address: "179 Đ. Trần Bình Trọng, Phường 3, Quận 5",
        time: "07:00 AM - 09:00 PM",
        image: require("./../assets/Carousel/sabichuong.webp"),
        latitude: 10.758762794275922, 
        longitude: 106.68051346936198,
    },
    {
        id: "10",
        name: "A Mà Kitchen",
        address: "62 Võ Văn Tần, Phường 6, Quận 3",
        time: "10:30 AM - 09:00 PM",
        image: require("./../assets/Carousel/ama.jpg"),
        latitude: 10.7768469439067, 
        longitude: 106.69026283867206,
    },
    {
        id: "11",
        name: "No-Ne Bistro",
        address: "48 Đường Nguyễn Văn Mai, Phường 8, Quận 3",
        time: "11:30 AM - 10:30 PM",
        image: require("./../assets/Carousel/none.webp"),
        latitude: 10.790032685611157, 
        longitude: 106.68744825401734,
    },
    {
        id: "12",
        name: "Maison Mận-Đỏ",
        address: "27J Đ. Trần Nhật Duật, Phường Tân Định, Quận 1",
        time: "11:00 AM - 10:00 PM",
        image: require("./../assets/Carousel/maison.jpg"),
        latitude: 10.793057450832194, 
        longitude: 106.69022156701138,
    },
    {
        id: "13",
        name: "K-Pub",
        address: "128 Đặng Văn Bi, Bình Thọ, Thủ Đức",
        time: "10:00 AM - 09:00 PM",
        image: require("./../assets/Carousel/kpub.jpg"),
        latitude: 10.845841004828188, 
        longitude: 106.7615345283777,
    },
    {
        id: "14",
        name: "Bò tơ Phi Long",
        address: "95G Quang Trung, Phước Long B, Quận 9",
        time: "10:00 AM - 11:30 PM",
        image: require("./../assets/Carousel/boto.jpg"),
        latitude: 10.83892195093161, 
        longitude: 106.7728529368383,
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