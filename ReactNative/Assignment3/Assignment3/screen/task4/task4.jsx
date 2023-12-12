import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Task4({navigation}) {
  const registerBookFunc = () => {
    navigation.navigate('RegisterBook');
  };
  const viewBookFunc = () => {
    navigation.navigate('ViewBooks');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Book Store</Text>

      <TouchableOpacity onPress={registerBookFunc} style={styles.addButton}>
        <Text style={styles.buttonText}>Register Books</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={viewBookFunc} style={styles.addButton}>
        <Text style={styles.buttonText}>View Books</Text>
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
  heading: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
  },

  addButton: {
    marginBottom: 10,
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
