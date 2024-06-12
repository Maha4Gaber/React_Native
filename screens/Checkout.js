// Checkout.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Checkout = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <Button title="Place Order" onPress={() => navigation.navigate('OrderConfirmation')} />
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
});

export default Checkout;
