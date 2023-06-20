import React from "react";
import Icon from "react-native-vector-icons/Octicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import BookingHistory from "../screens/BookingHistory";
import Settings from "../screens/Settings";
const Tab = createBottomTabNavigator();



export default function TabRoute () {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#32b768",
          inactiveTintColor: "gray",
          showLabel: false,
          style: {
            height: 60,
            paddingTop: 10,
            paddingBottom: 5,
          },
        }}
      >
        <Tab.Screen
          name="Home1"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => {
              return <Icon name="home" color={color} size={25} />;
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="History"
          component={BookingHistory}
          options={{
            tabBarIcon: ({ color }) => {
              return <Icon name="checklist" color={color} size={25} />;
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Settings}
          options={{
            tabBarIcon: ({ color }) => {
              return <Icon name="person" color={color} size={25} />;
            },
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    );
  }