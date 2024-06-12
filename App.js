import React, { useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CartContext, CartProvider } from "./screens/CartContext";

import { Provider} from "react-redux";
import Cart from "./screens/Cart";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Search from "./screens/Search";
import HomeScreen from "./screens/HomeScreen";
import ProductDetails from "./screens/ProductDetails";
import Checkout from "./screens/Checkout";

const Drawer = createDrawerNavigator();


const MainStack = () => {
  return (
    <Stack.Navigator> 
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} /> 
      <Stack.Screen name="Cart" component={Cart} /> 
      <Stack.Screen name="Checkout" component={Checkout} />  
    </Stack.Navigator> 
  )
}

const App = () => {
  return (
    
        // <NavigationContainer> 
        //   <Drawer.Navigator>
        //     <Drawer.Screen name="Amazon" component={MainStack} />
        //     <Drawer.Screen name="Search" component={Search} />
        //     <Drawer.Screen name="Register" component={Register} />
        //     <Drawer.Screen name="Login" component={Login} />
        //     <Drawer.Screen name="Cart" component={Cart} />
        //   </Drawer.Navigator>
        // </NavigationContainer>
        <CartProvider>
        <NavigationContainer> 
          <Drawer.Navigator>
            <Drawer.Screen name="Amazon" component={MainStack} />
            <Drawer.Screen name="Search" component={Search} />
            <Drawer.Screen name="Register" component={Register} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Cart" component={Cart} />
            <Drawer.Screen name="CartContext" component={CartContext} />
          </Drawer.Navigator>
        </NavigationContainer>
      </CartProvider>
    
  )
}
export default App;

// App.js

