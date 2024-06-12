// Cart.js
import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity ,Button} from 'react-native';
import { CartContext } from './CartContext';
import Icon from 'react-native-vector-icons/Ionicons';

const Cart = ({ navigation }) => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text style={styles.cartItemText}>{item.name}</Text>
      <Text style={styles.cartItemText}>${item.price}</Text>

      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity - 1)}>
          <Text style={styles.quantityButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity + 1)}>
          <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
      </View>
      <Button title="Remove" onPress={() => removeFromCart(item.id)} />
    </View>
  );


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>

      <FlatList
         data={cartItems}
         renderItem={renderItem}
         keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.cartList}
      />
       <Button title="Proceed to Checkout" onPress={() => navigation.navigate('Checkout')} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cartItemText: {
    fontSize: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  itemText: {
    fontSize: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    fontSize: 20,
    paddingHorizontal: 10,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
});


export default Cart;
