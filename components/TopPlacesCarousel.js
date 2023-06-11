import React from 'react';
import {
    FlatList,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    SafeAreaView
} from 'react-native';
// import listCarousel from '../constants/listCarousel'


const listCarousel = [
    // {
    //     id: 1,
    //     image: require('./../assets/Carousel/222.webp'),
    //     title: 'Italian Breakfast Combo',
    //     subTitle: 'Zillion Reasons',
    // },
    // {
    //     id: 2,
    //     image: require('./../assets/Carousel/111.jpg'),
    //     title: 'Vegan Hangout',
    //     subTitle: 'Hotel Mayback',
    // },
    // {
    //     id: 3,
    //     image: require('./../assets/Carousel/333.jpg'),
    //     title: 'Vegan Hangout',
    //     subTitle: 'Hotel Mayback',
    // },
    // {
    //     id: 4,
    //     image: require('./../assets/Carousel/Carousel3.png'),
    //     title: 'Vegan Hangout',
    //     subTitle: 'Hotel Mayback',
    // },
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
        name: "No-Ne Bistro",
        address: "48 Đường Nguyễn Văn Mai, Phường 8, Quận 3",
        time: "11:30 AM - 22:30 PM",
        image: require("./../assets/Carousel/none.webp"),
        latitude: 10.790032685611157, 
        longitude: 106.68744825401734,
    },
    {
        id: "3",
        name: "A Mà Kitchen",
        address: "62 Võ Văn Tần, Phường 6, Quận 3",
        time: "10:30 AM - 21:00 PM",
        image: require("./../assets/Carousel/ama.jpg"),
        latitude: 10.7768469439067, 
        longitude: 106.69026283867206,
    },
    {
        id: "4",
        name: "King BBQ",
        address: "50 Lê Văn Việt, Hiệp Phú, Quận 9",
        time: "10:00 AM - 09:00 PM",
        image: require("./../assets/Carousel/King.jpg"),
        latitude: 10.847411218830398, 
        longitude: 106.7762775617879,
    },
    {
        id: "5",
        name: "Hanuri-Korean Fast Food",
        address: "284 Nguyễn Đình Chiểu, Phường 6, Quận 3",
        time: "099:00 AM - 11:30 PM",
        image: require("./../assets/Carousel/Hanuri.jpg"),
        latitude: 10.775871102987148, 
        longitude: 106.68727154052584,
    },
    {
        id: "6",
        name: "Kichi Kichi",
        address: "Số 338 Đỗ Xuân Hợp, Phước Long A, Quận 9",
        time: "10:00 AM - 10:00 PM",
        image: require("./../assets/Carousel/kichi-kichi.png"),
        latitude: 10.822944055835185, 
        longitude: 106.77066314829463,
    },
    {
        id: "7",
        name: "Maison Mận-Đỏ",
        address: "27J Đ. Trần Nhật Duật, Phường Tân Định, Quận 1",
        time: "11:00 AM - 22:00 PM",
        image: require("./../assets/Carousel/maison.jpg"),
        latitude: 10.793057450832194, 
        longitude: 106.69022156701138,
    },

];

const TopPlacesCarousel = () => {
    return (
        <FlatList
            data={listCarousel}
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={i => i.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity style={{ marginLeft: 20, marginTop: 20, }}>
                        <View style={styles.card}>
                            <View style={styles.imageBox}>
                                <Image style={styles.image} source={item.image} />
                            </View>
                            <View style={styles.titleBox}>
                                <Text style={styles.title}>{item.name}</Text>
                                <Text style={styles.subTitle}>Đặt chỗ</Text>
                            </View>
                        </View>
                    </TouchableOpacity>)
            }}
        />
    )
}

const styles = StyleSheet.create({
    card: {
        height: 130,
        width: 300,
    },
    imageBox: {
        height: 130,
        width: 300,
        borderRadius: 30,
        overflow: 'hidden',
    },
    image: {
        height: 130,
        width: 300,
        resizeMode: 'cover',

    },
    titleBox: {
        position: 'absolute',
        left: 18,
        top: 80
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
    subTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
        textDecorationLine: 'underline'
    }
});

export default TopPlacesCarousel;