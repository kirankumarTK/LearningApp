import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {appStyle} from '../app_styles/AppStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

class AppToolbar extends React.PureComponent<Proptype> {
  render() {
    const {navigation, isHome, screenTitle} = this.props;
    return (
      <SafeAreaView style={[appStyle.toolbar, appStyle.default_spacing_5]}>
        {!isHome && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="keyboard-arrow-left" style={appStyle.toolBarIcon} />
          </TouchableOpacity>
        )}

        <Text
          style={[
            appStyle.toolBarTex,
            isHome ? appStyle.toolBarTextWidth100 : appStyle.toolBarTextWidth70,
          ]}>
          {screenTitle}
        </Text>
      </SafeAreaView>
    );
  }
}

export default AppToolbar;

interface Proptype {
  navigation: any;
  isHome: boolean;
  screenTitle: string;
}
