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
  const [complainData, setComplainData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/getAllComplains"
        );
        setComplainData(res.data.allComp);
      } catch (error) {
        console.log("Error fetching complaints:", error);
      }
    })();
  }, []);

  const deleteFunc = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/deleteComplain?_id=${id}`);
      setComplainData((prevComps) =>
        prevComps.filter((comp) => comp._id !== id)
      );
    } catch (error) {
      console.log("Error deleting complaint:", error);
    }
  };

  const passDataToBlogCardFunc = (item) => {
    navigation.navigate("Viewdetail", {
      item: item,
    });
  };

  const renderComplaint = (item, index) => {
    return (
      <View style={styles.complaintRow} key={index}>
        <Text style={styles.complaintCell}>{index + 1}</Text>
        <Text style={styles.complaintCell}>{item.location}</Text>
        <Text style={styles.complaintCell}>{item.type}</Text>
        <Text style={styles.complaintCell}>{item.date}</Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={[styles.button, styles.viewButton]}
            onPress={() => passDataToBlogCardFunc(item)}
          >
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.rejectButton]}
            // onPress={() => deleteFunc(item._id)}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.headerCell}>S.NO</Text>
          <Text style={styles.headerCell}>Employee Name</Text>
          <Text style={styles.headerCell}>Designation</Text>
          <Text style={styles.headerCell}>Department</Text>
          <Text style={styles.headerCell}>Action</Text>
        </View>
        {complainData.map((complaint, index) =>
          renderComplaint(complaint, index)
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  table: {
    borderWidth: 1,
    borderColor: "black",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "lightgray",
    borderBottomWidth: 1,
  },
  headerCell: {
    flex: 1,
    padding: 10,
    fontWeight: "bold",
  },
  complaintRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  complaintCell: {
    flex: 1,
    padding: 10,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    padding: 10,
    borderRadius: 5,
    width: 60,
    alignItems: "center",
  },
  viewButton: {
    backgroundColor: "blue",
  },
  rejectButton: {
    backgroundColor: "red",
  },
  buttonText: {
    color: "white",
  },
});

export default Viewcomplain;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
// } from "react-native";

// const Sthistory = () => {
//   const [complainData, setComplainData] = useState([]);

//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await axios.get(
//           "http://localhost:8000/api/getAllComplains"
//         );
//         setComplainData(res.data.allComp);
//       } catch (error) {
//         console.log("Error fetching complaints:", error);
//       }
//     })();
//   }, []);

//   const deleteFunc = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8000/api/deleteComplain?_id=${id}`);
//       setComplainData((prevComps) =>
//         prevComps.filter((comp) => comp._id !== id)
//       );
//     } catch (error) {
//       console.log("Error deleting complaint:", error);
//     }
//   };

//   const renderComplaint = ({ item }) => {
//     return (
//       <View style={styles.complaintRow}>
//         <View style={styles.cell}>
//           <Text style={styles.complaintHeader}>{item.location}</Text>
//           <Text>Harassment Type: {item.type}</Text>
//           <Text>Date: {item.date}</Text>
//         </View>
//         <TouchableOpacity
//           style={styles.deleteButton}
//           onPress={() => deleteFunc(item._id)}
//         >
//           <Text style={styles.buttonText}>View</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.deleteButton}
//           onPress={() => deleteFunc(item._id)}
//         >
//           <Text style={styles.buttonText}>Delete</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   return (
//     <FlatList
//       data={complainData}
//       renderItem={renderComplaint}
//       keyExtractor={(item) => item._id}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   complaintRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     backgroundColor: "#f5f5f5",
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 15,
//   },
//   cell: {
//     flex: 1,
//   },
//   complaintHeader: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   deleteButton: {
//     backgroundColor: "red",
//     padding: 10,
//     borderRadius: 5,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "white",
//   },
// });

// export default Sthistory;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
// } from "react-native";

// const Sthistory = () => {
//   const [complainData, setComplainData] = useState([]);

//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await axios.get(
//           "http://localhost:8000/api/getAllComplains"
//         );
//         setComplainData(res.data.allComp);
//       } catch (error) {
//         console.log("Error fetching complaints:", error);
//       }
//     })();
//   }, []);

//   const deleteFunc = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8000/api/deleteComplain?_id=${id}`);
//       setComplainData((prevComps) =>
//         prevComps.filter((comp) => comp._id !== id)
//       );
//     } catch (error) {
//       console.log("Error deleting complaint:", error);
//     }
//   };

//   const renderComplaint = (item, index) => {
//     return (
//       <View style={styles.complaintCard} key={index}>
//         <Text style={styles.complaintHeader}>{item.location}</Text>
//         <Text>Harassment Type: {item.type}</Text>
//         <Text>Date: {item.date}</Text>
//         <TouchableOpacity
//           style={styles.deleteButton}
//           onPress={() => deleteFunc(item._id)}
//         >
//           <Text style={styles.buttonText}>Delete</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   return (
//     <ScrollView style={styles.container}>
//       {complainData.map((complaint, index) =>
//         renderComplaint(complaint, index)
//       )}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   complaintCard: {
//     backgroundColor: "#f5f5f5",
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 15,
//   },
//   complaintHeader: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   deleteButton: {
//     backgroundColor: "red",
//     padding: 10,
//     marginTop: 10,
//     borderRadius: 5,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "white",
//   },
// });

// export default Sthistory;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
//   FlatList,
// } from "react-native";

// const Sthistory = () => {
//   const [complainData, setComplainData] = useState("");
//   console.log("🚀  complainData:", complainData);

//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await axios.get(
//           "http://localhost:8000/api/getAllComplains"
//         );
//         setComplainData(res.data.allComp);
//       } catch (error) {
//         console.log("🚀 ~ file: SignUp.jsx:38 ~ handleSignUp ~ error:", error);
//       }
//     })();
//   }, []);

//   const deleteFunc = async (id) => {
//     console.log("🚀 ~ file: Sthistory.js:30 ~ deleteFunc ~ id:", id);
//     await axios.delete(`http://localhost:8000/api/deleteComplain?_id=${id}`);
//     setComplainData((prevComps) => prevComps.filter((comp) => comp._id !== id));
//   };

//   const renderFunc = ({ item, index }) => {
//     return (
//       <View style={styles.tableRow}>
//         <View style={styles.cell}>
//           <Text>{index + 1}</Text>
//         </View>
//         <View style={styles.cell}>
//           <Text>{item.location}</Text>
//         </View>
//         <View style={styles.cell}>
//           <Text>{item.type}</Text>
//         </View>
//         <View style={styles.cell}>
//           <Text>{item.date}</Text>
//         </View>
//         {/* <View style={styles.row}>
//           <TouchableOpacity style={styles.button1}>
//             <Text style={styles.buttonText}>View</Text>
//           </TouchableOpacity>
//         </View> */}
//         <View style={styles.row}>
//           <TouchableOpacity
//             style={styles.button2}
//             onPress={() => {
//               deleteFunc(item._id);
//             }}
//           >
//             <Text style={styles.buttonText}>Delete</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <ScrollView>
//       <View style={styles.table}>
//         <View style={styles.tableHeader}>
//           <View style={styles.cell}>
//             <Text>S.NO</Text>
//           </View>
//           <View style={styles.cell}>
//             <Text>Location</Text>
//           </View>
//           <View style={styles.cell}>
//             <Text>Harrasment Type</Text>
//           </View>
//           <View style={styles.cell}>
//             <Text>Complain Date</Text>
//           </View>
//           <View style={styles.cell}>
//             <Text>Action</Text>
//           </View>
//         </View>
//         <FlatList data={complainData} renderItem={renderFunc} />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   table: {
//     borderWidth: 1,
//     borderColor: "black",
//   },
//   tableHeader: {
//     flexDirection: "row",
//     backgroundColor: "lightgray",
//     borderBottomWidth: 1,
//   },
//   tableRow: {
//     flexDirection: "row",
//     borderBottomWidth: 1,
//     borderColor: "lightgray",
//   },
//   cell: {
//     flex: 1,
//     padding: 10,
//   },
//   row: {
//     flexDirection: "row",
//   },
//   button1: {
//     backgroundColor: "green",
//     padding: 10,
//     margin: 5,
//     borderRadius: 5,
//   },
//   button2: {
//     backgroundColor: "red",
//     padding: 10,
//     margin: 5,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: "white",
//     textAlign: "center",
//   },
// });

// export default Sthistory;
