import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

function CaseCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.elightAVision}>Elight A Vision</Text>
          <Text style={styles.spons}>Sponsor for eye surgery</Text>
        </View>
        <Image
          source={require("../assets/images/6._SelectCase.png")}
          style={styles.cardItemImagePlace}
        ></Image>
      </View>
      <View style={styles.actionBody}>
        <TouchableOpacity style={styles.actionButton1}>
          <Text style={styles.easypaisa}>Easypaisa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton2}>
          <Text style={styles.action2}>ACTION 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    shadowOffset: {
      width: -2,
      height: 2
    }
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1
  },
  elightAVision: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12,
    lineHeight: 12,
    left: 16,
    width: 154,
    top: 24,
    height: 24
  },
  spons: {
    fontSize: 15,
    color: "rgba(0,0,0,1)",
    lineHeight: 16,
    opacity: 0.5
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    height: 120,
    width: 130,
    margin: 16
  },
  actionBody: {
    padding: 8,
    flexDirection: "row",
    left: 23,
    width: 357,
    top: 146,
    height: 52
  },
  actionButton1: {
    padding: 8,
    height: 36
  },
  easypaisa: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9
  },
  actionButton2: {
    padding: 8,
    height: 36
  },
  action2: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9
  }
});

export default CaseCard;
