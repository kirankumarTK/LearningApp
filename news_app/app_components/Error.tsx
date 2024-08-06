import React from 'react';
import { Text, View } from 'react-native';
import { appStyle } from '../app_styles/AppStyles';
import { ErrorPramsList } from '../app_navigation/RootStackParamList';

class Error extends React.PureComponent<ErrorPramsList> {
  render() {
    const {errorMsg} = this.props;
    return (
      <View style={appStyle.center_align_view}>
        <Text style={appStyle.errorText}>{errorMsg}</Text>
      </View>
    );
  }
}


export default Error;
