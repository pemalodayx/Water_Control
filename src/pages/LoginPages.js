import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    ImageBackground
} from "react-native"; 

export default class LoginPages extends React.Component {
    static navigationOptions = {
      header: null,
    };
    render() {
        return (
            <ImageBackground source={require('../Images/BackIamge.jpg')} style={{width: '100%', height: '100%'}}>
                
                <View style={styles.container}>
                    <View style={styles.Logo}>
                    <Image
                         style={{width: 100, height: 150}}
                         source={require('../Images/logo.png')}
                        />
                        <Text style={styles.LogoText}>Water Usage Control Using IoT</Text>
                    </View>
                    <View style={styles.Opicity}>
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
                        <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Home')}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <View style={styles.signupTextCon}>
                                <Text style={styles.accont}>Need new account?                </Text>
                                <TouchableOpacity style={styles.SignUpButton} onPress={()=>this.props.navigation.navigate('SignUp')}>
                                    <Text style={styles.buttonText}>Sign Up</Text>
                              </TouchableOpacity>
                         </View>
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
        Logo:{
            alignItems:'center',
            justifyContent:'center'
        },
        LogoText:{
            fontSize:16,
            fontWeight:'500',
            color:'#ffffff',
            marginVertical:5,
            alignItems:'center',
            justifyContent:'center'
        },
        Opicity:{
            backgroundColor:'rgba(255,255,255,0.3)',
            width:350,
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
    