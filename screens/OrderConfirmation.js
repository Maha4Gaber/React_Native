import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Button } from 'react-native';

const OrderConfirmation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Confirmation</Text>
      <Text style={styles.message}>Thank you for your order!</Text>
      <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.submitButtonText}>Back to Home</Text>
      </TouchableOpacity>
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

export default OrderConfirmation;
