import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
    title: string;
  }>;

export default function FirstSection({children, title}: SectionProps): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (

      <View style={styles.firstSectionContainer}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: Colors.white,
            },
          ]}>
          {title}
        </Text>
        <Text
          style={[
            styles.sectionDescription,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}>
          {children}
        </Text>
      </View>
    );
  }



  const styles = StyleSheet.create({
    sectionTitle: {
      fontSize: 24,
      fontWeight: '400',

    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    firstSectionContainer: {
      marginTop: 50,
      paddingHorizontal: 24,
      paddingVertical: 24,
      backgroundColor: '#b22222',
    },
  });