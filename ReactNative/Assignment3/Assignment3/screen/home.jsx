import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Task1');
        }}
        style={styles.button}>
        <Text style={{color: 'white', textAlign: 'center'}}>Task 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Task2');
        }}
        style={styles.button}>
        <Text style={{color: 'white', textAlign: 'center'}}>Task 2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Register');
        }}
        style={styles.button}>
        <Text style={{color: 'white', textAlign: 'center'}}>Task 3</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Task4');
        }}
        style={styles.button}>
        <Text style={{color: 'white', textAlign: 'center'}}>Task 4</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Task5');
        }}
        style={styles.button}>
        <Text style={{color: 'white', textAlign: 'center'}}>Task 5</Text>
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
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    marginBottom: 15,
  },
});
