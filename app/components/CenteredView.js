import React from 'react'
import { View } from 'react-native'

<<<<<<< HEAD:app/components/CenteredView.js
const CenteredView = ({children}) => {
=======
const Center = ({props}) => {
>>>>>>> a77c7e130ce095820b681aa7d63b7f24ede02243:app/components/Center.js
  return (
    <View
      style={{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
<<<<<<< HEAD:app/components/CenteredView.js
      }}>{children}
=======
      }}>{props.children}
>>>>>>> a77c7e130ce095820b681aa7d63b7f24ede02243:app/components/Center.js
    </View>
  )
}

export default CenteredView
