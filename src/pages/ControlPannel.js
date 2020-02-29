
import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text,View } from 'react-native';
import RNSpeedometer from 'react-native-speedometer';






export default class ControlPannel extends React.Component {
  
  state = { value: 0 };
  //Initial value for Speedometer
  onChange = value => this.setState({ value: parseInt(value) });
  //setting the value for Speedometer
  
  render() {
    return (
      
      
    
      <View style={styles.container}>
         
          <SafeAreaView>
          
            <RNSpeedometer
              value={this.state.value}
              size={300}
              //Size of Speedometer
              minValue={0}
              //Min value for Speedometer
              maxValue={200}
              //Max value for Speedometer
              allowedDecimals={0}
              //Decimals value allowed or not
              labels={[
                {
                  name: 'Low Risk',
                 
                },
                
              ]}
            />
           
            <View style={{ marginTop: 70, padding: 20 }}>
              <Text style={{ fontSize: 20 }}>
                Water Speed
              </Text>
            
              <TextInput
                placeholder="Enter Speedometer Value"
                style={styles.textInput}
                onChangeText={this.onChange}
              />
             
            </View>
          </SafeAreaView>
        
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#184c7d'
  },
  textInput: {
      width:300,
      fontSize:16,
      backgroundColor:'rgba(255,255,255,4)',
      borderRadius:2,
      paddingHorizontal:16,
      marginVertical:5
  },
  Speedmeter:{
      
  },
});