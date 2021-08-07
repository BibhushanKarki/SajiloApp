import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Image} from 'react-native';
// import { useNavigation } from '@react-navigation/native';

var menuicon = require('../../../assets/images/menu-icon.png');

const MenuToggle = ({navigation}) => {
  // const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image style={{marginTop: 5}} source={menuicon} />
      </TouchableOpacity>
    </View>
  );
};
export default MenuToggle;
