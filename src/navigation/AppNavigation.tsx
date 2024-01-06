import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigation from './BottomTabNavigation';
import HomeNavigation from './HomeNavigation';
import Welcome from '../screen/Welcome';

const Stack=createNativeStackNavigator();
export default function AppNavigation() {

  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Welcome"  screenOptions={{ headerShown: false }} >
       <Stack.Screen name="Welcome" component={Welcome} />
       <Stack.Screen name="Dashboard" component={BottomTabNavigation}/>
        <Stack.Screen name="HomeNavigation" component={HomeNavigation}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}