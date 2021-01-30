import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function HomeHeader(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity onPress={props.onPress} style={styles.leftIconButton}>
        <Icon name="menu" style={styles.leftIcon}></Icon>
      </TouchableOpacity>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.home}>
          Home
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(21,100,192,1)",
    flexDirection: "row",
    padding: 4,
    alignItems: "center"
  },
  leftIconButton: {
    padding: 11
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  textWrapper: {
    width: 86
  },
  home: {
    fontSize: 20,
    color: "#FFFFFF",
    backgroundColor: "transparent",
    lineHeight: 20,
    textAlign: "center",
    height: 18,
    width: 55
  }
});

export default HomeHeader;