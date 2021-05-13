import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Home from '../screens/HomeScreen';
import Login from '../screens/LoginScreen'
import PasswordScreen from '../screens/PasswordScreen'
import TermsScreen from '../screens/TermsScreen'
import GreetingScreen from '../screens/GreetingScreen'
import RegisterScreen from '../screens/RegisterScreen'
import CreateProduct from '../screens/CreateProduct'

const Stack = createStackNavigator();

const Navigation=()=>{
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
        <Stack.Screen 
        name="CreateProduct" 
        component={CreateProduct}
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation