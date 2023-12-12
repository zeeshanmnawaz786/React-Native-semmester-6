import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import axios from "axios";
import { MaterialIcons } from "@expo/vector-icons";

export default function EmployLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLogin = async () => {
    const data = {
      email: email,
      password: password,
    };

    if (email !== "" && password !== "") {
      try {
        const res = await axios.post("http://localhost:8000/api/loginStUser", {
          userEmail: email,
          password: password,
        });
        alert("Successfully logged in");
        navigation.navigate("RegisterEmploy");
      } catch (error) {
        console.log("Login error:", error);
        alert("Login failed. Please try again.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 30 }}>
        Student Login
      </Text>
      <View style={{ marginBottom: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <MaterialIcons name="email" size={24} color="black" />
          <TextInput
            style={{
              flex: 1,
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              paddingHorizontal: 10,
              marginLeft: 10,
            }}
            placeholder="Email Address"
            onChangeText={handleEmailChange}
            value={email}
          />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons name="lock" size={24} color="black" />
          <TextInput
            style={{
              flex: 1,
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              paddingHorizontal: 10,
              marginLeft: 10,
            }}
            placeholder="Password"
            onChangeText={handlePasswordChange}
            value={password}
            secureTextEntry={true}
          />
        </View>
      </View>

      <TouchableOpacity
        style={{
          width: 300,
          height: 50,
          backgroundColor: "blue",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
        }}
        onPress={handleLogin}
      >
        <Text style={{ color: "white", fontSize: 18 }}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("EmployRegister");
        }}
        style={{ marginTop: 20 }}
      >
        <Text style={{ color: "blue", fontSize: 16 }}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
