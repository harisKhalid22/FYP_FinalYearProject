import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Image, Text } from "react-native";
import HomeHeader from "../components/HomeHeader";
import IndividualCaseDonate from "../components/IndividualCaseDonate";
import CountDown from 'react-native-countdown-component';
import ProgressBar from 'react-native-progress/Bar';

function IndividualCase(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <HomeHeader style={styles.materialHeader1}></HomeHeader>
      <Image
        source={require("../assets/images/120035303_2884387465139993_3107618276911776291_n1.jpg")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.elightAVision}>Elight a Vision</Text>
      <Text style={styles.sponsorForA}>Sponsor For Eye Surgery</Text>
      <Text style={styles.text}>
        God loves those who help people pay off their debts. Share this post
        with your friends and family and on social media platforms and donate,
        even if it&#39;s very little. A small donation can make a huge impact.
      </Text>
      <View style={styles.rect1}>
        <ProgressBar progress={0.7} width={330} color={'#0279fa'} borderColor={'#0279fa'} />
      </View>
      <View style={styles.current1Row}>
        <Text style={styles.current1}>Current</Text>
        <Text style={styles.target1}>Target</Text>
      </View>
      <IndividualCaseDonate
        style={styles.cupertinoButtonInfo9}
      ></IndividualCaseDonate>
      <View style={styles.rect3}>
        <CountDown
          size={20}
          until={1000000}
          onFinish={() => alert('Case Duration is Finished.')}
          digitStyle={{backgroundColor: '#FFF', borderWidth: 1, borderColor: '#737373'}}
          digitTxtStyle={{color: '#737373'}}
          timeToShow={['D', 'H', 'M', 'S']}
          timeLabels={{d: 'Days', h: 'Hours', m: 'Minutes', s: 'Seconds'}}
          timeLabelStyle={{color: '#737373', fontWeight: 'bold'}}
          //separatorStyle={{color: '#737373'}}
          //showSeparator
        />
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
    width: 360
  },
  image: {
    width: 360,
    height: 250,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 33
  },
  elightAVision: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginTop: -279,
    marginLeft: 13
  },
  sponsorForA: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    height: 22,
    width: 331,
    fontSize: 16,
    marginTop: 260,
    marginLeft: 13
  },
  text: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 323,
    fontSize: 15,
    height: 210,
    marginTop: 37,
    marginLeft: 14
  },
  rect1: {
    width: 330,
    height: 8,
    //backgroundColor: "#E6E6E6",
    marginTop: -245,
    marginLeft: 14
  },
  current1: {
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    height: 17,
    width: 55,
    fontSize: 13,
    marginTop: 4
  },
  target1: {
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    height: 17,
    width: 55,
    fontSize: 13,
    marginTop: 4,
    marginLeft: 239
  },
  current1Row: {
    height: 18,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 13,
    marginRight: 16
  },
  cupertinoButtonInfo9: {
    height: 40,
    width: 163,
    borderRadius: 10,
    marginTop: 292,
    marginLeft: 93
  },
  rect3: {
    width: 234,
    height: 70,
    marginTop: -115,
    marginLeft: 60
  }
});

export default IndividualCase;
