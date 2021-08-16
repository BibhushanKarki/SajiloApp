import React from 'react';

var OnlineCatalog = require('../../assets/images/createonlinecatalog.svg');
const CreateOnlineCatalog = () => {
  return (
    <View>
      <Image source={OnlineCatalog} />
      <Text>
        Make your catalog available to customers in a few minutes, its’s super
        easy. Just confirm that it matches your brand and business first.
      </Text>
      <Button mode="contained" onPress={() => console.log('Pressed')}>
        Create Online Catalog
      </Button>
    </View>
  );
};

export default CreateOnlineCatalog;
