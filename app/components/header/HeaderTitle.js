import React from 'react'
import {View,Text} from 'react-native'

const HeaderTitle = ({text}) => {
  return (
    <View>
      <Text style={{color:"#fff",fontSize:20}}>{text}</Text>
    </View>
  )
}

export default HeaderTitle
