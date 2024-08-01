import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {appStyle} from '../app_styles/AppStyles';
const HomePage = ({navigation}) => {
  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
      return;
    });
  }, []);
  return (
    <Text style={[appStyle.textTitle, appStyle.center_align_view]}>
      {' '}
      Hello{' '}
    </Text>
  );
};

export default HomePage;
