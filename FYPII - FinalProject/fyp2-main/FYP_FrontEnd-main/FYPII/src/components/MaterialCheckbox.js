import React, { Component, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialCheckbox(props) {
  
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress = {props.onPress}>
      <Icon
        name= {toggleCheckBox ? "checkbox-marked" : "checkbox-blank-outline"}
        onPress={() => setToggleCheckBox(!toggleCheckBox)}
        style={styles.checkIcon}
      ></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "transparent"
  },
  checkIcon: {
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    lineHeight: 28
  }
});

export default MaterialCheckbox;
