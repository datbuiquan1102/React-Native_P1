import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [name, setName] = useState("");


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text style={{
          color: 'red',
          fontSize: 30
        }}>{name}</Text>

        <TextInput
          onChangeText={v => setName(v)}
          autoCapitalize='none'
          // keyboardType='numeric'
          // value={name}
          style={{
            borderColor: 'violet',
            borderWidth: 1,
            padding: 10
          }}>
        </TextInput>
        <Button title='Add New'></Button>
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