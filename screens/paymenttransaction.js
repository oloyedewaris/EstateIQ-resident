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
import Setting from "../component/settingbutton";

const Paymentstransaction = (props) => {
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
          onPress={() => props.navigation.goBack()}
        >
          <AntDesign name="left" size={15} color="black" />
          <Text style={{ color: "black", paddingLeft: 5 }}>Back</Text>
        </TouchableOpacity>
        <Container marginTop={2} marginLeft={5}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Payment Transactions
          </Text>
        </Container>

        <Container
          height={5}
          width={90}
          verticalAlignment="center"
          marginLeft={5}
          marginTop={5}
        >
          <TextInput
            style={{
              height: "100%",
              width: "90%",
              borderWidth: 1,
              borderColor: Colors.appInactiveGrey,
              borderRadius: 5,
              paddingLeft: 15,
            }}
            placeholder="Search Name, Amount"
          ></TextInput>
        </Container>

        <Container
          width={90}
          height={13}
          backgroundColor={Colors.appInactiveGrey}
          borderRadius={7}
          marginLeft={5}
          marginTop={5}
        >
          <Container direction="row">
            <Container width={45} height={6} verticalAlignment="center">
              <Text
                style={{ fontWeight: "bold", fontSize: 16, paddingLeft: "10%" }}
              >
                Electricity
              </Text>
            </Container>
            <Container width={45} height={6} verticalAlignment="center">
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  paddingLeft: "10%",
                  color: "silver",
                  paddingLeft: "10%",
                }}
              >
                09/23 | 06:00PM
              </Text>
            </Container>
          </Container>
          <Container direction="row">
            <Container width={45} height={6} verticalAlignment="center">
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  paddingLeft: "10%",
                  color: "green",
                }}
              >
                Success
              </Text>
            </Container>
            <Container width={45} height={6} verticalAlignment="center">
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  paddingLeft: "10%",
                  color: Colors.appPrimaryBlue,
                  paddingLeft: "10%",
                }}
              >
                NGN 5,000.00
              </Text>
            </Container>
          </Container>
        </Container>

        <Container
          width={90}
          height={13}
          backgroundColor={Colors.appInactiveGrey}
          borderRadius={7}
          marginLeft={5}
          marginTop={3}
        >
          <Container direction="row">
            <Container width={45} height={6} verticalAlignment="center">
              <Text
                style={{ fontWeight: "bold", fontSize: 16, paddingLeft: "10%" }}
              >
                Waste Bill
              </Text>
            </Container>
            <Container width={45} height={6} verticalAlignment="center">
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  paddingLeft: "10%",
                  color: "silver",
                  paddingLeft: "10%",
                }}
              >
                09/23 I 01:00 PM
              </Text>
            </Container>
          </Container>
          <Container direction="row">
            <Container width={45} height={6} verticalAlignment="center">
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  paddingLeft: "10%",
                  color: "red",
                }}
              >
                Failed
              </Text>
            </Container>
            <Container width={45} height={6} verticalAlignment="center">
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  paddingLeft: "10%",
                  color: Colors.appPrimaryBlue,
                  paddingLeft: "10%",
                }}
              >
                NGN 2,000.00
              </Text>
            </Container>
          </Container>
        </Container>

        <Container
          width={90}
          height={13}
          backgroundColor={Colors.appInactiveGrey}
          borderRadius={7}
          marginLeft={5}
          marginTop={3}
        >
          <Container direction="row">
            <Container width={45} height={6} verticalAlignment="center">
              <Text
                style={{ fontWeight: "bold", fontSize: 16, paddingLeft: "10%" }}
              >
                Electricity
              </Text>
            </Container>
            <Container width={45} height={6} verticalAlignment="center">
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  paddingLeft: "10%",
                  color: "silver",
                  paddingLeft: "10%",
                }}
              >
                09/23 I 06:00 PM
              </Text>
            </Container>
          </Container>
          <Container direction="row">
            <Container width={45} height={6} verticalAlignment="center">
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  paddingLeft: "10%",
                  color: "green",
                }}
              >
                Success
              </Text>
            </Container>
            <Container width={45} height={6} verticalAlignment="center">
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  paddingLeft: "10%",
                  color: Colors.appPrimaryBlue,
                  paddingLeft: "10%",
                }}
              >
                NGN 5,000.00
              </Text>
            </Container>
          </Container>
        </Container>

        <Container
          width={90}
          height={13}
          backgroundColor={Colors.appInactiveGrey}
          borderRadius={7}
          marginLeft={5}
          marginTop={3}
        >
          <Container direction="row">
            <Container width={45} height={6} verticalAlignment="center">
              <Text
                style={{ fontWeight: "bold", fontSize: 16, paddingLeft: "10%" }}
              >
                Waste Bill
              </Text>
            </Container>
            <Container width={45} height={6} verticalAlignment="center">
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  paddingLeft: "10%",
                  color: "silver",
                  paddingLeft: "10%",
                }}
              >
                09/23 I 01:00 PM
              </Text>
            </Container>
          </Container>
          <Container direction="row">
            <Container width={45} height={6} verticalAlignment="center">
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  paddingLeft: "10%",
                  color: "red",
                }}
              >
                Failed
              </Text>
            </Container>
            <Container width={45} height={6} verticalAlignment="center">
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  paddingLeft: "10%",
                  color: Colors.appPrimaryBlue,
                  paddingLeft: "10%",
                }}
              >
                NGN 2,000.00
              </Text>
            </Container>
          </Container>
        </Container>

        <Container
          width={90}
          height={13}
          backgroundColor={Colors.appInactiveGrey}
          borderRadius={7}
          marginLeft={5}
          marginTop={3}
          marginBottom={5}
        >
          <Container direction="row">
            <Container width={45} height={6} verticalAlignment="center">
              <Text
                style={{ fontWeight: "bold", fontSize: 16, paddingLeft: "10%" }}
              >
                Electricity
              </Text>
            </Container>
            <Container width={45} height={6} verticalAlignment="center">
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  paddingLeft: "10%",
                  color: "silver",
                  paddingLeft: "10%",
                }}
              >
                09/23 I 06:00 PM
              </Text>
            </Container>
          </Container>
          <Container direction="row">
            <Container width={45} height={6} verticalAlignment="center">
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  paddingLeft: "10%",
                  color: "green",
                }}
              >
                Success
              </Text>
            </Container>
            <Container width={45} height={6} verticalAlignment="center">
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  paddingLeft: "10%",
                  color: Colors.appPrimaryBlue,
                  paddingLeft: "10%",
                }}
              >
                NGN 5,000.00
              </Text>
            </Container>
          </Container>
        </Container>
      </ScrollView>
    </Container>
  );
};
export default Paymentstransaction;
