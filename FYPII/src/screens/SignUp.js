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
import MaterialButtonViolet3 from "../components/MaterialButtonViolet3";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import CupertinoButtonInfo1 from "../components/CupertinoButtonInfo1";
import MaterialCheckbox from "../components/MaterialCheckbox";

function SignUp(props) {

  const [hidePass1, setHidePass1] = useState(true);
  const [hidePass2, setHidePass2] = useState(true);

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
        <MaterialButtonViolet3
          onPress={()=>{props.navigation.navigate("SignIn")}}
          style={styles.materialButtonViolet3}
        ></MaterialButtonViolet3>
        </ImageBackground>
        <Text style={styles.text}>Sign Up</Text>
        <TextInput
          placeholder=" Username"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.yourUsername}
        ></TextInput>
        <TextInput
          placeholder=" Password"
          inlineImagePadding={0}
          secureTextEntry={hidePass1 ? true : false}
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.yourUsername1}
        ></TextInput>
        <TextInput
          placeholder=" Confirm Password"
          inlineImagePadding={0}
          secureTextEntry={hidePass2 ? true : false}
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.yourUsername2}
        ></TextInput>
        <MaterialIconsIcon
          name= {hidePass1 ? 'visibility-off' : 'visibility'}
          onPress={() => setHidePass1(!hidePass1)}
          style={styles.icon}
        ></MaterialIconsIcon>
        <MaterialIconsIcon
          name= {hidePass2 ? 'visibility-off' : 'visibility'}
          onPress={() => setHidePass2(!hidePass2)}
          style={styles.icon1}
        ></MaterialIconsIcon>
        <TextInput
          placeholder=" Email"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.yourUsername3}
        ></TextInput>
        <TextInput
          placeholder=" Phone"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.yourUsername4}
        ></TextInput>
        <Text style={styles.loremIpsum}>
          I agree to the Terms of Services {"\n"}and Privacy Policy.
        </Text>
        <Text style={styles.haveAnAccount}>Have an Account?</Text>
        <CupertinoButtonInfo1
          onPress={()=>{props.navigation.navigate("SignIn")}}
          style={styles.cupertinoButtonInfo1}
        ></CupertinoButtonInfo1>
        <MaterialCheckbox 
          style={styles.materialCheckbox}></MaterialCheckbox>
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
    left: 0,
    width: 360,
    height: 740,
    position: "absolute"
  },
  image1_imageStyle: {
    opacity: 0.1
  },
  materialButtonViolet3: {
    height: 38,
    width: 88,
    borderRadius: 15,
    marginTop: 559,
    marginLeft: 205
  },
  text: {
    top: 118,
    left: 45,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 35,
    width: 94,
    fontSize: 25
  },
  yourUsername: {
    top: 160,
    left: 45,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 50,
    width: 270,
    fontSize: 18,
    backgroundColor: "rgba(251,251,251,1)"
  },
  yourUsername1: {
    top: 216,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 50,
    width: 270,
    fontSize: 18,
    left: 45,
    backgroundColor: "rgba(251,251,251,1)"
  },
  yourUsername2: {
    top: 273,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 49,
    width: 270,
    fontSize: 18,
    left: 45,
    backgroundColor: "rgba(251,251,251,1)"
  },
  icon: {
    top: 228,
    left: 280,
    position: "absolute",
    color: "rgba(209,214,219,1)",
    fontSize: 25
  },
  icon1: {
    top: 285,
    left: 280,
    position: "absolute",
    color: "rgba(209,214,219,1)",
    fontSize: 25
  },
  yourUsername3: {
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 50,
    width: 270,
    fontSize: 18,
    backgroundColor: "rgba(251,251,251,1)",
    top: 329,
    left: 45
  },
  yourUsername4: {
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 51,
    width: 270,
    fontSize: 18,
    left: 45,
    top: 386,
    backgroundColor: "rgba(251,251,251,1)"
  },
  loremIpsum: {
    top: 446,
    left: 98,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    height: 43,
    width: 217,
    fontSize: 14
  },
  haveAnAccount: {
    top: 566,
    left: 65,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 30,
    width: 138,
    fontSize: 16
  },
  cupertinoButtonInfo1: {
    height: 49,
    width: 135,
    position: "absolute",
    top: 493,
    borderRadius: 20,
    left: 112
  },
  materialCheckbox: {
    height: 27,
    width: 37,
    position: "absolute",
    left: 57,
    top: 446,
    opacity: 0.89,
    overflow: "visible"
  },
  image1Stack: {
    width: 360,
    height: 740
  }
});

export default SignUp;
