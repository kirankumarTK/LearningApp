import { useCallback, useEffect, useState } from 'react';
import api_service from '../../api_services/api_service';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../app_navigation/RootStackParamList';
import AppConstant from '../../Constant/app_constant';
export const NewsViewModel = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'News'>>();
  const route = useRoute();

  const [news, setNews] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [bottomLoading, setBottomLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResult] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    callAPI();
  }, []);

  function validateImageURL(uri: string): string {
    return uri != null
      ? uri
      : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJRS-4chjWMRAmrtz7ivK53K_uygrgjzw9Uw&s';
  }

  // function naivigateToWebview(url: string, title: string) {
  //   navigation.navigate('WebViewPage', {url, title});
  // }

  const naivigateToWebview = useCallback((url: string, title: string) => {
    navigation.navigate('WebViewPage', { url, title });
  }, []);

  function getEndPoint(screenName: string): string {
    let endpoint = '';
    switch (screenName) {
      case AppConstant.newsScreen:
        endpoint = 'top-headlines?country=in&pageSize=10&page=' + page + '&apiKey=';
        break;
      case AppConstant.SportsScreen:
        endpoint = 'top-headlines?country=in&category=sports&pageSize=10&page=' + page + '&apiKey=';
        break;
      case AppConstant.HealthScreen:
        endpoint = 'top-headlines?country=in&category=health&pageSize=10&page=' + page + '&apiKey=';
        break;
    }
    return endpoint;
  }

  function callAPI() {
    if (totalResults == 0 || news.length < totalResults) {
      setBottomLoading(true);
      api_service
        .getRequestWithoutHeader(getEndPoint(route.name), [])
        .then(response => {
          setPage(page + 1);
          setTotalResult(response.totalResults);
          setNews([...news, ...response.articles]);
          setLoading(false);
          setError(null);
          setBottomLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
          setBottomLoading(false);
        });
    }
  }
  return { news, loading, error, validateImageURL, naivigateToWebview, callAPI, bottomLoading };
};
