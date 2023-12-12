import {View, Text, TouchableOpacity} from 'react-native';

import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {
  const [userData, setUserData] = useState();

  async function btnFunc() {
    const response = await AsyncStorage.getItem('data');
    console.log('🚀 ~ file: login.jsx:11 ~ btnFunc ~ response:', response);
    setUserData(JSON.parse(response));
    // navigation.goBack();
  }
  return (
    <View>
      <Text style={{color: 'red', margin: 25, fontSize: 100}}>Detail</Text>
      <Text style={{color: 'red', margin: 25}}>{userData?.userName}</Text>
      <Text style={{color: 'red', margin: 25}}>{userData?.userEmail}</Text>
      <TouchableOpacity
        onPress={btnFunc}
        style={{backgroundColor: 'black', margin: 25, fontSize: 100}}>
        <Text style={{color: 'red', margin: 25}}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
