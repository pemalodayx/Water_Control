import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text,View,Button, } from 'react-native';
import { createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import HomePages from '../pages/HomePages';

import SettingPages from '../pages/SettingPages';

const MyDrawerNavigator = createDrawerNavigator({
    Home: {screen: HomePages},
    Setting: {screen: SettingPages},
    
},
{
    initialRouteName: 'Home',
    drawerWidth: 300,
    drawerPosition: 'left',
}
);

const AppContainer = createAppContainer(MyDrawerNavigator);

export default class DrawerPages extends Component {
    render() {
        return <AppContainer />;
    }
} 