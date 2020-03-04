import React, {Component} from 'react';
import {StyleSheet,SafeAreaView,ScrollView,TextInput, View,Image,Text, TouchableOpacity,} from 'react-native';
import RNSpeedometer from 'react-native-speedometer';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class HomePages extends Component {
    static navigationOptions = {
        header:null,
      };
      state = { fill: 0 };
  //Initial value for Speedometer
  onChange =fill => this.setState({ fill: parseInt(fill) });
  //setting the value for Speedometer
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollview}>
                            
                                
                            <View style={styles.buttonInner} >
                                <Text>Temperature Sensor</Text>
                                <AnimatedCircularProgress
                                    size={150}
                                    width={10}
                                    fill={this.state.fill}
                                    tintColor="#00e0ff"
                                    backgroundColor="#3d5875">           
                            </AnimatedCircularProgress>
                            
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

                        </View>
                 </ScrollView>
            </View>
    );
  }
}
               
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#0d7ba1'
    },
    drawer: {
        position: 'absolute', 
        width:'100%',
        height:'5%',
    },
notification: {
    position: 'absolute',
    top: 0,
    right: 20,
    
},
    scrollview:{
        marginHorizontal:5,
    },
    top:{
        height:'60%',
        alignItems:'center',
        justifyContent:'center',
        padding:5
    },
    textInput: {
        width:300,
        fontSize:16,
        backgroundColor:'rgba(255,255,255,4)',
        borderRadius:2,
        paddingHorizontal:16,
        marginVertical:5
    },
    button:{
        height:'40%',
        flexDirection:'row',
        flexWrap:'wrap',
        padding:5,
    },
    buttonInner:{
        height:'100%',
        width:'50%',
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        padding:5,
    },
  
}); 