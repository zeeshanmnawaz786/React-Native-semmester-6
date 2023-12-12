import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Task1() {
  const [inputText, setInputData] = useState('');
  const [retrieveData, setRetrieveData] = useState('');

  const setDataFunc = async () => {
    await AsyncStorage.setItem('data', JSON.stringify(inputText));
  };
  const getDataFunc = async () => {
    const data = await AsyncStorage.getItem('data');
    setRetrieveData(data);
  };

  return (
    <View style={styles.container}>
      <Text style={{color: 'black', textAlign: 'center'}}>{retrieveData}</Text>
      <TextInput
        placeholder="Enter your Text..."
        onChangeText={text => {
          setInputData(text);
        }}
        style={styles.input}
        placeholderTextColor="gray"
      />
      <TouchableOpacity onPress={setDataFunc} style={styles.button}>
        <Text style={{color: 'white', textAlign: 'center'}}>Save Data</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={getDataFunc} style={styles.button}>
        <Text style={{color: 'white', textAlign: 'center'}}>Retrieve Data</Text>
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

  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    marginBottom: 15,
  },
});
