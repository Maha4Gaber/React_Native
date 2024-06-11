
import { NavigationContainer } from "@react-navigation/native";
//-------------------Stack Navigation-------------
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
//-------------------Tabs Nvaigation--------------
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// const Tab = createBottomTabNavigator();
// ------------------Drawer Navigation------------
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Provider} from "react-redux";
import Cart from "./screens/Cart";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Search from "./screens/Search";
import HomeScreen from "./screens/HomeScreen";
import ProductDetails from "./screens/ProductDetails";
const Drawer = createDrawerNavigator();


const MainStack = () => {
  return (
    <Stack.Navigator> 
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductDetails"
      component={ProductDetails} />    
    </Stack.Navigator> 
  )
}

const App = () => {
  return (
    
        <NavigationContainer> 
          <Drawer.Navigator>
            <Drawer.Screen name="Amazon" component={MainStack} />
            <Drawer.Screen name="Search" component={Search} />
            <Drawer.Screen name="Register" component={Register} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Cart" component={Cart} />
          </Drawer.Navigator>
        </NavigationContainer>
    
  )
}
export default App;

