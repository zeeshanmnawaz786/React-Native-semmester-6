import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

export default function RegisterBook() {
  const [inputText, setInputData] = useState('');
  const [bookss, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      const storedBooks = await AsyncStorage.getItem('books');
      if (storedBooks) {
        setBooks(JSON.parse(storedBooks));
      }
    })();
  }, []);

  const setDataFunc = async () => {
    if (inputText.trim() === '') {
      return;
    }
    const newTask = {
      id: Date.now().toString(),
      text: inputText,
      completed: false,
    };
    const updatedTasks = [...bookss, newTask];
    setBooks(updatedTasks);
    await AsyncStorage.setItem('books', JSON.stringify(updatedTasks));
    setInputData('');
    alert('Book register successfully go to view book ');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register Book</Text>
      <TextInput
        placeholder="New Book Register...."
        onChangeText={text => {
          setInputData(text);
        }}
        value={inputText}
        style={styles.input}
        placeholderTextColor="gray"
      />
      <TouchableOpacity onPress={setDataFunc} style={styles.addButton}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  heading: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
    color: 'black',
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
  },
  completeButton: {
    padding: 15,
    borderRadius: 5,
  },
  taskItem: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 20,
    borderRadius: 5,
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  taskText: {
    color: 'black',
    fontSize: 16,
    width: '40%',
  },
  flatList: {
    width: '80%',
  },
});
