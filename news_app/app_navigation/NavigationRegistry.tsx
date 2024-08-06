import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import WebViewPage from '../app_components/WebViewPage';
import HomePage from '../screens/HomePage';
import SplashScreen from '../screens/SplashScreen';
import { RootStackParamList } from './RootStackParamList';

const NavigationRegistry = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Group>

      <Stack.Screen name="WebViewPage" component={WebViewPage} />

    </Stack.Navigator>
  );
};

export default NavigationRegistry;
