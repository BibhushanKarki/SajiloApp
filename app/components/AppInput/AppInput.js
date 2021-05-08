import React from 'react'
import {TextInput,StyleSheet,Dimensions} from 'react-native'
import {Card} from 'react-native-elements'

const width = Dimensions.get('window').width
const emailWidth= width/1.4

const AppInput = ({placeholder}) => {
  const [text, onChangeText] = React.useState("");
  return (
    <Card containerStyle={{height:45,borderRadius:28,borderColor:'#fff',shadowColor: "#000",
    display: 'flex',justifyContent: 'center',alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2
    }}>
      <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={text}
        />
    </Card>
  )
}

export default AppInput

const styles = StyleSheet.create({
  input: {
    height:45,
    borderWidth: 0,
    borderBottomWidth:1,
    backgroundColor:'#fff',
    width:emailWidth,
  }
});
