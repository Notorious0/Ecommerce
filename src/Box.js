import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import BoxProduct from './BoxProduct';
import { useSelector } from 'react-redux';
import { useStripe } from '@stripe/stripe-react-native';

const Box = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.auth.user);
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const handleCheckout = async () => {
    const token = user?.token; 
 
  
    try {
      const response = await fetch('http://10.0.2.2:5000/api/payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: totalPrice * 100 }),
      });
  
      const data = await response.json();
      const { paymentIntent } = data;
  
      const { error } = await initPaymentSheet({
        paymentIntentClientSecret: paymentIntent,
        merchantDisplayName: 'Meet Fashion',
      });
  
      if (!error) {
        const result = await presentPaymentSheet();
        if (result.error) {
          console.error('Ödeme sırasında hata:', result.error);
        } else {
          console.log('Ödeme başarıyla gerçekleştirildi');
  
          
          const orderResponse = await fetch('http://10.0.2.2:5000/api/orders', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`, 
            },
            body: JSON.stringify({
              items: cartItems,
              totalAmount: totalPrice,
            }),
          });
  
          if (!orderResponse.ok) {
            const orderText = await orderResponse.text();
            throw new Error('Sipariş oluşturma hatası: ' + orderText);
          }
  
          const orderData = await orderResponse.json();
          console.log('Sipariş verisi:', orderData);
          alert('Sipariş başarıyla oluşturuldu!');
        }
      } else {
        console.error('Payment sheet error:', error);
      }
    } catch (err) {
      console.error('Error during payment:', err);
    }
  };
  
  

  return (
    <View style={styles.container}>
      <View style={styles.top2}>
        <Text style={styles.logo2}>Sepetim</Text>
      </View>

      {cartItems.map((item, index) => (
        <BoxProduct key={item.id || index} product={item} />
      ))}

      <TouchableOpacity style={styles.bottomContainer} onPress={handleCheckout}>
        <Text style={styles.totalPrice}>Toplam Fiyat: {totalPrice} TL</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  logo2: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bottomContainer: {
    backgroundColor: '#6200EE',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  totalPrice: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Box;
