import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Checkout from '../components/Checkout/Checkout';
import MainHeader from '../components/header/MainHeader';
import AppButton from '../components/AppButton';
var search = require('../../assets/images/search.png');
var category = require('../../assets/images/category.png');
var qrcode = require('../../assets/images/qrcode.png');
var bolt = require('../../assets/images/bolt.png');
var x2 = require('../../assets/images/x2.png');

const CheckOut = ({children}) => {
  return (
    <View style={{backgroundColor: '#fff', height: '100%', flex: 1}}>
      <MainHeader />
      <View
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 10,
          paddingBottom: 10,
          flex: 1,
        }}>
        <View style={styles.iconContainer}>
          <View>
            <Image source={search} />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={styles.img}>
              <Image source={category} />
            </View>
            <View style={styles.img}>
              <Image source={bolt} />
            </View>
            <View style={styles.img}>
              <Image source={qrcode} />
            </View>
            <View style={styles.img}>
              <Image source={x2} />
            </View>
          </View>
        </View>
        <View style={{display: 'flex', flex: 1, marginTop: 20}}>
          <Checkout />
          <Checkout />
          <Checkout />
        </View>
        <View dtyle={{display: 'flex', justifyContent: 'center', widh: '100%'}}>
          <AppButton text="No Items Rs 0.00" />
        </View>
      </View>
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  img: {
    marginLeft: 10,
    marginRight: 10,
  },
});
