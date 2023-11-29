import { StyleSheet, Text, View } from 'react-native';
import Welcome from "./components/Welcome";
export default function App() {
  return (
    <View style={styles.container}>
      <Welcome/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
