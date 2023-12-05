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

import { useState } from "react";

import { AntDesign } from "@expo/vector-icons";
import { Colors, FONT_FAMILY, RH, RW, RF, RR } from "../helper/constants";

const NUBAN = ({ navigation }) => {
  const keyboardVerticalOffset = Platform.OS === "ios" ? 150 : 0;
  const [modalVisible, setModalVisible] = useState(false);
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
          onPress={() => navigation.navigate("bills")}
        >
          <AntDesign name="left" size={15} color="black" />
          <Text style={{ color: "black", paddingLeft: 5 }}>Back</Text>
        </TouchableOpacity>
        <Container marginTop={2} marginLeft={5}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            NUBAN Account
          </Text>
        </Container>

        <Container
          width={90}
          height={25}
          backgroundColor={"white"}
          borderRadius={7}
          marginLeft={5}
          marginTop={5}
          elevation={5}
          marginBottom={3}
        >
          <Container direction="row">
            <Container width={40} height={6} verticalAlignment="center">
              <Text
                style={{
                  fontSize: 16,
                  paddingLeft: "10%",
                  color: Colors.appTextGrey,
                }}
              >
                Account Name:
              </Text>
            </Container>
            <Container width={50} height={6} verticalAlignment="center">
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  paddingLeft: "10%",

                  paddingLeft: "10%",
                }}
              >
                Champions Estate
              </Text>
            </Container>
          </Container>
          <Container direction="row">
            <Container width={40} height={6} verticalAlignment="center">
              <Text
                style={{
                  fontSize: 16,
                  paddingLeft: "10%",
                  color: Colors.appTextGrey,
                }}
              >
                Service Type:
              </Text>
            </Container>
            <Container width={50} height={6} verticalAlignment="center">
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  paddingLeft: "10%",

                  paddingLeft: "10%",
                }}
              >
                Facility Management
              </Text>
            </Container>
          </Container>
          <Container direction="row">
            <Container width={40} height={6} verticalAlignment="center">
              <Text
                style={{
                  fontSize: 16,
                  paddingLeft: "10%",
                  color: Colors.appTextGrey,
                }}
              >
                Acct Number:
              </Text>
            </Container>
            <Container width={35} height={6} verticalAlignment="center">
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  paddingLeft: "10%",

                  paddingLeft: "10%",
                }}
              >
                012345678
              </Text>
            </Container>
            <Container width={15} height={6} verticalAlignment="center">
              <TouchWrap>
                <Text
                  style={{
                    fontSize: 15,
                    paddingLeft: "10%",
                    color: Colors.appPrimaryBlue,
                    paddingLeft: "10%",
                  }}
                >
                  Copy
                </Text>
              </TouchWrap>
            </Container>
          </Container>
          <Container direction="row">
            <Container width={40} height={6} verticalAlignment="center">
              <Text
                style={{
                  fontSize: 16,
                  paddingLeft: "10%",
                  color: Colors.appTextGrey,
                }}
              >
                Bank:
              </Text>
            </Container>
            <Container width={50} height={6} verticalAlignment="center">
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  paddingLeft: "10%",

                  paddingLeft: "10%",
                }}
              >
                Optimus
              </Text>
            </Container>
          </Container>
        </Container>
      </ScrollView>
    </Container>
  );
};
export default NUBAN;
