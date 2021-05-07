import React from 'react'
import { Text, View, TouchableOpacity, Dimensions } from 'react-native'

const width = Dimensions.get('window').width

const AppButton = ({ text, onPress,type = 'filled', bordered = false, size = 'large'  }) => {
  const large = width / 1.3
  const small = width / 2
  const btnSize = size === 'large' ? large : small
  const btnBgColor = type === 'filled' ? '#26B1B1' : '#fff'
  const btnTextColor = type === 'filled' ? '#ffffff' : '#707070'
  const btnBorderRadius = bordered ? 30 : 5


  const containerCommonStyle = {
    backgroundColor: btnBgColor,
    paddingVertical: 8,
    width: btnSize,
    borderRadius: btnBorderRadius
  }

  const textCommonStyle = {
    color: btnTextColor,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Quicksand-Medium'
  }
  const border = type === 'outlined' && { borderColor: '#26B1B1', borderWidth: 1 }

  return (
     <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={{marginVertical: 10}}>
      <View style={[containerCommonStyle, border]}>
        <Text style={[textCommonStyle]}> {text} </Text>
      </View>
    </TouchableOpacity>
  )
}

export default AppButton

