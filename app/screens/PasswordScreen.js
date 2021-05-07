import React from 'react'
import {View,Text,Dimensions,Image,StyleSheet} from 'react-native'
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput'
import TermsScreen from '../screens/TermsScreen'

var logo=require('../../assets/images/sajilologo.png');
var lock=require('../../assets/images/lock.png');

const width = Dimensions.get('window').width
const emailWidth= width/1.6

const PasswordScreen = ({navigation}) => {
  return (
      <View style={styles.Container}>
        <View>
          <Image source={logo} style={styles.loginlogo}/>
          <Image source={lock} style={styles.lockicon}/>
          <Text style={styles.inputLabel}>Password</Text>
          <AppInput/>
        </View>
        <AppButton text='Next' onPress={()=>{
                navigation.navigate('TermsScreen');
              }}/>
      </View>
  )
}

const styles = StyleSheet.create({
  Container:{
    display:'flex',
    flex:1,
    alignItems:'center',
    justifyContent: 'space-between',
    marginTop:'30%'
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
  inputLabel:{
    textAlign:'left',
    alignSelf:'center',
    width:emailWidth,
    color:'#AFAFAF'
  }
})



export default PasswordScreen
