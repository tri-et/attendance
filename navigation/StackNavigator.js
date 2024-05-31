import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, AntDesign,Ionicons } from '@expo/vector-icons';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} options={{ tabBarLabel: 'Home', headerShown: false, tabBarIcon: ({ focused }) => (focused ? <Entypo name='home' size={24} color='black' /> : <AntDesign name='home' size={24} color='black' />) }} />
        <Tab.Screen name='Setting' component={HomeScreen} options={{ tabBarLabel: 'Setting', headerShown: false, tabBarIcon: ({ focused }) => (focused ? <Ionicons name='settings' size={24} color='black' /> : <AntDesign name='setting' size={24} color='black' />) }} />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Main' component={BottomTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
