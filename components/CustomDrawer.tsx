import { StyleSheet, View, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../assets/color/Color'
import { DrawerNavigationOptions, createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import { userContext } from '../contexts/UserContext';
import Portfolio from '../screens/Portfolio';
import Register from '../screens/Register';
import { logOutUser } from '../services/loginService';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Drawer = createDrawerNavigator();


const CustomDrawer = () => {

  const {isLogged, toggleIsLogged, toggleLogOut} = React.useContext(userContext)

  const fetchLogOut = () => {
    logOutUser()
      .then((status) => {
        status == 200 ? toggleLogOut() : window.alert("Error")
      }) 
      .catch((error) => {
        console.log(error);    
      })
   }
  
  const drawerNavigatorScreenOptions: DrawerNavigationOptions = {
    headerRight: () => (
      <>
        {isLogged ? (
        <View>
          <Pressable onPress={() => fetchLogOut()}>
          <MaterialCommunityIcons
              name={"logout"}
              size={30}
              color={colors.Cordovan}
              />
          </Pressable>
        </View>
        ) : (
        <View/>
        )}
      </>
    ),
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
        <Drawer.Screen name='Welcome' component={Welcome} />
        <Drawer.Screen name='Portfolio' component={Portfolio} />
      </Drawer.Navigator>
    ):(
      <Drawer.Navigator initialRouteName='Home' screenOptions={drawerNavigatorScreenOptions}>
        <Drawer.Screen name='Welcome' component={Welcome} />
        <Drawer.Screen name='Register' component={Register}/>
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
