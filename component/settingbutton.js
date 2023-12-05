import {
  StyleSheet,
  Text,
  View,
  Modal,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Container, ImageWrap, TouchWrap } from "../helper";
import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Colors } from "../helper/constants";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Feather } from "@expo/vector-icons";

export default function Setting(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSeen, setModalSeen] = useState(false);
  const keyboardVerticalOffset = Platform.OS === "ios" ? 150 : 10;
  const [reminder, SetReminder] = useState();

  return (
    <TouchWrap onPress={props.onPress}>
      <Container width={90} height={5} marginLeft={5} direction="row">
        <Container width={8} height={5} verticalAlignment="center">
          {props.icon}
        </Container>
        <Container width={67} height={5} verticalAlignment="center">
          <Text>{props.text}</Text>
        </Container>
        <Container
          width={15}
          height={5}
          verticalAlignment="center"
          horizontalAlignment="center"
        >
          <Feather name="chevron-right" size={24} color={Colors.appTextGrey} />
        </Container>
      </Container>
    </TouchWrap>
  );
}
