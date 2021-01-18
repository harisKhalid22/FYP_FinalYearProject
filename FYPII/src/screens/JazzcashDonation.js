import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Text,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import JazzcashButton from "../components/JazzcashButton";
import JazzcashHeader from "../components/JazzcashHeader";

function JazzcashDonation(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.rect1}>
        <Icon name="gift" style={styles.icon1}></Icon>
      </View>
      <View style={styles.image1Stack}>
        <ImageBackground
          source={require("../assets/images/Webp.net-resizeimage1.png")}
          resizeMode="stretch"
          style={styles.image1}
          imageStyle={styles.image1_imageStyle}
        >
          <JazzcashButton style={styles.cupertinoButtonInfo6}></JazzcashButton>
        </ImageBackground>
        <Text style={styles.loremIpsum1}>
          After submission you can send your amount {"\n"}at +92 301 2141434
          using Jazzcash {"\n"}application and we will confirm {"\n"}you with
          receiving soon.
        </Text>
        <TextInput
          placeholder=" Email"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.placeholder1}
        ></TextInput>
        <TextInput
          placeholder=" Phone"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.placeholder2}
        ></TextInput>
        <TextInput
          placeholder=" Amount in PKR"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.placeholder3}
        ></TextInput>
        <TextInput
          placeholder=" Name"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.placeholder4}
        ></TextInput>
        <Text style={styles.loremIpsum2}>
          Please fill out the quick form so that we maintain our record of your
          donation.
        </Text>
      </View>
      <JazzcashHeader style={styles.materialHeader12}></JazzcashHeader>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect1: {
    width: 360,
    height: 205,
    backgroundColor: "rgba(26,137,180,1)",
    marginTop: 56
  },
  icon1: {
    color: "rgba(12,63,84,1)",
    fontSize: 140,
    height: 140,
    width: 120,
    marginTop: 33,
    marginLeft: 118
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
  cupertinoButtonInfo6: {
    height: 40,
    width: 140,
    borderRadius: 10,
    marginTop: 224,
    marginLeft: 108
  },
  loremIpsum1: {
    top: 276,
    position: "absolute",
    fontFamily: "helvetica-regular",
    color: "rgba(74,74,74,1)",
    height: 34,
    width: 335,
    fontSize: 16,
    textAlign: "center",
    left: 12,
    lineHeight: 16
  },
  placeholder1: {
    top: 176,
    left: 46,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 37,
    width: 265,
    backgroundColor: "rgba(251,251,251,1)",
    borderRadius: 5,
    lineHeight: 14,
    fontSize: 17
  },
  placeholder2: {
    top: 135,
    left: 46,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 37,
    width: 265,
    backgroundColor: "rgba(251,251,251,1)",
    borderRadius: 5,
    lineHeight: 14,
    fontSize: 17
  },
  placeholder3: {
    top: 94,
    left: 46,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 37,
    width: 265,
    backgroundColor: "rgba(251,251,251,1)",
    borderRadius: 5,
    lineHeight: 14,
    fontSize: 17
  },
  placeholder4: {
    top: 53,
    left: 46,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 37,
    width: 265,
    backgroundColor: "rgba(251,251,251,1)",
    borderRadius: 5,
    lineHeight: 14,
    fontSize: 17
  },
  loremIpsum2: {
    top: 11,
    left: 38,
    position: "absolute",
    fontFamily: "helvetica-regular",
    color: "rgba(74,74,74,1)",
    height: 29,
    width: 280,
    fontSize: 16,
    lineHeight: 18
  },
  image1Stack: {
    width: 360,
    height: 379
  },
  materialHeader12: {
    height: 56,
    width: 360,
    marginTop: -640
  }
});

export default JazzcashDonation;
