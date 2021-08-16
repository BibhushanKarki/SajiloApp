import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Button} from 'react-native-paper';

function ProductScreen() {
  const [text, onChangeText] = React.useState('Product Name*');
  const [number, onChangeNumber] = React.useState(null);
  return (
    <>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Price in Rs*"
          keyboardType="numeric"
        />
        <TextInput
          label="Description"
          mode="outlined"
          value={text}
          onChangeText={text => setText(text)}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={Code}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={Cost}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={Unit}
        />
        <ToggleSwitch
          isOn={false}
          onColor="green"
          offColor="grey"
          label="Highlight this Product"
          labelStyle={{color: 'black', fontWeight: '500'}}
          size="large"
          onToggle={isOn => console.log('changed to : ', isOn)}
        />
        <ToggleSwitch
          isOn={false}
          onColor="green"
          offColor="grey"
          label="Show Product on catalog"
          labelStyle={{color: 'black', fontWeight: '500'}}
          size="large"
          onToggle={isOn => console.log('changed to : ', isOn)}
        />
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Create Product
        </Button>
      </SafeAreaView>
    </>
  );
}

function StoreScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ToggleSwitch
        isOn={false}
        onColor="green"
        offColor="grey"
        label="Manage stock for this product"
        labelStyle={{color: 'black', fontWeight: '500'}}
        size="large"
        onToggle={isOn => console.log('changed to : ', isOn)}
      />
      <Text>On Hand</Text>
      <Text>0</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Product" component={ProductScreen} />
        <Tab.Screen name="Store" component={StoreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
