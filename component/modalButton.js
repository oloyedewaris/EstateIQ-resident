// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal } from "react-native";
// import { Button } from './helper/element';
import { Container, ImageWrap, TouchWrap } from "../helper";
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { AppIcons } from './helper/images';
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Modalbutton(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSeen, setModalSeen] = useState(false);

  return (
    <TouchWrap onPress={props.onPress}>
      <Container
        backgroundColor={props.color}
        height={5}
        width={30}
        borderRadius={8}
        verticalAlignment="center"
        horizontalAlignment="center"
      >
        <Text style={{ color: "white", fontSize: 13, fontWeight: "bold" }}>
          {props.text}
        </Text>
      </Container>
    </TouchWrap>
  );
}
