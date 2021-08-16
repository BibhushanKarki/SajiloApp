import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

var CompanyName = require('../../assets/images/createcompanyname.svg');
const CreateCatergoryName = () => {
  const companies = ['Apple', 'Samsung', 'Twitch', 'Tesla'];
  return (
    <View>
      <Image source={CompanyName} />
      <Text>Create Category Name</Text>
      <SelectDropdown
        data={companies}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
      />
    </View>
  );
};

export default CreateCatergoryName;
