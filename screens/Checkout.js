import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { CartContext } from './CartContext';
import Icon from 'react-native-vector-icons/Ionicons';

const Checkout = ({ navigation }) => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentDetails, setPaymentDetails] = useState('');

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text style={styles.cartItemText}>{item.name}</Text>
      <Text style={styles.cartItemText}>${item.price}</Text>
      <TouchableOpacity onPress={() => removeFromCart(item.id)}>
        <Icon name="trash-outline" size={24} color="#D6758D" />
      </TouchableOpacity>
    </View>
  );

  const handlePlaceOrder = () => {
    if (shippingAddress === '' || paymentDetails === '') {
      alert('Please fill in all details.');
      return;
    }

    // Simulate placing order
    alert('Order placed successfully!');
    navigation.navigate('OrderConfirmation');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.cartList}
      />
      <Text style={styles.label}>Shipping Address</Text>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          value={shippingAddress}
          onChangeText={setShippingAddress}
          placeholder="Enter shipping address"
        />
      </View>

      <Text style={styles.label}>Payment Details</Text>
      <TextInput
        style={styles.input}
        value={paymentDetails}
        onChangeText={setPaymentDetails}
        placeholder="Enter payment details"
      />
      <TouchableOpacity style={styles.submitButton} onPress={handlePlaceOrder}>
        <Text style={styles.submitButtonText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
    color:'#D6758D',
  },
  cartList: {
    marginBottom: 16,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor:'#fff',
    margin:10,
    flexWrap:'wrap',
    borderRadius:10,
  },
  cartItemText: {
    fontSize: 20,
    color:'#D6758D',
    fontWeight:'bold'
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    color:'#D6758D'
  },
  input: {
    padding: 8,
    marginTop: 8,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 12,
    borderWidth:1,
    borderColor:'#D6758D',
    marginBottom:10
  },
  submitButton: {
    backgroundColor: '#D6758D',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
    width:'100%',
    textAlign:'center'
  },
});

export default Checkout;
