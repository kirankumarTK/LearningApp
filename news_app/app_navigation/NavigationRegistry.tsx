import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import HomePage from '../screens/HomePage';
import AppToolbar from '../app_components/AppToolbar';
import { RootStackParamList } from './RootStackParamList';

const NavigationRegistry = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          headerTransparent : true,
          header: ({navigation}) => (<AppToolbar navigation = {navigation} isHome = {true} screenTitle = 'News'/>)
        }}
      />
    </Stack.Navigator>
  );
};

export default NavigationRegistry;
