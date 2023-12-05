import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { SkillListProps } from "../assets/interfaces/CardProps";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from "../assets/color/Color";
export default function SkillList(props: SkillListProps) {
  const { skillList } = props;

  const getIconNameForSkill = (skill: string) => {
    switch (skill) {
      case "TypeScript":
        return "language-typescript";
      case "JavaScript":
        return "language-javascript";
      case "Python":
        return "language-python";
      case "Java":
        return "language-java";
      case "PHP":
        return "language-php";
      case "CSS":
        return "language-css3";
      case "HTML":
        return "language-html5";
      case "MySQL":
        return "dolphin";
      case "Oracle":
        return "database-outline";
      case "C":
        return "language-c";
      case "MongoDB":
        return "leaf";
      case "Videogames":
        return "microsoft-xbox-controller";
      default:
        return "horse";
    }
  };

  return (
    <View style={styles.skillContainer}>
      <Text style={[styles.skillTitle, styles.text]}> SKILLS </Text>
      <ScrollView style={styles.skillList}>
        {skillList.map((skill, index) => (
          <View key={index} style={styles.skillItem}>
            <MaterialCommunityIcons
              name={getIconNameForSkill(skill)}
              size={20}
              color={colors.Dun}
              />
            <Text style={styles.text}>{skill}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  skillTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  skillItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    alignSelf: "flex-start",
    marginLeft: 45,
  },
  text: {
    color: colors.Dun,
    paddingHorizontal: 20,
    paddingVertical: 5,
    textAlign: "center",
  },
  iconList: {
    alignSelf: "center",
    flexDirection: "row",
  },
  skillContainer: {
    alignItems: "center",
    marginBottom: 25,
  },
  skillList: {
    height: 150,
    width: 200,
    textAlign: "center",
  },
});
