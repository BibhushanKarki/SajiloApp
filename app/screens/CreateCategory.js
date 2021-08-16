import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const CreateCategory = () => {
  return (
    <View style={styles.container}>
      {/* TestingKoLagi */}
      <Image
        style={styles.stretch}
        source={require('@expo/snack-static/react-native-logo.png')}
      />
      <Text>Hey! Lets add your first category.</Text>
    </View>
  );
};

export default CreateCategory;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
});
