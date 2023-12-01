import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View>
      <ImageBackground source={require('./../assets/images/fondoApp.jpg')} resizeMode="cover" style={styles.image}>

      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
})