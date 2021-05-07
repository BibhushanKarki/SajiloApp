import React,{useState} from 'react'
import {Image,StyleSheet,View,ImageBackground} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { Text } from 'react-native-elements';
import AppButton from '../components/AppButton';

var logo=require('../../assets/images/sajilologo.png');
var lines=require('../../assets/images/lines.png');
const TermsScreen = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <ImageBackground source={lines} style={{height:'100%',width:'100%'}}>
      <View style={styles.Container}>
        <View style={styles.condition}>
          <Image source={logo} style={styles.loginlogo}/>
          <Text h4 style={styles.title}>Condition of Use</Text>
          <Text style={styles.statement}>To create your Sajilo account, you must agree to our terms of use and privacy policy</Text>
        </View>
        
        <View style={styles.checkboxConatiner}>
            <View style={{display: 'flex',flexDirection: 'row',alignItems: 'center'}}>
              <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>I have read and accept the terms of use  and privacy policy</Text>
            </View>
                <AppButton text='Start' type='outlined'
                bordered
                size='small' onPress={()=>{
                        navigation.navigate('GreetingScreen');
                      }}/>
            </View>
        </View>
        </ImageBackground>
  )
}

export default TermsScreen

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
  title:{
    color:'#26B1B1',
    marginTop:'10%'
  },
  condition:{
    alignItems: 'center',
  },
  statement:{
    textAlign:'center',
    color:'#808080',
    marginVertical:10,
    marginHorizontal:'10%'
  },
  checkbox: {
    alignSelf: "center",
  },
  label:{
    fontSize:12,
  },
  checkboxConatiner:{
    display: 'flex',justifyContent: 'center',alignItems: 'center',
    marginBottom:'15%'
  }
})

