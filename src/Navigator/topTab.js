import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import News from "../screens/news";
import Reaction from '../screens/reaction';
import Releted from '../screens/releted';

const Tab = createMaterialTopTabNavigator();

const TopTabBar = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Reasearch" component={News} />
    <Tab.Screen name="Reaction" component={Reaction} />
    <Tab.Screen name="Releted" component={Releted} />
  </Tab.Navigator>
  );
}
export default TopTabBar;
