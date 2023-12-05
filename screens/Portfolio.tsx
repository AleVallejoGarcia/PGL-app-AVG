import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../assets/color/Color';
import AppPortfolio from './AppPortfolio';
import QR from './QR';

const Tab = createBottomTabNavigator();

const Body = () => {

  const HomeTabOptions = (): BottomTabNavigationOptions => {
    return ({
      tabBarIcon: ({ color, size }) => <Ionicons name={'file-tray-full'} size={30} color={color} />
    })
  }

  const QRTabOptions = (): BottomTabNavigationOptions => {
    return ({
      tabBarIcon: ({ color, size }) => <Ionicons name={'logo-github'} size={30} color={color} />
    })
  }

  const tabNavigatorScreenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarInactiveTintColor: colors.Dun,
    tabBarActiveTintColor: colors.Cordovan,
    tabBarShowLabel: false,  
    tabBarStyle: {
      backgroundColor: colors.Black
    }
  }

  return (
    <View style={styles.appBody}>
      <Tab.Navigator screenOptions={tabNavigatorScreenOptions}>
        <Tab.Screen name='Portfolio' component={AppPortfolio} options={HomeTabOptions} />
        <Tab.Screen name='QR' component={QR} options={QRTabOptions} />
      </ Tab.Navigator>
    </View>
  )
}

export default Body

const styles = StyleSheet.create({
  appBody: {
    flex: 20
  }
})