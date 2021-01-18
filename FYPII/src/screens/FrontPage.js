import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Text
} from "react-native";

function FrontPage ({navigation})
{
  setTimeout(() => {
    navigation.navigate("SignIn")
  }, 3000);

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
          <Text style={styles.loremIpsum2}>
            Charity, it&#39;s Their Property
        </Text>
        </ImageBackground>
        <Text style={styles.loremIpsum1}>
          An Muhammad Ali Jinnah University Student&#39;s Initiative
      </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  image1: {
    top: 182,
    width: 257,
    height: 156,
    position: "absolute",
    borderWidth: 2,
    borderColor: "rgba(244,243,243,1)",
    borderRadius: 15,
    left: 51
  },
  image2: {
    top: 0,
    left: 0,
    width: 360,
    height: 740,
    position: "absolute"
  },
  image2_imageStyle: {
    opacity: 0.1
  },
  loremIpsum2: {
    fontFamily: "roboto-500",
    color: "rgba(66,66,66,1)",
    height: 26,
    width: 254,
    fontSize: 17,
    textAlign: "center",
    marginTop: 704,
    marginLeft: 53
  },
  loremIpsum1: {
    top: 346,
    position: "absolute",
    fontFamily: "roboto-500",
    color: "rgba(66,66,66,1)",
    height: 59,
    width: 328,
    fontSize: 17,
    textAlign: "center",
    left: 16
  },
  image1Stack: {
    width: 360,
    height: 740
  }
});

export default FrontPage;