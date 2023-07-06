import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import COLORS from "../constants/colors";

const PrimaryButton = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainer}>
        <Text style={style.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const SecondaryButton = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={{ ...style.btnContainer, backgroundColor: COLORS.white }}>
        <Text style={{ ...style.title, color: COLORS.primary }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const DetailButton = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnDetail}>
        <Text style={style.smallTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const DeleteButton = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnDelete}>
        <Text style={style.smallTitle1}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  title: { color: COLORS.white, fontWeight: "bold", fontSize: 18 },
  smallTitle: { color: COLORS.white, fontWeight: "bold", fontSize: 10 },
  smallTitle1: { color: COLORS.primary, fontWeight: "bold", fontSize: 10 },

  btnContainer: {
    backgroundColor: COLORS.primary,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  btnDetail: {
    backgroundColor: COLORS.primary,
    height: 20,
    width: 60,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  btnDelete: {
    backgroundColor: COLORS.white,
    height: 20,
    width: 60,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});

export { PrimaryButton, SecondaryButton, DetailButton, DeleteButton };
