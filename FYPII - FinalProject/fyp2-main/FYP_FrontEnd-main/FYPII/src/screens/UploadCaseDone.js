import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Text
} from "react-native";
import Ok from "../components/Ok";
import Icon from "react-native-vector-icons/FontAwesome";

function UploadCaseDone(props) {
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
        <Ok 
          onPress={()=>{props.navigation.navigate("Home")}}
          style={styles.cupertinoButtonInfo9}></Ok>
        </ImageBackground>
        <View style={styles.rect1}>
          <Icon name="gift" style={styles.icon1}></Icon>
        </View>
        <Text style={styles.loremIpsum2}>
          Your request has been updated.
        </Text>
        <Text style={styles.loremIpsum3}>
          We will contact you soon.
        </Text>
        <Text style={styles.jazakAllahKhair}>JazakAllah khair</Text>
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
  cupertinoButtonInfo9: {
    height: 40,
    width: 163,
    borderRadius: 10,
    marginTop: 330,
    marginLeft: 97
  },
  rect1: {
    top: 0,
    left: 0,
    width: 360,
    height: 205,
    position: "absolute",
    backgroundColor: "rgba(26,137,180,1)"
  },
  icon1: {
    color: "rgba(12,63,84,1)",
    fontSize: 140,
    height: 140,
    width: 120,
    marginTop: 33,
    marginLeft: 120
  },
  loremIpsum2: {
    position: "absolute",
    fontFamily: "helvetica-regular",
    color: "rgba(74,74,74,1)",
    height: 37,
    width: 360,
    fontSize: 20,
    textAlign: "center",
    lineHeight: 20,
    left: 0,
    top: 256
  },
    loremIpsum3: {
    position: "absolute",
    fontFamily: "helvetica-regular",
    color: "rgba(74,74,74,1)",
    height: 37,
    width: 360,
    fontSize: 20,
    textAlign: "center",
    lineHeight: 20,
    left: 0,
    top: 290
  },
  jazakAllahKhair: {
    top: 225,
    position: "absolute",
    fontFamily: "helvetica-regular",
    color: "rgba(74,74,74,1)",
    height: 15,
    width: 150,
    fontSize: 20,
    textAlign: "center",
    left: 22,
    lineHeight: 20
  },
  image1Stack: {
    width: 360,
    height: 740
  }
});

export default UploadCaseDone;