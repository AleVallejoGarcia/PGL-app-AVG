import { StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../assets/color/Color'
import { DrawerNavigationOptions, createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import { userContext } from '../contexts/UserContext';
import WelcomeLogged from '../screens/WelcomeLogged';
import Portfolio from '../screens/Portfolio';


const Drawer = createDrawerNavigator();


const CustomDrawer = () => {

  const {isLogged, toggleIsLogged} = React.useContext(userContext)
  const drawerNavigatorScreenOptions: DrawerNavigationOptions = {
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
    drawerInactiveTintColor: colors.Black,
    drawerInactiveBackgroundColor: colors.Dun,
    drawerType: 'front',
    drawerStyle: {
      backgroundColor: colors.Cordovan
    }
  }

  return (
    <>
    {isLogged ? ( 
     <Drawer.Navigator initialRouteName='Home' screenOptions={drawerNavigatorScreenOptions}>
        <Drawer.Screen name='Welcome' component={WelcomeLogged} />
        <Drawer.Screen name='Portfolio' component={Portfolio} />
      </Drawer.Navigator>
    ):(
      <Drawer.Navigator initialRouteName='Home' screenOptions={drawerNavigatorScreenOptions}>
        <Drawer.Screen name='Welcome' component={Welcome} />
        <Drawer.Screen name='Login' component={Login} />
      </Drawer.Navigator>
    ) 
    }
    </>
    
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  headerContainer: {
  },
  headerTitle: {

  }
})