import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonInfo6(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.easypaisa}>Easypaisa</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(61,138,247,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  easypaisa: {
    color: "#fff",
    fontSize: 17
  }
});

export default CupertinoButtonInfo6;
