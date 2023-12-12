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

function Registercomplain() {
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
        await axios.post("http://localhost:8000/api/submitEmployeeDetails", {
          name: name,
          designation: designation,
          department: department,
          contact: contact,
          entryDate: currentDate,
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
              navigation.navigate("Sthistory");
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

export default Registercomplain;

// import React, { useState } from "react";
// import { useNavigation } from "@react-navigation/native";
// import {
//   View,
//   Text,
//   TextInput,
//   ScrollView,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native";
// import { Picker } from "@react-native-picker/picker";
// import axios from "axios";
// function Registercomplaint() {
//   const [type, setType] = useState();
//   const navigation = useNavigation();

//   const [location, setLocation] = useState("");
//   const [description, setDescrition] = useState("");

//   const handleRegisterComplaint = async () => {
//     const currentDate = new Date().toLocaleString();
//     console.log("🚀 ~ file currentDate:", currentDate);

//     if (
//       location != "" &&
//       type != "" &&
//       description != "" &&
//       currentDate != ""
//     ) {
//       try {
//         await axios.post("http://localhost:8000/api/registerComplain", {
//           location: location,
//           type: type,
//           date: currentDate,
//           description: description,
//         });
//         alert("Register Complaint Succcessfully");
//         navigation.navigate("Sthistory");
//       } catch (error) {
//         console.log("🚀 ~ file: SignUp.jsx:38 ~ handleSignUp ~ error:", error);
//       }
//     } else {
//       alert("Try Again...");
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.heading}>Register Complaint</Text>

//       <View style={styles.formContainer}>
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Location of Harassment:</Text>
//           <TextInput
//             placeholder="Enter location"
//             onChangeText={(text) => {
//               setLocation(text);
//             }}
//             style={styles.input}
//           />
//         </View>

//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Type of Harassment:</Text>
//           <Picker
//             selectedValue={type}
//             onValueChange={(itemValue) => setType(itemValue)}
//             style={styles.input}
//           >
//             <Picker.Item label="Select Harassment Type" value="" />
//             <Picker.Item
//               label="Personal Harrasment"
//               value="Personal Harrasment"
//             />
//             <Picker.Item label="Verbal Abuse" value="Verbal Abuse" />
//             <Picker.Item label="Sexual Harrasment" value="Sexual Harrasment" />
//           </Picker>
//         </View>

//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Complaint Details - Max 200 Words:</Text>
//           <TextInput
//             placeholder="Enter complaint details"
//             onChangeText={(text) => {
//               setDescrition(text);
//             }}
//             multiline={true}
//             numberOfLines={4}
//             style={styles.input}
//           />
//         </View>

//         <View style={styles.row}>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={handleRegisterComplaint}
//           >
//             <Text style={styles.buttonText}>Register Complaint</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.row}>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => {
//               navigation.navigate("Sthistory");
//             }}
//           >
//             <Text style={styles.buttonText}>Complain History</Text>
//           </TouchableOpacity>
//         </View>

//         {/* <Button Style={styles.button} title="Register Complaint" onPress={handleRegisterComplaint} />

//         <Button Style={styles.button} title="Complain History" onPress={() => {
//           navigation.navigate("Complainhistory");
//         }} />
//         */}
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "white",
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   formContainer: {
//     padding: 10,
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 10,
//     marginBottom: 10,
//   },
//   button: {
//     backgroundColor: "#007AFF",
//     padding: 10,
//     margin: 5,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: "white",
//     textAlign: "center",
//   },
//   successMessage: {
//     color: "green",
//   },
//   errorMessage: {
//     color: "red",
//   },
// });

// export default Registercomplaint;

// // 1st

// // import React, { useState } from 'react';
// // import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// // function Registercomplain({ navigation }) {
// //   const [location, setLocation] = useState('');
// //   const [type, setType] = useState('');
// //   const [complaintDetail, setComplaintDetail] = useState('');

// //   const registerComplaint = () => {
// //     // Implement the logic to register the complaint here
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.headingContainer}>
// //         <Text style={styles.heading}>Register Complaint</Text>
// //       </View>

// //       <View style={styles.inputContainer}>
// //         <Text style={styles.label}>Location of Harassment:</Text>
// //         <TextInput
// //           placeholder="Enter location"
// //           value={location}
// //           onChangeText={setLocation}
// //           style={styles.input}
// //         />

// //         <Text style={styles.label}>Type of Harassment:</Text>
// //         <TextInput

// //           placeholder="Enter type"
// //           value={type}
// //           onChangeText={setType}
// //           style={styles.input}
// //         />

// //         <Text style={styles.label}>Complaint Detail (max 200 words):</Text>
// //         <TextInput
// //           placeholder="Enter complaint details"
// //           value={complaintDetail}
// //           onChangeText={setComplaintDetail}
// //           multiline={true}
// //           numberOfLines={4}
// //           style={styles.input}
// //         />

// //         <Button title="Register Complaint" onPress={registerComplaint} />
// //       </View>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //     backgroundColor:'blue',
// //   },
// //   headingContainer: {
// //     alignItems: 'center',
// //     marginBottom: 20,
// //   },
// //   heading: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //   },
// //   inputContainer: {
// //     marginBottom: 20,
// //   },
// //   label: {
// //     fontSize: 16,
// //   },
// //   input: {
// //     borderWidth: 1,
// //     borderColor: '#ccc',
// //     padding: 10,
// //     marginBottom: 10,
// //   },
// // });

// // export default Registercomplain;
