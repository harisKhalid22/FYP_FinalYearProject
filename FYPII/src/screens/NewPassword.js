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
import CupertinoButtonInfo5 from "../components/CupertinoButtonInfo5";

function NewPassword(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.image1Stack}>
        <Image
          source={require("../assets/images/logo1.jpeg")}
          resizeMode="stretch"
          style={styles.image1}
        ></Image>
        <ImageBackground
          source={require("../assets/images/Webp.net-resizeimage.png")}
          resizeMode="cover"
          style={styles.image2}
          imageStyle={styles.image2_imageStyle}
        >
        <CupertinoButtonInfo5
          onPress={()=>{props.navigation.navigate("SignIn")}}
          style={styles.cupertinoButtonInfo5}
        ></CupertinoButtonInfo5>
        </ImageBackground>
        <Text style={styles.text}>New Password</Text>
        <TextInput
          placeholder=" New Password"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.placeholder1}
        ></TextInput>
        <TextInput
          placeholder=" Re Enter Password"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.placeholder2}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image1: {
    top: 70,
    width: 221,
    height: 134,
    position: "absolute",
    borderWidth: 2,
    borderColor: "rgba(244,243,243,1)",
    borderRadius: 15,
    left: 70
  },
  image2: {
    left: 0,
    width: 360,
    height: 740,
    position: "absolute",
    top: 0
  },
  image2_imageStyle: {
    opacity: 0.1
  },
  cupertinoButtonInfo5: {
    height: 47,
    width: 143,
    borderRadius: 20,
    marginTop: 424,
    marginLeft: 109
  },
  text: {
    top: 246,
    left: 44,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 25
  },
  placeholder1: {
    top: 294,
    left: 44,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 54,
    width: 271,
    backgroundColor: "rgba(251,251,251,1)",
    borderRadius: 5,
    lineHeight: 14,
    fontSize: 18
  },
  placeholder2: {
    top: 358,
    left: 44,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 54,
    width: 271,
    backgroundColor: "rgba(251,251,251,1)",
    borderRadius: 5,
    lineHeight: 14,
    fontSize: 18
  },
  image1Stack: {
    width: 360,
    height: 740
  }
});

export default NewPassword;
