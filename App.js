import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Home from './app/screens/HomeScreen';
import Login from './app/screens/LoginScreen'
import PasswordScreen from './app/screens/PasswordScreen'
import TermsScreen from './app/screens/TermsScreen'
import GreetingScreen from './app/screens/GreetingScreen'
import RegisterScreen from './app/screens/RegisterScreen'
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
        <Stack.Screen 
        name="PasswordScreen" 
        component={PasswordScreen}
        options={{ title: 'Password' }}
        />
        <Stack.Screen 
        name="TermsScreen" 
        component={TermsScreen}
        options={{headerShown: false}}
        />
        <Stack.Screen 
        name="GreetingScreen" 
        component={GreetingScreen}
        options={{headerShown: false}}
        />
        <Stack.Screen 
        name="RegisterScreen" 
        component={RegisterScreen}
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;