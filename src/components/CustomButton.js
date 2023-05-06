import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({onPress, text, type = 'PRIMARY'}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 10,
    // marginVertical: 10,
    padding: 15,
    alignItems: 'center',
  },

  container_PRIMARY: {
    backgroundColor: '#e79115',
    marginTop:20
  },

  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
});
export default CustomButton;
