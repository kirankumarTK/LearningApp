import React from 'react';
import {Image, View} from 'react-native';
import {appStyle} from '../app_styles/AppStyles';
import {Text} from 'react-native';
class NewsItem extends React.PureComponent {
  state = {};
  render() {
    return (
      <View style={[appStyle.listItem, appStyle.cardview]}>
        <Image
          source={{
            uri: 'https://ichef.bbci.co.uk/news/1024/branded_news/d169/live/3c6958b0-4f11-11ef-bd74-cf86445fc05d.jpg',
          }}
          style={appStyle.newsCardImage}
        />
        <Text style={[appStyle.newsCardText]} numberOfLines={2}>
          The British band and its members face a £1.9m lawsuit in the UK High
          Court.
        </Text>
      </View>
    );
  }
}

export default NewsItem;
