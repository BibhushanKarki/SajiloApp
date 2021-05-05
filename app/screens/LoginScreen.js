import React from 'react'
import {Text,Image} from 'react-native'
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput/AppInput';
import Center from '../components/Center'

var logo=require('../../assets/images/sajilologo.png');
const Login = () => {
  return (
    <Center>
      <Image source={logo}></Image>
      <Text>Lock Icon Here</Text>
      <AppInput></AppInput>
      <AppButton text='Next'/>
    </Center>
  )
}

export default Login

