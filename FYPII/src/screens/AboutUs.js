import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Text
} from "react-native";
import AboutUsHeader from "../components/AboutUsHeader";

function AboutUs(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.image2Stack}>
        <Image
          source={require("../assets/images/logo1.jpeg")}
          resizeMode="stretch"
          style={styles.image2}
        ></Image>
        <ImageBackground
          source={require("../assets/images/Webp.net-resizeimage1.png")}
          resizeMode="cover"
          style={styles.image1}
          imageStyle={styles.image1_imageStyle}
        >
          <Text style={styles.loremIpsum1}>
            * Let&#39;s Server Humanity (LSH) is a non - profit charitable
            organization which is an initiate of Muhammad Ali Jinnah University
            students.{"\n"} {"\n"}* This project has been taken by experiencing
            the difficulties faced by the people while searching the needy
            peoples. A lot of people who are willing to help the needy people
            are unable to distinguish them which is the main problem. Also, some
            needy people need help, but they don’t know what to do and who to
            contact. If we talk only about Karachi there are a lot of people who
            need help, be it financial or any other form, but they are being a
            common man, so their voice is not raised to the concerned
            authorities.{"\n"}
            {"\n"}* We are in a digital era where information travels at the
            speed of light. When thoughts can travel at lightning speed, why not
            deeds. We do observe and have experienced the movement of goods and
            services by the click of a button. {"\n"}
            {"\n"}* Time and people are in a vicious cycle, we blame time for
            our short comings and time has played havoc in the life of few and
            brought inlimitless happiness in many others.{"\n"}
            {"\n"}* Our application will help you reach that identified
            deserving needy at the click of a button.
          </Text>
        </ImageBackground>
      </View>
      <AboutUsHeader style={styles.materialHeader11}></AboutUsHeader>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image2: {
    top: 172,
    width: 360,
    height: 219,
    position: "absolute",
    borderWidth: 2,
    borderColor: "rgba(244,243,243,1)",
    borderRadius: 15,
    left: 0,
    opacity: 0.12
  },
  image1: {
    top: 0,
    left: 0,
    width: 360,
    height: 684,
    position: "absolute"
  },
  image1_imageStyle: {
    opacity: 0.1
  },
  loremIpsum1: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    height: 643,
    width: 329,
    fontSize: 16,
    marginTop: 15,
    marginLeft: 16
  },
  image2Stack: {
    width: 360,
    height: 684,
    marginTop: 56
  },
  materialHeader11: {
    height: 56,
    width: 360,
    marginTop: -740,
    alignSelf: "center"
  }
});

export default AboutUs;
