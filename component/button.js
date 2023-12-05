import React, { useState, useEffect, useRef } from "react";
import { Avatar, Container, ImageWrap, TouchWrap } from "../helper";
import { AppIcons } from "../helper/images";
import { Colors, RH, RW, RR, RF } from "../helper/constants";
import { H1, H2, P, Button, TextInputBox } from "../helper/element";
import { Fonts } from "../helper/fontSize";
import NumberFormat from "react-number-format";
import { Header } from "./header";
import { Image, View, Text, Linking, Alert } from "react-native";
import Toast from "react-native-toast-message";
import Spinner from "react-native-loading-spinner-overlay";
import Modal from "react-native-modal";
import SwipeUpDownModal from "react-native-swipe-modal-up-down";

import { SwipeModal } from "./swipeModal";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LottieView from "lottie-react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { ScrollView, RefreshControl } from "react-native";
import { PayWithFlutterwave } from "flutterwave-react-native";
import { axiosCalls } from "../helper/api";
import { getData } from "../helper/storage";
import { SearchBar } from "react-native-screens";
import Fontisto from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import { tupleExpression } from "@babel/types";
import { BigCard } from "./bigCard";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Artist = (props) => {
  const navigation = useNavigation();
  const [gasModal, setGasModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dieselModal, setDieselModal] = useState(false);
  const [loadWalletModal, setLoadWalletModal] = useState(false);
  const [moreModal, setMoreModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [balance, setBalance] = useState("");
  const [modalToggle, setModalToggle] = useState(false);

  const [locationModal, setLocationModal] = useState(false);

  let [animateModal, setanimateModal] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [enteredQuntity, setEnteredQuntity] = React.useState("");
  const [active, setActive] = React.useState("");
  const [walletBalance, setWalletBalance] = React.useState("");
  let [ShowComment, setShowModelComment] = useState(false);
  let [userImageUrl, setUserImageUrl] = useState("");
  let [selectedQuantity, setSelectedQuantity] = useState("");
  let [quantities, setQuantities] = useState([
    {
      value: "3kg",
    },
    {
      value: "6kg",
    },
    {
      value: "12.5kg",
    },
    {
      value: "20kg",
    },
    {
      value: "25kg",
    },
    {
      value: "50kg",
    },
    {
      value: "Other",
    },
  ]);
  let [contacts, setContacts] = useState([
    {
      name: "Femi",
      image: AppIcons.contact,
    },
    {
      name: "Chinedu",
      image: AppIcons.contact1,
    },
    {
      name: "Chioma",
      image: AppIcons.contact2,
    },
    {
      name: "Steve",
      image: AppIcons.contact3,
    },
    {
      name: "Femi",
      image: AppIcons.Femi,
    },
    {
      name: "Chinedu",
      image: AppIcons.contact1,
    },
  ]);

  useEffect(() => {
    getUserDetails();
    getWalletBallance();
  }, []);
  const move = (res) => {
    navigation.navigate("Address", {
      quantity:
        selectedQuantity == "3kg"
          ? 3
          : selectedQuantity == "5kg"
          ? 5
          : selectedQuantity == "12.5kg"
          ? 12.5
          : selectedQuantity == "20kg"
          ? 20
          : selectedQuantity == "25kg"
          ? 25
          : selectedQuantity == "50kg"
          ? 50
          : selectedQuantity == "Other"
          ? enteredQuntity
          : null,
      product: res,
    });
    setGasModal(false);
    setanimateModal(false);
  };

  const getUserDetails = async () => {
    const userDetails = await getData("user");
    const all = JSON.parse(userDetails);
    console.warn("userDetails", `${all.firstName} ${all.lastName}`);
    setUserName(`${all.firstName} ${all.lastName}`);

    if (all.photo.url != "string") {
      console.warn("userd", all.photo.url);

      setUserImageUrl(all.photo.url);
    }
  };

  const onRefresh = React.useCallback(() => {
    getWalletBallance();
    console.warn("yessss");
  }, []);

  const LunchWhatsapp = () => {
    console.warn("ppppp>>");
    const url = `whatsapp://send?phone=${+2349081111104}`;
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.warn("ppppp55555fhbv f>>");

        Alert.alert("Opps", "WhatsApp is not installed");
      }
    });
  };

  const getWalletBallance = async () => {
    setLoading(true);
    let res = await axiosCalls("/api/wallet/balance", "GET");
    if (res) {
      if (res.er) {
        console.warn("error", res.er.message);
        setLoading(false);
      } else {
        // console.warn('success>>oooo', res.data.availableBalance);
        setBalance(res.data.availableBalance);
        setLoading(false);
      }
    }
  };

  const done = (res) => {
    console.warn("doneee>>", res);
  };

  const loadWallet = async () => {
    setModalToggle(true);
  };

  const bankNav = async () => {
    setLoadWalletModal(false);
    navigation.navigate("Load", { value: "BankTransfer" });
    // navigation.navigate('BankTransfer')
  };

  const loadNav = async () => {
    setLoadWalletModal(false);
    navigation.navigate("Load", { value: "Card" });
  };
  const trackNav = async () => {
    setMoreModal(false);
    navigation.navigate("TrackOrder");
  };
  const helpNav = async () => {
    setMoreModal(false);
    navigation.navigate("Help");
  };
  return <Container></Container>;
};
