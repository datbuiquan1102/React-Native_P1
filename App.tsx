import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Ton ngo Khong</Text>
      </View>
      <Text style={styles.text}>Quandat Hello word
        <Text style={styles.blas}>
          bla blas
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    color: "red"
  },
  blas: {
    color: "black"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
