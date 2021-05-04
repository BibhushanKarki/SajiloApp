import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Login from'./app/screens/Login';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Login" component={Login}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;