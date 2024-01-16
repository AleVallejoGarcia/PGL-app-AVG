import { ImageBackground, StyleSheet, Text, View, Pressable } from 'react-native'
import { colors } from '../assets/color/Color';
import React from 'react'
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { userContext } from '../contexts/UserContext'

type welcomeScreenProps = { navigation: NavigationProp<ParamListBase>}



export default function Welcome({navigation}: welcomeScreenProps) {
  const {isLogged, toggleIsLogged} = React.useContext(userContext)
  const {user, setUserName} = React.useContext(userContext)

  return (
    <>
    {isLogged ? (
      <View style={styles.container}>
        <ImageBackground source={require('./../assets/images/fondoLogged.jpg')} resizeMode="cover" style={styles.image}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Welcome {"\n"}{user}!</Text>
          </View>
        </ImageBackground>
      </View>
    ) : ( 
      <View style={styles.container}>
        <ImageBackground source={require('./../assets/images/fondoApp.jpg')} resizeMode="cover" style={styles.image}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Welcome Back User</Text>
            <View style={styles.pressableContainer}>
              <Pressable style={styles.login} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.textLogin} >Login</Text>
              </Pressable>
              <Pressable style={styles.signin} onPress={() => navigation.navigate("Register")}>
                <Text style={styles.textLogin} >Sign in</Text>
              </Pressable>
            </View>  
          </View>
        </ImageBackground>
      </View>
    )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 20,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  textContainer: {
    width: '70%',
    height: 220,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: colors.Cordovan,
    justifyContent: 'space-around'
  },
  text: {
    color: colors.Dun,
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center', 
  },
  login: {
    padding: 10,
    paddingHorizontal: 35,
    borderRadius: 30,
    backgroundColor: colors.Dun, 
    marginRight: 5,
    marginLeft: -5
  },
  signin: {
    padding: 10,
    paddingHorizontal: 35,
    borderRadius: 30,
    backgroundColor: colors.Dun, 
  },
  textLogin: {
    color: colors.Black,
    fontWeight: 'bold',
    fontSize: 18
  },
  pressableContainer: {
    flexDirection: 'row',
    width: 240,
    alignItems: 'center',
    alignContent: 'space-between',
  }
});