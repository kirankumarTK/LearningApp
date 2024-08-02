import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {appStyle} from '../app_styles/AppStyles';

type PropType = {
 focused :  boolean;
 name : string;
};
class BottomToolBarView extends React.PureComponent<PropType> {
  render() {
    const {focused,name} = this.props;
    return (
      <View style={appStyle.bottom_toolbar_view}>
        <Icon
          name="newspaper"
          style={[
            appStyle.default_icon_size,
            focused ? appStyle.activeTintColor : appStyle.inactiveTintColor,
          ]}
        />

        <Text
          style={[
            appStyle.bottom_toolbar_text,
            focused ? appStyle.activeTintColor : appStyle.inactiveTintColor,
          ]}>
          {name}
        </Text>
      </View>
    );
  }
}

export default BottomToolBarView;
