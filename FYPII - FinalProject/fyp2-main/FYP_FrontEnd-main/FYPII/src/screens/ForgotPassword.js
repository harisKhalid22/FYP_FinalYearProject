import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Text,
  TextInput
} from "react-native";
import CupertinoButtonInfo4 from "../components/CupertinoButtonInfo4";

function ForgotPassword(props) {

  const [textInputUsername, setTextInputUsername] = useState('');

  const checkTextInput = () => {
  
    if (!textInputUsername.trim()) {
      alert('Please Enter Username or Email');
      return;
    }
    //Checked Successfully
    props.navigation.navigate("NewPassword")
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden barStyle="dark-content" />
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
        <CupertinoButtonInfo4
          onPress={() => {
            checkTextInput();
          }}
          style={styles.cupertinoButtonInfo4}
        ></CupertinoButtonInfo4>
        </ImageBackground>
        <Text style={styles.text}>Forgot Password</Text>
        <Text style={styles.loremIpsum1}>Kindly enter the below detail.</Text>
        <TextInput
          placeholder=" Username or Email"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.placeholder}
          onChangeText={(txt) => setTextInputUsername(txt) } 
          maxLength={15}
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
    top: 71,
    width: 221,
    height: 134,
    position: "absolute",
    borderWidth: 2,
    borderColor: "rgba(244,243,243,1)",
    borderRadius: 15,
    left: 71
  },
  image2: {
    top: 0,
    left: 0,
    width: 361,
    height: 741,
    position: "absolute"
  },
  image2_imageStyle: {
    opacity: 0.1
  },
  cupertinoButtonInfo4: {
    height: 47,
    width: 143,
    borderRadius: 20,
    marginTop: 388,
    marginLeft: 110
  },
  text: {
    top: 248,
    left: 46,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 25
  },
  loremIpsum1: {
    top: 283,
    left: 46,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    height: 27,
    width: 261,
    fontSize: 15
  },
  placeholder: {
    top: 319,
    left: 45,
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
    width: 361,
    height: 741,
    marginTop: -1,
    marginLeft: -1
  }
});

export default ForgotPassword;
