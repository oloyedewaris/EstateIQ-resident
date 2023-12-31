import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { Container, ImageWrap, TouchWrap } from "../../helper/index";
import { AppIcons } from "../../helper/images";
import { useState, useEffect, useCallback } from "react";
import LongButton from "../../component/longbutton";
import { Colors } from "../../helper/constants";
import { useFocusEffect } from "@react-navigation/native";
const { width } = Dimensions.get("window");

const Intro4 = (props) => {
  // useFocusEffect(
  //   useCallback(() => {
  //     const timeoutID = setTimeout(() => props.navigation.navigate("login"), 4000);

  //     return () => {
  //       clearTimeout(timeoutID);
  //     };
  //   }, [])
  // )

  return (
    <Container
      flex={1}
      backgroundColor={"#FFFFFF"}
      horizontalAlignment="center"
    >
      <Container height={50} width={100}>
        <Image
          source={AppIcons.intro4}
          fit="contain"
          style={{ height: "100%", width: "100%" }}
        />
      </Container>
      <Container width={55} height={5} marginTop={3}>
        <ImageWrap source={AppIcons.loads} fit="contain" />
      </Container>
      <Container width={72} height={3} marginTop={3}>
        <ImageWrap source={AppIcons.safe} fit="contain" />
      </Container>
      <Container
        width={90}
        horizontalAlignment="center"
        verticalAlignment="center"
        marginTop={3}
      >
        <Text
          style={{
            color: "black",
            fontSize: 16,

            textAlign: "center",
          }}
        >
          Estate managers can support and strengthen their security architecture
          with EstateIQ.
        </Text>
      </Container>
      <Container marginTop={5}>
        <LongButton
          text={"Create Account"}
          onPress={() => props.navigation.navigate("signup")}
        />
      </Container>

      <Container marginTop={3}>
        <Container width={85}>
          <TouchableOpacity
            style={{
              height: 40,
              width: "100%",
              borderRadius: 7,
              paddingLeft: 10,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: Colors.appPrimaryBlue,
            }}
            onPress={() => props.navigation.navigate("login")}
          >
            <Text style={{ color: Colors.appPrimaryBlue, fontSize: 16 }}>
              Sign in
            </Text>
          </TouchableOpacity>
        </Container>
      </Container>
      <StatusBar style="auto" />
    </Container>
  );
};
export default Intro4;
