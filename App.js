import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './app/navigation/StackNavigator';
import {DrawerContent} from './app/screens/DrawerContent';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CreateNewProduct from './app/screens/CreateNewProduct';
import Settings from './app/screens/Settings';
import ProfileScreen from './app/screens/ProfileScreen';

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator
      initialRouteName="CreateNewProduct"
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={MainStackNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  );
};

export default App;
