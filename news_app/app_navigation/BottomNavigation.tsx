import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import BottomToolBarView from '../app_components/BottomToolBarView';
import {appStyle} from '../app_styles/AppStyles';
import NewsHome from '../screens/NewsHome/NewsHome';
import {RootStackParamList} from './RootStackParamList';


const BottomTab = createBottomTabNavigator<RootStackParamList>();

class BottomNavigation extends React.PureComponent {
  render() {
    return (
      <BottomTab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: appStyle.bottom_toolbar,
          headerShown : false
        }}>
        <BottomTab.Screen
          name="News"
          component={NewsHome}
          options={{
            tabBarIcon: ({focused}) => (
              <BottomToolBarView focused={focused} name="Home" />
            ),
          }}
        />

        <BottomTab.Screen
          name="Sports"
          component={NewsHome}
          options={{
            tabBarIcon: ({focused}) => (
              <BottomToolBarView focused={focused} name="Sports" />
            ),
          }}
        />

        <BottomTab.Screen
          name="Health"
          component={NewsHome}
          options={{
            tabBarIcon: ({focused}) => (
              <BottomToolBarView focused={focused} name="Health" />
            ),
          }}
        />
      </BottomTab.Navigator>
    );
  }
}

export default BottomNavigation;
