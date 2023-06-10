import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

const FloatingButton = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
        <View style={styles.box}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize:15}}>{title}</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0, // adjust the bottom value as needed
    right: 0,
    left:0 // adjust the right value as needed
  },
  box: {
    backgroundColor: '#fff',
    height:80,
    justifyContent: 'center',
  },
  button: {
    marginLeft: 20,
    marginRight: 20,
    height: 40,
    borderRadius: 6,
    backgroundColor: '#32b768', // adjust the background color as needed
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, // add elevation for a shadow effect (Android only)
  },
});

export default FloatingButton;