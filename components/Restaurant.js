import React from "react";
import { SafeAreaView, StyleSheet, View, Text, FlatList } from "react-native";
import ItemRestaurant from "./../components/ItemRestaurant";


// const restaurant = [
//     {
//         id: "1",
//         name: "Bơ Bán Bò",
//         address: "203 Đ.Lê Văn Việt, Hiệp Phú",
//         time: "10:00 AM - 11:00 PM",
//         image: require("./../assets/Carousel/222.webp"),
//         latitude: 10.8441,
//         longitude: 106.78288,
//     },
//     {
//         id: "2",
//         name: "Mỳ cay SaSin",
//         address: "402 Đ.Lê Văn Việt, Hiệp Phú",
//         time: "09:00 AM - 11:00 PM",
//         image: require("./../assets/Carousel/111.jpg"),
//         latitude: 10.844881042642191,
//         longitude: 106.78698599634549,
//     },
//     {
//         id: "3",
//         name: "Cơm tấm Phúc Lộc Thọ",
//         address: "139 Hẻm 445, Phước Long B",
//         time: "08:00 AM - 08:00 PM",
//         image: require("./../assets/Carousel/com.webp"),
//         latitude: 10.848490623116383,
//         longitude: 106.77529661169041,
//     },
//     {
//         id: "4",
//         name: "Vua Hải Sản",
//         address: "95E Quang Trung, Hiệp Phú",
//         time: "10:00 AM - 11:00 PM",
//         image: require("./../assets/Carousel/222.webp"),
//         latitude: 10.837008026767474,
//         longitude: 106.78176886750917,
//     },
//     {
//         id: "5",
//         name: "Hanuri-Korean Fast Food",
//         address: "284 Nguyễn Đình Chiểu, Phường 6, Quận 3",
//         time: "099:00 AM - 11:30 PM",
//         image: require("./../assets/Carousel/Hanuri.jpg"),
//         latitude: 10.775584235106257,
//         longitude: 106.68713606625653,
//     },
//     {
//         id: "6",
//         name: "Vee Ayy",
//         address: "345/84 Đ. Trần Hưng Đạo, Cầu Kho, Quận 1",
//         time: "10:00 AM - 10:30 PM",
//         image: require("./../assets/Carousel/vee-ayy.jpg"),
//         latitude: 10.760440824011862,
//         longitude: 106.6896795572887,
//     },
//     {
//         id: "7",
//         name: "Kichi Kichi",
//         address: "Số 338 Đỗ Xuân Hợp, Phước Long A, Quận 9",
//         time: "10:00 AM - 10:00 PM",
//         image: require("./../assets/Carousel/kichi-kichi.png"),
//         latitude: 10.822944055835185,
//         longitude: 106.77066314829463,
//     },
//     {
//         id: "8",
//         name: "King BBQ",
//         address: "50 Lê Văn Việt, Hiệp Phú, Quận 9",
//         time: "10:00 AM - 09:00 PM",
//         image: require("./../assets/Carousel/King.jpg"),
//         latitude: 10.84732517428933,
//         longitude: 106.77628480436397,
//     },
//     {
//         id: "9",
//         name: "Cơm tấm Sà Bì Chưởng",
//         address: "179 Đ. Trần Bình Trọng, Phường 3, Quận 5",
//         time: "07:00 AM - 09:00 PM",
//         image: require("./../assets/Carousel/sabichuong.webp"),
//         latitude: 10.758762794275922,
//         longitude: 106.68051346936198,
//     },
//     {
//         id: "10",
//         name: "A Mà Kitchen",
//         address: "62 Võ Văn Tần, Phường 6, Quận 3",
//         time: "10:30 AM - 09:00 PM",
//         image: require("./../assets/Carousel/ama.jpg"),
//         latitude: 10.7768469439067,
//         longitude: 106.69026283867206,
//     },
//     {
//         id: "11",
//         name: "No-Ne Bistro",
//         address: "48 Đường Nguyễn Văn Mai, Phường 8, Quận 3",
//         time: "11:30 AM - 10:30 PM",
//         image: require("./../assets/Carousel/none.webp"),
//         latitude: 10.790032685611157,
//         longitude: 106.68744825401734,
//     },
//     {
//         id: "12",
//         name: "Maison Mận-Đỏ",
//         address: "27J Đ. Trần Nhật Duật, Phường Tân Định, Quận 1",
//         time: "11:00 AM - 10:00 PM",
//         image: require("./../assets/Carousel/maison.jpg"),
//         latitude: 10.793057450832194,
//         longitude: 106.69022156701138,
//     },
//     {
//         id: "13",
//         name: "K-Pub",
//         address: "128 Đặng Văn Bi, Bình Thọ, Thủ Đức",
//         time: "10:00 AM - 09:00 PM",
//         image: require("./../assets/Carousel/kpub.jpg"),
//         latitude: 10.845841004828188,
//         longitude: 106.7615345283777,
//     },
//     {
//         id: "14",
//         name: "Bò tơ Phi Long",
//         address: "95G Quang Trung, Phước Long B, Quận 9",
//         time: "10:00 AM - 11:30 PM",
//         image: require("./../assets/Carousel/boto.jpg"),
//         latitude: 10.83892195093161,
//         longitude: 106.7728529368383,
//     },
// ];

const restaurant = [ 
    {
        id: "1",
        name: "Bistro Song Vie Saigon 2",
        address: "195 Nguyễn Văn Hưởng, Phường Thảo Điền, Quận 2",
        time: "10:00 AM - 10:30 PM",
        image: "https://afamilycdn.com/2019/3/15/photo-4-15526565287261349827203.jpg",
        menu: "https://villasong.com/wp-content/uploads/2020/04/Delivery-03-scaled.jpg",
        map: require('../assets/MapScreen/Bistro.jpg'),
        latitude: 10.815884830664244, 
        longitude: 106.7339641861629,
    },
    {
        id: "2",
        name: "Sorae Restaurant – Lounge",
        address: "36 Đ. Hồ Tùng Mậu, Bến Nghé, Quận 1",
        time: "05:30 PM - 01:00 AM",
        image: "https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-sorae-sushi-saigon-2a-normal-12101665653.jpg",
        menu: "https://storage.googleapis.com/public-tripi/food/img/454425NlVXZP/0042.jpg",
        map: require('../assets/MapScreen/Sorae.jpg'),
        latitude: 10.771595294233089, 
        longitude: 106.70431233028606,
    },
    {
        id: "3",
        name: "El Gaucho Argentinian Steakhouse",
        address: "74 Hai Bà Trưng, Quận 1",
        time: "10:30 AM - 11:00 PM",
        image: "https://s3.ap-northeast-1.wasabisys.com/admin-order/2023/05/31/88064630-1cae-494c-aa26-fad47cdb287a/4.png",
        menu: "https://websitecukcukvn.misacdn.net/wp-content/uploads/2023/03/lunch-menu-722x1024.png",
        map: require('../assets/MapScreen/Elgaucho.jpg'),
        latitude: 10.778070369191733, 
        longitude: 106.70361118438561,
    },
    {
        id: "4",
        name: "No-Ne Bistro",
        address: "48 Đường Nguyễn Văn Mai, Phường 8, Quận 3",
        time: "11:30 AM - 10:30 PM",
        image: "https://p16-sign-sg.lemon8cdn.com/tos-alisg-v-a3e477-sg/3294d09e63f349f68793d6656ec3b666~tplv-sdweummd6v-shrink:1080:0:q50.webp?source=seo_feed_list&x-expires=1719446400&x-signature=b1EzeOdL3eJi1sUaLbeZtpotUBc%3D",
        menu: "https://kenhphuquoc.com/wp-content/uploads/menu-nha-hang-shri-phu-quoc-shri-beach-club-bar-kenh-phu-quoc-1-500x667.jpg",
        map: require('../assets/MapScreen/None.jpg'),
        latitude: 10.790032685611157, 
        longitude: 106.68744825401734,
    },
    {
        id: "5",
        name: "Maison Mận-Đỏ",
        address: "27J Đ. Trần Nhật Duật, Phường Tân Định, Quận 1",
        time: "11:00 AM - 10:00 PM",
        image: "https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/nguyenhuong/maisonmandorestauranttnd/maison-man-do-restaurant-tran-nhat-duat-19.jpg",
        menu: "https://cdn.pastaxi-manager.onepas.vn/Content/Uploads/Prices/nguyenhuong/menumaissonmando/maison-man-do-restaurant-3.jpg",
        map: require('../assets/MapScreen/Maison.jpg'),
        latitude: 10.793057450832194, 
        longitude: 106.69022156701138,
    },
    {
        id: "6",
        name: "The Log – Dine & Wine",
        address: "08 Nguyễn Bỉnh Khiêm, Phường Đa Khao, Quận 1",
        time: "05:00 PM - 11:00 PM",
        image: "https://thelog.com.vn/images/uploaded/home/20.06.19/1.jpg",
        menu: "https://cdn.pastaxi-manager.onepas.vn/Content/Uploads/Prices/nguyenhuong/thelogt11/THE-LOG-6.jpg",
        map: require('../assets/MapScreen/Thelog.jpg'),
        latitude: 10.789945695235517, 
        longitude: 106.70234529133164,
    },
    {
        id: "7",
        name: "Nhà hàng Shri",
        address: "Lầu 23 Centec Tower, 72- 74 Nguyễn Thị Minh Khai, quận 3",
        time: "09:00 AM - 12:00 PM",
        image: "https://cdn.tgdd.vn/Files/2021/11/12/1397454/7-nha-hang-sang-chanh-nam-tu-tang-20-tro-len-thich-hop-de-hen-ho-lang-man-202111120815088417.jpg",
        menu: "https://kenhphuquoc.com/wp-content/uploads/menu-nha-hang-shri-phu-quoc-shri-beach-club-bar-kenh-phu-quoc-1-500x667.jpg",
        map: require('../assets/MapScreen/Shri.jpg'),
        latitude: 10.782719767587997, 
        longitude: 106.69743724910023,
    },
    {
        id: "8",
        name: "The Deck SaiGon",
        address: "38 Nguyễn Ư Dĩ, Phường Thảo Điền, Quận 2",
        time: "08:30 AM - 11:30 PM",
        image: "https://cafechoi.com/wp-content/uploads/2020/12/nh%C3%A0-h%C3%A0ng-the-deck-s%C3%A0i-g%C3%B2n.jpg",
        menu: "https://menu.sluurpy.com/menu/6202314/1455310/1.jpg",
        map: require('../assets/MapScreen/Deck.jpg'),
        latitude: 10.807138121521687, 
        longitude: 106.74439599612411,
    },
    {
        id: "9",
        name: "MOO BEEF STEAK PRIME",
        address: "35-37 Ngô Đức Kế, phường Bến Nghé, Quận 1",
        time: "10:30 AM - 10:00 PM",
        image: "https://cdn.jamja.vn/blog/wp-content/uploads/2017/09/quan-an-lang-man-cho-2-nguoi-o-sai-gon-6.jpg",
        menu: "https://images.foody.vn/res/g28/279839/s/foody-checkin-muse-dining-grill-747-636700168011530287.jpg",
        map: require('../assets/MapScreen/Moo.jpg'),
        latitude: 10.77321553347639, 
        longitude: 106.70566693703236,
    },
    {
        id: "10",
        name: "Propeller Rooftop Restaurant & Bar",
        address: "7 Ngô Văn Nam, phường Bến Nghé, Quận 1",
        time: "05:00 PM - 11:00 PM",
        image: "https://images.foody.vn/res/g69/687710/prof/s/foody-upload-api-foody-mobile-fddfdf-190117141939.jpg",
        menu: "https://images.foody.vn/res/g28/279839/s/foody-checkin-muse-dining-grill-747-636700168011530287.jpg",
        map: require('../assets/MapScreen/Propeller.jpg'),
        latitude: 10.781087901475354, 
        longitude: 106.70618100672104,
    },
    {
        id: "11",
        name: "Nossa Steakhouse",
        address: "36 Phạm Hồng Thái, phường Bến Thành, Quận 1",
        time: "10:30 AM - 11:00 PM",
        image: "https://images.foody.vn/res/g9/84991/prof/s/foody-upload-api-foody-mobile-12-jpg-180628141259.jpg",
        menu: "https://cdn.pastaxi-manager.onepas.vn/Content/Uploads/Prices/nguyenhuong/nossasteakhouse/nossa-steakhouse-pham-hong-thai-1.jpg",
        map: require('../assets/MapScreen/Nossa.jpg'),
        latitude: 10.77137336666853, 
        longitude: 106.69576290165132,
    },
    {
        id: "12",
        name: "Secret Garden",
        address: "158 Bis Pasteur, P. Bến Nghé, Quận 1",
        time: "11:00 AM - 10:30 PM",
        image: "https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/secretgarden/nha-hang-secret-garden-restaurant-pasteur-khong-gian-1.jpg",
        menu: "https://cdn.pastaxi-manager.onepas.vn/Content/Uploads/Prices/nguyenhuong/secretgardenpasteur/Nha-hang-secret-garden-pasteur-3.jpg",
        map: require('../assets/MapScreen/Secret.jpg'),
        latitude: 10.777303405663593, 
        longitude: 106.69977549274869,
    },
    {
        id: "13",
        name: "Parkview Buffet",
        address: "New World Saigon Hotel, 76 Lê Lai, Bến Nghé, Quận 1",
        time: "11:00 AM - 11:00 PM",
        image: "https://images.foody.vn/res/g2/15012/prof/s/2017539570-_parkview-2-.jpg",
        menu: "https://oms.hotdeal.vn/images/editors/sources/000350506395/350506-350506-body%20(2).jpg",
        map: require('../assets/MapScreen/Parkview.jpg'),
        latitude: 10.770935697842434, 
        longitude: 106.69505489948799,
    },
    {
        id: "14",
        name: "Saigon Princess",
        address: "SAIGON PORT, 05 Nguyễn Tất Thành, P.12, Quận 3",
        time: "11:00 AM - 10:30 PM",
        image: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/fubnzq6m8wq5qtrrkcc5/Du%20Thuy%E1%BB%81n%20S%C3%B4ng%20S%C3%A0i%20G%C3%B2n%20%26%20%C4%82n%20T%E1%BB%91i%20Tr%C3%AAn%20T%C3%A0u%20Saigon%20Princess.jpg",
        menu: "https://luhanhvietnam.com.vn/du-lich-land-tour/vnt_upload/tour/10_2019/Asian_Sea_Food_Menu.jpg",
        map: require('../assets/MapScreen/Princess.jpg'),
        latitude: 10.76747317009721, 
        longitude: 106.70797206388241,
    },
    {
        id: "15",
        name: "Shang Garden 7",
        address: "23 Nguyễn Khắc Viện, Tân Phú, Quận 7",
        time: "11:00 AM - 11:00 PM",
        image: "https://shanggarden.vn/wp-content/uploads/2017/08/6.nha-hang.jpg",
        menu: "https://cdn.pastaxi-manager.onepas.vn/Content/Uploads/Prices/lent/shanggarden/7.jpg",
        map: require('../assets/MapScreen/Shang.jpg'),
        latitude: 10.729221504833992, 
        longitude: 106.7201554101869,
    },
] 


const Restaurant = ({ navigation }) => {

    return (
        <View >
            <View style={style.container}>
                <Text style={style.mainTitle}>Đặt chỗ nhà hàng</Text>
                <Text style={style.subTitle}>Những nhà hàng gần bạn</Text>
                <Text style={style.moreTitle}>Xem thêm</Text>

            </View>
            {/* <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 80 }}
                data={restaurant}
                renderItem={({ item }) => <ItemRestaurant item={item} navigation={navigation} />}
            /> */}
            {restaurant.map((item) => (
                <ItemRestaurant key={item.id} item={item} navigation={navigation} />
            ))}
        </View>

    )

}

const style = StyleSheet.create({
    container: {
        flex: 1,
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