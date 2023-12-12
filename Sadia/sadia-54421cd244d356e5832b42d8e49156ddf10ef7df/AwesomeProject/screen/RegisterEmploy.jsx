import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import axios from "axios";

export default function RegisterEmploy() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [contact, setContact] = useState("");

  const handleEmployeeDetailEntry = async () => {
    const currentDate = new Date().toLocaleString();

    if (
      name !== "" &&
      designation !== "" &&
      department !== "" &&
      contact !== ""
    ) {
      try {
        await axios.post("http://localhost:8000/api/registeremploy", {
          employName: name,
          designation: designation,
          department: department,
          contactNo: contact,
        });
        alert("Employee details submitted successfully");
        navigation.navigate("EmployeeDetailsHistory");
      } catch (error) {
        console.log("Error submitting employee details:", error);
      }
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Enter Employee Details</Text>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Employee Name:</Text>
          <TextInput
            placeholder="Enter name"
            onChangeText={(text) => setName(text)}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Designation:</Text>
          <TextInput
            placeholder="Enter designation"
            onChangeText={(text) => setDesignation(text)}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Department:</Text>
          <TextInput
            placeholder="Enter department"
            onChangeText={(text) => setDepartment(text)}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Contact Number:</Text>
          <TextInput
            placeholder="Enter contact number"
            onChangeText={(text) => setContact(text)}
            style={styles.input}
          />
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleEmployeeDetailEntry}
          >
            <Text style={styles.buttonText}>Submit Details</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("ViewEmploy");
            }}
          >
            <Text style={styles.buttonText}>Employee Details History</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  formContainer: {
    padding: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
