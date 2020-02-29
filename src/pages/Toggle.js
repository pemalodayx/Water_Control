import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, StyleSheet, TextInput, Text,View,ImageBackground } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'

export default class Toggle extends React.Component {

  

    render() {
       
        return (
            <ToggleSwitch
            isOn={true}
           
            onColor="green"
            offColor="red"
            label="Water Tank Solinoide 1"
            labelStyle={{ color: "black", fontWeight: "900" }}
            size="large"
            onToggle={isOn => console.log("changed to : ", isOn)}
          />
        );
    
    }
}