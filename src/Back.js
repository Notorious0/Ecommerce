import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; 
import { StatusBar } from 'expo-status-bar';

const Back = () => {
  const navigation = useNavigation(); 

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}> 
    <StatusBar style="auto" backgroundColor='black'  />
      <View style={styles.container}>
        <Ionicons name="arrow-back-circle" size={40} color="white" />
      </View>
    </TouchableOpacity>
  );
};

export default Back;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    padding:5,
    marginTop: 15,
  },
});
