import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { clearUser } from './redux/authSlice'; 

const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearUser());
    navigation.navigate('Login'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profilim</Text>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('AccountInfo')}
      >
        <AntDesign name="user" size={24} color="white" />
        <Text style={styles.menuText}>Hesap Bilgilerim</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Orders')}
      >
        <AntDesign name="shoppingcart" size={24} color="white" />
        <Text style={styles.menuText}>Siparişlerim</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Addresses')}
      >
        <Ionicons name="location-outline" size={24} color="white" />
        <Text style={styles.menuText}>Adreslerim</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Help')}
      >
        <Ionicons name="help-circle-outline" size={24} color="white" />
        <Text style={styles.menuText}>Yardım</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <MaterialIcons name="logout" size={24} color="white" />
        <Text style={styles.logoutText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'black',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    fontSize: 18,
    marginLeft: 12,
    color: "white"
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    marginTop: 20,
  },
  logoutText: {
    fontSize: 18,
    marginLeft: 12,
    color: 'red',
  },
});

export default Profile;
