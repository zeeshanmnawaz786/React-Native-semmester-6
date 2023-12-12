import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';

export default function Register({navigation}) {
  const [userName, setName] = useState('');
  const [userEmail, setEmail] = useState('');

  async function btnFunc() {
    const userData = {
      userName: userName,
      userEmail: userEmail,
    };
    await AsyncStorage.setItem('data', JSON.stringify(userData));
    navigation.navigate('Login');
  }

  return (
    <View>
      <Text style={{color: 'red', margin: 25, fontSize: 50}}>Register</Text>
      <TextInput
        placeholderTextColor="gray"
        style={{backgroundColor: 'white', color: 'black', margin: 25}}
        onChangeText={text => {
          setName(text);
        }}
      />
      <TextInput
        placeholderTextColor="gray"
        style={{backgroundColor: 'white', color: 'black', margin: 25}}
        onChangeText={text => {
          setEmail(text);
        }}
      />

      <TouchableOpacity
        onPress={btnFunc}
        style={{backgroundColor: 'black', margin: 25, fontSize: 100}}>
        <Text style={{color: 'red', margin: 25}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
