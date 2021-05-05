import React,{useState,useEffect} from 'react'
import {ImageBackground,View,Image,StyleSheet} from 'react-native'
import AppButton from '../components/AppButton';
import Login from './LoginScreen';

var splash=require('../../assets/images/splash.png')
var LoginBackground=require('../../assets/images/Login.png')
var logo=require('../../assets/images/sajilologo.png');

const Home = ({navigation}) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1000);
  }, []);

  return show ? 
    (<ImageBackground
    source={splash}
    style={{height:'100%',width:'100%'}}
    >
    </ImageBackground>) : (
      <ImageBackground source={LoginBackground} style={{height:'100%',width:'100%'}}>
          <View style={styles.conatiner} >
            <View style={{height:92,width:126}}>
              <Image source={logo}></Image>
            </View>
            <AppButton
              text='Log in'
              type='outlined'
              onPress={()=>{
                navigation.navigate('Login');
              }}
            />
            <AppButton
              text='Create Account'
            />
        </View>
      </ImageBackground>
    
  );
  
}

export default Home
const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems:'center',
      justifyContent:'center',

  }, 
  logBtn:{
    fontSize:30
  }
});