import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function Button(props: { onPress?: any; title?: any }) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    elevation: 0,
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 20,
    lineHeight: 40,
    
    letterSpacing: 0.25,
    color: 'white',
  },
});