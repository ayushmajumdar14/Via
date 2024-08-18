import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../pages/LoginScreen';
import UserProfile from '../pages/UserProfile';
import BookRide from '../pages/BookRide';
import PaymentPage from '../pages/PaymentPage';
import Messaging from '../pages/Messaging';
import DriverInterface from '../pages/DriverInterface';
import PostRideDetails from '../pages/PostRideDetails';
import SearchScreen from '../pages/SearchScreen';
import SplashScreen from '../pages/SplashScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="BookRide" component={BookRide} />
        <Stack.Screen name="PaymentPage" component={PaymentPage} />
        <Stack.Screen name="Messaging" component={Messaging} />
        <Stack.Screen name="DriverInterface" component={DriverInterface} />
        <Stack.Screen name="PostRideDetails" component={PostRideDetails} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
