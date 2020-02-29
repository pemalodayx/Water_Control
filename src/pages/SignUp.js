import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ImageBackground
} from "react-native"; 

export default class SignUp extends React.Component {
    static navigationOptions = {
        header: null,
      };
    render() {
        return (
            <ImageBackground source={require('../Images/BackIamge.jpg')} style={{width: '100%', height: '100%'}}>
                
                <View style={styles.container}>
                    
                    <View style={styles.Opicity}>
                        
                        <Text style={styles.SignUpHeader}>Sign Up</Text>
                        <TextInput style={styles.inputBox} 
                            underlineColorAndroid='rgba(0,0,0,0)' 
                            placeholder="Email"
                            returnKeyType="next"
                            autoCapitalize='none'
                            autoCorrect={false}
                            onSubmitEditing={()=>this.passwordInput.focus()}
                            placeholderTextColor='#000000'/>
                        <TextInput style={styles.inputBox} 
                            underlineColorAndroid='rgba(0,0,0,0)' 
                            placeholder="Password"
                            returnKeyType="go"
                            ref={(input)=>this.passwordInput=input}
                            secureTextEntry={true}
                            placeholderTextColor='#000000'/>
                         <TextInput style={styles.inputBox} 
                            underlineColorAndroid='rgba(0,0,0,0)' 
                            placeholder="Confirm Password"
                            returnKeyType="go"
                            ref={(input)=>this.passwordInput=input}
                            secureTextEntry={true}
                            placeholderTextColor='#000000'/>
                        <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Login')}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>   
        );
      }
    }
    const styles = StyleSheet.create({
        container:{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        },
        
        Opicity:{
            backgroundColor:'rgba(255,255,255,0.3)',
            width:350,
            alignItems:'center',
            justifyContent:'center'
        },
        SignUpHeader:{
            fontSize:26,
            fontWeight:'500',
            color:'#000000',
            marginVertical:5,
            alignItems:'center',
            justifyContent:'center'
        },
        inputBox:{
            width:300,
            fontSize:16,
            backgroundColor:'rgba(255,255,255,4)',
            borderRadius:2,
            paddingHorizontal:16,
            marginVertical:5
        },
        buttonText:{
            fontSize:16,
            fontWeight:'500',
            color:'#000000',
            textAlign:"center"
        },
        button:{
            width:300,
            backgroundColor:'#34eb9e',
            borderRadius:2,
            marginVertical:10,
            paddingVertical:16
        },
        signupTextCon:{
            fontSize:16,
            fontWeight:'500',
            color:'#000000',
            flexDirection:'row'
        },
        accont:{
            fontSize:16,
            fontWeight:'500',
            color:'#000000',
            paddingVertical:20
        },
        SignUpButton:{
            width:100,
            backgroundColor:'#34eb9e',
            borderRadius:2,
            marginVertical:10,
            paddingVertical:16
        }  
      });
    