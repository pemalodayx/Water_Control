
import React from 'react';

import { Switch,ScrollView, Text, View, StyleSheet} from 'react-native';
import WaterLevel from '../Switch/WaterLevel';
import Solenoid1 from '../Switch/Solenoid1';
import Solenoid2 from '../Switch/Solenoid2';
import Solenoid3 from '../Switch/Solenoid3';
import Solenoid4 from '../Switch/Solenoid4';
 
export default class ControlPannel extends React.Component {
  static navigationOptions = {
    title:'Control Pannel',
    headerStyle:{
        backgroundColor:'#0d7ba1',
        height:50
    }
  };

  render() {
    return (
      <View style={styles.container}>{}
        <Text  style={{marginLeft:'35%',
                marginTop:20,
                fontWeight: "bold",
                fontSize: 18,
                color: 'white'}}>Control Pannel</Text>
          <View  style={{
                borderBottomColor: 'black',
                borderBottomWidth:1,
                width:'100%',
                height:10
                }}
            />  
          
        <ScrollView>
        
          <View>
              <WaterLevel/>
          </View>
          <View style={{
              borderBottomColor: 'white',
              borderBottomWidth:3,
            }}
          />
          <View>
              <Solenoid1/>
          </View>
          <View style={{
            borderBottomColor: 'white',
            borderBottomWidth:3
          }}/>
          <View>
            <Solenoid2/>
          </View>
          <View style={{
            borderBottomColor: 'white',
            borderBottomWidth:3,
          }}/>
        <View>
          <Solenoid3/>
        </View>
        <View style={{
            borderBottomColor: 'white',
            borderBottomWidth:3,
          }}
        />
        <View>
            <Solenoid4/>
        </View>
        <View style={{
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
});