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
import LongButton from "../component/longbutton";

import { AntDesign } from "@expo/vector-icons";
import { Colors, FONT_FAMILY, RH, RW, RF, RR } from "../helper/constants";

const PaymentsDetails = (props) => {
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
            Order Summary
          </Text>
        </Container>

        <Container
          height={5}
          width={90}
          verticalAlignment="center"
          marginLeft={5}
        >
          <Text
            style={{
              fontSize: 14,
              color: Colors.appTextGrey,
            }}
          >
            Kindly confirm your payment
          </Text>
        </Container>

        <Container height={10} width={90} marginLeft={5} marginTop={3}>
          <Container height={5} width={90} verticalAlignment="center">
            <Text
              style={{
                fontSize: 14,
                color: Colors.appTextGrey,
              }}
            >
              Meter Number
            </Text>
          </Container>
          <Container height={5} width={90} verticalAlignment="center">
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>4387980879</Text>
          </Container>
        </Container>

        <Container height={10} width={90} marginLeft={5}>
          <Container height={5} width={90} verticalAlignment="center">
            <Text
              style={{
                fontSize: 14,
                color: Colors.appTextGrey,
              }}
            >
              Name
            </Text>
          </Container>
          <Container height={5} width={90} verticalAlignment="center">
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>John James</Text>
          </Container>
        </Container>

        <Container height={10} width={90} marginLeft={5}>
          <Container height={5} width={90} verticalAlignment="center">
            <Text
              style={{
                fontSize: 14,
                color: Colors.appTextGrey,
              }}
            >
              Address
            </Text>
          </Container>
          <Container width={90} verticalAlignment="center">
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              7B EZEKUSE CLOSE, ADMIRALTY LEKKI PHASE 1
            </Text>
          </Container>
        </Container>

        <Container height={10} width={90} marginLeft={5} marginTop={3}>
          <Container height={5} width={90} verticalAlignment="center">
            <Text
              style={{
                fontSize: 14,
                color: Colors.appTextGrey,
              }}
            >
              Phone Number
            </Text>
          </Container>
          <Container height={5} width={90} verticalAlignment="center">
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              09088708236
            </Text>
          </Container>
        </Container>

        <Container height={10} width={90} marginLeft={5}>
          <Container height={5} width={90} verticalAlignment="center">
            <Text
              style={{
                fontSize: 14,
                color: Colors.appTextGrey,
              }}
            >
              Amount
            </Text>
          </Container>
          <Container height={5} width={90} verticalAlignment="center">
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              NGN 10,000.00
            </Text>
          </Container>
        </Container>

        <Container height={10} width={90} marginLeft={5}>
          <Container height={5} width={90} verticalAlignment="center">
            <Text
              style={{
                fontSize: 14,
                color: Colors.appTextGrey,
              }}
            >
              Service Charge
            </Text>
          </Container>
          <Container height={5} width={90} verticalAlignment="center">
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>NGN 100.00</Text>
          </Container>
        </Container>

        <Container height={10} width={90} marginLeft={5}>
          <Container height={5} width={90} verticalAlignment="center">
            <Text
              style={{
                fontSize: 14,
                color: Colors.appTextGrey,
              }}
            >
              Total
            </Text>
          </Container>
          <Container height={5} width={90} verticalAlignment="center">
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              NGN 10,100.00
            </Text>
          </Container>
        </Container>
        <Container horizontalAlignment="center" marginTop={5}>
          <LongButton
            text={"Pay N10,100"}
            onPress={() => props.navigation.navigate("cardpayment")}
          />
        </Container>
        <Container
          width={70}
          horizontalAlignment="center"
          marginLeft={15}
          marginBottom={10}
          marginTop={3}
          verticalAlignment="center"
        >
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            By clicking pay
            <Text style={{ fontWeight: "bold" }}> N10,00</Text>, you agree to
            the Service Charge above and to our
            <Text style={{ color: Colors.appPrimaryBlue, fontWeight: "bold" }}>
              {" "}
              Terms and Condition
            </Text>
          </Text>
        </Container>
      </ScrollView>
    </Container>
  );
};
export default PaymentsDetails;
