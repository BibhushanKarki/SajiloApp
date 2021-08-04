import React from 'react'
import {View,Image,StyleSheet,Text} from 'react-native'

var addproduct=require('../../../assets/images/addproduct.png');

const CreateNewProduct = () => {
  return (
    <View style={styles.card}>
          <Image source={addproduct} style={{height:50,width:50}}/>
          <Text style={{marginLeft:10}}>Create New Product</Text>
    </View>
  )
}

export default CreateNewProduct

const styles = StyleSheet.create({
  card:{
    backgroundColor:' rgba(0, 0, 0, 0.08);',
    height:67,
    borderRadius:8,
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:15,
    paddingRight:15
  }
})
