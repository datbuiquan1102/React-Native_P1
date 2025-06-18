import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [name, setName] = useState("");
  const [todoList, getTodoList] = useState([
    { id: 1, title: "Bui Quan Dat" },
    { id: 2, title: "Ton Ngo Khong" },
    { id: 3, title: "Duong Tang Tang" },
    { id: 4, title: "Tru Bat Gioi" },
    { id: 5, title: "Sa Ngo Tinh 1" },
    { id: 6, title: "Sa Ngo Tinh 2" },
    { id: 7, title: "Sa Ngo Tinh 3" },
    { id: 8, title: "Sa Ngo Tinh 4" },
    { id: 9, title: "Sa Ngo Tinh 5" },
    { id: 10, title: "Sa Ngo Tinh 6" }
  ])


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
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

      {/* <ScrollView style={{
        marginTop: 20,
        borderColor: 'red', borderWidth: 1
      }}>
        {todoList.map(todo => {
          return (
            <Text key={todo.id} style={styles.todo}>{todo.title}</Text>
          )
        })}
      </ScrollView> */}



      <FlatList style={{
        marginTop: 20,
        borderColor: 'red', borderWidth: 1
      }}
        data={todoList}
        renderItem={({ item }) => {
          console.log(">>> Check Data: ", item)
          return (
            <Text
              key={item.id}
              style={styles.todo}>
              {item.title}
            </Text>
          )
        }}>
      </FlatList>

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