import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../src/redux/cartSlice';

const BoxProduct = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(product.quantity || 1); 

  const increaseQuantity = () => {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      dispatch(updateQuantity({ id: product.id, quantity: newQuantity })); 
  };

  const decreaseQuantity = () => {
      if (quantity > 1) {
          const newQuantity = quantity - 1;
          setQuantity(newQuantity);
          dispatch(updateQuantity({ id: product.id, quantity: newQuantity })); 
      }
  };
  const handleRemove = () => {
    dispatch(removeFromCart({ 
      id: product.id, 
      color: product.color, 
      size: product.size 
    }));
  };

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.container2}>
                <Image
                 source={{ uri: product.image }}
                 style={styles.image}
                />
                <View style={styles.column}>
                    <Text style={styles.name}>{product.name}</Text>
                    <Text style={styles.name}>Renk: {product.color}</Text>
                    <Text style={styles.name}>Beden: {product.size}</Text>
                    <View style={styles.row}>
                        <View style={styles.counterContainer}>
                            <TouchableOpacity style={styles.button} onPress={decreaseQuantity}>
                                <Text style={styles.buttonText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.quantity}>{quantity}</Text>
                            <TouchableOpacity style={styles.button} onPress={increaseQuantity}>
                                <Text style={styles.buttonText}>+</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.trash} onPress={handleRemove}>
                                <FontAwesome5 name="trash" size={24} color="white" />
                            </TouchableOpacity>
                            <Text style={styles.price}>{(product.price * quantity).toFixed(2)} TL</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default BoxProduct;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    container2: {
        width: 415,
        height: 150,
        backgroundColor: "black",
        flexDirection: "row",
        alignItems: "center",
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        marginLeft: 10,
    },
    column: {
        flexDirection: "column",
        marginLeft: 10,
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    button: {
        width: 25,
        height: 25,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginHorizontal: 10,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    quantity: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    row: {
        flexDirection: "row",
    },
    trash: {
        marginLeft: 20,
    },
    price: {
        color: "white",
        fontSize: 14,
        marginLeft: 20,
    },
    image: {
      width: 120,
      height: 120,
      resizeMode: 'contain', // Görselin nasıl sığacağını ayarlar
      marginLeft: 15,
      borderRadius:15,
  },
});
