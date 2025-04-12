import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

const Add = () => {
  return (
    <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
       <Text style={{textAlign:"center",color:"white"}}>Sepete Ekle</Text>
       </TouchableOpacity>
    </View>
  )
}

export default Add

const styles = StyleSheet.create({
    container:{
        width:250,
        height:60,
        backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center",
        marginTop:10
    },
    button:{
        justifyContent:"center",
        alignItems:"center",
        width:250,
        height:60,
        backgroundColor:"black",
        borderRadius:10
      }
})