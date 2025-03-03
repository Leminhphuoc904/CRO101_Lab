import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

// Import Screens
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/loginscreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import WishlistScreen from '../screens/WishlistScreen';
import OrderTrackingScreen from '../screens/OrderTrackingScreen';
import CustomerSupportScreen from '../screens/CustomerSupportScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import PromotionNotificationsScreen from '../screens/PromotionNotificationsScreen';
import StoreLocatorScreen from '../screens/StoreLocatorScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';

// Tạo Bottom Tab Navigator
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Cart') iconName = 'shopping-cart';
          else if (route.name === 'Wishlist') iconName = 'favorite';
          else if (route.name === 'Orders') iconName = 'local-shipping';
          else if (route.name === 'Support') iconName = 'support-agent';
          else if (route.name === 'Profile') iconName = 'person';
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ff6347',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#fff', height: 60 },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Wishlist" component={WishlistScreen} />
      <Tab.Screen name="Orders" component={OrderTrackingScreen} />
      <Tab.Screen name="Support" component={CustomerSupportScreen} />
    </Tab.Navigator>
  );
};

// Tạo Stack Navigator
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <Stack.Screen name="Promotions" component={PromotionNotificationsScreen} />
      <Stack.Screen name="StoreLocator" component={StoreLocatorScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
