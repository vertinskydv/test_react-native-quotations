import React from 'react';
import AboutScreen from '../screens/about';
import QuotationScreen from '../containers/quotation';
import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

export default createBottomTabNavigator(
  {
    Quotation: { screen: QuotationScreen },
    About: { screen: AboutScreen },
  }, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Quotation') {
          iconName = `ios-document${focused ? '' : '-outline'}`;
        } else if (routeName === 'About') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    })
  }
);