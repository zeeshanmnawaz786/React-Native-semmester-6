import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Dashboard({route}) {
  const {email, pass} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Email: {email}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Password: {pass}</Text>
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
