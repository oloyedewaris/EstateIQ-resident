import {
  StyleSheet,
  Text,
  View,
  Modal,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { Container, ImageWrap, TouchWrap } from "../helper";

import { useState } from "react";

import { Colors, RW } from "../helper/constants";

export default function LongButton({ hitSlop, np, width, borderWidth, disabled, isLoading, onPress, text, ...rest }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSeen, setModalSeen] = useState(false);
  const keyboardVerticalOffset = Platform.OS === "ios" ? 150 : 10;
  const [reminder, SetReminder] = useState();

  return (
    <Container direction="row">
      <Container width={np || 85}>
        <TouchableOpacity
          hitSlop={hitSlop}
          disabled={isLoading || disabled}
          style={{
            height: 40,
            width: RW(width) || "100%",
            backgroundColor: Colors.appPrimaryBlue,
            borderRadius: 7,
            paddingLeft: 10,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: borderWidth ? borderWidth : 0,
            borderColor: borderWidth ? "#F1CD15" : "#F1CD15",
          }}
          onPress={onPress}
          {...rest}
        >
          {isLoading ? (
            <ActivityIndicator color={'white'} />
          ) : (
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
              {text}
            </Text>
          )}
        </TouchableOpacity>
      </Container>
    </Container>
  );
}
