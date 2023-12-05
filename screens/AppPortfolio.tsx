import React from "react";
import { useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import { CardData } from "../assets/interfaces/CardData";
import Card from "../components/Card";
import { colors } from "../assets/color/Color";

export default function App() {
  const [isEnabled, setIsEnabled] = useState(true);

  const dataVallejo: CardData = {
    title: "Alejandro Vallejo García",
    description:
      "I am a full stack programmer way worse than Amanda but still better than Ricardo.",
    background: require("../assets/images/fondo-alejandro.jpg"),
    avatar: require("../assets/images/avatar-alejandro.jpg"),
    skillList: [
      "TypeScript",
      "JavaScript",
      "HTML",
      "Python",
      "Java",
      "CSS",
      "MySQL",
      "Oracle",
      "Videogames",
    ],
  };
  return (
  
    <View style={styles.container}>
        <Header />
        <ImageBackground source={require('./../assets/images/fondoLogged.jpg')} resizeMode="cover" style={styles.image}>
          <View style={[styles.informationContainer]}>
            <View style={styles.card} >
              <Card data={dataVallejo} isEnabled={isEnabled} />
            </View>
          </View>
        </ImageBackground>
    </View>
    
      
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    marginTop: -80
  },
  informationContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    height: 650,
  }, 
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  }
});
