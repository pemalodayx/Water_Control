import React from 'react';

import { Switch,ScrollView, Text, View, StyleSheet} from 'react-native';


export default class WaterLevel extends React.Component {
  
 
  state = {switchValue:false}
  toggleSwitch = (value) => {
      
      this.setState({switchValue: value})
     
   }
  render() {
    return (
      <View style={styles.container}>{}
        <ScrollView>
        <View style={styles.block}>
        <Text  style={{
        marginTop:20,
        fontWeight: "bold",
        color: 'white'}}>Wter level </Text>
            
        <Text  style={{
        marginTop:20,
        fontWeight: "bold",
        color: 'white'}}>{this.state.switchValue?'ON':'OFF'}</Text>
            {}
            {}
            <Switch
              style={{position: 'absolute',
              top: 20,
              right: 20,size:20,transform: [{ scaleX: 1.2 }, { scaleY: 1.2}]}}
              trackColor={{true: 'grey', false: 'red'}}
              onValueChange = {this.toggleSwitch}
              value = {this.state.switchValue}/>
          </View>
          <View
            style={{
              borderBottomColor: 'white',
              borderBottomWidth:3,
            }}
          />
         
          </ScrollView>
      </View>
    );  
  } 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#0d7ba1',
  },
  block:{
    flex:1,
    width:'100%',
    height:100,
  

  },

});