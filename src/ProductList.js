import { StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Product from './Product';
import TopBar from './TopBar';
import axios from 'axios';

const ProductList = ({ route }) => {
  const { category } = route.params; 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:5000/api/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Veri alınırken hata oluştu:', error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = category
    ? products.filter(product => product.category === category)
    : products;

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  const handleProductPress = (product) => {
    navigation.push('ProductDetail', { product });
  };
  
  
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.logo}>MeetFashion</Text>
      </View>
      <TopBar />
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
        <Product product={item} onPress={() => handleProductPress(item)}/>
      )}
        keyExtractor={(item) => item._id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.container2}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  container2: {
    paddingHorizontal: 5,
    backgroundColor: 'black',
  },
  top: {
    backgroundColor: 'black',
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 30,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  productContainer: {
    flex:1
  },
  touchableOpacity: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center', // Gerekirse içeriği ortalamak için
    padding: 10, // Düğme alanını ayarlayın
  },
});
