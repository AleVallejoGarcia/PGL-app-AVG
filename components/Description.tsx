import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { DescriptionProps } from "../assets/interfaces/CardProps";
import { colors } from "../assets/color/Color";

export default function Description(props: DescriptionProps) {
  const { title, description } = props;

  return (
    <View style={styles.infoContainer}>
      <Text style={[styles.cardTitle, styles.text]}>{title}</Text>
      <Text style={styles.text}>{description}</Text>
      <Text style={styles.line} />
      <View style={[styles.infoContainer, styles.iconList]}>
        <Entypo
          name="linkedin"
          size={24}
          color={colors.Dun}
          style={styles.icon}
        />
        <AntDesign
          name="github"
          size={24}
          color={colors.Dun}
          style={styles.icon}
        />
        <AntDesign
          name="twitter"
          size={24}
          color={colors.Dun}
          style={styles.icon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    marginTop: 25,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    color: colors.Dun,
    paddingHorizontal: 20,
    paddingVertical: 5,
    textAlign: "center",
  },
  line: {
    borderColor: colors.Dun,
    borderBottomWidth: 0.5,
    marginHorizontal: 8,
  },
  iconList: {
    alignSelf: "center",
    flexDirection: "row",
  },
  icon: {
    marginHorizontal: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
  },
});
