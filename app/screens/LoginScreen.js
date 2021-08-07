import React from 'react';
import {Text, Image, Dimensions, StyleSheet, View} from 'react-native';
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput/AppInput';

var logo = require('../../assets/images/sajilologo.png');
var lock = require('../../assets/images/lock.png');

const width = Dimensions.get('window').width;
const emailWidth = width / 1.6;

const Login = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <View>
        <Image source={logo} style={styles.loginlogo} />
        <Image source={lock} style={styles.lockicon} />
        <Text style={styles.inputLabel}>Email</Text>
        <AppInput />
      </View>
      <AppButton
        text="Next"
        onPress={() => {
          navigation.navigate('PasswordScreen');
        }}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '30%',
  },
  loginlogo: {
    width: 69,
    height: 94,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  lockicon: {
    width: 21,
    height: 24,
    resizeMode: 'contain',
    marginVertical: 10,
    alignSelf: 'center',
  },
  inputLabel: {
    textAlign: 'left',
    alignSelf: 'center',
    width: emailWidth,
    color: '#AFAFAF',
  },
});
