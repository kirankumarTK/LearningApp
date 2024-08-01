import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {appStyle} from '../app_styles/AppStyles';

const SplashScreen = ({navigation}) => {
  const [timeLeft, setTimeLeft] = useState(1);

  useEffect(() => {
    if (timeLeft === 0) {
      navigation.navigate('News');
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <View style={appStyle.splash_background}>
      <View style={appStyle.center_align_view}>
        <Icon name="newspaper" size={180} />
        <Text style={[appStyle.textTitle]}>News App</Text>
      </View>
    </View>
  );
};

export default SplashScreen;
