import React from 'react'
import {ImageBackground,Image,Dimensions,StyleSheet,View} from 'react-native'
import AppInput from '../components/AppInput'
import { Button,Card } from 'react-native-elements';

var LoginBackground=require('../../assets/images/bgscreen.png')
var logo=require('../../assets/images/sajilologo.png');
var lock=require('../../assets/images/lock.png');

const RegisterScreen = ({navigation}) => {
  return (
    <ImageBackground source={LoginBackground} style={styles.backgroundImage}>
       <View style={styles.Container}>
        <View>
          <Image source={logo} style={styles.loginlogo}/>
          <Image source={lock} style={styles.lockicon}/>
            <Card containerStyle={{borderRadius:20,marginVertical:5,display: 'flex',width:(Dimensions.get('window').width/1.2)}}>
            <AppInput placeholder="Phone Number"/>
            <AppInput placeholder="Enter Password"/>
            <AppInput placeholder="Confirm Password"/>
            </Card>
            <Button title="Sign Up"  buttonStyle={{
            backgroundColor: "#26B1B1",width:100,alignSelf: "center",marginVertical:10}}
            onPress={()=>{
              navigation.navigate('TermsScreen')
            }}
          />
        </View>
      </View>
    </ImageBackground>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    height:'100%',width:'100%',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
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
})
