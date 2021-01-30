import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Image, Text } from "react-native";
import HomeHeader from "../components/HomeHeader";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";

function DrawerHome(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.materialHeader1StackStack}>
        <View style={styles.materialHeader1Stack}>
          <HomeHeader style={styles.materialHeader1}></HomeHeader>
          <View style={styles.rect}>
            <IoniconsIcon name="md-close" style={styles.icon}></IoniconsIcon>
            <Image
              source={require("../assets/images/logo1.jpeg")}
              resizeMode="stretch"
              style={styles.image2}
            ></Image>
            <View style={styles.icon2Row}>
              <EntypoIcon name="home" style={styles.icon2}></EntypoIcon>
              <Text style={styles.home}>Home</Text>
            </View>
            <View style={styles.icon8Row}>
              <IoniconsIcon
                name="md-checkbox-outline"
                style={styles.icon8}
              ></IoniconsIcon>
              <Text style={styles.donate}>Donate</Text>
            </View>
            <View style={styles.icon7Row}>
              <IoniconsIcon
                name="ios-stats"
                style={styles.icon7}
              ></IoniconsIcon>
              <Text style={styles.uploadCase}>Upload Case</Text>
            </View>
            <View style={styles.icon5Row}>
              <IoniconsIcon
                name="ios-done-all"
                style={styles.icon5}
              ></IoniconsIcon>
              <Text style={styles.completedCases}>Completed Cases</Text>
            </View>
            <View style={styles.icon4Row}>
              <IoniconsIcon
                name="md-contact"
                style={styles.icon4}
              ></IoniconsIcon>
              <Text style={styles.contactUs}>Contact Us</Text>
            </View>
            <View style={styles.icon6Row}>
              <IoniconsIcon
                name="ios-information-circle-outline"
                style={styles.icon6}
              ></IoniconsIcon>
              <Text style={styles.aboutUs}>About Us</Text>
            </View>
            <View style={styles.icon3Row}>
              <IoniconsIcon
                name="ios-log-in"
                style={styles.icon3}
              ></IoniconsIcon>
              <Text style={styles.logout}>Logout</Text>
            </View>
          </View>
        </View>
        <Image
          source={require("../assets/images/Webp.net-resizeimage1.png")}
          resizeMode="stretch"
          style={styles.image1}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialHeader1: {
    height: 56,
    width: 360,
    position: "absolute",
    top: 0,
    left: 0
  },
  rect: {
    top: 0,
    left: 0,
    width: 214,
    height: 640,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 25,
    height: 27,
    width: 14,
    marginTop: 14,
    marginLeft: 12
  },
  image2: {
    width: 146,
    height: 89,
    borderWidth: 2,
    borderColor: "rgba(244,243,243,1)",
    borderRadius: 15,
    marginTop: 15,
    marginLeft: 32
  },
  icon2: {
    color: "rgba(155,155,155,1)",
    fontSize: 21,
    height: 23,
    width: 21
  },
  home: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 30,
    width: 136,
    fontSize: 17,
    marginLeft: 14,
    marginTop: 3
  },
  icon2Row: {
    height: 33,
    flexDirection: "row",
    marginTop: 55,
    marginLeft: 16,
    marginRight: 27
  },
  icon8: {
    color: "rgba(155,155,155,1)",
    fontSize: 22,
    height: 24,
    width: 16
  },
  donate: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 30,
    width: 136,
    fontSize: 16,
    marginLeft: 16,
    marginTop: 3
  },
  icon8Row: {
    height: 33,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 19,
    marginRight: 27
  },
  icon7: {
    color: "rgba(155,155,155,1)",
    fontSize: 23,
    height: 25,
    width: 15
  },
  uploadCase: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 30,
    width: 136,
    fontSize: 16,
    marginLeft: 16,
    marginTop: 5
  },
  icon7Row: {
    height: 35,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 20,
    marginRight: 27
  },
  icon5: {
    color: "rgba(155,155,155,1)",
    fontSize: 32,
    height: 35,
    width: 20
  },
  completedCases: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 30,
    width: 136,
    fontSize: 16,
    marginLeft: 12,
    marginTop: 8
  },
  icon5Row: {
    height: 38,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 19,
    marginRight: 27
  },
  icon4: {
    color: "rgba(155,155,155,1)",
    fontSize: 22,
    height: 24,
    width: 18
  },
  contactUs: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 30,
    width: 136,
    fontSize: 16,
    marginLeft: 13,
    marginTop: 3
  },
  icon4Row: {
    height: 33,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 20,
    marginRight: 27
  },
  icon6: {
    color: "rgba(155,155,155,1)",
    fontSize: 22,
    height: 24,
    width: 18
  },
  aboutUs: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 30,
    width: 136,
    fontSize: 16,
    marginLeft: 14,
    marginTop: 4
  },
  icon6Row: {
    height: 34,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 19,
    marginRight: 27
  },
  icon3: {
    color: "rgba(155,155,155,1)",
    fontSize: 22,
    height: 24,
    width: 17
  },
  logout: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 30,
    width: 136,
    fontSize: 16,
    marginLeft: 14,
    marginTop: 3
  },
  icon3Row: {
    height: 33,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 20,
    marginRight: 27
  },
  materialHeader1Stack: {
    top: 0,
    left: 0,
    width: 360,
    height: 640,
    position: "absolute"
  },
  image1: {
    top: 56,
    left: 0,
    width: 360,
    height: 584,
    position: "absolute",
    opacity: 0.1
  },
  materialHeader1StackStack: {
    width: 360,
    height: 640
  }
});

export default DrawerHome;
