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
import ContactUsHeader from "../components/ContactUsHeader";
import ContactUsButton from "../components/ContactUsButton";

function ContactUs(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.materialHeader12Stack}>
        <ContactUsHeader style={styles.materialHeader12}></ContactUsHeader>
        <Image
          source={require("../assets/images/contact-us-1.jpg")}
          resizeMode="stretch"
          style={styles.image2}
        ></Image>
        <ImageBackground
          source={require("../assets/images/Webp.net-resizeimage1.png")}
          resizeMode="cover"
          style={styles.image3}
          imageStyle={styles.image3_imageStyle}
        >
        <ContactUsButton
          onPress={()=>{props.navigation.navigate("UploadCaseDone")}}
          style={styles.cupertinoButtonInfo6}
        ></ContactUsButton>
        </ImageBackground>
        <TextInput
          placeholder=" Message"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.placeholder2}
        ></TextInput>
        <TextInput
          placeholder=" Email"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.placeholder4}
        ></TextInput>
        <TextInput
          placeholder=" Phone"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.placeholder5}
        ></TextInput>
        <TextInput
          placeholder=" Name"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.placeholder6}
        ></TextInput>
        <Text style={styles.getInTouch2}>Get in Touch</Text>
        <Text style={styles.loremIpsum2}>
          Please fill out the quick form and we will be in touch with lightening
          speed.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialHeader12: {
    height: 56,
    width: 360,
    position: "absolute",
    left: 1,
    top: 0
  },
  image2: {
    top: 54,
    left: 0,
    width: 361,
    height: 112,
    position: "absolute"
  },
  image3: {
    top: 156,
    left: 1,
    width: 360,
    height: 584,
    position: "absolute"
  },
  image3_imageStyle: {
    opacity: 0.1
  },
  cupertinoButtonInfo6: {
    height: 40,
    width: 163,
    borderRadius: 10,
    marginTop: 386,
    marginLeft: 98
  },
  placeholder2: {
    top: 396,
    left: 47,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 134,
    width: 265,
    backgroundColor: "rgba(251,251,251,1)",
    borderRadius: 5,
    lineHeight: 14,
    fontSize: 17
  },
  placeholder4: {
    top: 354,
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
  placeholder5: {
    top: 312,
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
  placeholder6: {
    top: 270,
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
  getInTouch2: {
    top: 190,
    left: 47,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 25
  },
  loremIpsum2: {
    top: 225,
    left: 47,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    height: 36,
    width: 261,
    fontSize: 15
  },
  materialHeader12Stack: {
    width: 361,
    height: 740,
    marginLeft: -1
  }
});

export default ContactUs;
