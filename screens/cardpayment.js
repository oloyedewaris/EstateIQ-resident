import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Container, ImageWrap, TouchWrap } from "../helper/index";

import { AntDesign } from "@expo/vector-icons";

import { useState } from "react";

import { Colors, FONT_FAMILY, RH, RW, RF, RR } from "../helper/constants";
import LongButton from "../component/longbutton";

const CardPayment = (props) => {
  const [hide, setHide] = useState(true);
  const [hide2, setHide2] = useState(true);
  const keyboardVerticalOffset = Platform.OS === "ios" ? 150 : 0;
  return (
    <Container flex={1} backgroundColor={"#FFFFFF"}>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <ScrollView>
          <View
            style={{
              height: 620,
              width: "100%",
              backgroundColor: Colors.appPrimaryBlue,
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: "11%",
                marginLeft: "5%",
                flexDirection: "row",
                height: 20,
                width: 100,

                alignItems: "center",
              }}
              onPress={() => props.navigation.navigate("paymentdetails")}
            >
              <AntDesign name="left" size={15} color="white" />
              <Text style={{ color: "white", paddingLeft: 5 }}>Back</Text>
            </TouchableOpacity>
            <Container marginLeft={5} marginTop={3}>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
              >
                Pay with Card
              </Text>
            </Container>
            <Container marginLeft={4}>
              <Text style={{ color: "white", paddingLeft: 5 }}>
                Please provide your card details
              </Text>
            </Container>
          </View>
          <View
            style={{
              height: 800,
              width: "95%",
              backgroundColor: "white",
              marginTop: "-130%",
              elevation: 10,
              marginLeft: "2.5%",
              borderRadius: 5,
            }}
          >
            <Container marginTop={5} marginLeft={5} ma>
              <Container width={90}>
                <Container width={100} direction="row">
                  <TextInput
                    style={{
                      height: 45,
                      width: "85%",

                      borderRadius: 2,
                      paddingLeft: 10,
                      borderColor: "#D9D9D9",
                      borderWidth: 1,
                    }}
                    placeholder={"Card Number"}
                    secureTextEntry={!hide}
                    placeholderTextColor={"black"}
                  ></TextInput>
                </Container>
              </Container>
            </Container>

            <Container marginTop={2} marginLeft={5} direction="row">
              <Container width={40}>
                <Container width={100}>
                  <TextInput
                    style={{
                      height: 45,
                      width: "40%",

                      borderRadius: 2,
                      paddingLeft: 10,
                      borderColor: "#D9D9D9",
                      borderWidth: 1,
                    }}
                    placeholder={"Expires MM/YY"}
                    placeholderTextColor={"black"}
                  ></TextInput>
                </Container>
              </Container>

              <Container width={40} marginLeft={5}>
                <Container width={100}>
                  <TextInput
                    style={{
                      height: 45,
                      width: "40%",

                      borderRadius: 2,
                      paddingLeft: 10,
                      borderColor: "#D9D9D9",
                      borderWidth: 1,
                    }}
                    placeholder={"CVV"}
                    secureTextEntry={!hide}
                    placeholderTextColor={"black"}
                  ></TextInput>
                </Container>
              </Container>
            </Container>

            <Container
              marginTop={10}
              horizontalAlignment="center"
              marginBottom={5}
            >
              <LongButton
                text={"Pay N10,100"}
                onPress={() => props.navigation.navigate("transfer")}
              />
            </Container>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};
export default CardPayment;
