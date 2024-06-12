import React, { useState, useEffect } from 'react';
import {ActivityIndicator, View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://retoolapi.dev/pmRHmd/data')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
        <ActivityIndicator size="large" color="#D6758D" />
      </View>
    );
  }

  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Product_Details', { productId: item.id })}
      >
        <Image source={{ uri: item.logo }} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addToCartButton} onPress={() => {/* Handle add to cart action */}}>
        <Icon name="cart-outline" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList 
      data={products} 
      renderItem={renderProduct} 
      keyExtractor={item => item.id.toString()} 
      contentContainerStyle={styles.productList}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productList: {
    padding: 10,
  },
  productContainer: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 5,
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    // maxWidth: (Dimensions.get('window').width / 3) - 20, // Adjusting for margins and padding
    position: 'relative',  // Needed for positioning the add to cart button
  },
  productImage: {
    width: '100%',
    height: 220,
    borderRadius: 5,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productDescription: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  productPrice: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  addToCartButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#D6758D',  // Example color, can be changed
    borderRadius: 20,
    padding: 5,
  },
});

export default HomeScreen;
