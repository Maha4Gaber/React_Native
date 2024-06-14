import React, { useContext, useEffect, useState } from 'react';
import { TouchableOpacity,View, Text, StyleSheet, Image } from 'react-native';
import { CartContext } from './CartContext';
import Icon from 'react-native-vector-icons/Ionicons';

const ProductDetails = ({route}) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('https://retoolapi.dev/g1lm2L/data/' + route.params.productId)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);
  console.log(route.params);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Display the product image */}
        <Image source={{ uri: product.logo }} style={styles.productImage} />
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <Text style={styles.productPrice}>Price: ${product.price}</Text>
        {/* Add other product details here */}
      </View>
      <TouchableOpacity style={styles.addToCartButton} onPress={() => addToCart(product)}>
        <Icon name="cart-outline" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  card: {
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
    position: 'relative',
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D6758D',
  },
  productImage: {
    width: '100%',
    height: 200, // Set the height of the image as desired
    marginBottom: 10,
    borderRadius: 10,
  },
  addToCartButton: {
    position: 'absolute',
    bottom: 50,
    right: 50,
    backgroundColor: '#D6758D',  // Example color, can be changed
    borderRadius: 20,
    padding: 5,
  },
});

export default ProductDetails;
