import React,{useState,useEffect} from 'react'
import {ImageBackground,View,Image,StyleSheet} from 'react-native'
import {} from 'react-native'
import GreenBtn from './app/components/GreenBtn';

var splash=require('./assets/images/splash.png')
var LoginBackground=require('./assets/images/Login.png')
var logo=require('./assets/images/sajilologo.png');

const Login = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1000);
  }, []);
  const onPress = () => {
    alert('clicked')
  }

  return show ? 
    (<ImageBackground
    source={splash}
    style={{height:'100%',width:'100%'}}
    >
    </ImageBackground>) : (
      <ImageBackground source={LoginBackground} style={{height:'100%',width:'100%'}} >
          <View >
            <View style={{height:92,width:126}}>
              <Image source={logo} style={{height:'100%',width:'100%',resizeMode: 'contain'}}></Image>
            </View>
            <GreenBtn
              text='Log in'
              type='outlined'
              onPress={onPress}
            />
            <GreenBtn
              text='Create Account'
              onPress={onPress}
            />
        </View>
      </ImageBackground>
    
  );
  
}

export default Login
const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center',

  }, 
  logBtn:{
    fontSize:30
  }
});