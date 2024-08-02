import React from 'react';
import {appStyle} from '../app_styles/AppStyles';
import NewsItem from '../app_components/NewsItem';
import {View} from 'react-native';
class NewsHome extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <View style={[appStyle.app_background, appStyle.default_spacing_10]}>
          <NewsItem />
        </View>
      </React.Fragment>
    );
  }
}

export default NewsHome;
