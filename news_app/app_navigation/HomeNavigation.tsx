import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationRegistry from './NavigationRegistry';

const HomeNavigation = () => {
  return (
    <NavigationContainer>
      <NavigationRegistry />
    </NavigationContainer>
  );
};

export default HomeNavigation;
