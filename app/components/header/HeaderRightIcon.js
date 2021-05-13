import React from 'react'
import {View,Image} from 'react-native'

var adduser=require('../../../assets/images/adduser.png');

const HeaderRightIcon = () => {
  return (
    <View>
      <Image source={adduser}/>
    </View>
  )
}

export default HeaderRightIcon
