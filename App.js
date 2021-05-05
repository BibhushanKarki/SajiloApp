import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Home from './app/screens/HomeScreen';
import Login from './app/screens/LoginScreen'

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" >
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{headerShown: false}}
        />
        <Stack.Screen 
        name="Login" 
        component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;