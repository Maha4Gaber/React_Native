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
        <Icon name="trash-outline" size={24} color="red" />
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
      <TextInput
        style={styles.input}
        value={shippingAddress}
        onChangeText={setShippingAddress}
        placeholder="Enter shipping address"
      />
      <Text style={styles.label}>Payment Details</Text>
      <TextInput
        style={styles.input}
        value={paymentDetails}
        onChangeText={setPaymentDetails}
        placeholder="Enter payment details"
      />
      <Button title="Place Order" onPress={handlePlaceOrder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cartList: {
    marginBottom: 16,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cartItemText: {
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginTop: 8,
    borderRadius: 4,
  },
});

export default Checkout;
