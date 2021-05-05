import React from 'react'
import {TextInput,StyleSheet} from 'react-native'


const AppInput = () => {
  const [text, onChangeText] = React.useState("Email");
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
    borderRadius:28,
  },
});
