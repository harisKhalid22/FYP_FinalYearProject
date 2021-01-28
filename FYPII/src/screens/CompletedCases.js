import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Text
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import CompletedCasesHeader from "../components/CompletedCasesHeader";
import ProgressBar from 'react-native-progress/Bar';

function CompletedCases(props) {

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
          resizeMode="stretch"
          style={styles.image1}
          imageStyle={styles.image1_imageStyle}
        >
          <View style={styles.rect2}>
            <View style={styles.icon1Row}>
              <MaterialCommunityIconsIcon
                name="play-circle-outline"
                style={styles.icon1}
              ></MaterialCommunityIconsIcon>
              <View style={styles.elightAVision1Column}>
                <Text style={styles.elightAVision1}>Adopt an orphan</Text>
                <Text style={styles.sponsorForA1}>Rs.5000 - Monthly support to an orphan</Text>
                <View style={styles.rect1}> <ProgressBar progress={9} width={245} color={'#0279fa'} borderColor={'#0279fa'} /> </View>
                <View style={styles.current1Row}>
                  <Text style={styles.current1}>Current</Text>
                  <Text style={styles.target1}>Target</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.rect6}>
          <View style={styles.icon2Row}>
            <MaterialCommunityIconsIcon
              name="play-circle-outline"
              style={styles.icon2}
            ></MaterialCommunityIconsIcon>
            <View style={styles.elightAVision3Column}>
              <Text style={styles.elightAVision3}>Elight a vision</Text>
              <Text style={styles.sponsorForA3}>Rs.250000 - Sponsor for eye surgery</Text>
              <View style={styles.rect5}> <ProgressBar progress={9} width={245} color={'#0279fa'} borderColor={'#0279fa'} /> </View>
              <View style={styles.current3Row}>
                <Text style={styles.current3}>Current</Text>
                <Text style={styles.target3}>Target</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.rect4}>
          <View style={styles.icon3Row}>
            <MaterialCommunityIconsIcon
              name="play-circle-outline"
              style={styles.icon3}
            ></MaterialCommunityIconsIcon>
            <View style={styles.elightAVision2Column}>
              <Text style={styles.elightAVision2}>Food for the hungry</Text>
              <Text style={styles.sponsorForA2}>Rs.5000 - food for all</Text>
              <View style={styles.rect3}> <ProgressBar progress={9} width={245} color={'#0279fa'} borderColor={'#0279fa'} /> </View>
              <View style={styles.current2Row}>
                <Text style={styles.current2}>Current</Text>
                <Text style={styles.target2}>Target</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <CompletedCasesHeader  
        onPress={handlePress} 
        style={styles.materialHeader1}
      ></CompletedCasesHeader>
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
    height: 684,
    position: "absolute"
  },
  image1_imageStyle: {
    opacity: 0.1
  },
  rect2: {
    width: 348,
    height: 94,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(234,234,234,1)",
    marginTop: 6,
    marginLeft: 6
  },
  icon1: {
    color: "rgba(74,144,226,1)",
    fontSize: 70,
    width: 70,
    height: 76
  },
  elightAVision1: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 15
  },
  sponsorForA1: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    height: 13,
    width: 221,
    fontSize: 10
  },
  rect1: {
    width: 243,
    height: 8,
    backgroundColor: "#E6E6E6",
    marginTop: 9,
    marginLeft: 1
  },
  current1: {
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    height: 14,
    width: 40,
    fontSize: 12
  },
  target1: {
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    height: 14,
    width: 35,
    fontSize: 12,
    marginLeft: 169
  },
  current1Row: {
    height: 14,
    flexDirection: "row",
    marginTop: 8
  },
  elightAVision1Column: {
    width: 244,
    marginLeft: 7,
    marginTop: 5,
    marginBottom: 1
  },
  icon1Row: {
    height: 76,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 16,
    marginRight: 11
  },
  rect6: {
    top: 202,
    left: 6,
    width: 348,
    height: 94,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(234,234,234,1)"
  },
  icon2: {
    color: "rgba(74,144,226,1)",
    fontSize: 70,
    width: 70,
    height: 76
  },
  elightAVision3: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 15
  },
  sponsorForA3: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    height: 13,
    width: 221,
    fontSize: 10
  },
  rect5: {
    width: 243,
    height: 8,
    backgroundColor: "#E6E6E6",
    marginTop: 9,
    marginLeft: 1
  },
  current3: {
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    height: 14,
    width: 40,
    fontSize: 12
  },
  target3: {
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    height: 14,
    width: 35,
    fontSize: 12,
    marginLeft: 169
  },
  current3Row: {
    height: 14,
    flexDirection: "row",
    marginTop: 8
  },
  elightAVision3Column: {
    width: 244,
    marginLeft: 7,
    marginTop: 5,
    marginBottom: 1
  },
  icon2Row: {
    height: 76,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 16,
    marginRight: 11
  },
  rect4: {
    top: 104,
    left: 6,
    width: 348,
    height: 94,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(234,234,234,1)"
  },
  icon3: {
    color: "rgba(74,144,226,1)",
    fontSize: 70,
    width: 70,
    height: 76
  },
  elightAVision2: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 15
  },
  sponsorForA2: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    height: 13,
    width: 221,
    fontSize: 10
  },
  rect3: {
    width: 243,
    height: 8,
    backgroundColor: "#E6E6E6",
    marginTop: 9,
    marginLeft: 1
  },
  current2: {
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    height: 14,
    width: 40,
    fontSize: 12
  },
  target2: {
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    height: 14,
    width: 35,
    fontSize: 12,
    marginLeft: 169
  },
  current2Row: {
    height: 14,
    flexDirection: "row",
    marginTop: 8
  },
  elightAVision2Column: {
    width: 244,
    marginLeft: 7,
    marginTop: 5,
    marginBottom: 1
  },
  icon3Row: {
    height: 76,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 16,
    marginRight: 11
  },
  image1Stack: {
    width: 360,
    height: 584,
    marginTop: 56
  },
  materialHeader1: {
    height: 56,
    width: 360,
    marginTop: -640
  }
});

export default CompletedCases;
