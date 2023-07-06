import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Modal,
    Pressable,
    TextInput,
    Image
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import COLORS from "../constants/colors";
import FloatingButton from './../components/FloatingButton'

const restaurantsBooking = [
    {
        id: "1",
        name: "Combo Decor Table",
        category: "Table Decor",
        image: require("./../assets/Decoration/Table.jpeg"),
        status: false
    },
    {
        id: "2",
        name: "Flower",
        category: "Flower Decor",
        image: require("./../assets/Decoration/Flower.webp"),
        status: false
    },
    {
        id: "3",
        name: "Candle",
        category: "Candle Decor",
        image: require("./../assets/Decoration/Candle.webp"),
        status: false
    },
];

const Checkout = ({ navigation, route }) => {
    const [modal, setModal] = React.useState('false')
    const [showMethod, setShowMethod] = React.useState(true)
    const [showMethod2, setShowMethod2] = React.useState(false)
    const [item, setItem] = React.useState(route.params.detail)
    const [cost, setCost] = React.useState(0)
    const formatCost = (amount) => {
        const formattedAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return `${formattedAmount} đ`;
    };

    React.useEffect(() => {
        let totalCost = 0;
        item.comboOrder.forEach((combo) => {
            totalCost += combo.category
        })
        setCost(totalCost)
        console.log(cost)

    }, []);

    const clickMethod = () => {
        setShowMethod(true)
        setShowMethod2(false)

    }
    const clickMethod2 = () => {
        setShowMethod2(true)
        setShowMethod(false)

    }

    return (
        <>
            <Modal
                transparent={true}
                animationType="fade"
                visible={modal}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ height: 'auto', width: 300, backgroundColor: '#EDEDED', borderRadius: 6, elevation: 3 }}>
                        <View style={[style.header,
                        { borderTopLeftRadius: 6, borderTopRightRadius: 6 }]}>
                            <Text
                                style={{
                                    fontSize: 15,
                                    fontWeight: "bold",
                                    color: "#fff",
                                }}>
                                Phương thức thanh toán
                            </Text>
                        </View>
                        <View style={{ margin: 10, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                            <Pressable onPress={clickMethod}>
                                <View style={[{ marginHorizontal: 10 }, showMethod && { padding: 8, borderColor: '#32b768', borderWidth: 2, borderRadius: 6 }]}>
                                    <Image
                                        source={{ uri: "https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-MoMo-Transparent.png" }}
                                        style={{ height: 80, width: 80, borderRadius: 5 }}
                                    />
                                </View>
                            </Pressable>
                            <Pressable onPress={clickMethod2}>
                                <View style={[{ marginHorizontal: 10 }, showMethod2 && { padding: 8, borderColor: '#32b768', borderWidth: 2, borderRadius: 6 }]}>
                                    <Image
                                        source={{ uri: "https://play-lh.googleusercontent.com/SD4lUzWCqLq6nqURm8abnazm8sC0h_hkikryHyODrVpI0g3xMjeuaVs379jUCKrd0vk" }}
                                        style={{ height: 80, width: 80, borderRadius: 5 }}
                                    />
                                </View>
                            </Pressable>
                        </View>
                        {showMethod && (<View style={{ marginHorizontal: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'gray', marginBottom: 10 }} >
                                Momo
                            </Text>
                            <View style={{ backgroundColor: '#fff', borderRadius: 6, padding: 10, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'gray' }} >
                                    0838439296
                                </Text>
                                <Icon name="copy-outline" size={20} color={'gray'} />
                            </View>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'gray', marginBottom: 10 }} >
                                Chuyển khoản với nội dung
                            </Text>
                            <View style={{ backgroundColor: '#fff', borderRadius: 6, padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'gray' }} >
                                    Nextwave - Momo - 323234
                                </Text>
                                <Icon name="copy-outline" size={20} color={'gray'} />
                            </View>
                        </View>)}
                        {showMethod2 && (<View style={{ marginHorizontal: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'gray', marginBottom: 10 }} >
                                Ngân hàng BIDV
                            </Text>
                            <View style={{ backgroundColor: '#fff', borderRadius: 6, padding: 10, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'gray' }} >
                                    16810000358127
                                </Text>
                                <Icon name="copy-outline" size={20} color={'gray'} />
                            </View>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'gray', marginBottom: 10 }} >
                                Chuyển khoản với nội dung
                            </Text>
                            <View style={{ backgroundColor: '#fff', borderRadius: 6, padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'gray' }} >
                                    Nextwave - Banking - 323234
                                </Text>
                                <Icon name="copy-outline" size={20} color={'gray'} />
                            </View>
                        </View>)}

                        <Pressable onPress={() => setModal(!modal)}>
                            <View style={{
                                margin: 10,
                                height: 50,
                                backgroundColor: '#32b768',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 6
                            }}>
                                <Text style={{ fontWeight: 'bold', color: '#fff' }}>Hoàn tất</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </Modal>
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
                            Xác nhận và Thanh toán
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={{ height: 'auto', backgroundColor: '#fff', marginHorizontal: 20, borderRadius: 6 }}>
                    <View style={{ margin: 10, borderBottomColor: 'gray', borderBottomWidth: 1, paddingBottom: 10 }}>
                        <Text style={{ color: 'gray' }}>
                            <Icon name="location-outline" size={18} color={'gray'} />
                            Nhà hàng áp dụng
                        </Text>
                        <Text style={{ fontWeight: 'bold', marginTop: 10, marginHorizontal: 10 }}>
                            {item.address}
                        </Text>
                    </View>
                    <View style={{ margin: 10, borderBottomColor: 'gray', borderBottomWidth: 1, paddingBottom: 10 }}>
                        <Text style={{ color: 'gray' }}>
                            <Icon name="md-person-outline" size={18} color={'gray'} />
                            Số lượng
                        </Text>
                        <Text style={{ fontWeight: 'bold', marginTop: 10, marginHorizontal: 10 }}>
                            {item.customerOrder} Khách
                        </Text>
                    </View>
                    <View style={{ margin: 10, borderBottomColor: 'gray', borderBottomWidth: 1, paddingBottom: 10 }}>
                        <Text style={{ color: 'gray' }}>
                            <Icon name="md-time-outline" size={18} color={'gray'} />
                            Thời gian
                        </Text>
                        <Text style={{ fontWeight: 'bold', marginTop: 10, marginHorizontal: 10 }}>
                            {item.timeOrder}, Ngày {item.dateOrder}
                        </Text>
                    </View>
                    <View style={{ margin: 10, borderBottomColor: 'gray', borderBottomWidth: 1, paddingBottom: 10 }}>
                        <Text style={{ color: 'gray' }}>
                            <Icon name="md-cube-outline" size={18} color={'gray'} />
                            Combo Decor
                        </Text>
                        <Text style={{ fontWeight: 'bold', marginTop: 10, marginHorizontal: 10 }}>
                            {item.comboOrder.length === 0 ?
                                (<Text>Không</Text>) :
                                (
                                    item.comboOrder.map((item, index) => (
                                        <Text key={index}>{item.name}, </Text>
                                    ))
                                )
                            }
                        </Text>
                    </View>
                    <View style={{ margin: 10, paddingBottom: 10 }}>
                        <Text style={{ color: 'gray' }}>
                            <Icon name="md-gift-outline" size={18} color={'gray'} />
                            Ưu đãi
                        </Text>
                        <Text style={{ fontWeight: 'bold', marginTop: 10, marginHorizontal: 10 }}>
                            Không
                        </Text>
                    </View>
                </View>
                <View style={{ margin: 20, height: 300, backgroundColor: '#fff', borderRadius: 6 }}>
                    <Text style={{ margin: 10, fontSize: 15, fontWeight: 'bold' }}>
                        THÔNG TIN THÊM
                    </Text>
                    <TextInput
                        style={{
                            margin: 10,
                            borderWidth: 1,
                            borderColor: 'gray',
                            padding: 20,
                            minHeight: 100,
                        }}
                        placeholder="Ghi chú cho nhà hàng..."
                        editable
                        multiline
                        numberOfLines={4}
                    />
                </View>
            </SafeAreaView>
            <FloatingButton title={`Thanh toán ${formatCost(cost)}`} onPress={() => setModal(true)} />
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

export default Checkout;
