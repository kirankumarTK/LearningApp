import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import BottomNavigation from '../app_navigation/BottomNavigation';
import { RootStackParamList } from '../app_navigation/RootStackParamList';
const HomePage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'News'>>();

  useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      e.preventDefault();
      return;
    });
  }, []);
  return (
    <React.Fragment >
      <BottomNavigation/>
    </React.Fragment>
  );
};

export default HomePage;
