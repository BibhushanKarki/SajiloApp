import React from 'react'
import {TextInput,StyleSheet,Dimensions} from 'react-native'

const width = Dimensions.get('window').width
const emailWidth= width/1.3

const AppInput = () => {
  const [text, onChangeText] = React.useState("");
  return (
    <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
  )
}

export default AppInput

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    borderBottomWidth:1,
    backgroundColor:'#fff',
    borderRadius:28,
    paddingVertical:5,
    width:emailWidth,
    paddingHorizontal:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  }
});
