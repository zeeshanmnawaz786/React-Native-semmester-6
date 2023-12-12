import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Viewdetail = ({ route }) => {
  const { title, author, content, imageUrl } = route.params || {};
  console.log(
    "🚀 ~ file: Viewdetail.js:7 ~ Viewdetail ~ route.params:",
    route.params
  );

  return (
    <View style={styles.table}>
      <View style={styles.row}>
        <View style={[styles.cell, styles.heading]}>
          <Text>Student Information</Text>
        </View>
        <View style={[styles.cell, styles.heading]}>
          <Text>Complaint Information</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.label}>Department:</Text>
          <Text style={styles.label}>Roll No:</Text>
          <Text style={styles.label}>Contact No:</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.label}>Location of Harassment:</Text>
          <Text style={styles.label}>Type of Harassment:</Text>
          <Text style={styles.label}>Complaint Details:</Text>
          <Text style={styles.label}>Date of Complaint:</Text>
        </View>
      </View>
      {/* Add more rows as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: "black",
    alignSelf: "center",
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  cell: {
    flex: 1,
    padding: 10,
  },
  heading: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default Viewdetail;

// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// const RightAlignedTable = () => {
//   return (
//     <View style={styles.table}>
//       <View style={styles.row}>
//         <View style={[styles.cell, styles.heading]}>
//           <Text>Student Information</Text>
//         </View>
//         <View style={[styles.cell, styles.heading]}>
//           <Text>Complaint Information</Text>
//         </View>
//       </View>
//       <View style={styles.row}>
//         <View style={styles.cell}>
//           <Text>Name:</Text>
//           <Text>Email:</Text>
//           <Text>Department:</Text>
//           <Text>Roll No:</Text>
//           <Text>Contact No:</Text>
//         </View>
//         <View style={styles.cell}>
//           <Text>Location of Harassment:</Text>
//           <Text>Type of Harassment:</Text>
//           <Text>Complaint Details</Text>
//           <Text>Data of Complain</Text>
//         </View>
//       </View>
//       {/* Add more rows as needed */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   table: {
//     borderWidth: 1,
//     borderColor: "black",
//     alignSelf: "center",
//     marginTop: 20,
//   },
//   row: {
//     flexDirection: "row",
//     borderBottomWidth: 1,
//     borderColor: "lightgray",
//   },
//   cell: {
//     flex: 1,
//     padding: 10,
//   },
//   heading: {
//     alignItems: "flex-end",
//     justifyContent: "center",
//   },
// });

// export default RightAlignedTable;
