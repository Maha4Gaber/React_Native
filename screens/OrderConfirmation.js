import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const OrderConfirmation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Confirmation</Text>
      <Text style={styles.message}>Thank you for your order!</Text>
      <Button title="Back to Home" onPress={() => navigation.navigate('HomeScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 32,
  },
});

export default OrderConfirmation;
