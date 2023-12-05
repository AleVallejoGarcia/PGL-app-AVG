import { ImageBackground, StyleSheet, Text, View, Pressable } from 'react-native'
import { colors } from '../assets/color/Color';
import React from 'react'
import { NavigationProp, ParamListBase } from '@react-navigation/native';

type welcomeScreenProps = { navigation: NavigationProp<ParamListBase>}

export default function Welcome({navigation}: welcomeScreenProps) {
    return (
    
    <View style={styles.container}>
      <ImageBackground source={require('./../assets/images/fondoApp.jpg')} resizeMode="cover" style={styles.image}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Welcome Back User</Text>
          <Pressable style={styles.login} onPress={() => navigation.navigate("Login")}>
            <Text style={styles.textLogin} >Login</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
    
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
    verticalAlign: 'bottom',
    padding: 10,
    paddingHorizontal: 45,
    borderRadius: 30,
    backgroundColor: colors.Dun, 
  },
  textLogin: {
    color: colors.Black,
    fontWeight: 'bold',
    fontSize: 18
  }
});