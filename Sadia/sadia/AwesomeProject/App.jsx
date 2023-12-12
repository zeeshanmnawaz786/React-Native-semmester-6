import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EmployLogin from "./screen/EmployLogin";
import EmployRegister from "./screen/EmployRegister";

// import Viewcomplain from "./studentside/Viewcomplain";
// import Viewdetail from "./studentside/Viewdetail";
// import Sthistory from "./studentside/Sthistory";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EmployRegister">
        <Stack.Screen name="EmployLogin" component={EmployLogin} />
        <Stack.Screen name="EmployRegister" component={EmployRegister} />
        {/* <Stack.Screen name="Registercomplain" component={Registercomplain} /> */}
        {/* <Stack.Screen name="Sthistory" component={Sthistory} /> */}
        {/* <Stack.Screen name="Viewcomplain" component={Viewcomplain} /> */}
        {/* <Stack.Screen name="Viewdetail" component={Viewdetail} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
