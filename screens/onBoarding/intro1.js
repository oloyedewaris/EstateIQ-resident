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

const Intro1 = (props) => {

  useFocusEffect(
    useCallback(() => {
      const timeoutID = setTimeout(() => props.navigation.navigate("intro2"), 4000);

      return () => {
        clearTimeout(timeoutID);
      };
    }, [])
  )

  return (
    <Container flex={1} horizontalAlignment="center">
      <Container height={50} width={100} horizontalAlignment="center">
        <Image
          source={AppIcons.intro1}
          fit="contain"
          style={{ height: "100%", width: "100%" }}
        />
      </Container>
      <TouchableOpacity onPress={() => props.navigation.navigate("intro2")}>
        <Container width={50} height={5} marginTop={3}>
          <ImageWrap source={AppIcons.introD} fit="contain" />
        </Container>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("intro2")}>
        <Container
          width={70}
          height={3}
          marginTop={3}
          justifyContent={"center"}
          verticalAlignment="center"
        >
          <ImageWrap source={AppIcons.introC} fit="contain" />
        </Container>
      </TouchableOpacity>
      <Container
        width={85}
        horizontalAlignment="center"
        verticalAlignment="center"
        marginTop={3}
      >
        <Text
          style={{
            color: "black",
            fontSize: 15,

            textAlign: "center",
          }}
        >
          EstateIQ offers a secure & convenient way of controlling who has
          access to your estate.
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
export default Intro1;
