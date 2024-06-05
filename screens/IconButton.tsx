import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IconButtonProps {
    iconName: string;
    onPress: () => void;
  }

const IconButton = ({ iconName, onPress}: IconButtonProps) => {
  return (
    <TouchableOpacity style = {styles.button} onPress={onPress}>
      <Icon name= {iconName} size = {50} />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
    icon: {
        color: 'white',
      },
    button: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 10,
        borderRadius: 5,

    },
  });
  