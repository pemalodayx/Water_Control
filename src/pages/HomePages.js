import React, {Component} from 'react';
import {StyleSheet,SafeAreaView,ScrollView,TextInput, View,Image,Text, TouchableOpacity,} from 'react-native';
import { DrawerActions, } from 'react-navigation-drawer';
import RNSpeedometer from 'react-native-speedometer';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Icon from 'react-native-vector-icons/FontAwesome';
import Pressure from '../pages/Pressure';
export default class HomePages extends Component {
    static navigationOptions = {
        header:null,
      };
      state = { value: 0 };
  //Initial value for Speedometer
  onChange = value => this.setState({ value: parseInt(value) });
  //setting the value for Speedometer
    render() {
        return (
            <View  style={styles.container}>
               
                 <ScrollView style={styles.scrollview}>   
                <View style={styles.drawerbar}> 
                        <View style={styles.drawer}> 
                            <TouchableOpacity onPress={() => { this.props.navigation.dispatch(DrawerActions.toggleDrawer()); }}>
                                {/*Donute Button Image */}
                                <Image
                                    source={require('../Images/drawer.png')}
                                    style={{ width: 25, height: 25, marginLeft: 5,top: 10,}}
                                />
                            </TouchableOpacity> 
                            <View  style={{
                                    borderBottomColor: 'black',
                                    borderBottomWidth:1,
                                    width:'100%',
                                    height:30
                                }}
                                />  
                        </View> 
                        <View style={styles.notification}> 
                            <TouchableOpacity onPress={() => { this.props.navigation.dispatch(DrawerActions.toggleDrawer()); }}>
                                {/*Donute Button Image */}
                                <Image
                                    source={require('../Images/notification.png')}
                                    style={{ width: 25, height: 25, marginLeft: 5,top: 10,}}
                                />
                            </TouchableOpacity> 
                        </View> 
                           
                        </View> 
                        
                   <View>
                  
                        <View style={styles.top}>
                        
                            <SafeAreaView>
                                <RNSpeedometer
                                    value={this.state.value}
                                    size={200}
                                    //Size of Speedometer
                                    minValue={0}
                                    //Min value for Speedometer
                                    maxValue={30}
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
                        <View style={styles.button}>
                           <Pressure/>
                            <View style={styles.buttonInner} >
                                <Text>Pressure Sensor</Text>
                                <AnimatedCircularProgress
                                    size={150}
                                    width={10}
                                    fill={60}
                                    tintColor="#00e0ff"
                                    backgroundColor="#3d5875">           
                            </AnimatedCircularProgress>
                            </View>           
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
    drawerbar: {
        position: 'absolute', 
        width:'100%',
        height:'7%',
        backgroundColor:'#0d7ba1'
    },
    drawer: {
        position: 'absolute', 
        width:'100%',
    },
notification: {
    position: 'absolute',
    top: 0,
    right: 20,
    
},
    scrollview:{
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