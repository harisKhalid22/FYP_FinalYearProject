import React, { Component } from "react";
import { StyleSheet, View, Slider } from "react-native";

function CupertinoSlider(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Slider
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#007AFF"
        style={styles.slider}
      ></Slider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  slider: {}
});

export default CupertinoSlider;
