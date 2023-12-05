import { StyleSheet, ImageBackground, Image } from "react-native";
import React from "react";
import { FrontCardProps } from "../assets/interfaces/CardProps";

export default function FrontCard(props: FrontCardProps) {
  const { background, avatar } = props;
  return (
    <ImageBackground source={background} style={styles.imageContainer}>
      <Image style={styles.avatar} source={avatar} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 100,
  },
  imageContainer: {
    paddingTop: 10,
    height: 100,
    alignItems: "center",
    marginBottom: 15,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: "hidden",
  },
});
