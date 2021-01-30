import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function DonationDoneButton(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.ok}>OK</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(61,138,247,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  ok: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "roboto-700"
  }
});

export default DonationDoneButton;
