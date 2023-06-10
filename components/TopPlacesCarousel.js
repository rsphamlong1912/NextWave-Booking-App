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
    {
        id: 1,
        image: require('./../assets/Carousel/222.webp'),
        title: 'Italian Breakfast Combo',
        subTitle: 'Zillion Reasons',
    },
    {
        id: 2,
        image: require('./../assets/Carousel/111.jpg'),
        title: 'Vegan Hangout',
        subTitle: 'Hotel Mayback',
    },
    {
        id: 3,
        image: require('./../assets/Carousel/333.jpg'),
        title: 'Vegan Hangout',
        subTitle: 'Hotel Mayback',
    },
    {
        id: 4,
        image: require('./../assets/Carousel/Carousel3.png'),
        title: 'Vegan Hangout',
        subTitle: 'Hotel Mayback',
    },

];

const TopPlacesCarousel = () => {
    return (
        <FlatList
            data={listCarousel}
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={i=> i.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity style={{ marginLeft: 20, marginTop: 20, }}>
                        <View style={styles.card}>
                            <View style={styles.imageBox}>
                                <Image style={styles.image} source={item.image} />
                            </View>
                            <View style={styles.titleBox}>
                                <Text style={styles.title}>{item.title}</Text>
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
     overflow: 'hidden'
     
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