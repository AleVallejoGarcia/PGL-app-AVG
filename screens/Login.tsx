import { StyleSheet, Text, View, ImageBackground, Image, Pressable } from 'react-native'
import { colors } from '../assets/color/Color'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { userContext } from '../contexts/UserContext';
import { loginUser } from '../services/loginService';
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Login() {
  
  const {isLogged, toggleIsLogged} = React.useContext(userContext)
  const {user, setUserName} = React.useContext(userContext)

  const [password, setPassword] = React.useState("")
  
  const changeUser = (newUser: string) => {
    setUserName(newUser)
  }

  const changePassword = (newPassword: string) => {
    setPassword(newPassword)
  }

  const logUser = (user: string) => {
    toggleIsLogged()
    changeUser(user)
  }

  const saveCookie = async (cookie: string) => {
    await AsyncStorage.setItem('token', cookie);
  } 

  const fetchLogin = (userToLogin: string, passwordToLogin: string) => {
    if (userToLogin == "" || passwordToLogin == "") {
      window.alert("Error algún campo esta vacío")
    } else {
      loginUser(userToLogin, passwordToLogin)
      .then((response) => {
        if (response.status == 200) {
          logUser(userToLogin)
          let cookie = String(response.headers.get("Set-Cookie"))
          saveCookie(cookie)
          console.log(cookie);
        } else {
          window.alert("Usuario o contraseña incorrecto")
        }
      }) 
      .catch((error) => {
        console.log(error);    
      })
      
    }
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
            <TextInput onChangeText={(newPassword) => changePassword(newPassword)} style={styles.input} secureTextEntry={true} placeholder='Introduzca la contraseña'/>
            <Pressable style={styles.login} onPress={() => fetchLogin(user, password)}>
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