import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {appStyle} from '../app_styles/AppStyles';
import NewsItem from '../app_components/NewsItem';
const HomePage = ({navigation}) => {
  useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      e.preventDefault();
      return;
    });
  }, []);
  return (
    <React.Fragment>
      <SafeAreaView style={[appStyle.app_background,appStyle.default_spacing_10]}>
        <NewsItem />
      </SafeAreaView>
    </React.Fragment>
  );
};

export default HomePage;
