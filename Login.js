import React,{useState,useEffect} from 'react'
import {ImageBackground,View,Text,StyleSheet} from 'react-native'
import {} from 'react-native'

var splash=require('./assets/images/splash.png')
var LoginBackground=require('./assets/images/Login.svg')

const Splash = () => {
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
        <View style={styles.conatiner}>
          <Text style={styles.logBtn}>Login Screen</Text>
        </View>
      </ImageBackground>
    
  );
  
}

export default Splash
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