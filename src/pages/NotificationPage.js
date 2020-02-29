import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text,View,ImageBackground } from 'react-native';
import RNSpeedometer from 'react-native-speedometer';




export default class NotificationPage extends React.Component {
  
  constructor(props){
    super(props);
 
    this.state = {
       count: 0,
    } 
 }
  render() {
    return (
      <View>
        <Text>Bhutan</Text>
      </View>
    );
}
}