import {useEffect, useState} from 'react';
import api_service from '../../api_services/api_service';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../app_navigation/RootStackParamList';
import AppConstant from '../../Constant/app_constant';
export const NewsViewModel = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'News'>>();
  const route = useRoute();

  const [news, setNews] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const endpoint = getEndPoint(route.name);
    api_service
      .getRequestWithoutHeader(endpoint, [])
      .then(response => {
        setNews(response.articles);
        setLoading(false);
        setError(null);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  function validateImageURL(uri: string): string {
    return uri != null
      ? uri
      : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJRS-4chjWMRAmrtz7ivK53K_uygrgjzw9Uw&s';
  }

  function naivigateToWebview(url: string, title: string) {
    navigation.navigate('WebViewPage', {url, title});
  }

  function getEndPoint(screenName: string): string {
    var endpoint = '';
    switch (screenName) {
      case AppConstant.newsScreen:
        endpoint = 'top-headlines?country=in&apiKey=';
        break;
      case AppConstant.SportsScreen:
        endpoint = 'top-headlines?country=in&category=sports&apiKey=';
        break;
        case AppConstant.HealthScreen:
          endpoint = 'top-headlines?country=in&category=health&apiKey=';
          break;
    }
    return endpoint;
  }
  return {news, loading, error, validateImageURL, naivigateToWebview};
};
