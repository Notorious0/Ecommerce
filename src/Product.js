import { StyleSheet, View, Text, Image ,TouchableOpacity} from 'react-native';
import React from 'react';

const Product = ({product,onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.box}>
        <Image
          source={{ uri: product.image }} 
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.header}>{product.description}</Text>
        <Text style={styles.price}>{product.price} TL</Text>
      </View>
     </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    width: '49%',
    marginBottom: 10
  },
  box: {
    width: '100%', 
    height: 370,
    backgroundColor: 'black',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '70%',
    marginTop: 5,
  },
  header: {
    position: 'absolute',
    left: 6,
    bottom: 75,
    fontSize: 14,
    color: 'white',
  },
  price: {
    position: 'absolute',
    left: 7,
    bottom: 15,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
});
