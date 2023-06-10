import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/HomeScreen';
import BookingHistory from './screens/BookingHistory';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoute() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#32b768',
        inactiveTintColor: 'gray',
        showLabel: false,
        style: {
          height: 60,
          paddingTop: 10,
          paddingBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name="home" color={color} size={25} />;
          },
        }}
      />
      <Tab.Screen
        name="History"
        component={BookingHistory}
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name="checklist" color={color} size={25} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name="person" color={color} size={25} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={TabRoute} />
        {/* <Stack.Screen name="Restaurant" component={Restaurant} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
