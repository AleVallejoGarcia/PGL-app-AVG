import { ImageBackground, StyleSheet, Text, View, Pressable } from 'react-native'
import { colors } from '../assets/color/Color';
import React from 'react'
import QRCode from 'react-native-qrcode-svg';


export default function QR() {
    return (
    
    <View style={styles.container}>
      <ImageBackground source={require('./../assets/images/fondoLogged.jpg')} resizeMode="cover" style={styles.image}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Mi Github</Text>
          <QRCode value={"github.com/AleVallejoGarcia"} size={200} />
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
    height: 300,
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
  }
});