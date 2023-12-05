import { StyleSheet, Text, View } from 'react-native';
import UserProvider from './providers/UserProvider';
import CustomDrawer from './components/CustomDrawer';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    
    <UserProvider>
      <NavigationContainer >
        <CustomDrawer></CustomDrawer>
      </NavigationContainer>
    </UserProvider>
    
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
