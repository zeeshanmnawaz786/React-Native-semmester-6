import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = () => {
    console.log(email, 'email');
    console.log(pass, 'password');
    navigation.navigate('Dashboard', {email: email, pass, pass});
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/bbsul.png')} style={styles.image} />
      </View>

      <Text style={styles.topHeadingText}>Login to your Account</Text>
      <TextInput
        onChangeText={text => setEmail(text)}
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="gray"
      />
      <TextInput
        onChangeText={text => setPass(text)}
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="gray"
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={{color: 'white', textAlign: 'center'}}>Sign in</Text>
      </TouchableOpacity>
      <Text style={styles.bottomHeadingText}>Or Sign in with</Text>

      <View style={styles.iconRow}>
        <Icon name="google" size={30} color="red" style={styles.icon} />
        <Icon name="twitter" size={30} color="skyblue" style={styles.icon} />
        <Icon name="facebook" size={30} color="blue" style={styles.icon} />
      </View>
      <Text style={styles.bottomHeadingText}>
        Don't have an account?
        <Text
          onPress={() => navigation.navigate('Register')}
          style={{color: 'blue'}}>
          Sign up
        </Text>
      </Text>
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
