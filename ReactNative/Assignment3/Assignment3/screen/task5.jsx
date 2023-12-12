import React, {useState, useEffect} from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

export default function App() {
  const [theme, setTheme] = useState(THEMES.LIGHT);

  useEffect(() => {
    loadThemeSetting();
  }, []);

  const loadThemeSetting = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem('themeSetting');
      if (savedTheme !== null) {
        setTheme(savedTheme);
      }
    } catch (error) {
      console.error('Error loading theme setting:', error);
    }
  };

  const saveThemeSetting = async selectedTheme => {
    try {
      await AsyncStorage.setItem('themeSetting', selectedTheme);
      setTheme(selectedTheme);
    } catch (error) {
      console.error('Error saving theme setting:', error);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    saveThemeSetting(newTheme);
  };

  return (
    <View
      style={
        theme === THEMES.DARK ? styles.darkContainer : styles.lightContainer
      }>
      <Text style={theme === THEMES.DARK ? styles.darkText : styles.lightText}>
        Theme Toggle
      </Text>
      <Switch value={theme === THEMES.DARK} onValueChange={toggleTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  darkContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  lightText: {
    fontSize: 20,
    marginBottom: 10,
    color: 'black',
  },
  darkText: {
    fontSize: 20,
    marginBottom: 10,
    color: 'white',
  },
});
