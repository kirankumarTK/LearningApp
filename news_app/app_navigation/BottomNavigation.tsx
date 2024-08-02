import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import BottomToolBarView from '../app_components/BottomToolBarView';
import {appStyle} from '../app_styles/AppStyles';
import NewsHome from '../screens/NewsHome';
import {RootStackParamList} from './RootStackParamList';
import SportsNews from '../screens/SportsNews';
import HealthNews from '../screens/HealthNews';

const BottomTab = createBottomTabNavigator<RootStackParamList>();

class BottomNavigation extends React.PureComponent {
  render() {
    return (
      <BottomTab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: appStyle.bottom_toolbar,
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
          component={SportsNews}
          options={{
            tabBarIcon: ({focused}) => (
              <BottomToolBarView focused={focused} name="Sports" />
            ),
          }}
        />

        <BottomTab.Screen
          name="Health"
          component={HealthNews}
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
