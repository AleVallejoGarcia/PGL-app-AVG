import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../assets/color/Color";
export default function Header() {

  return (
    <View  style={[styles.container,{backgroundColor: colors.Black}]}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>My Portfolio</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "22%",
    paddingTop: 50,
    width: "100%",
    color: 'white',
    marginTop: 100
  },
  containerTitle: {
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
    color: colors.Cordovan,
  },
});
