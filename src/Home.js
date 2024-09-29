import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.top}>
      <Text style={styles.logo}>MeetFashion</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
      <View style={styles.card}>
        <Image
          source={require('../assets/erkek.webp')} 
          style={styles.image}
          resizeMode="cover" 
        />
        <Text style={styles.text}>Şimdi Keşfet</Text>
        <Text style={styles.text2}>Yeni Sezon Erkek Ürünleri</Text>
      </View>
      <View style={styles.card}>
        <Image
          source={require('../assets/kadın.webp')} 
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.text}>Şimdi Keşfet</Text>
        <Text style={styles.text2}>Yeni Sezon Kadın Ürünleri</Text>
      </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  top:{
    backgroundColor:"black",
    width:"100%",
    height:70,
    justifyContent:"center",
    alignItems:"center"
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop:30
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    margin:10,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 450,
    height:770,
  },
  image: {
    position: 'absolute', // Resmin kartın tamamını kaplamasını sağlar
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});
