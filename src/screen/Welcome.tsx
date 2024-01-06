import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'



export default function Welcome({navigation}:any) {
  return (
    <View style={{flex:1, backgroundColor:"white"}}>
      <Text style={{color:"red",textAlign:"center",fontFamily:"serif",fontWeight:"800",marginTop:80,fontSize:20}} >Welcome To Krenai</Text>
      <Text  style={{color:"purple",textAlign:"center",fontWeight:"800",marginTop:80,fontSize:20,backgroundColor:"lightblue",borderRadius:20,height:40,paddingTop:5,marginHorizontal:80}} onPress={()=>navigation.navigate("Dashboard")}>Start</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})