import React, {memo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {NewItemPramsList} from '../app_navigation/RootStackParamList';
import {appStyle} from '../app_styles/AppStyles';

const NewsItemMemo: React.FC<NewItemPramsList> = memo(
  ({newItem, validateImageURL, naivigateToWebview}) => (
    <View style={[appStyle.listItem, appStyle.cardview]}>
      <TouchableOpacity
        onPress={() => naivigateToWebview(newItem.url, newItem.title)}>
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
  ),
);

export default NewsItemMemo;
