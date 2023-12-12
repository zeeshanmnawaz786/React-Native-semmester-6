import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import axios from 'axios';

const App = () => {
  const [city, setCity] = useState('karachi');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    try {
      const response = await axios.get(
        'https://laiba-phi.vercel.app/api/getAllWeatherData',
      );
      const filterCityData = response.data.allWeatherData.filter(item => {
        return item.city.toLowerCase() === city.toLowerCase();
      });

      setWeather(filterCityData);
    } catch (error) {
      console.error(error);
      setError('An error occurred. Please try again later.');
      setWeather(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text>dsfdsh</Text>
      <View style={styles.mainContainer}>
        <View style={styles.top}>
          <Text style={styles.title}>Weather App</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter city name"
            placeholderTextColor="white"
            value={city}
            onChangeText={text => setCity(text)}
          />
          <View style={styles.buttonContainer}>
            <Button title="Get Weather" onPress={getWeather} color="#db6400" />
          </View>

          {error && <Text style={styles.errorText}>Error: {error}</Text>}
          {weather && (
            <View style={styles.weatherInfo}>
              <Text style={styles.weatherInfoText}>
                City: {weather[0].city}
              </Text>
              <Text style={styles.weatherInfoText}>
                Temperature: {weather[0].temperature}°C
              </Text>
              <Text style={styles.weatherInfoText}>
                Weather: {weather[0].Weather}
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ea2c62',
  },
  mainContainer: {
    width: '90%',
    maxWidth: 300,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  top: {
    alignItems: 'center',
    zIndex: 999,
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderBottomWidth: 2,
    borderBottomColor: 'green',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 14,
    width: '80%',
    padding: 10,
    color: 'white',
  },
  buttonContainer: {
    width: '80%',
    marginTop: 10,
  },
  errorText: {
    color: 'white',
    fontSize: 15,
  },
  weatherInfo: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
  },
  weatherInfoText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
