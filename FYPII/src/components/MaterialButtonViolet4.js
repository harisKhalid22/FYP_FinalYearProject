import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonViolet4(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.search}>Search</Text>
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  search: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 14
  }
});

export default MaterialButtonViolet4;
