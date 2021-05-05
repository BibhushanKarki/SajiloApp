import React,{useState,useEffect} from 'react'
import {ImageBackground,Image,Text} from 'react-native'
import AppButton from '../components/AppButton';
import Login from './LoginScreen';
import Center from '../components/Center'

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
          <Center>
            <Image style={{height:92,width:126}} source={logo}/>
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
            <Text>OR LOGIN WITH</Text>
        </Center>
      </ImageBackground>
    
  );
  
}

export default Home
