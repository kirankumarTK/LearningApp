import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import appThemeColor from '../app_styles/AppTheme';
import { appStyle } from '../app_styles/AppStyles';
const Loading = () => {
  return (
    <View style = {appStyle.center_align_view}>
      <ActivityIndicator size="large" color={appThemeColor.primaryColor} />
    </View>
  );
};

export default Loading;
