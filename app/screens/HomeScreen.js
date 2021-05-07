import React,{useState,useEffect} from 'react'
import {ImageBackground,Image,Text,StyleSheet,View, TouchableOpacity} from 'react-native'
import AppButton from '../components/AppButton';
import Login from './LoginScreen';
import CenteredView from '../components/CenteredView'

var splash=require('../../assets/images/splash.png')
var LoginBackground=require('../../assets/images/bgscreen.png')
var logo=require('../../assets/images/sajilologo.png');
var fb=require('../../assets/images/fb.png');
var google=require('../../assets/images/google.png');

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
          <Image style={styles.homelogo} source={logo}/>
          <CenteredView>
            <AppButton
              text='Log in'
              type='outlined'
              onPress={()=>{
                navigation.navigate('Login');
              }}
            />
            <AppButton
              text='Create Account' onPress={()=>{
                navigation.navigate('RegisterScreen');
              }}
            />
            <Text style={{color:'#AFAFAF',fontSize:15}}>OR LOGIN WITH</Text>
            <View style={{position:'absolute',bottom:'10%'}}>
              <View style={styles.socialBtnContainer}>
                <TouchableOpacity style={styles.socialButtons}>
                  <Image source={fb} /><Text style={{color:'#707070',marginHorizontal:15}}>Facebook</Text>
                </TouchableOpacity>
                <View
                    style={styles.verticalline}
                  />
                  <TouchableOpacity style={styles.socialButtons}>
                    <Image source={google} /><Text style={{color:'#707070',marginHorizontal:15}}>Google</Text>
                  </TouchableOpacity>
              </View>
                <View>
                  <Text style={{textAlign:'center'}}>By creating an account you agree with the <Text style={{color:'#26B1B1'}}>Terms of Use</Text> and <Text style={{color:'#26B1B1'}}>Privacy Policy</Text></Text>
                </View>
              </View>
              
        </CenteredView>
      </ImageBackground>
    
  );
  
}

export default Home
const styles = StyleSheet.create({
  homelogo: {
    height:92,
    width:126,
    resizeMode:'contain',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    position:'absolute',
    top:'15%'
  },
  verticalline:{
    borderBottomColor: '#AFAFAF',
    borderBottomWidth: 1,
    marginHorizontal:10,
    width:40,
    transform: [{ rotate: "90deg" }]
  },
  socialBtnContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:'10%'
  },
  socialButtons:{
    display:'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
