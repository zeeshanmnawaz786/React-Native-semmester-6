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

export default function ViewBooks() {
  const [updateDataa, setUpdatedData] = useState('');
  const [bookss, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      const storedBooks = await AsyncStorage.getItem('books');
      if (storedBooks) {
        setBooks(JSON.parse(storedBooks));
      }
    })();
  }, []);

  const deleteFunc = async id => {
    const updatedTasks = bookss.filter(bookk => bookk.id !== id);
    setBooks(updatedTasks);
    await AsyncStorage.setItem('books', JSON.stringify(updatedTasks));
  };

  const updateData = async id => {
    const updatedTasks = bookss.map(bookk => {
      if (bookk.id === id) {
        return {
          ...bookk,
          completed: !bookk.completed,
          text: updateDataa,
        };
      }
      return bookk;
    });
    setBooks(updatedTasks);
    await AsyncStorage.setItem('books', JSON.stringify(updatedTasks));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>View Books</Text>

      <FlatList
        data={bookss}
        keyExtractor={item => item.id}
        renderItem={({item}) =>
          !item.completed ? (
            <View style={styles.taskItem}>
              <Text style={styles.taskText}>{item.text}</Text>
              <TouchableOpacity
                onPress={() => {
                  deleteFunc(item.id);
                }}
                style={styles.deleteButton}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  updateData(item.id);
                }}
                style={[
                  styles.completeButton,
                  {backgroundColor: item.completed ? 'green' : 'blue'},
                ]}>
                <Text style={styles.buttonText}>Update</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.taskItem}>
              <TextInput
                placeholder="Enter your Text..."
                onChangeText={text => {
                  setUpdatedData(text);
                }}
                style={styles.input}
                placeholderTextColor="gray"
              />
              <TouchableOpacity
                onPress={() => {
                  updateData(item.id);
                }}
                style={[
                  styles.completeButton,
                  {backgroundColor: item.completed ? 'green' : 'blue'},
                ]}>
                <Text style={styles.buttonText}>
                  {item.completed ? 'Save' : 'Update'}
                </Text>
              </TouchableOpacity>
            </View>
          )
        }
        style={styles.flatList}
      />
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
    width: '70%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 20,
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
