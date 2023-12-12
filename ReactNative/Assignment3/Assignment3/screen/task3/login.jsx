import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Login({navigation}) {
  const [userName, setUsername] = useState('');
  const [userPass, setUserpass] = useState('');

  const LoginFunc = async () => {
    try {
      if (userName && userPass) {
        const dataString = await AsyncStorage.getItem('data3');
        if (dataString) {
          const data = JSON.parse(dataString);

          if (data.username === userName && data.userpass === userPass) {
            navigation.navigate('Dashboard');
          } else {
            alert('Incorrect credentials');
          }
        } else {
          alert('No data found. Please register.');
        }
      } else {
        alert('Please fill in all fields.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your username..."
        value={userName}
        onChangeText={text => setUsername(text)}
        style={styles.input}
        placeholderTextColor="gray"
      />

      <TextInput
        placeholder="Enter your password..."
        value={userPass}
        onChangeText={text => setUserpass(text)}
        style={styles.input}
        placeholderTextColor="gray"
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={LoginFunc} style={styles.button}>
        <Text style={{color: 'white', textAlign: 'center'}}>Login</Text>
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
