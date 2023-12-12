import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import useAuth from '../context/useAuth';

export default function Child2() {
  const {state, setState} = useAuth({});

  return (
    <View style={styles.container}>
      <Text style={styles.topHeadingText}>Child 2</Text>
      <Text style={styles.topHeadingText}>Data from Parent: {state}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
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
  topHeadingText: {
    fontSize: 20,
    marginTop: 40,
    marginBottom: 20,
    textAlign: 'left',
    width: '80%',
    color: 'black',
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    width: '80%',
  },
});
