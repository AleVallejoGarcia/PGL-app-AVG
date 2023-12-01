import { StyleSheet, Text, View } from 'react-native';
import Welcome from "./screens/Welcome";
import CustomDrawer from './components/CustomDrawer';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer >
      <CustomDrawer></CustomDrawer>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
