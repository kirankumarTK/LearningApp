/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type { PropsWithChildren } from 'react';
import React from 'react';
import { SafeAreaView, Text, useColorScheme } from 'react-native';
import { API_KEY } from '@env';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text style = {{color :'black'}}> {API_KEY} ddfsdf</Text>
    </SafeAreaView>
  );
}

export default App;
