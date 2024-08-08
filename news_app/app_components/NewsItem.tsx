import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { appStyle } from '../app_styles/AppStyles';
import { Text } from 'react-native';
import { NewItemPramsList } from '../app_navigation/RootStackParamList';
class NewsItem extends React.PureComponent<NewItemPramsList> {
  render() {
    const { newItem, validateImageURL, naivigateToWebview } = this.props;
    return (
      <View style={[appStyle.listItem, appStyle.cardview]}>
        <TouchableOpacity onPress={() => naivigateToWebview(newItem.url, newItem.title)}>
          <Image
            source={{
              uri: validateImageURL(newItem.urlToImage),
            }}
            style={appStyle.newsCardImage}
          />
          <Text style={[appStyle.newsCardText]} numberOfLines={2}>
            {newItem.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default NewsItem;
