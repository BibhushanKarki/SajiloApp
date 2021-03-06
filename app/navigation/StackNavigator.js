import React from 'react';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import Home from '../screens/HomeScreen';
import Login from '../screens/LoginScreen';
import PasswordScreen from '../screens/PasswordScreen';
import TermsScreen from '../screens/TermsScreen';
import GreetingScreen from '../screens/GreetingScreen';
import RegisterScreen from '../screens/RegisterScreen';
import CheckOut from '../screens/CheckOut';
import CreateNewProduct from '../screens/CreateNewProduct';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="PasswordScreen"
        component={PasswordScreen}
        options={{title: 'Password'}}
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
        name="CheckOut"
        component={CheckOut}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateNewProduct"
        component={CreateNewProduct}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
