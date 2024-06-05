import React, {useRef, useState} from 'react';
import Section from "./screens/Section"
import FirstSection from "./screens/FirstSection"
import DrawerButton from "./screens/DrawerButton"
import IconButton from './screens/IconButton';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  View,
  Image,
  DrawerLayoutAndroid,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';



function PressReleases(): JSX.Element {

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const drawer = useRef<DrawerLayoutAndroid>(null);

    const [drawerPosition] = useState<'left' | 'right'>(
        'right',
    );

    const navigationView = () => (
        <View style={[styles.container, styles.navigationContainer]}>
            
        <IconButton iconName = "heart" onPress={() => {drawer.current?.closeDrawer()}}/>

        <DrawerButton
          title = "Press Releases"
          />

        <DrawerButton
          title = "Photos"/>

        <DrawerButton
          title = "Videos"/>

        </View>
    );

  return (


    <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}>
    <SafeAreaView style={backgroundStyle}>

      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>



        <View
          style= {{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>

          <FirstSection title="Press Releases">
            
          </FirstSection>

          
          <Section title="">

          </Section>

          </View>

          <View style = {styles.container}>
          <Button
            title="Open"
            onPress={() => drawer.current?.openDrawer()}
            
            />

          </View>

      </ScrollView>
    </SafeAreaView>
    </DrawerLayoutAndroid>
  );
}

export default PressReleases;


const styles = StyleSheet.create({


  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: 'rgba(200,200,200,0.8)',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
  image: {
    
    top: -40,
    zIndex: 1,
    
    width: 375,
    height: 250,
    borderWidth: 10,
    borderColor: 'white',
    borderRadius: 20,
    
  },
  imageContainer: {
    
    alignItems: 'center',
    justifyContent: 'center',
  },
});
