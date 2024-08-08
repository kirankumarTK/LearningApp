import React from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import Error from '../../app_components/Error';
import Loading from '../../app_components/Loading';
import NewsItem from '../../app_components/NewsItem';
import { appStyle } from '../../app_styles/AppStyles';
import { NewsViewModel } from './NewsHomeViewModel';
import appThemeColor from '../../app_styles/AppTheme';

const NewsHome = () => {
  const { news, loading, error, validateImageURL, naivigateToWebview, callAPI, bottomLoading } =
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
          initialNumToRender={10}
          data={news}
          keyExtractor={(item: any) => item.title}
          onEndReached={!bottomLoading ? callAPI : null}
          onEndReachedThreshold={0.2}
          ListFooterComponent={() => (bottomLoading ? <ActivityIndicator size="large" color={appThemeColor.primaryColor} /> : null)}
          renderItem={({ item }) => (
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
