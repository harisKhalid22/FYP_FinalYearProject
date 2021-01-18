import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TextInput,
  Text
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import BankFormButton from "../components/BankFormButton";
import MaterialToast1 from "../components/MaterialToast1";
import DonateHeader from "../components/DonateHeader";

function BankForm(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.image1Stack}>
        <ImageBackground
          source={require("../assets/images/Webp.net-resizeimage1.png")}
          resizeMode="cover"
          style={styles.image1}
          imageStyle={styles.image1_imageStyle}
        >
          <View style={styles.rect1}>
            <Icon name="gift" style={styles.icon1}></Icon>
          </View>
        </ImageBackground>
        <TextInput
          placeholder=" CVC"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.placeholder1}
        ></TextInput>
        <TextInput
          placeholder=" MM / YY"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.placeholder2}
        ></TextInput>
        <TextInput
          placeholder=" Card number"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.placeholder3}
        ></TextInput>
        <TextInput
          placeholder=" Email"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.placeholder4}
        ></TextInput>
        <Text style={styles.bankTransfer}>Bank Transfer</Text>
        <Text style={styles.loremIpsum1}>Donate to Serve Humanity</Text>
        <TextInput
          placeholder=" Amount in PKR"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.placeholder5}
        ></TextInput>
        <BankFormButton 
        onPress={()=>{props.navigation.navigate("BankFormDone")}}
        style={styles.cupertinoButtonInfo9}>
        </BankFormButton>
        <MaterialToast1
          text1="Success"
          style={styles.materialToast1}
        ></MaterialToast1>
        <DonateHeader style={styles.materialHeader1}></DonateHeader>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image1: {
    top: 0,
    width: 360,
    height: 740,
    position: "absolute",
    left: 0
  },
  image1_imageStyle: {
    opacity: 0.1
  },
  rect1: {
    width: 360,
    height: 173,
    backgroundColor: "rgba(26,137,180,1)",
    marginTop: 56
  },
  icon1: {
    color: "rgba(12,63,84,1)",
    fontSize: 140,
    height: 140,
    width: 120,
    marginTop: 16,
    marginLeft: 119
  },
  placeholder1: {
    top: 487,
    left: 47,
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
    top: 445,
    left: 47,
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
    top: 403,
    left: 47,
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
    top: 361,
    left: 47,
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
  bankTransfer: {
    top: 259,
    left: 49,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 25
  },
  loremIpsum1: {
    top: 289,
    left: 49,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    height: 27,
    width: 261,
    fontSize: 15
  },
  placeholder5: {
    top: 319,
    left: 48,
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
  cupertinoButtonInfo9: {
    height: 40,
    width: 163,
    position: "absolute",
    left: 100,
    top: 534,
    borderRadius: 10
  },
  materialToast1: {
    width: 280,
    height: 35,
    position: "absolute",
    left: 39,
    top: 686,
    overflow: "hidden"
  },
  materialHeader1: {
    height: 56,
    width: 360,
    position: "absolute",
    top: 0,
    left: 0
  },
  image1Stack: {
    width: 360,
    height: 740
  }
});

export default BankForm;
