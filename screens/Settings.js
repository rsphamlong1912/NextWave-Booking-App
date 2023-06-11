import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";
import Icon from "react-native-vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";

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

  const renderSettingsItem = ({ icon, text, sub }) => (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingLeft: 12,
        backgroundColor: COLORS.white,
      }}
    >
      <MaterialIcons name={icon} size={24} color="black" />
      <Text
        style={{
          marginLeft: 36,
          fontWeight: 600,
          fontSize: 16,
          minWidth: 200,
        }}
      >
        {text}
      </Text>
      <MaterialIcons
        name={sub}
        size={24}
        color="black"
        style={{
          marginLeft: 36,
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
        backgroundColor: COLORS.light,
      }}
    >
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            left: 0,
          }}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={24}
            color={COLORS.black}
          />
        </TouchableOpacity>

        <Text style={{}}>Settings</Text>
      </View>

      <View style={style.itemCard}>
        <Image
          source={require("./../assets/avatar.jpeg")}
          style={{ height: 40, width: 40, borderRadius: 50 }}
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
            Trinh Ngoc Bao
          </Text>
          <Text style={{ fontSize: 13, color: COLORS.grey }}>
            baovippro@gmail.com
          </Text>
        </View>
        <View>
          <Icon
            name="notifications-circle-outline"
            size={30}
            color={COLORS.grey}
          />
        </View>
      </View>

      <ScrollView style={{ marginHorizontal: 12 }}>
        {/* Account */}
        <View style={{ marginBottom: 12 }}>
          <Text style={{ marginVertical: 10 }}>Account </Text>
          <View
            style={{
              borderRadius: 12,
              backgrounColor: COLORS.gray,
              borderRadius: 20,
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
              borderRadius: 12,
              backgrounColor: COLORS.gray,
              borderRadius: 20,
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
    height: 50,
    elevation: 1,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 5,
    marginLeft: 10,
    marginRight: 10,
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
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});

export default Settings;
