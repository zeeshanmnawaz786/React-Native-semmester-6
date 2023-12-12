import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './screen/home';
import Task1 from './screen/task1';
import Task2 from './screen/task2';
import Task4 from './screen/task4/task4';
import Task5 from './screen/task5';
import Register from './screen/task3/register';
import Login from './screen/task3/login';
import Dashboard from './screen/task3/dashboard';
import ViewBooks from './screen/task4/viewBooks';
import RegisterBook from './screen/task4/registerBook';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Task1" component={Task1} />
        <Stack.Screen name="Task2" component={Task2} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RegisterBook" component={RegisterBook} />
        <Stack.Screen name="ViewBooks" component={ViewBooks} />
        <Stack.Screen name="Task4" component={Task4} />
        <Stack.Screen name="Task5" component={Task5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
