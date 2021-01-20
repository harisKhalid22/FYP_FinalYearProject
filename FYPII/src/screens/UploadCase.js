import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Text,
  TextInput
} from "react-native";
import MaterialRadio4 from "../components/MaterialRadio4";
import MaterialButtonViolet6 from "../components/MaterialButtonViolet6";
import UploadRadio1 from "../components/UploadRadio1";
import UploadRadio3 from "../components/UploadRadio3";
import UploadRadio2 from "../components/UploadRadio2";
import UploadCaseHeader from "../components/UploadCaseHeader";

function UploadCase(props) {

  const [drawer, handleDrawer] = useState(false);

  const handlePress = (check) => {
    handleDrawer(!drawer);
  };

  useEffect(() => {
    drawer ? props.navigation.openDrawer() : props.navigation.closeDrawer();
  });

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
        <MaterialRadio4 style={styles.materialRadio4}></MaterialRadio4>
        </ImageBackground>
        <Text style={styles.caseDetails}>Case Details</Text>
        <TextInput
          placeholder=" Name"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.placeholder1}
        ></TextInput>
        <TextInput
          placeholder=" Phone"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.placeholder2}
        ></TextInput>
        <TextInput
          placeholder=" CNIC No"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.placeholder4}
        ></TextInput>
        <TextInput
          placeholder=" Required Amount"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.placeholder5}
        ></TextInput>
        <TextInput
          placeholder=" Case Description"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.placeholder6}
        ></TextInput>
        <TextInput
          placeholder=" Address"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.placeholder7}
        ></TextInput>
        <Text style={styles.zakathAcceptable}>Zakath Acceptable</Text>
        <Text style={styles.sadhakaAcceptable}>Sadhaka Acceptable</Text>
        <MaterialButtonViolet6
          onPress={()=>{props.navigation.navigate("UploadCaseDone")}}
          style={styles.materialButtonViolet6}
        ></MaterialButtonViolet6>
        <Text style={styles.yes1}>Yes</Text>
        <Text style={styles.yes2}>Yes</Text>
        <Text style={styles.no1}>No</Text>
        <Text style={styles.no2}>No</Text>
        <UploadRadio1 style={styles.materialRadio5}></UploadRadio1>
        <UploadRadio3 style={styles.materialRadio1}></UploadRadio3>
        <UploadRadio2 style={styles.materialRadio3}></UploadRadio2>
        <Text style={styles.loremIpsum1}>
          After submission the management team of LSH decide through the
          verification to approve {"\n"}the case or to reject the case.
        </Text>
      </View>
      <UploadCaseHeader onPress={handlePress} style={styles.materialHeader1}></UploadCaseHeader>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image1: {
    top: 0,
    left: 1,
    width: 360,
    height: 684,
    position: "absolute"
  },
  image1_imageStyle: {
    opacity: 0.1
  },
  materialRadio4: {
    height: 24,
    width: 21,
    marginTop: 497,
    marginLeft: 261
  },
  caseDetails: {
    top: 36,
    left: 42,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 35,
    width: 152,
    fontSize: 25
  },
  placeholder1: {
    top: 79,
    left: 42,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 50,
    width: 270,
    backgroundColor: "rgba(251,251,251,1)",
    borderRadius: 5,
    lineHeight: 14,
    fontSize: 18
  },
  placeholder2: {
    top: 134,
    left: 42,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 50,
    width: 270,
    backgroundColor: "rgba(251,251,251,1)",
    borderRadius: 5,
    lineHeight: 14,
    fontSize: 18
  },
  placeholder4: {
    top: 189,
    left: 42,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 50,
    width: 270,
    backgroundColor: "rgba(251,251,251,1)",
    borderRadius: 5,
    lineHeight: 14,
    fontSize: 18
  },
  placeholder5: {
    top: 299,
    left: 42,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 50,
    width: 270,
    backgroundColor: "rgba(251,251,251,1)",
    borderRadius: 5,
    lineHeight: 14,
    fontSize: 18
  },
  placeholder6: {
    top: 354,
    left: 42,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 110,
    width: 270,
    backgroundColor: "rgba(251,251,251,1)",
    borderRadius: 5,
    lineHeight: 14,
    fontSize: 18
  },
  placeholder7: {
    top: 244,
    left: 42,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 50,
    width: 270,
    backgroundColor: "rgba(251,251,251,1)",
    borderRadius: 5,
    lineHeight: 14,
    fontSize: 18
  },
  zakathAcceptable: {
    top: 472,
    left: 42,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 22,
    width: 138,
    fontSize: 16
  },
  sadhakaAcceptable: {
    top: 499,
    left: 42,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 22,
    width: 149,
    fontSize: 16
  },
  materialButtonViolet6: {
    height: 40,
    width: 265,
    position: "absolute",
    left: 42,
    top: 527,
    borderRadius: 10
  },
  yes1: {
    top: 501,
    left: 232,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 17,
    width: 26,
    fontSize: 15
  },
  yes2: {
    top: 473,
    left: 230,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 17,
    width: 26,
    fontSize: 15
  },
  no1: {
    top: 474,
    left: 286,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 17,
    width: 22,
    fontSize: 15
  },
  no2: {
    top: 501,
    left: 286,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 17,
    width: 22,
    fontSize: 15
  },
  materialRadio5: {
    height: 26,
    width: 23,
    position: "absolute",
    left: 209,
    top: 469
  },
  materialRadio1: {
    height: 23,
    width: 20,
    position: "absolute",
    left: 263,
    top: 470
  },
  materialRadio3: {
    height: 24,
    width: 20,
    position: "absolute",
    left: 210,
    top: 497
  },
  loremIpsum1: {
    top: 586,
    position: "absolute",
    fontFamily: "helvetica-regular",
    color: "rgba(74,74,74,1)",
    height: 85,
    width: 360,
    fontSize: 16,
    textAlign: "center",
    left: 0,
    lineHeight: 16
  },
  image1Stack: {
    width: 361,
    height: 684,
    marginTop: 56,
    marginLeft: -1
  },
  materialHeader1: {
    height: 56,
    width: 360,
    marginTop: -740
  }
});

export default UploadCase;
