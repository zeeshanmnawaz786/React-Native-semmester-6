import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Dashboard({route}) {
  const {userfirstName, userlastName, useremail, userphoneNumber} =
    route.params;

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>First Name: {userfirstName}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Last Name: {userlastName}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Email: {useremail}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Phone Number: {userphoneNumber}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    padding: 10,
    marginBottom: 15,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
