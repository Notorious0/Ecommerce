import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home'; 
import Menu from './Menu'; 
import Box from './Box'; 
import Profile from './Profile'; 
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarStyle:{
            backgroundColor:"black",
            height: 60
        },
        tabBarActiveTintColor: 'white', 
        tabBarInactiveTintColor: 'gray', 
    }}
    >
      <Tab.Screen name="Home"
       component={Home} 
       options={{
        headerShown:false,
        tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        
       }}
       />
      <Tab.Screen name="Menu"
       component={Menu} 
       options={{
        headerShown:false,
        tabBarIcon:({color,size}) => (
            <Ionicons name="menu-sharp" size={24} color={color} />
        ),
       }}
       />
      <Tab.Screen name="Box"
       component={Box} 
       options={{
        headerShown:false,
        tabBarIcon:({color,size}) => (
            <MaterialCommunityIcons name="shopping-outline" size={24} color={color} />
        ),
       }}
       />
      <Tab.Screen name="Profile" 
      component={Profile} 
      options={{
        headerShown:false,
        tabBarIcon:({color,size}) => (
            <FontAwesome name="user" size={24} color={color} />
        ),
       }}
      />
    </Tab.Navigator>
  );
};
