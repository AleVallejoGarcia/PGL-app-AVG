import { StyleSheet, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../assets/color/Color";

interface ArrowSelectionProps {
  displayMyInfo: boolean;
  setDisplayMyInfo: Function;
}

export default function ArrowSelection(props: ArrowSelectionProps) {
  const { displayMyInfo, setDisplayMyInfo } = props;
  return (
    <View style={styles.arrowStyle}>
      <AntDesign
        name={displayMyInfo ? "arrowdown" : "arrowup"}
        size={24}
        color={colors.Dun}
        onPress={() => setDisplayMyInfo(!displayMyInfo)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  arrowStyle: {
    alignSelf: "center",
    flexDirection: "row",
  },
});
