import React, {useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';
import {RootStackParamList} from '../app_navigation/RootStackParamList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Loading from './Loading';
import {View} from 'react-native';

const WebViewPage = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'WebViewPage'>) => {
  const [isloading, showLoading] = useState(true);
  useEffect(() => {
    navigation.setOptions({title: route.params.title});
  });

  return (
    <View style={{flex: 1}}>
      <WebView
        source={{
          uri: route.params.url,
        }}
        onLoadEnd={()=>showLoading(false)}
        style={{flex: 1}}
      />
      {isloading && <Loading />}
    </View>
  );
};

export default WebViewPage;
