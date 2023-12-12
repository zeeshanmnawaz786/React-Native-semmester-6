import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Register({navigation}) {
  const [username, setUsername] = useState('');
  const [useremail, setUseremail] = useState('');
  const [userpass, setUserpass] = useState('');

  const registerFunc = async () => {
    if (username && useremail && userpass) {
      const userData = {
        username,
        useremail,
        userpass,
      };
      try {
        await AsyncStorage.setItem('data3', JSON.stringify(userData));
        setUsername('');
        setUseremail('');
        setUserpass('');
        navigation.navigate('Login');
      } catch (error) {
        // Handle AsyncStorage error gracefully
        console.error('AsyncStorage Error:', error);
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your Name..."
        value={username}
        onChangeText={text => setUsername(text)}
        style={styles.input}
        placeholderTextColor="gray"
      />
      <TextInput
        placeholder="Enter your email..."
        value={useremail}
        onChangeText={text => setUseremail(text)}
        style={styles.input}
        placeholderTextColor="gray"
      />
      <TextInput
        placeholder="Enter your password..."
        value={userpass}
        onChangeText={text => setUserpass(text)}
        style={styles.input}
        placeholderTextColor="gray"
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={registerFunc} style={styles.button}>
        <Text style={{color: 'white', textAlign: 'center'}}>Register</Text>
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
