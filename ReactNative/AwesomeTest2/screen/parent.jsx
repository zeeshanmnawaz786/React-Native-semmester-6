import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import useAuth from '../context/useAuth';

export default function Parent() {
  const {state, setState} = useAuth({});
  const [inputText, setInputText] = useState();

  const handleInput = () => {
    setState(inputText);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.topHeadingText}>Parent</Text>
      <TextInput
        onChangeText={text => setInputText(text)}
        style={styles.input}
        placeholder="Enter some text here...."
        placeholderTextColor="gray"
      />

      <TouchableOpacity onPress={handleInput} style={styles.button}>
        <Text style={{color: 'white', textAlign: 'center'}}>Submit</Text>
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
