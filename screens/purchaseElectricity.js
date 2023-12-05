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

import InputCard from "../component/inputCard";
import { Colors, FONT_FAMILY, RH, RW, RF, RR } from "../helper/constants";
import LongButton from "../component/longbutton";

const Electricity = (props) => {
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
              onPress={() => props.navigation.navigate("bills")}
            >
              <AntDesign name="left" size={15} color="white" />
              <Text style={{ color: "white", paddingLeft: 5 }}>Back</Text>
            </TouchableOpacity>
            <Container marginLeft={5} marginTop={3}>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
              >
                Purchase Electricity
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
            <Container marginTop={1} marginLeft={5}>
              <InputCard text={"Service"} placeholder={"Select the service"} />
            </Container>
            <Container marginTop={1} marginLeft={5}>
              <InputCard
                text={"Enter meter number"}
                placeholder={"Enter your meter number"}
              />
            </Container>
            <Container marginTop={1} marginLeft={5}>
              <InputCard
                text={"Select service provider"}
                placeholder={"Disco"}
              />
            </Container>
            <Container marginTop={1} marginLeft={5}>
              <InputCard text={"Amount"} placeholder={"Enter the amount"} />
            </Container>
            <Container marginTop={1} marginLeft={5}>
              <InputCard
                text={"Select Payment Method"}
                placeholder={"Pay with card"}
              />
            </Container>

            <Container marginTop={7} horizontalAlignment="center">
              <LongButton
                text={"Submit"}
                onPress={() => props.navigation.navigate("paymentdetails")}
              />
            </Container>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};
export default Electricity;
