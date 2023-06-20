import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  SafeAreaView
} from "react-native";
import React from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";
import Icon from "react-native-vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Settings = ({ navigation }) => {
  const cacheAndCellularItems = [
    {
      icon: "account-circle",
      text: "Cài đặt tài khoản",
      sub: "edit",
    },
  ];
  const accountItems = [
    {
      icon: "language",
      text: "Ngôn ngữ",
      sub: "chevron-right",
    },
    { icon: "comment", text: "Phản hồi", sub: "chevron-right" },
    {
      icon: "star-rate",
      text: "Đánh giá ứng dụng",
      sub: "chevron-right",
    },
    { icon: "save-alt", text: "Cập nhật", sub: "chevron-right" },
  ];
  const [userDetails, setUserDetails] = React.useState();
  React.useEffect(()=>{
    getUserData();
  }, []);
  const getUserData = async () => {
    const UserLoggedInData = await AsyncStorage.getItem("UserLoggedInData")

    if(UserLoggedInData){
      let udata = JSON.parse(UserLoggedInData);
      setUserDetails(udata.user);
      console.log("-----------------")
      console.log(udata.user)
      console.log("-----------------")
    }
  }
    
  const logout = async () => {
    await AsyncStorage.removeItem('UserLoggedInData');
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
      GoogleSignin.signOut()
      navigation.navigate("Login")
  }

  const renderSettingsItem = ({ icon, text, sub }) => (
    <TouchableOpacity activeOpacity={0.5}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: COLORS.white,
      }}
    >
      <MaterialIcons name={icon} size={24} color="grey" />
      <Text
        style={{
          marginLeft: 15,
          fontWeight: 600,
          fontSize: 15,
          minWidth: 200,
        }}
      >
        {text}
      </Text>
      <MaterialIcons
        name={sub}
        size={24}
        color="grey"
        style={{
          marginLeft: 70,
          fontWeight: 600,
          fontSize: 24,
        }}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View style={style.header}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          Thông tin tài khoản
        </Text>
      </View>

      <View style={style.itemCard}>
        <Image
          source={{uri: userDetails ? userDetails.photoURL : "https://api-private.atlassian.com/users/9cea692d0a59c5e100680165cbbeb496/avatar"}}
          style={{ height: 50, width: 50, borderRadius: 50 }}
        />
        <View
          style={{
            height: 100,
            marginLeft: 25,
            paddingVertical: 32,
            flex: 1,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            {userDetails?.displayName}
          </Text>
          <Text style={{ fontSize: 13, color: COLORS.grey }}>
          {userDetails?.email}
          </Text>
        </View>
        <View>
          <Icon
            name="notifications"
            size={30}
            color={COLORS.grey}
          />
        </View>
      </View>

      <ScrollView style={{ marginHorizontal: 20 }}>
        {/* Account */}
        <View style={{ marginBottom: 12 }}>
          <Text style={{ marginVertical: 10 }}>Account </Text>
          <View
            style={{
              backgrounColor: COLORS.gray,
              borderRadius: 5,
              overflow: "hidden",
            }}
          >
            {cacheAndCellularItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>

        {/* Settings */}
        <View style={{ marginBottom: 12 }}>
          <Text style={{ marginVertical: 10 }}>Settings</Text>
          <View
            style={{
              borderRadius: 5,
              backgrounColor: COLORS.gray,
              overflow: "hidden",
            }}
          >
            {accountItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{ justifyContent: "center", alignItems: "center" }}
            onPress={logout}
          >
            <View style={style.btnContainer}>
              <Text style={style.btnText}>
                <Text>Đăng xuất</Text>
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  itemCard: {
    height: 80,
    borderRadius: 5,
    backgroundColor: COLORS.white,
    marginVertical: 5,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  btnText: {
    color: COLORS.white,
    fontWeight: "500",
    fontSize: 16,
  },
  btnContainer: {
    backgroundColor: "red",
    height: 35,
    width: 130,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: COLORS.primary,
  },
});

export default Settings;
