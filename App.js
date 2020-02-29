/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import NotificationPage from './src/pages/NotificationPage';
import LoginPages from './src/pages/LoginPages';
import HomePages from './src/pages/HomePages';
import SignUp from './src/pages/SignUp';
import SettingPages from './src/pages/SettingPages';
import ControlPannel from './src/pages/ControlPannel';
import WaterLevel from './src/pages/WaterLevel';
import Toggle from './src/pages/Toggle';
const AppStack = createStackNavigator({
  Login:{screen:LoginPages},
  Home:{screen:HomePages},  
  SignUp:{screen:SignUp},

});
const AppDrawer = createDrawerNavigator({
  
  Home:{screen:HomePages},  
  notification:{screen:NotificationPage},
  Setting:{screen:SettingPages},
  ControlPannel:{screen:ControlPannel},
  WaterLevel:{screen:WaterLevel},
  OnOffSwitch:{screen:Toggle},
  drawer:AppStack


},{
  initialRouteName:'drawer'

});

export default createAppContainer(AppDrawer);

