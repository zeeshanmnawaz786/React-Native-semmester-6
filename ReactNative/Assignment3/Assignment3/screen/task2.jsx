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

export default function Task1() {
  const [inputText, setInputData] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async () => {
      const storedTasks = await AsyncStorage.getItem('tasks2');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
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
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    await AsyncStorage.setItem('tasks2', JSON.stringify(updatedTasks));
    setInputData('');
  };

  const deleteFunc = async id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    await AsyncStorage.setItem('tasks2', JSON.stringify(updatedTasks));
  };

  const markCompletedFunc = async id => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
    await AsyncStorage.setItem('tasks2', JSON.stringify(updatedTasks));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo List</Text>
      <TextInput
        placeholder="Enter your Task..."
        onChangeText={text => {
          setInputData(text);
        }}
        value={inputText}
        style={styles.input}
        placeholderTextColor="gray"
      />
      <TouchableOpacity onPress={setDataFunc} style={styles.addButton}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
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
                  markCompletedFunc(item.id);
                }}
                style={[
                  styles.completeButton,
                  {backgroundColor: item.completed ? 'green' : 'blue'},
                ]}>
                <Text style={styles.buttonText}>
                  {item.completed ? 'Undo' : 'Done'}
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.taskItem}>
              <Text style={styles.taskText}>Task Completed</Text>
              <TouchableOpacity
                onPress={() => {
                  deleteFunc(item.id);
                }}
                style={styles.deleteButton}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  markCompletedFunc(item.id);
                }}
                style={[
                  styles.completeButton,
                  {backgroundColor: item.completed ? 'green' : 'blue'},
                ]}>
                <Text style={styles.buttonText}>
                  {item.completed ? 'Undo' : 'Done'}
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
