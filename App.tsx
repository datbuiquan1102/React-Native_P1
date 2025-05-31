import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [name, setName] = useState("");
  const [todoList, getTodoList] = useState([
    { id: 1, title: "Bui Quan Dat" },
    { id: 2, title: "Ton Ngo Khong" },
    { id: 3, title: "Duong Tang Tang" },
    { id: 4, title: "Tru Bat Gioi" },
    { id: 5, title: "Sa Ngo Tinh" },
    { id: 6, title: "Sa Ngo Tinh" },
    { id: 7, title: "Sa Ngo Tinh" },
    { id: 8, title: "Sa Ngo Tinh" },
    { id: 9, title: "Sa Ngo Tinh" }
  ])


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>

        <Text style={{ color: 'red', fontSize: 30 }}>{name}</Text>

        <TextInput
          onChangeText={v => setName(v)}
          autoCapitalize='none'
          // keyboardType='numeric'
          // value={name}
          style={{
            borderColor: 'violet',
            borderWidth: 1,
            padding: 10,
          }}>
        </TextInput>


        <Button title='Add New'
          color={'green'}
          onPress={() => alert("ok")}
        ></Button>

        <View style={{ marginTop: 20, borderColor: 'red', borderWidth: 1 }}>
          {todoList.map(todo => {
            return (
              <Text style={styles.todo}>{todo.title}</Text>
            )
          })}
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    backgroundColor: 'pink',
    fontSize: 30,
    marginBottom: 10,
    padding: 15

  },
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
    paddingHorizontal: 20,
    marginTop: 50
  },
});