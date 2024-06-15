// Cart.js
import React, { useContext, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";
import { CartContext } from "./CartContext";
import Icon from "react-native-vector-icons/Ionicons";

const Cart = ({ navigation }) => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  
   useEffect(async() => {
    if (await AsyncStorage.getItem('useremail')) {
      
     }
     else{
       navigation.navigate('Login')
     }
  }, []);



  const renderCartItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemnameText}>{item.name}</Text>
      <Text style={styles.hr}></Text>
      <Image source={{ uri: item.logo }} style={styles.CartImage} />
      <Text style={styles.itemText}>${item.price * item.quantity}</Text>

      <View style={styles.quantityContainer}>
        <TouchableOpacity
          onPress={() => updateQuantity(item.id, item.quantity - 1)}
        >
          <Text style={styles.quantityButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity
          onPress={() => updateQuantity(item.id, item.quantity + 1)}
        >
          <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => removeFromCart(item.id)}
      >
        <Text style={styles.submitButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.cartList}
      />
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate("Checkout")}
      >
        <Text style={styles.submitButtonText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,

    // alignItems:'space-between'
  },
  CartImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  cartItemText: {
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    margin: 10,
    flexWrap: "wrap",
    borderRadius: 10,
  },

  itemText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    fontSize: 20,
    paddingHorizontal: 15,
    backgroundColor: "#D6758D",
    borderRadius: 15,
    color: "#fff",
    // width:30,
    height: 30,
    padding: 0,
    fontWeight: "bold",
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  hr: {
    width: "100%",
    height: 2,
    backgroundColor: "#D6758D",
    marginBottom: 15,
  },
  itemnameText: {
    width: "100%",
    fontSize: 20,
    margin: 10,
    marginHorizontal: 0,
    marginBottom: 1,
  },
  submitButton: {
    backgroundColor: "#D6758D",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
  },
});

export default Cart;
