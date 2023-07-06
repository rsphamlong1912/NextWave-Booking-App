import React from 'react';
import { View, Image, Text, TextInput, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Octicons';

const Header = () => {
    return (
        <View>
            <View style={styles.top}>
                <View style={{ width: 50, paddingLeft: 20, justifyContent: 'center' }}>
                    <Icon name="three-bars" size={25} />
                </View>
                <View style={styles.viewPlaceStyle}>
                    <Text style={styles.type}>BOOKING FROM</Text>
                    <View style={styles.placeStyle}>
                        <Icon name="location" size={15} />
                        <Text style={styles.place}>Quận 9, TP.HCM</Text>

                    </View>
                </View>
                <View style={styles.avatar}>
                    <Image source={require('./../assets/avatar.jpeg')} style={{
                        width: 36,
                        height: 36, 
                        borderRadius: 50
                    }} />
                </View>

            </View>

            <View style={styles.boxInput}>
                <TextInput style={styles.input} placeholder="Tìm kiếm nhà hàng, quán ăn..." />
                <Icon name="search" size={15} />
            </View>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    top: {
        paddingTop: 42,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    type: {
        fontSize: 10,
        color: 'gray',
        fontWeight: 'bold'
    },
    placeStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewPlaceStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 20
    },
    place: {
        fontSize: 14,
        color: '#32b768',
        paddingTop: 3,
        marginLeft: 8,
        marginRight: 8,
        fontWeight: 'bold'
    },
    boxInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#D0D0D0',
        borderRadius: 15,
        borderWidth: 1,
        marginTop: 17,
        marginRight: 55,
        marginLeft: 55,
        marginBottom:15,
        paddingRight: 15,
        fontStyle: 800
    },
    input: {
        height: 36,
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 14,
        flex: 1,
    },
});