import React from 'react'
import {ImageBackground,Image,Text,StyleSheet,View, TouchableOpacity} from 'react-native'
import AppInput from '../components/AppInput'
import { Button } from 'react-native-elements';

var LoginBackground=require('../../assets/images/bgscreen.png')
var logo=require('../../assets/images/sajilologo.png');
var lock=require('../../assets/images/lock.png');

const RegisterScreen = () => {
  return (
    <ImageBackground source={LoginBackground} style={{height:'100%',width:'100%'}}>
       <View style={styles.Container}>
        <View>
          <Image source={logo} style={styles.loginlogo}/>
          <Image source={lock} style={styles.lockicon}/>
            <View style={styles.signupForm}>
            <AppInput value='Phone Number'/>
            <AppInput/>
            <AppInput/>
            </View>
            <Button title="Sign Up"  buttonStyle={{
            backgroundColor: "#26B1B1",width:100,alignSelf: "center"
          }}/>
        </View>
      </View>
    </ImageBackground>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  Container:{
    display:'flex',
    flex:1,
    alignItems:'center',
    justifyContent: 'space-between',
    marginTop:'20%'
  },
  loginlogo:{
    width:69,height:94,resizeMode:'contain',alignSelf:'center'
  },
  lockicon:{
    width:21,
    height:24,
    resizeMode:'contain',
    marginVertical:10,
    alignSelf:'center'
  },
  signupForm:{
    marginVertical:5,
    shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.20,
  shadowRadius: 1.41,

  elevation: 2,
    }
})
