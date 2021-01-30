import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TextInput,
  Text
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import BankFormButton from "../components/BankFormButton";
import MaterialToast1 from "../components/MaterialToast1";
import DonateHeader from "../components/DonateHeader";
import axios from 'axios';
import RadioBtn from '../components/CustomRadioBtn';
import { Snackbar } from "react-native-paper"

function BankForm(props) {

  const [form, setForm] = useState({
    amountOfDonation: "",
    email: "",
    cardNumber: "",
    "MM / YY": "",
    CVC: "",
    name: "",
    phone: "",
    cnicNumber: ""
  });

  const domain = "http://192.168.1.121:3000"

  const onChangeHandler = (val, field) => {
    setForm({
      ...form,
      [field]: val
    })
  }

  const bankForm = async () => {
    try {
      console.log(form);
      let result = await axios.post(`${domain}/makeDonation/create`, form)
      onToggleSnackBar("Successful")
      props.navigation.navigate("BankFormDone")
      console.log(result);
    } catch (error) {
      console.log(error)
      onToggleSnackBar("Error")
    }
  }

  // const [drawer, handleDrawer] = useState(false);

  // const handlePress = (check) => {
  //   handleDrawer(!drawer);
  // };

  // useEffect(() => {
  //   drawer ? props.navigation.openDrawer() : props.navigation.closeDrawer();
  // });

  const [visible, setVisible] = React.useState(false);
  const [snackMessage, setSnackMessage] = React.useState("");


  const onToggleSnackBar = (txt) => {
    setSnackMessage(txt)
    setVisible(!visible)
  };

  const onDismissSnackBar = () => {
    setSnackMessage("")
    setVisible(false)
  };

  const [textInputAmount, setTextInputAmount] = useState('');
  const [textInputEmail, setTextInputEmail] = useState('');
  const [textInputCard, setTextCard] = useState('');
  const [textInputMonthYear, setTextMonthYear] = useState('');
  const [textInputCvc, setTextCvc] = useState('');
  const [textInputUsername, setTextUsername] = useState('');
  const [textInputPhone, setTextPhone] = useState('');
  const [textInputCnic, setTextCnic] = useState('');

  const checkTextInput = () => {
  
    // if (!textInputAmount.trim()) {
    //   alert('Please Enter Amount in PKR');
    //   return;
    // }

    // if (!textInputEmail.trim()) {
    //   alert('Please Enter Email');
    //   return;
    // }

    // if (!textInputCard.trim()) {
    //   alert('Please Enter Card Number');
    //   return;
    // }

    // if (!textInputMonthYear.trim()) {
    //   alert('Please Enter Month and Year');
    //   return;
    // }

    // // CVC = Card Verification Code = max 3 digits 
    // if (!textInputCvc.trim()) {
    //   alert('Please Enter CVC');
    //   return;
    // }

    // if (!textInputUsername.trim()) {
    //   alert('Please Enter Name');
    //   return;
    // }

    // if (!textInputPhone.trim()) {
    //   alert('Please Enter Phone');
    //   return;
    // }

    // if (!textInputCnic.trim()) {
    //   alert('Please Enter CNIC');
    //   return;
    // }

    if (/[^0-9]/.test(textInputAmount)) {
      alert('Regex Expression in Amount not allowed.');
      return;
    }

    if (/[^0-9]/.test(textInputCvc)) {
      alert('Regex Expression in CVC not allowed.');
      return;
    }

    if (/[^0-9]/.test(textInputCnic)) {
      alert('Regex Expression in CNIC not allowed.');
      return;
    }

    //Checked Successfully
    bankForm();
  };

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
        <View style={styles.rect1}>
          <Icon name="gift" style={styles.icon1}></Icon>
        </View>
        </ImageBackground>
        <TextInput
          placeholder=" Name"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.name}
          value={form.name}
          onChangeText={(txt) => { onChangeHandler(txt, "name"), setTextUsername(txt) }} 
          maxLength={25}

        ></TextInput>
        <TextInput
          placeholder=" CVC"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.cvc}
          // value={form.CVC}
          // onChangeText={(txt) => { onChangeHandler(txt, "CVC"), setTextUsername(txt) }} 
          onChangeText={(txt) => setTextCvc(txt) } 
          maxLength={3}
          
        ></TextInput>
        <TextInput
          placeholder=" Phone"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.phone}
          value={form.phone}
          onChangeText={(txt) => { onChangeHandler(txt, "phone"), setTextPhone(txt) }} 
          maxLength={11}
          
        ></TextInput>
        <TextInput
          placeholder=" CNIC"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.cnic}
          value={form.cnicNumber}
          onChangeText={(txt) => { onChangeHandler(txt, "cnicNumber"), setTextCnic(txt) }} 
          maxLength={16}
          
        ></TextInput>
        <TextInput
          placeholder=" MM / YY"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.monthYear}
          // value={form.{{MM / YY"}}}
          // onChangeText={(txt) => { onChangeHandler(txt, "MM / YY"), setTextUsername(txt) }} 
          onChangeText={(txt) => setTextMonthYear(txt) } 
          maxLength={5}

        ></TextInput>
        <TextInput
          placeholder=" Card number"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.cardNumber}
          value={form.cardNumber}
          onChangeText={(txt) => { onChangeHandler(txt, "cardNumber"), setTextCard(txt) }} 
          maxLength={16}
          
        ></TextInput>
        <TextInput
          placeholder=" Email"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.email}
          value={form.email}
          onChangeText={(txt) => { onChangeHandler(txt, "email"), setTextInputEmail(txt) }} 
          maxLength={25}
          
        ></TextInput>
        <Text style={styles.bankTransfer}>Bank Transfer</Text>
        <Text style={styles.loremIpsum1}>Donate to Serve Humanity</Text>
        <TextInput
          placeholder=" Amount in PKR"
          placeholderTextColor="rgba(155,155,155,1)"
          style={styles.amount}
          value={form.amountOfDonation}
          onChangeText={(txt) => { onChangeHandler(txt, "amountOfDonation"), setTextInputAmount(txt) }} 
        ></TextInput>
        <BankFormButton
          onPress={() => {
            checkTextInput()
          }}
        style={styles.cupertinoButtonInfo9}>
        </BankFormButton>
        <DonateHeader style={styles.materialHeader1}></DonateHeader>
        {/* onPress={handlePress}  */}
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
    width: 360,
    height: 740,
    position: "absolute",
    left: 0
  },
  image1_imageStyle: {
    opacity: 0.1
  },
  rect1: {
    width: 360,
    height: 173,
    backgroundColor: "rgba(26,137,180,1)",
    marginTop: 56
  },
  icon1: {
    color: "rgba(12,63,84,1)",
    fontSize: 140,
    height: 140,
    width: 120,
    marginTop: 16,
    marginLeft: 119
  },
  name: {
    top: 507,
    left: 47,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 37,
    width: 265,
    backgroundColor: "rgba(251,251,251,1)",
    borderRadius: 5,
    lineHeight: 14,
    fontSize: 17
  },
  phone: {
    top: 549,
    left: 47,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 37,
    width: 265,
    backgroundColor: "rgba(251,251,251,1)",
    borderRadius: 5,
    lineHeight: 14,
    fontSize: 17
  },
  cnic: {
    top: 591,
    left: 47,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 37,
    width: 265,
    backgroundColor: "rgba(251,251,251,1)",
    borderRadius: 5,
    lineHeight: 14,
    fontSize: 17
  },
  cvc: {
    top: 465,
    left: 47,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 37,
    width: 265,
    backgroundColor: "rgba(251,251,251,1)",
    borderRadius: 5,
    lineHeight: 14,
    fontSize: 17
  },
  monthYear: {
    top: 424,
    left: 47,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 37,
    width: 265,
    backgroundColor: "rgba(251,251,251,1)",
    borderRadius: 5,
    lineHeight: 14,
    fontSize: 17
  },
  cardNumber: {
    top: 383,
    left: 47,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 37,
    width: 265,
    backgroundColor: "rgba(251,251,251,1)",
    borderRadius: 5,
    lineHeight: 14,
    fontSize: 17
  },
  email: {
    top: 341,
    left: 47,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 37,
    width: 265,
    backgroundColor: "rgba(251,251,251,1)",
    borderRadius: 5,
    lineHeight: 14,
    fontSize: 17
  },
  bankTransfer: {
    top: 242,
    left: 49,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 25
  },
  loremIpsum1: {
    top: 269,
    left: 49,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    height: 27,
    width: 261,
    fontSize: 15
  },
  amount: {
    top: 300,
    left: 48,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 37,
    width: 265,
    backgroundColor: "rgba(251,251,251,1)",
    borderRadius: 5,
    lineHeight: 14,
    fontSize: 17
  },
  cupertinoButtonInfo9: {
    height: 40,
    width: 163,
    position: "absolute",
    left: 100,
    top: 640,
    borderRadius: 10
  },
  materialHeader1: {
    height: 56,
    width: 360,
    position: "absolute",
    top: 0,
    left: 0
  },
  image1Stack: {
    width: 360,
    height: 740
  }
});

export default BankForm;
