// CartContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const storedCart = await AsyncStorage.getItem('cartItems');
        if (storedCart) {
          setCartItems(JSON.parse(storedCart));
        }
      } catch (error) {
        console.error('Failed to load cart items', error);
      }
    };

    loadCart();
  }, []);

  const saveCart = async (items) => {
    try {
      await AsyncStorage.setItem('cartItems', JSON.stringify(items));
    } catch (error) {
      console.error('Failed to save cart items', error);
    }
  };

  const addToCart = (product) => {
    const updatedCart = [...cartItems, { ...product, quantity: 1 }];
    setCartItems(updatedCart);
    saveCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
    saveCart(updatedCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cartItems.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ).filter(item => item.quantity > 0);
    setCartItems(updatedCart);
    saveCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
