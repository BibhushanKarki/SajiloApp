import React from 'react';
import {View, Image} from 'react-native';
// import { useNavigation } from '@react-navigation/native';

var menuicon = require('../../../assets/images/menu-icon.png');

const MenuToggle = ({navigation}) => {
  // const navigation = useNavigation();
  return (
    <View>
      <Image
        style={{marginTop: 5}}
        source={menuicon}
        onPress={() => navigation.toggleDrawer()}
      />
    </View>
  );
};
export default MenuToggle;
