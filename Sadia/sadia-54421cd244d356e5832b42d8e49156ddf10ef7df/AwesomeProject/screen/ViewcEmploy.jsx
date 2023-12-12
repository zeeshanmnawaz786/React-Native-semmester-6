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

export default function ViewEmploy() {
  const navigation = useNavigation();
  const [employData, setEmployData] = useState("");
  console.log("🚀  employData:", employData);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/getemploy");
        setEmployData(res.data.allComp);
      } catch (error) {
        console.log("🚀 ~ file: SignUp.jsx:38 ~ handleSignUp ~ error:", error);
      }
    })();
  }, []);

  const deleteFunc = async (id) => {
    await axios.delete(`http://localhost:8000/api/deletemploy?_id=${id}`);
    setEmployData((prevComps) => prevComps.filter((comp) => comp._id !== id));
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
          <Text>{item.employName}</Text>
        </View>
        <View style={styles.cell}>
          <Text>{item.designation}</Text>
        </View>
        <View style={styles.cell}>
          <Text>{item.department}</Text>
        </View>
        <View style={styles.cell}>
          <Text>{item.contactNo}</Text>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => {
              deleteFunc(item._id);
            }}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
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
            <Text>Employ Name</Text>
          </View>
          <View style={styles.cell}>
            <Text>Designation</Text>
          </View>
          <View style={styles.cell}>
            <Text>Department</Text>
          </View>
          <View style={styles.cell}>
            <Text>Contact</Text>
          </View>
          <View style={styles.cell}>
            <Text>Action</Text>
          </View>
        </View>
        <FlatList data={employData} renderItem={renderFunc} />
      </View>
    </ScrollView>
  );
}

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
