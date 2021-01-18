import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Image, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import HomeHeader from "../components/HomeHeader";

function Home(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.rect}>
        <Image
          source={require("../assets/images/rsz_slider_1.jpg")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <View style={styles.rect2}>
          <View style={styles.image2Row}>
            <Image
              source={require("../assets/images/120035303_2884387465139993_3107618276911776291_n2.jpg")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
            <View style={styles.elightAVision7Column}>
              <Text style={styles.elightAVision7}>ELIGHT A VISION</Text>
              <Text style={styles.sponsorForA1}>Sponsor For Eye Surgery</Text>
              <View style={styles.rect3}></View>
              <View style={styles.currentRow}>
                <Text style={styles.current}>Current</Text>
                <Text style={styles.target}>Target</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.rect5}>
          <View style={styles.iconRow}>
            <MaterialCommunityIconsIcon
              name="play-circle-outline"
              style={styles.icon}
            ></MaterialCommunityIconsIcon>
            <View style={styles.adoptAnOrphanColumn}>
              <Text style={styles.adoptAnOrphan}>ADOPT AN ORPHAN</Text>
              <Text style={styles.sponsorForA2}>
                Monthly Support to An Orphan
              </Text>
              <View style={styles.rect4}></View>
              <View style={styles.current1Row}>
                <Text style={styles.current1}>Current</Text>
                <Text style={styles.target1}>Target</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.rect7}>
          <View style={styles.image4Row}>
            <Image
              source={require("../assets/images/120035303_2884387465139993_3107618276911776291_n2.jpg")}
              resizeMode="contain"
              style={styles.image4}
            ></Image>
            <View style={styles.adoptAnStudentColumn}>
              <Text style={styles.adoptAnStudent}>ADOPT AN STUDENT</Text>
              <Text style={styles.lightACareerPath}>Light a Career Path</Text>
              <View style={styles.rect6}></View>
              <View style={styles.current2Row}>
                <Text style={styles.current2}>Current</Text>
                <Text style={styles.target2}>Target</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.rect9}>
          <View style={styles.icon1Row}>
            <MaterialCommunityIconsIcon
              name="play-circle-outline"
              style={styles.icon1}
            ></MaterialCommunityIconsIcon>
            <View style={styles.foodForTheHungryColumn}>
              <Text style={styles.foodForTheHungry}>FOOD FOR THE HUNGRY</Text>
              <Text style={styles.foodForAll}>Food for All</Text>
              <View style={styles.rect8}></View>
              <View style={styles.current3Row}>
                <Text style={styles.current3}>Current</Text>
                <Text style={styles.target3}>Target</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.materialHeader1Row}>
        <HomeHeader style={styles.materialHeader1}></HomeHeader>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 360,
    height: 584,
    backgroundColor: "#E6E6E6",
    marginTop: 56
  },
  image: {
    width: 360,
    height: 192
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
  image2: {
    width: 67,
    height: 94
  },
  elightAVision7: {
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
  rect3: {
    width: 243,
    height: 7,
    backgroundColor: "#E6E6E6",
    marginTop: 8,
    marginLeft: 1
  },
  current: {
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    height: 14,
    width: 40,
    fontSize: 12
  },
  target: {
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    height: 14,
    width: 35,
    fontSize: 12,
    marginLeft: 169
  },
  currentRow: {
    height: 14,
    flexDirection: "row",
    marginTop: 10
  },
  elightAVision7Column: {
    width: 244,
    marginLeft: 9,
    marginTop: 14,
    marginBottom: 10
  },
  image2Row: {
    height: 94,
    flexDirection: "row",
    marginLeft: 17,
    marginRight: 11
  },
  rect5: {
    width: 348,
    height: 94,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(234,234,234,1)",
    marginTop: 1,
    marginLeft: 6
  },
  icon: {
    color: "rgba(74,144,226,1)",
    fontSize: 70,
    width: 70,
    height: 76
  },
  adoptAnOrphan: {
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
  rect4: {
    width: 243,
    height: 8,
    backgroundColor: "#E6E6E6",
    marginTop: 8,
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
    marginTop: 9
  },
  adoptAnOrphanColumn: {
    width: 244,
    marginLeft: 7,
    marginTop: 4,
    marginBottom: 2
  },
  iconRow: {
    height: 76,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 16,
    marginRight: 11
  },
  rect7: {
    width: 348,
    height: 94,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(234,234,234,1)",
    marginTop: 1,
    marginLeft: 6
  },
  image4: {
    width: 67,
    height: 94
  },
  adoptAnStudent: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 15
  },
  lightACareerPath: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    height: 13,
    width: 221,
    fontSize: 10
  },
  rect6: {
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
  adoptAnStudentColumn: {
    width: 244,
    marginLeft: 9,
    marginTop: 13,
    marginBottom: 11
  },
  image4Row: {
    height: 94,
    flexDirection: "row",
    marginLeft: 17,
    marginRight: 11
  },
  rect9: {
    width: 348,
    height: 94,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(234,234,234,1)",
    overflow: "visible",
    marginLeft: 6
  },
  icon1: {
    color: "rgba(74,144,226,1)",
    fontSize: 70,
    width: 70,
    height: 76
  },
  foodForTheHungry: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 15
  },
  foodForAll: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    height: 13,
    width: 221,
    fontSize: 10
  },
  rect8: {
    width: 243,
    height: 8,
    backgroundColor: "#E6E6E6",
    marginTop: 8,
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
    marginTop: 9
  },
  foodForTheHungryColumn: {
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
  materialHeader1: {
    height: 56,
    width: 360
  },
  // materialHeader2: {
  //   height: 56,
  //   width: 332,
  //   marginLeft: 50
  // },
  materialHeader1Row: {
    height: 56,
    flexDirection: "row",
    marginTop: -640,
    marginRight: -382
  }
});

export default Home;
