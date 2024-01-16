import { StyleSheet, Text, View, ImageBackground, Image, Pressable } from 'react-native'
import { colors } from '../assets/color/Color'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { userContext } from '../contexts/UserContext';
import { registerUser } from '../services/loginService';



export default function Register() {
  
  const [newUser, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {user, setUserName} = React.useContext(userContext)
  const {isLogged, toggleIsLogged} = React.useContext(userContext)

  const changeUser = (newUser: string) => {
    setUser(newUser)
    setUserName(newUser)
  }


  const changeEmail = (newEmail: string) => {
    setEmail(newEmail)
  }

  const changePassword = (newPassword: string) => {
    setPassword(newPassword)
  }

  const registeredUser = () => {
    toggleIsLogged()
    window.alert("Se ha registrado")
    
  }

  const fetchRegister = (userToRegister: string, mailToRegister: string, passwordToRegister: string) => {
    if (userToRegister == "" || mailToRegister == "" || passwordToRegister == "") {
      window.alert("Error algún campo esta vacío")
    } else {
      registerUser(userToRegister, mailToRegister, passwordToRegister)
      .then((response) => {
        response.status == 201 ? registeredUser() : window.alert("Usuario ya registrado")
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
            <Image source={require('./../assets/images/bonsai.png')}></Image>
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.textoLogin}>Email</Text>
            <TextInput onChangeText={(newEmail) => changeEmail(newEmail)} style={styles.input} placeholder='Introduzca el email'/>
            <Text style={styles.textoLogin}>Usuario</Text>
            <TextInput onChangeText={(newUser) => changeUser(newUser)} style={styles.input} placeholder='Introduzca el usuario'/>
            <Text style={styles.textoLogin}>Contraseña</Text>
            <TextInput onChangeText={(newPassword) => changePassword(newPassword)} style={styles.input} secureTextEntry={true} placeholder='Introduzca la contraseña'/>
            <Pressable style={styles.login}>
              <Text style={styles.textLogin} onPress={() => fetchRegister(newUser, email, password)} >Sign in</Text>
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
    height: 450,
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