import { StyleSheet, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import bg from '../assets/images/background.png';
import light from '../assets/images/light.png';
import { StatusBar } from 'expo-status-bar';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <Image style={styles.img} source={bg} />
      <View style={styles.containerLight}>
        <Image style={{}} source={light} />
        <Image style={styles.light} source={light} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
    height:'100%'
  },
  containerLight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-around',

  },
  img: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  light: {
    height: '70%',
    resizeMode: 'contain',
  },
});
