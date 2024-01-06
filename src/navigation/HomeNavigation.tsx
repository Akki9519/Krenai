import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screen/HomeScreen';


const HomeStack=createNativeStackNavigator();

export default function HomeNavigation() {
  return (
    <>
    <HomeStack.Navigator >

   <HomeStack.Screen name="Kitchen Jar" component={HomeScreen} />
   
  
    </HomeStack.Navigator>
    </>
  )
}

const styles = StyleSheet.create({

  
})