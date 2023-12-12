import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Parent from './screen/parent';
import Child1 from './screen/child1';
import Child2 from './screen/child2';
import Child3 from './screen/child3';
import Child4 from './screen/child4';
import Child5 from './screen/child5';
import Home from './screen/home';
import AuthContextProvider from './context/context';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Parent" component={Parent} />
          <Stack.Screen name="Child1" component={Child1} />
          <Stack.Screen name="Child2" component={Child2} />
          <Stack.Screen name="Child3" component={Child3} />
          <Stack.Screen name="Child4" component={Child4} />
          <Stack.Screen name="Child5" component={Child5} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContextProvider>
  );
}
