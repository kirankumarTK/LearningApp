import React from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import {appStyle} from '../../app_styles/AppStyles';
import {NewsViewModel} from './NewsHomeViewModel';
import Loading from '../../app_components/Loading';
import Error from '../../app_components/Error';
import {FlatList} from 'react-native';
import NewsItem from '../../app_components/NewsItem';

const NewsHome = () => {
  const {news, loading, error, validateImageURL, naivigateToWebview} =
    NewsViewModel();

  if (loading) {
    return <Loading />;
  }

  if (error != null) {
    return <Error errorMsg={error} />;
  }
  return (
    <React.Fragment>
      <View style={[appStyle.app_background]}>
        <FlatList
          initialNumToRender={5}
          data={news}
          renderItem={({item}) => (
            <NewsItem
              newItem={item}
              validateImageURL={validateImageURL}
              naivigateToWebview={naivigateToWebview}
            />
          )}
        />
      </View>
    </React.Fragment>
  );
};

export default NewsHome;
