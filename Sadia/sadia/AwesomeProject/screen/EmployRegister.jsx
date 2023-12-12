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

export default function EmployRegister() {
  const navigation = useNavigation();
  const [employName, setEmployName] = useState("");
  const [employDesignation, setEmployDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [contactNo, setContactNo] = useState("");

  const handleRegister = async () => {
    const data = {
      employName,
      employDesignation,
      department,
      contactNo,
    };
    console.log(
      "🚀 ~ file: EmployRegister.jsx:28 ~ handleRegister ~ data:",
      data
    );

    if (employName && employDesignation && department && contactNo) {
      try {
        await axios.post("http://localhost:8000/api/registeremploy", {
          employName: employName,
          designation: employDesignation,
          department: department,
          contactNo: contactNo,
        });
        alert("Successfully signed up");
        navigation.navigate("EmployLogin");
      } catch (error) {
        console.log("Registration error:", error);
      }
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Employ Registration</Text>
      <TextInput
        style={styles.input}
        placeholder="Employ Name"
        onChangeText={(text) => setEmployName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Employ Designation"
        onChangeText={(text) => setEmployDesignation(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Department"
        onChangeText={(text) => setDepartment(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Contact No"
        onChangeText={(text) => setContactNo(text)}
      />

      <Button title="Register" onPress={handleRegister} />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("EmplyLogin");
        }}
      >
        <Text style={styles.loginLink}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

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
