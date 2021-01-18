import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Text
} from "react-native";
import DonationDoneButton from "../components/DonationDoneButton";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import DonateHeader from "../components/DonateHeader";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function DonationDone(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.image1Stack}>
        <ImageBackground
          source={require("../assets/images/Webp.net-resizeimage1.png")}
          resizeMode="stretch"
          style={styles.image1}
          imageStyle={styles.image1_imageStyle}
        >
          <DonationDoneButton
            style={styles.materialButtonViolet7}
          ></DonationDoneButton>
        </ImageBackground>
        <Text style={styles.jazakAllahKhair}>JazakAllah khair</Text>
        <Text style={styles.loremIpsum1}>
          Your contribution request {"\n"}has been updated.
        </Text>
        <Text style={styles.loremIpsum2}>We will contact you soon.</Text>
      </View>
      <View style={styles.rect}>
        <FontAwesomeIcon name="gift" style={styles.icon}></FontAwesomeIcon>
      </View>
      <DonateHeader style={styles.materialHeader1}></DonateHeader>
      <MaterialCommunityIconsIcon
        name="home"
        style={styles.icon2}
      ></MaterialCommunityIconsIcon>
      <MaterialCommunityIconsIcon
        name="home"
        style={styles.icon3}
      ></MaterialCommunityIconsIcon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image1: {
    top: 0,
    left: 0,
    width: 360,
    height: 379,
    position: "absolute"
  },
  image1_imageStyle: {
    opacity: 0.1
  },
  materialButtonViolet7: {
    height: 40,
    width: 163,
    borderRadius: 10,
    marginTop: 141,
    marginLeft: 97
  },
  jazakAllahKhair: {
    top: 25,
    position: "absolute",
    fontFamily: "helvetica-regular",
    color: "rgba(74,74,74,1)",
    height: 15,
    width: 150,
    fontSize: 20,
    textAlign: "center",
    left: 22,
    lineHeight: 14
  },
  loremIpsum1: {
    position: "absolute",
    fontFamily: "helvetica-regular",
    color: "rgba(74,74,74,1)",
    height: 37,
    width: 360,
    fontSize: 20,
    textAlign: "center",
    lineHeight: 20,
    left: 0,
    top: 53
  },
  loremIpsum2: {
    position: "absolute",
    fontFamily: "helvetica-regular",
    color: "rgba(74,74,74,1)",
    height: 37,
    width: 360,
    fontSize: 20,
    textAlign: "center",
    left: 0,
    lineHeight: 17,
    top: 105
  },
  image1Stack: {
    width: 360,
    height: 379,
    marginTop: 261
  },
  rect: {
    width: 360,
    height: 205,
    backgroundColor: "rgba(26,137,180,1)",
    marginTop: -584
  },
  icon: {
    color: "rgba(12,63,84,1)",
    fontSize: 140,
    height: 140,
    width: 120,
    marginTop: 33,
    marginLeft: 118
  },
  materialHeader1: {
    height: 56,
    width: 360,
    marginTop: -261
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginTop: -1308,
    marginLeft: -1071
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginTop: -405,
    marginLeft: -1048
  }
});

export default DonationDone;
