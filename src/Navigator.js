import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import SignUp from './SignUp';
import { TabNavigator } from './TabNavigator'; 
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import Addresses from './Addresses'; 
import AddAddress from './AddAddress';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="ProductList" component={ProductList} options={{ headerShown: false }} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: false }} />
      <Stack.Screen name="Addresses" component={Addresses} options={{ headerShown: false }} />
      <Stack.Screen name="AddAddress" component={AddAddress} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
