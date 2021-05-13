import React from 'react'
import {View,StyleSheet,Image,ImageBackground} from 'react-native'
import { Text } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

var logo=require('../../assets/images/sajilologo.png');
var greetings=require('../../assets/images/greetings.png');
var lines=require('../../assets/images/lines.png');

const GreetingScreen = ({navigation}) => {
  return (
    <ImageBackground source={lines} style={{height:'100%',width:'100%'}}>
    <View style={styles.Container}>
        <View style={styles.condition}>
          <Image source={logo} style={styles.loginlogo}/>
          <Image source={greetings} style={styles.greetings}/>
          <Text h4 style={styles.title}>Congratulation!!</Text>
          <Text style={styles.statement}>Your Vendor Account has been created.</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={{marginVertical: 10}}>
          <Button title="Create Shop"  buttonStyle={{backgroundColor: "#FFBE1A"}}
          onPress={()=>{
            navigation.navigate('CreateProduct');
          }}
          />
        </TouchableOpacity>
        </View>
        </ImageBackground>
  )
}

export default GreetingScreen

const styles= StyleSheet.create({
  Container:{
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
    marginVertical:'15%'
  },
  loginlogo:{
    width:69,height:94,resizeMode:'contain',alignSelf:'center'
  },
  title:{
    color:'#26B1B1',
  },
  condition:{
    alignItems: 'center',
  },
  statement:{
    textAlign:'center',
    color:'#808080',
    marginVertical:10
  },
  greetings:{
    width:213,
    height:160,
    resizeMode:'contain',
    alignSelf:'center',
    marginVertical:'10%'
  },
  btnStyle:{
    backgroundColor:'#FFBE1A',
    paddingVertical:8,
    width:100,
    borderRadius:5,
    alignSelf:'center',
  },
  btnText:{
    color:'red',
    textAlign: 'center',
  }
})
