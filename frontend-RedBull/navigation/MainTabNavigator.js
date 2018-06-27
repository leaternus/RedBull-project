import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ProfilScreen from '../screens/ProfilScreen';
import ShoppingScreen from '../screens/ShoppingScreen';
import PanierScreen from '../screens/PanierScreen';

const ProfilStack = createStackNavigator({
  Profil: ProfilScreen,
});

ProfilStack.navigationOptions = {
  tabBarLabel: 'Profil',
  tabBarOptions : {
    activeTintColor: '#373333',
    inactiveTintcolor: '#373333'
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-person${focused ? '' : '-outline'}`
          : 'md-person'
      }
    />
  ),
};

const ShoppingStack = createStackNavigator({
  Shopping: ShoppingScreen,
});

ShoppingStack.navigationOptions = {
  tabBarLabel: 'Shopping',
  tabBarOptions : {
    activeTintColor: '#373333',
    inactiveTintcolor: '#373333'
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-home${focused ? '' : '-outline'}` : 'md-home'}
    />
  ),
};

const PanierStack = createStackNavigator({
  Panier: PanierScreen,
});

PanierStack.navigationOptions = {
  tabBarLabel: 'Panier',
  tabBarOptions : {
    activeTintColor: '#373333',
    inactiveTintcolor: '#373333'
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-cart${focused ? '' : '-outline'}` : 'md-cart'}
    />
  ),
};

export default createBottomTabNavigator({
  ProfilStack,
    ShoppingStack,
    PanierStack,
});
