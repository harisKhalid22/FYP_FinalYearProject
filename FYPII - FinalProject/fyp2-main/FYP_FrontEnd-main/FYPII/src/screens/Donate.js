import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Text
} from "react-native";
import CupertinoButtonInfo8 from "../components/CupertinoButtonInfo8";
import DonateHeader from "../components/DonateHeader";
import BankForm from '../screens/BankForm';

function Donate(props) {

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
      <ImageBackground
        source={require("../assets/images/Webp.net-resizeimage1.png")}
        resizeMode="stretch"
        style={styles.image1}
        imageStyle={styles.image1_imageStyle}
      >
        <View style={styles.rect2}>
          <Text style={styles.lshDonation}>LSH Donation</Text>
          <Text style={styles.loremIpsum1}>
            With your assistance, we could fund cases which are needed to be
            closed as soon as possible. LSH needs more partners like you to help
            achieve our goals, and we&#39;d greatly appreciate your help.
          </Text>
          <CupertinoButtonInfo8
            onPress={()=>{props.navigation.navigate("BankForm")}}
            style={styles.cupertinoButtonInfo8}
          ></CupertinoButtonInfo8>
        </View>
      </ImageBackground>
      <DonateHeader onPress={handlePress} style={styles.materialHeader1}></DonateHeader>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image1: {
    width: 360,
    height: 684,
    marginTop: 56
  },
  image1_imageStyle: {
    opacity: 0.1
  },
  rect2: {
    width: 313,
    height: 245,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(229,222,222,1)",
    marginTop: 172,
    marginLeft: 22
  },
  lshDonation: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 25,
    marginTop: 15,
    marginLeft: 25
  },
  loremIpsum1: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    height: 127,
    width: 268,
    fontSize: 15,
    marginTop: 6,
    marginLeft: 24
  },
  cupertinoButtonInfo8: {
    width: 270,
    height: 45,
    borderRadius: 10,
    marginTop: 3,
    marginLeft: 22
  },
  materialHeader1: {
    height: 56,
    width: 360,
    marginTop: -740
  }
});

export default Donate;