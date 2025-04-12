import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

const TopBar = () => {
  return (
    <View style={styles.container}>
        <View style={styles.box}> 
        <TouchableOpacity style={styles.filter}>
        <Ionicons name="filter-sharp" size={30} color="white" />
        <Text style={{marginLeft:10,fontSize:17,fontWeight:"bold",textAlign:"center",color:"white"}}>Fitrele</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filter2}>
        <FontAwesome5 name="sort" size={24} color="white" />
        <Text style={{marginLeft:10,fontSize:17,fontWeight:"bold",textAlign:"center",color:"white"}}>Sırala</Text>
        </TouchableOpacity>
        </View>
      
    </View>
  )
}

export default TopBar

const styles = StyleSheet.create({
    container:{
        alignItems: 'flex-start',
        backgroundColor:"#696969"
    },
    filter:{
        flexDirection:"row"
    },
    filter2:{
        flexDirection:"row"
    },
    box:{
     width:412,
     height:50,
     flexDirection:"row",
     justifyContent:'space-around',
     alignItems:"center"
    }

})