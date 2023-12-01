import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../assets/color/Color'
import { DrawerNavigationOptions, createDrawerNavigator } from '@react-navigation/drawer';
import Header from './Header';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';


const Drawer = createDrawerNavigator();


const CustomDrawer = () => {

  const drawerNavigatorScreenOptions: DrawerNavigationOptions = {
    // header: ({navigation}) => <CustomHeader navigation={navigation}></CustomHeader>,
    headerTitle: 'AVG-APP',
    headerTitleAlign: 'center',
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25
    },
    headerStyle: {
      backgroundColor: colors.Black,

    },
    headerTintColor: colors.Cordovan,
    drawerItemStyle: {
      width: '100%',
    },
    drawerActiveTintColor: colors.Dun,
    drawerActiveBackgroundColor: colors.Black,
    drawerInactiveTintColor: colors.Dun,
    drawerInactiveBackgroundColor: colors.Cordovan,
    drawerType: 'front'
  }

  return (
    <Drawer.Navigator initialRouteName='Home' screenOptions={drawerNavigatorScreenOptions}>
      <Drawer.Screen name='Welcome' component={Welcome} />
      <Drawer.Screen name='Login' component={Login} />
    </Drawer.Navigator>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  headerContainer: {
  },
  headerTitle: {

  }
})