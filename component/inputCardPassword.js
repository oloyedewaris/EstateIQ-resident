import {
  StyleSheet,
  Text,
  View,
  Modal,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";

import { Container, ImageWrap, TouchWrap } from "../helper";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function InputCardPassword({ error, text, placeholder, editable, ...rest }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSeen, setModalSeen] = useState(false);
  const keyboardVerticalOffset = Platform.OS === "ios" ? 150 : 10;
  const [reminder, SetReminder] = useState();
  const [hide, setHide] = useState(true);

  return (
    <Container direction="row" marginTop={2} marginLeft={5}>
      <Container width={90}>
        <Container marginBottom={1}>
          <Text>{text}</Text>
        </Container>
        <Container width={100} direction="row">
          <TextInput
            style={{
              height: 45,
              width: "85%",
              borderRadius: 2,
              paddingLeft: 10,
              borderColor: error ? "#D00000" : "#D9D9D9",
              borderWidth: 1,
            }}
            placeholder={placeholder}
            secureTextEntry={hide}
            {...rest}
          />
          <TouchWrap hitSlop={{ bottom: 10, right: 10, left: 10, top: 10 }} onPress={() => setHide(!hide)}>
            <Container
              height={6}
              width={8}
              marginLeft={-9}
              verticalAlignment="center"
              horizontalAlignment="center"
            >
              {!hide ? (
                <Ionicons
                  name="ios-eye-outline"
                  size={20}
                  color="#757575"
                />
              ) : (
                <Ionicons
                  name="ios-eye-off-outline"
                  size={20}
                  color="black"
                />
              )}
            </Container>
          </TouchWrap>
        </Container>
        {error && <Text style={{ fontSize: 10, color: '#D00000', fontWeight: '300' }}>{error}</Text>}
      </Container>
    </Container>
  );
}
