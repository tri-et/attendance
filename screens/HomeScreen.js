import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0, flex: 1, backgroundColor: 'white' }}>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
