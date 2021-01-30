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
import CupertinoButtonInfo3 from "../components/CupertinoButtonInfo3";
import Icon from "react-native-vector-icons/MaterialIcons";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo";
import CupertinoButtonInfo2 from "../components/CupertinoButtonInfo2";
import axios from "axios";

function SignIn(props) {
  const [form, setForm] = useState({
    username: "",
    password: ""
  })

  const domain = "http://192.168.1.121:3000"
  const onChangeHandler = (val, field) => {
    setForm({
      ...form,
      [field]: val
    })
  }

  const [hidePass, setHidePass] = useState(true);

  const onSubmitHandler = async () => {
    try {
      console.log(form);
      let result = await axios.post(`${domain}/users/login`, form)
      console.log(result);
      props.navigation.navigate("Home")
    } catch (error) {
      console.log(error)
    }
  }

  const [textInputUsername, setTextInputUsername] = useState('');
  const [textInputPassword, setTextInputPassword] = useState('');

  const checkTextInput = () => {

    if (!textInputUsername.trim()) {
      alert('Please Enter Username');
      return;
    }

    if (!textInputPassword.trim()) {
      alert('Please Enter Password');
      return;
    }

    if (/[^A-Za-z0-9]/.test(textInputUsername)) {
      alert('Regex Expression in Username not allowed.');
      return;
    }

    //Checked Successfully
    onSubmitHandler();
  };

  // const [textInputRegex, setTextInputRegex] = useState('');

  // const onChangeName = (username) => {
  //   let usernameRegex = /^[0-9]*$/;
  //   if (!usernameRegex(username)) {
  //     alert('Not acceptable.');
  //     return;
  //   }
  // };

  
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
          source={require("../assets/images/Webp.net-resizeimage1.png")}
          resizeMode="cover"
          style={styles.image2}
          imageStyle={styles.image2_imageStyle}
        >
        <CupertinoButtonInfo3
          onPress={() => { props.navigation.navigate("SignUp") }}
          style={styles.cupertinoButtonInfo3}
        ></CupertinoButtonInfo3>
        </ImageBackground>
        <Text style={styles.text}>Sign In</Text>
        <Text style={styles.loremIpsum}>Hi there! Nice to see you again.</Text>
        <TextInput
          placeholder=" Username"
          inlineImagePadding={0}
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.textInput}
          value={form.username}
          onChangeText={(txt) => { onChangeHandler(txt, "username"), setTextInputUsername(txt) }} 
          // onChangeName={(txt) => setTextInputRegex(txt, "username")}
          maxLength={25}
        ></TextInput>
        <TextInput
          placeholder=" Password"
          inlineImagePadding={0}
          secureTextEntry={hidePass ? true : false}
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.textInput1}
          maxLength={25}
          value={form.password}
          onChangeText={(txt) => { onChangeHandler(txt, "password"), setTextInputPassword(txt) }}

        ></TextInput>
        <Icon
          name={hidePass ? 'visibility-off' : 'visibility'}
          onPress={() => setHidePass(!hidePass)}
          style={styles.icon} />

        <CupertinoButtonInfo
          onPress={() => {
            checkTextInput();
          }}

          // onPress={() => {
          //   checkTextInput();
          //   onChangeName();
          // }}

          style={styles.cupertinoButtonInfo}
        ></CupertinoButtonInfo>
        <CupertinoButtonInfo2
          onPress={() => { props.navigation.navigate("ForgotPassword") }}
          style={styles.cupertinoButtonInfo2}
        ></CupertinoButtonInfo2>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000000"
  },
  image1: {
    top: 87,
    width: 221,
    height: 134,
    position: "absolute",
    borderWidth: 2,
    borderColor: "rgba(244,243,243,1)",
    borderRadius: 15,
    left: 64
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
  cupertinoButtonInfo3: {
    height: 46,
    width: 108,
    borderRadius: 20,
    marginTop: 513,
    marginLeft: 207
  },
  text: {
    top: 248,
    left: 44,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 25
  },
  loremIpsum: {
    top: 283,
    left: 44,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    height: 27,
    width: 261,
    fontSize: 15
  },
  textInput: {
    top: 320,
    left: 43,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    height: 54,
    width: 271,
    fontSize: 18,
    backgroundColor: "rgba(251,251,251,1)",
    borderRadius: 5
  },
  textInput1: {
    top: 387,
    left: 43,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    height: 54,
    width: 271,
    fontSize: 18,
    borderRadius: 5,
    backgroundColor: "rgba(251,251,251,1)"
  },
  icon: {
    top: 402,
    left: 279,
    position: "absolute",
    color: "rgba(209,214,219,1)",
    fontSize: 25
  },
  cupertinoButtonInfo: {
    height: 47,
    width: 271,
    position: "absolute",
    top: 454,
    borderRadius: 20,
    left: 43
  },
  cupertinoButtonInfo2: {
    height: 46,
    width: 152,
    position: "absolute",
    left: 43,
    top: 513,
    borderRadius: 20
  },
  image1Stack: {
    width: 360,
    height: 740,
    marginTop: -2,
    marginLeft: -1
  }
});

export default SignIn;