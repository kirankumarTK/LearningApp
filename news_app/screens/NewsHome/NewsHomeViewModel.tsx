import {useEffect, useState} from 'react';
import api_service from '../../api_services/api_service';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../app_navigation/RootStackParamList';
export const NewsViewModel = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();

  const [news, setNews] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api_service
      .getRequestWithoutHeader('top-headlines?country=in&apiKey=', [])
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
    return uri != null ? uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJRS-4chjWMRAmrtz7ivK53K_uygrgjzw9Uw&s';
  }

  function naivigateToWebview(url : string, title : string) {
    navigation.navigate('WebViewPage',{url,title});
  }
  return {news, loading, error, validateImageURL,naivigateToWebview};
};
