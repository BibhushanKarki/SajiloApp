import React from 'react'
import {View,Image} from 'react-native'

var menuicon=require('../../../assets/images/menu-icon.png');

const MenuToggle = () => {
  return (
    <View>
      <Image source={menuicon}/>
    </View>
  )
}
export default MenuToggle
