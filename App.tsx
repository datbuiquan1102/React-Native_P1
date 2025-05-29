import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [name, setName] = useState("Quan DatPro");
  const [age, setAge] = useState(0);
  const [person, setPerson] = useState([{
    name: "Ngokhong",
    age: 30
  }])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{age}</Text>
        <Text style={styles.text}>{JSON.stringify(person)}</Text>
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
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 20,
    paddingHorizontal: 20
  },
});