import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './pages/Card';
import BirthdayCard from './pages/BirthdayCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Card/>
      {/* <BirthdayCard/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
