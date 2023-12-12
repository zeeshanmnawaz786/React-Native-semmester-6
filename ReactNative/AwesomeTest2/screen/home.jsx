import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Parent');
        }}
        style={styles.button}>
        <Text style={{color: 'white', textAlign: 'center'}}>Parent</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Child1');
        }}
        style={styles.button}>
        <Text style={{color: 'white', textAlign: 'center'}}>Child1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Child2');
        }}
        style={styles.button}>
        <Text style={{color: 'white', textAlign: 'center'}}>Child2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Child3');
        }}
        style={styles.button}>
        <Text style={{color: 'white', textAlign: 'center'}}>Child3</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Child4');
        }}
        style={styles.button}>
        <Text style={{color: 'white', textAlign: 'center'}}>Child4</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Child5');
        }}
        style={styles.button}>
        <Text style={{color: 'white', textAlign: 'center'}}>Child5</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    marginBottom: 20,
  },
});
