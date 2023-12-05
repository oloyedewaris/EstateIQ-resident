import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import { Container, ImageWrap, TouchWrap } from "../helper/index";
import { AppIcons } from "../helper/images";
import { useEffect, useState } from "react";
import LongButton from "../component/longbutton";

import { AntDesign } from "@expo/vector-icons";
import { Colors, FONT_FAMILY, RH, RW, RF, RR } from "../helper/constants";
import { useRoute } from "@react-navigation/native";
import { useQuery } from "react-query";
import { getUtilityApi } from "../api/utilty";

const ComunityDetails = ({ navigation }) => {
  const route = useRoute()
  const billId = route?.params?.id;

  const billDetailsQuery = useQuery(['getUtilityApi', billId], () => getUtilityApi(billId))

  return (
    <Container flex={1} backgroundColor={"#FFFFFF"}>
      <ScrollView>
        <TouchableOpacity
          style={{
            marginTop: "11%",
            marginLeft: "5%",
            flexDirection: "row",
            height: 20,
            width: 100,

            alignItems: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="left" size={15} color="black" />
          <Text style={{ color: "black", paddingLeft: 5 }}>Back</Text>
        </TouchableOpacity>
        <Container marginTop={2} marginLeft={5}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Development Fees
          </Text>
        </Container>

        <Container
          height={5}
          width={90}
          verticalAlignment="center"
          marginLeft={5}
          marginTop={3}
        >
          <Text
            style={{
              fontSize: 14,
              color: Colors.appTextGrey,
            }}
          >
            Development Fees. You are required to pay the development fees.
          </Text>
        </Container>
        <Container
          width={90}
          marginLeft={5}
          height={40}
          marginTop={5}
          borderRadius={5}
        >
          <ImageWrap source={AppIcons.housing} fit="contain" />
        </Container>

        <Container width={90} marginLeft={7} marginBottom={10} marginTop={7}>
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>
            Amount: NGN10,100.00
          </Text>
        </Container>

        <Container horizontalAlignment="center" marginTop={1}>
          <LongButton
            text={"Pay Now"}
            onPress={() => navigation.navigate("communitydues")}
          />
        </Container>
      </ScrollView>
    </Container>
  );
};
export default ComunityDetails;
