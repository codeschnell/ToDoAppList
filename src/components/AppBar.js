import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AppBar(){
  return (
    <View style={styles.appBar}>
      <Text style={styles.heading}>TODO APP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: "#000000",
    color: "white",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  heading: {
    color: "white",
    fontSize: 24,
    fontWeight: "400"
  }
});