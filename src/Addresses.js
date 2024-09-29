import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const Addresses = () => {
  const navigation = useNavigation();
  const [addresses, setAddresses] = useState([]);

  // Adresleri getirme fonksiyonu
  const fetchAddresses = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:5000/api/address/Addresses');
      setAddresses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  const deleteAddress = async (id) => {
    try {
      await axios.delete(`http://10.0.2.2:5000/api/address/deleteAddress/${id}`);
      // State güncelleme
      setAddresses(addresses.filter(address => address._id !== id));
    } catch (error) {
      console.error('Silme hatası:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Adreslerim</Text>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddAddress')}
      >
        <Text style={styles.addButtonText}>Adres Ekle</Text>
      </TouchableOpacity>

      <ScrollView>
        {addresses.length === 0 ? (
          <Text style={styles.noAddressesText}>Henüz bir adres eklemediniz.</Text>
        ) : (
          addresses.map((address, index) => (
            <View key={index} style={styles.addressContainer}>
              <Text style={styles.city}>{address.city}</Text>
              <Text style={styles.info}>{address.name}</Text>
              <Text style={styles.info}>{address.address}</Text>
              <Text style={styles.info}>{address.phone}</Text>

              <View style={styles.actions}>
                <TouchableOpacity>
                <AntDesign name="edit" size={30} color="blue" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteAddress(address._id)}>
  <EvilIcons name="trash" size={30} color="red" />
</TouchableOpacity>

              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  noAddressesText: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
  addressContainer: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor:"black"
  },
  city: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
    color:"white"
  },
  info:{
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
    color:"white"
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editText: {
    color: '#007bff',
  },
  deleteText: {
    color: '#ff0000',
  },
});

export default Addresses;
