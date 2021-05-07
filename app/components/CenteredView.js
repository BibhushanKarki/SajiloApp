import React from 'react'
import { View } from 'react-native'

const CenteredView = ({children}) => {
  return (
    <View
      style={{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
      }}>{children}
    </View>
  )
}

export default CenteredView
