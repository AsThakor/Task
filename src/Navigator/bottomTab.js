import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import News from "../screens/news";
import Reaction from '../screens/reaction';
import Releted from '../screens/releted';
import Home from "../screens/home";

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  return (
    <Tab.Navigator  screenOptions={{ headerShown: false }}>
       <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Reaction" component={Reaction} />
       <Tab.Screen name="Releted" component={Releted} />
    </Tab.Navigator>
  );
}
export default BottomTabBar;
