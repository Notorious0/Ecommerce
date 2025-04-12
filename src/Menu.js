import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.logo}>MeetFashion</Text>
      </View>
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('ProductList', { category: 'Tshirt' })}>
        <Text style={styles.category}>Erkek Tshirt</Text>
        <Image source={require('../assets/Etshirt.webp')} style={styles.image} resizeMode="cover" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('ProductList', { category: 'Sweatshirt' })}>
        <Text style={styles.category}>Erkek Sweatshirt</Text>
        <Image source={require('../assets/Esweatwebp.webp')} style={styles.image} resizeMode="cover" />
      </TouchableOpacity>
      <View style={styles.box}>
        <Text style={styles.category}>Kadın Tshirt</Text>
        <Image source={require('../assets/Ktshirt.webp')} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.box}>
        <Text style={styles.category}>Kadın Sweatshirt</Text>
        <Image source={require('../assets/Ksweat.webp')} style={styles.image} resizeMode="cover" />
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  top: {
    backgroundColor: "black",
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 30,
  },
  box: {
    width: "100%",
    height: 190,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: "gray",
    borderTopColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "relative",
    backgroundColor: "#fff",
  },
  category: {
    position: "absolute",
    left: 0,
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10,
  },
  image: {
    position: "absolute",
    right: 0,
    width: 170,
    height: "100%",
    overflow: 'hidden',
  },
});
