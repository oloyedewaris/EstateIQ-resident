import React, { useState, useEffect } from "react";
import { Container, ImageWrap, TouchWrap, Text } from "../helper";

import { Colors, RF, RR, RW } from "../helper/constants";
import {
  Dimensions,
  ImageBackground,
  PixelRatio,
  SafeAreaView,
  View,
} from "react-native";
import { H1, H2, P, PL, Pr } from "../helper/element";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import { Fonts } from "../helper/fontSize";
import { Image } from "react-native";

import { AppIcons } from "../helper/images";

export const BigCard = (props) => {
  const { width, height } = Dimensions.get("window");
  return (
    <Container>
      <Container
        marginLeft={5}
        marginTop={2}
        height={42}
        borderRadius={10}
        width={90}
      >
        <Container height={20} width={90}>
          <ImageWrap fit="stretch" source={props.source} />
        </Container>
        <Container
          width={90}
          height={21}
          borderBottomLeftRadius={5}
          borderBottomRightRadius={5}
          backgroundColor={"white"}
          elevation={10}
          marginBottom={5}
          marginTop={-2}
        >
          <Container marginTop={2} marginLeft={4}>
            <Text
              style={{
                color: Colors.appPrimaryBlue,
                fontSize: 17,
                fontWeight: "bold",
              }}
            >
              {props.text1}
            </Text>
          </Container>
          <Container marginTop={2} marginLeft={4}>
            <Text
              style={{
                color: Colors.appTextGrey,
                fontSize: 14,
              }}
            >
              {props.text2}
            </Text>
          </Container>
          <TouchWrap>
            <Container
              height={5}
              width={35}
              borderRadius={5}
              backgroundColor={Colors.appPrimaryBlue}
              verticalAlignment="center"
              horizontalAlignment="center"
              marginLeft={3}
              marginTop={2}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Make an Enquiry
              </Text>
            </Container>
          </TouchWrap>
        </Container>
      </Container>
    </Container>
  );
};
export default BigCard;
