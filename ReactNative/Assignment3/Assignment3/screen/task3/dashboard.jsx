import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = ({navigation}) => {
  const LogoutFunc = async () => {
    await AsyncStorage.removeItem('data3');
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Text style={{color: 'black', textAlign: 'center', fontSize: 20}}>
        Welcome To Dashboard
      </Text>
      <TouchableOpacity onPress={LogoutFunc} style={styles.button}>
        <Text style={{color: 'white', textAlign: 'center'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;

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
