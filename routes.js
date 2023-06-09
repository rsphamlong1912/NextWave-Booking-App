import React from "react";
import Icon from "react-native-vector-icons/Octicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/HomeScreen";
import BookingHistory from "./screens/BookingHistory";
import RestaurantDetail from "./screens/RestaurantDetail";
import Map from "./screens/MapScreen";
import ComboDecoration from "./screens/ComboDecoration";
import Checkout from "./screens/Checkout";
import Settings from "./screens/Settings";
import Login from "./screens/Login"
import Order from "./screens/Order"
import DoneDeal from "./screens/DoneDeal"
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import TabRoute from "./components/TabRoute";

// const TabRoute = () => {
//   return (
//     <Tab.Navigator
//       tabBarOptions={{
//         activeTintColor: "#32b768",
//         inactiveTintColor: "gray",
//         showLabel: false,
//         style: {
//           height: 60,
//           paddingTop: 10,
//           paddingBottom: 5,
//         },
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarIcon: ({ color }) => {
//             return <Icon name="home" color={color} size={25} />;
//           },
//           headerShown: false,
//         }}
//       />
//       <Tab.Screen
//         name="History"
//         component={BookingHistory}
//         options={{
//           tabBarIcon: ({ color }) => {
//             return <Icon name="checklist" color={color} size={25} />;
//           },
//           headerShown: false,
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Settings}
//         options={{
//           tabBarIcon: ({ color }) => {
//             return <Icon name="person" color={color} size={25} />;
//           },
//           headerShown: false,
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={TabRoute} />
        <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="ComboDecoration" component={ComboDecoration} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="DoneDeal" component={DoneDeal} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
