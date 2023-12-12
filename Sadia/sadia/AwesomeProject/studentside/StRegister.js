import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const StRegister = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const data = {
      name,
      email,
      department,
      rollNo,
      contactNo,
      password,
    };

    if (name && email && department && rollNo && contactNo && password) {
      try {
        await axios.post("http://localhost:8000/api/registerStUser", {
          userName: name,
          userEmail: email,
          department,
          rollNo,
          contactNo,
          password,
        });
        alert("Successfully signed up");
        navigation.navigate("StLogin");
      } catch (error) {
        console.log("Registration error:", error);
      }
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Student Registration</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Department"
        onChangeText={(text) => setDepartment(text)}
        value={department}
      />
      <TextInput
        style={styles.input}
        placeholder="Roll No"
        onChangeText={(text) => setRollNo(text)}
        value={rollNo}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Contact No"
        onChangeText={(text) => setContactNo(text)}
        value={contactNo}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />

      <Button title="Register" onPress={handleRegister} />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("StLogin");
        }}
      >
        <Text style={styles.loginLink}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "black",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 8,
  },
  loginLink: {
    marginTop: 20,
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default StRegister;

// import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';

// const StRegister = () => {
//   const navigation = useNavigation()
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [department, setDepartment] = useState('');
//   const [rollNo, setRollNo] = useState('');
//   const [contactNo, setContactNo] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegister = async () => {
//     const data = {
//       name:name,
//       email:email,
//       department:department,
//       rollNo:rollNo,
//       contactNo:contactNo,
//       password:password,
//     }
//     console.log("🚀 ~ file: StRegister.js:30 ~ handleRegister ~ data:", data)

//       if (name != '' && email != '' && department != '' && rollNo != ''&& contactNo != ''&& password != '') {
//         try {
//           await axios.post(
//             'http://localhost:8000/api/registerStUser',
//             {
//               userName:name,
//               userEmail:email,
//               department:department,
//               rollNo:rollNo,
//               contactNo:contactNo,
//               password:password,
//             },
//           );
//           alert('Succcessfully sign up');
//           navigation.navigate('StLogin');
//         } catch (error) {
//           console.log('🚀 ~ file: SignUp.jsx:38 ~ handleSignUp ~ error:', error);
//         }
//       } else {
//         alert('Try Again...');
//       }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Student Registration</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         onChangeText={(text) => setName(text)}
//         value={name}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         onChangeText={(text) => setEmail(text)}
//         value={email}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Department"
//         onChangeText={(text) => setDepartment(text)}
//         value={department}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Roll No"
//         onChangeText={(text) => setRollNo(text)}
//         value={rollNo}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Contact No"
//         onChangeText={(text) => setContactNo(text)}
//         value={contactNo}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         onChangeText={(text) => setPassword(text)}
//         value={password}
//         secureTextEntry={true}
//       />

//       <Button title="Register" onPress={handleRegister} />

//       <TouchableOpacity
//         onPress={() => {
//           navigation.navigate('StLogin')
//         }}
//       >
//         <Text style={styles.loginLink}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'skyblue',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: 'white',
//   },
//   image: {
//     width: 100,
//     height: 100,
//     marginBottom: 20,
//   },
//   input: {
//     width: 300,
//     height: 40,
//     borderColor: 'white',
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//     backgroundColor: 'white',
//   },
//   loginLink: {
//     marginTop: 20,
//     color: 'white',
//     textDecorationLine: 'underline',
//   },
// });

// export default StRegister;
