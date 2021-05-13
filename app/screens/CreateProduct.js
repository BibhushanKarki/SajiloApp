import React from 'react'
import {View,Image,StyleSheet,Text} from 'react-native'
import {Card} from 'react-native-elements'

import MainHeader from '../components/header/MainHeader'

var search=require('../../assets/images/search.png');
var category=require('../../assets/images/category.png');
var qrcode=require('../../assets/images/qrcode.png');
var addproduct=require('../../assets/images/addproduct.png');

const CreateProduct = () => {
  return (
    <View style={{backgroundColor:'#fff',height:'100%'}}>
      <MainHeader/>
      <View style={styles.iconConatiner}>
        <Image source={search}/>
        <Image source={category}/>
        <Image source={qrcode}/>
      </View>
      <View>
        <Card containerStyle={{
          display:'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          width:'90%',
          height:67,
          backgroundColor:' rgba(0, 0, 0, 0.08);'
          }}>
          <Image source={addproduct} style={{height:50,width:50}}/>
          <Text>Create New Product</Text>
        </Card>
      </View>
    </View>
  )
}

export default CreateProduct

const styles= StyleSheet.create({
  iconContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent: 'flex-end',
    alignItems:'center',
    marginVertical:10
  },
})
