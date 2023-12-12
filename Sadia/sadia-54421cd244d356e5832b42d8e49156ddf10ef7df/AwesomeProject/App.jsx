import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EmployLogin from "./screen/EmployLogin";
import EmployRegister from "./screen/EmployRegister";
import RegisterEmploy from "./screen/RegisterEmploy";
import ViewEmploy from "./screen/ViewcEmploy";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EmployLogin">
        <Stack.Screen name="EmployLogin" component={EmployLogin} />
        <Stack.Screen name="EmployRegister" component={EmployRegister} />
        <Stack.Screen name="RegisterEmploy" component={RegisterEmploy} />
        <Stack.Screen name="ViewEmploy" component={ViewEmploy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
