import { StyleSheet, Text, View, ImageBackground, Image, Pressable } from 'react-native'
import { colors } from '../assets/color/Color'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { userContext } from '../contexts/UserContext';


export default function Login() {
  
  const {isLogged, toggleIsLogged} = React.useContext(userContext)
  const {user, setUserName} = React.useContext(userContext)
  
  const onClickLogin = () => {
    toggleIsLogged()
  }

  const changeUser = (newUser: string) => {
    setUserName(newUser)
  }

  return (
    <View>
      <ImageBackground source={require('./../assets/images/fondoApp.jpg')} resizeMode="cover" style={styles.image}>
        <View style={styles.textContainer}>
          <View>
            <Image source={require('./../assets/images/hoja-de-arce.png')}></Image>
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.textoLogin}>Usuario</Text>
            <TextInput onChangeText={(newUser) => changeUser(newUser)} style={styles.input} placeholder='Introduzca el usuario'/>
            <Text style={styles.textoLogin}>Contraseña</Text>
            <TextInput style={styles.input} secureTextEntry={true} placeholder='Introduzca la contraseña'/>
            <Pressable style={styles.login} onPress={onClickLogin}>
              <Text style={styles.textLogin} >Log in</Text>
            </Pressable>
          </View>
        </View>
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
  textContainer: {
    width: '70%',
    height: 340,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: colors.Cordovan,
    justifyContent: 'center'
  },
  input: {
    height: 40,
    margin: 15,
    borderWidth: 5,
    borderColor: colors.Dun,
    backgroundColor: 'white',
    padding: 10,
    width: 180
  },
  textoLogin: {
    color: colors.Dun,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10

  },
  login: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: colors.Dun, 
    marginTop: 10,
    width: 100
  },
  textLogin: {
    color: colors.Black,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  formContainer: {
    alignItems: 'center'
  }
})