import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
} from 'react-native';

export default function SubmitData({navigation}) {
  const [userfirstName, setFirstName] = useState('');
  const [userlastName, setLastName] = useState('');
  const [useremail, setEmail] = useState('');
  const [userphoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = () => {
    navigation.navigate('Dashboard', {
      userfirstName: userfirstName,
      userlastName: userlastName,
      useremail: useremail,
      userphoneNumber: userphoneNumber,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.topHeadingText}>Login to your Account</Text>
      <TextInput
        onChangeText={text => setFirstName(text)}
        style={styles.input}
        placeholder="Enter your first name...."
        placeholderTextColor="gray"
      />
      <TextInput
        onChangeText={text => setLastName(text)}
        style={styles.input}
        placeholder="Enter your last name...."
        placeholderTextColor="gray"
      />
      <TextInput
        onChangeText={text => setEmail(text)}
        style={styles.input}
        placeholder="Enter your email...."
        placeholderTextColor="gray"
      />
      <TextInput
        onChangeText={text => setPhoneNumber(text)}
        style={styles.input}
        placeholder="Enter your phone number...."
        placeholderTextColor="gray"
      />

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
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
