import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeNavigation from './HomeNavigation';
import ProfileScreen from '../screen/ProfileScreen';
import NotificationScreen from '../screen/NotificationScreen';
const Tab = createMaterialBottomTabNavigator();
export default function BottomTabNavigation() {
  return (

    <Tab.Navigator barStyle={{ backgroundColor: "#ffffff"}} activeColor='black' inactiveColor='gray'
     initialRouteName='Home'  shifting={false}>
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({color}: {color: string}) =>(
            <MaterialCommunityIcons name="home" color={color} size={22} />
          ),
        }}
      />
<Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon:({color}: {color: string}) =>(
            <MaterialCommunityIcons name="book" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book" color={color} size={22} />
          ),
        }}
      />
  
  </Tab.Navigator>
  )
    }
