import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, StyleSheet, TextInput, Text,View,ImageBackground } from 'react-native';
import RNSpeedometer from 'react-native-speedometer'; 
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default class WaterLevel extends React.Component {

  

    render() {
       
        return (
          <AnimatedCircularProgress
  size={200}
  width={10}
  fill={60}
  tintColor="#00e0ff"
  backgroundColor="#3d5875">
  
</AnimatedCircularProgress>

        );
    
    }
}
