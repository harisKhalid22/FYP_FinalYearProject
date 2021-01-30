import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function Ok(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress = {props.onPress}>
      <Text style={styles.text}>OK</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(61,138,247,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 16,
    paddingRight: 16
  },
  text: {
    color: "#fff",
    fontSize: 17
  }
});

export default Ok;
