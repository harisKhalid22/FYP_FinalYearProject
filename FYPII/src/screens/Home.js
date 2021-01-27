import React, { Component, useState, useEffect, renderItem } from "react";
import { StyleSheet, View, StatusBar, Image, Text, FlatList, TouchableOpacity, SafeAreaView } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import HomeHeader from "../components/HomeHeader";
import ProgressBar from 'react-native-progress/Bar';
import axios from "axios";

function Home(props) {
  const domain = "http://192.168.1.100:3000"

  const [drawer, handleDrawer] = useState(false);
  const [data, setData] = useState([]);

  const handlePress = (check) => {
    handleDrawer(!drawer);
  };

  const fetchCases = async () => {
    try {
      const result = await axios.get(`${domain}/uploadCase/accept`);
      console.log(result);
      setData((await result).data.cases);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    drawer ? props.navigation.openDrawer() : props.navigation.closeDrawer();
  });

  useEffect(() => {
    fetchCases()
  }, [])

  // const DATA = [
  //   {
  //     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  //     caseDescription: "ELIGHT A VISION",
  //     requiredAmount: "Rs.250000 - Sponsor For Eye Surgery",
  //   },
  //   {
  //     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  //     caseDescription: "ADOPT AN ORPHAN",
  //     requiredAmount: "Rs.5000 - Monthly Support to An Orphan",
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d72",
  //     caseDescription: "ADOPT AN STUDENT",
  //     requiredAmount: "Rs.7000 - Light a Career Path",
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145471e29d72",
  //     caseDescription: "FOOD FOR THE HUNGRY",
  //     requiredAmount: "Rs.5000 - Food for All",
  //   },
  // ];

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item , index }) => {
    const backgroundColor = item.id === selectedId ? "white" : "white";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
        routeName = {"IndividualCase"+index}
      />
    );
  };

  const Item = ({ item, onPress, style, routeName}) => (
    <TouchableOpacity  onPress = {props.onPress} style={[styles.item, style]}>
        <View style={styles.image2Row}>
        <TouchableOpacity onPress={()=>{props.navigation.navigate(routeName)}}>
        <View style={styles.iconRow}>
          <MaterialCommunityIconsIcon
            name="play-circle-outline"
            style={styles.icon}
          ></MaterialCommunityIconsIcon>
          <View style={styles.adoptAnOrphanColumn}>
            <Text style={styles.adoptAnOrphan}>{item.caseDescription}</Text>
            <Text style={styles.sponsorForA2}>{item.requiredAmount}</Text>
            <View style={styles.rect4}>
              <ProgressBar progress={.9} width={245} color={'#0279fa'} borderColor={'#E6E6E6'} />
            </View>
            <View style={styles.current1Row}>
              <Text style={styles.current1}>Current</Text>
              <Text style={styles.target1}>Target</Text>
            </View>
          </View>
          </View>
        </TouchableOpacity>
        </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.rect}>
        <Image
          source={require("../assets/images/rsz_slider_1.jpg")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <View style={styles}>
          <SafeAreaView style={styles.container}>
            <FlatList 
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
            >
            </FlatList>
          </SafeAreaView>
        </View>
      </View>
      <View style={styles.materialHeader1Row}>
        <HomeHeader onPress={handlePress} style={styles.materialHeader1}></HomeHeader>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    marginVertical: 3,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(234,234,234,1)",
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
  materialHeader1: {
    height: 56,
    width: 360
  },
  image2Row: {
    height: 94,
    flexDirection: "row"
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
    marginLeft: 9,
    marginTop: 2,
    marginBottom: 2
  },
  iconRow: {
    height: 76,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 16,
    marginRight: 11
  },
  materialHeader1Row: {
    height: 56,
    flexDirection: "row",
    marginTop: -640,
    marginRight: -382
  },
});

export default Home;