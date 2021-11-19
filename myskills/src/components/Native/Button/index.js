import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} {...props}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 15,
    marginTop: 20,
    borderRadius: 7,
    alignItems: 'center',
    backgroundColor: '#a370f7',
  },
  buttonText: {
    fontSize: 17,
    color: '#fcfcfc',
    fontWeight: 'bold',
  },
});
