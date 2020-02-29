import React, {Component} from 'react';
import {StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';
import { DrawerActions, } from 'react-navigation-drawer';
export default class HomePages extends React.Component {
    static navigationOptions = {
        header: null,
      };
    render() {
        return (
            <View>
                <View style={styles.drawer}>
                    <TouchableOpacity onPress={() => { this.props.navigation.dispatch(DrawerActions.toggleDrawer()); }}>
                        {/*Donute Button Image */}
                        <Image
                            source={require('../Images/drawer.png')}
                            style={{ width: 25, height: 25, marginLeft: 5,top: 10,}}
                        />
                    </TouchableOpacity>
                </View> 

               
            </View>
        );
    }
}
const styles = StyleSheet.create({
  drawer: {
      width: 50,
      height: 50,
      position: 'absolute', 
      left: 10, 
      top: 10,
      
  },
});