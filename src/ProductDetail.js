import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, FlatList, StatusBar, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../src/redux/cartSlice'; 
import Back from './Back';

const { width, height } = Dimensions.get('window');

const ProductDetails = ({ route }) => {
  const { product } = route.params;
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [buttonText, setButtonText] = useState('Sepete Ekle');
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedSize(selectedColor.sizes[0].size);
  }, [selectedColor]);

  const handleAddToCart = () => {
    const item = {
      id: product.id,
      name: product.description,
      color: selectedColor.colorName,
      size: selectedSize,
      price: product.price,
      quantity: 1,
      image: selectedColor.images[0]
    };
    dispatch(addToCart(item));

    setButtonText('Ürün sepete eklendi!');
    setTimeout(() => {
      setButtonText('Sepete Ekle');
    }, 2000);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      <Back />
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={styles.imageContainer}>
        {selectedColor.images.map((src, index) => (
          <Image key={index} source={{ uri: src }} style={styles.productImage} />
        ))}
      </ScrollView>

      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{product.description}</Text>
        <Text style={styles.productPrice}>{product.price} ₺</Text>
      </View>

      <View style={styles.colorsContainer}>
        <FlatList
          data={product.colors}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.colorButton} onPress={() => setSelectedColor(item)}>
              <Image source={{ uri: item.images[0] }} style={styles.colorImage} />
              <Text style={styles.colorText}>{item.colorName}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.colorName}
        />
      </View>

      <View style={styles.sizesContainer}>
        <FlatList
          data={selectedColor.sizes}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.sizeButton, selectedSize === item.size && styles.selectedSizeButton]}
              onPress={() => setSelectedSize(item.size)}
            >
              <Text style={styles.sizeText}>{item.size}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.size}
        />
      </View>

      <View style={styles.cont}>
        <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
          <Text style={{ textAlign: "center", color: "white" }}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: width,
  },
  productImage: {
    width: width,
    height: height * 0.6,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 25,
    color: 'black',
    fontWeight: "bold",
    marginTop: 5,
  },
  sizesContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  sizeButton: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginRight: 10,
    minWidth: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedSizeButton: {
    borderColor: '#000',
    backgroundColor: '#ddd',
  },
  colorButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  sizeText: {
    fontSize: 16,
  },
  colorText: {
    fontSize: 16,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    height: 60,
    backgroundColor: "black",
    borderRadius: 10,
  },
  cont: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  colorImage: {
    width: 60,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
    resizeMode: "contain",
  },
});

export default ProductDetails;
