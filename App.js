import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/pages/LoginScreen';
import SignupScreen from './src/pages/SignupScreen';
import UserProfile from './src/pages/UserProfile';
import BookRide from './src/pages/BookRide';
import PaymentPage from './src/pages/PaymentPage';
import Messaging from './src/pages/Messaging';
import DriverInterface from './src/pages/DriverInterface';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="BookRide" component={BookRide} />
        <Stack.Screen name="PaymentPage" component={PaymentPage} />
        <Stack.Screen name="Messaging" component={Messaging} />
        <Stack.Screen name="DriverInterface" component={DriverInterface} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
