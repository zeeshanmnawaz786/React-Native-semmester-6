import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Register() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/bbsul.png')} style={styles.image} />
      </View>

      <Text style={styles.topHeadingText}>Create your Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="gray"
        color="black"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="gray"
        color="black"
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        placeholderTextColor="gray"
        color="black"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={{color: 'white', textAlign: 'center'}}>Sign up</Text>
      </TouchableOpacity>
      <Text style={styles.bottomHeadingText}>Or Signup with</Text>

      <View style={styles.iconRow}>
        <Icon name="google" size={30} color="red" style={styles.icon} />
        <Icon name="twitter" size={30} color="skyblue" style={styles.icon} />
        <Icon name="facebook" size={30} color="blue" style={styles.icon} />
      </View>
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
  },
  topHeadingText: {
    fontSize: 20,
    marginTop: 40,
    marginBottom: 20,
    textAlign: 'left',
    width: '80%',
    color: 'black',
  },
  bottomHeadingText: {
    fontSize: 20,
    marginTop: 20,
    color: 'black',
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    width: '80%',
  },
  image: {
    width: 150,
    height: 150,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginTop: 20,
  },
  icon: {
    borderColor: 'black',
    borderRadius: 10,
    padding: 20,
  },
});
