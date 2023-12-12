import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
} from "react-native";

const Viewcomplain = () => {
  const navigation = useNavigation();
  const [complainData, setComplainData] = useState("");
  console.log("🚀  complainData:", complainData);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/getAllComplains"
        );
        setComplainData(res.data.allComp);
      } catch (error) {
        console.log("🚀 ~ file: SignUp.jsx:38 ~ handleSignUp ~ error:", error);
      }
    })();
  }, []);

  const deleteFunc = async (id) => {
    console.log("🚀 ~ file: Sthistory.js:30 ~ deleteFunc ~ id:", id);
    await axios.delete(`http://localhost:8000/api/deleteComplain?_id=${id}`);
    setComplainData((prevComps) => prevComps.filter((comp) => comp._id !== id));
  };

  const passDataToBlogCardFunc = (item) => {
    navigation.navigate("Viewdetail", {
      item: item,
    });
  };

  const renderFunc = ({ item, index }) => {
    return (
      <View style={styles.tableRow}>
        <View style={styles.cell}>
          <Text>{index + 1}</Text>
        </View>
        <View style={styles.cell}>
          <Text>{item.location}</Text>
        </View>
        <View style={styles.cell}>
          <Text>{item.type}</Text>
        </View>
        <View style={styles.cell}>
          <Text>{item.date}</Text>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              passDataToBlogCardFunc(item);
            }}
          >
            <Text style={styles.buttonText}>View</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => {
              deleteFunc(item._id);
            }}
          >
            <Text style={styles.buttonText}>Reject</Text>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.row}>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => {
              deleteFunc(item._id);
            }}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <View style={styles.cell}>
            <Text>S.NO</Text>
          </View>
          <View style={styles.cell}>
            <Text>Location</Text>
          </View>
          <View style={styles.cell}>
            <Text>Harrasment Type</Text>
          </View>
          <View style={styles.cell}>
            <Text>Complain Date</Text>
          </View>
          <View style={styles.cell}>
            <Text>Action</Text>
          </View>
        </View>
        <FlatList data={complainData} renderItem={renderFunc} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: "black",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "lightgray",
    borderBottomWidth: 1,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  cell: {
    flex: 1,
    padding: 10,
  },
  row: {
    flexDirection: "row",
  },
  button1: {
    backgroundColor: "green",
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  button2: {
    backgroundColor: "red",
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default Viewcomplain;

// import React from 'react';
// import { View, Text, Button, TouchableOpacity,ScrollView, StyleSheet } from 'react-native';

// const ViewComplaints = () => {
//   const data = [
//     {sno:'01', name: 'John Doe', email: 'john@example.com', rollno:'101', department: 'IT' },
//     {sno:'02', name: 'Alice Smith', email: 'alice@example.com',rollno:'101', department: 'HR' },
//     {sno:'03', name: 'Bob Johnson', email: 'bob@example.com', rollno:'101', department: 'Finance' },
//   ];

//   return (
//     <ScrollView>
//       <View style={styles.table}>
//         <View style={styles.tableHeader}>
//         <View style={styles.cell}><Text>S.NO</Text></View>
//           <View style={styles.cell}><Text>Name</Text></View>
//           <View style={styles.cell}><Text>Email</Text></View>
//           <View style={styles.cell}><Text>Roll No.</Text></View>
//           <View style={styles.cell}><Text>Department</Text></View>
//           <View style={styles.cell}><Text>Action</Text></View>
//         </View>
//         {data.map((item, index) => (
//           <View key={index} style={styles.tableRow}>
//             <View style={styles.cell}><Text>{item.sno}</Text></View>
//             <View style={styles.cell}><Text>{item.name}</Text></View>
//             <View style={styles.cell}><Text>{item.email}</Text></View>
//             <View style={styles.cell}><Text>{item.rollno}</Text></View>
//             <View style={styles.cell}><Text>{item.department}</Text></View>
//             <View style={styles.row}>
//         <TouchableOpacity style={styles.button1}>
//           <Text style={styles.buttonText}>Accept</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.row}>
//         <TouchableOpacity style={styles.button2}>
//           <Text style={styles.buttonText}>Reject</Text>
//         </TouchableOpacity>
//             </View>
//           </View>
//         ))}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   table: {
//     borderWidth: 1,
//     borderColor: 'black',
//   },
//   tableHeader: {
//     flexDirection: 'row',
//     backgroundColor: 'lightgray',
//     borderBottomWidth: 1,
//   },
//   tableRow: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderColor: 'lightgray',
//   },
//   cell: {
//     flex: 1,
//     padding: 10,
//   },
//   row: {
//     flexDirection: 'row',
//   },
//   button1: {
//     backgroundColor: 'green',
//     padding: 10,
//     margin: 5,
//     borderRadius: 5,
//   },
//   button2: {
//     backgroundColor: 'red',
//     padding: 10,
//     margin: 5,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     textAlign: 'center'

//   },

// });

// export default ViewComplaints;

// import React, { useState } from 'react';
// import { View, Text, Picker, StyleSheet } from 'react-native';

// const Viewcomplain = () => {
//   // Simulate the data you have in PHP
//   const row = {
//     full_name: 'John Doe',
//     email: 'john@example.com',
//     roll_number: '12345',
//     department: 'Computer Science',
//     gender: 'Male',
//     status: 0,
//     location_of_harrasment: 'Some Location',
//     harrasment_type: 'Type of Harassment',
//     date_of_harrasment: '2023-11-04',
//     complaint_related_docs: 'complaint.pdf', // Change to the actual file name or an empty string
//   };

//   const [complaintStatus, setComplaintStatus] = useState(row.status);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerText}>Manage Complaints</Text>

//       <View style={styles.row}>
//         <View style={styles.column}>
//           <Text style={styles.sectionHeader}>Student Information</Text>
//           <Text>Full Name: {row.full_name}</Text>
//           <Text>Email: {row.email}</Text>
//           <Text>Roll No.: {row.roll_number}</Text>
//           <Text>Department: {row.department}</Text>
//           <Text>Gender: {row.gender}</Text>
//         </View>
//         <View style={styles.column}>
//           <Text style={styles.sectionHeader}>Complaint Information</Text>
//           <Text>Location of Harassment: {row.location_of_harrasment}</Text>
//           <Text>Type of Harassment: {row.harrasment_type}</Text>
//           <Text>Date of Harassment: {row.date_of_harrasment}</Text>
//           <Text>Complaint Status: {complaintStatus === 0 ? 'Not Process Yet' : (complaintStatus === 1 ? 'In-Progress' : 'Closed')}</Text>
//           <Text>Complaint: {row.complaint_details}</Text>
//           <Text>Complaint Doc: {row.complaint_related_docs !== '' ? <Text style={styles.link}>(Document Link)</Text> : 'Document Not Uploaded'}</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f0f0f0',
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   row: {
//     flexDirection: 'row',
//   },
//   column: {
//     flex: 1,
//     padding: 10,
//   },
//   sectionHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   link: {
//     color: 'blue',
//   },
// });

// export default Viewcomplain;
