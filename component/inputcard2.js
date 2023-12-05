


import {
    StyleSheet,
    Text,
    View,
    Modal,
    KeyboardAvoidingView,
    TextInput,
  } from "react-native";
  
  import { Container, ImageWrap, TouchWrap, } from "../helper";
  import moment from 'moment';
  import DateTimePicker from '@react-native-community/datetimepicker';
  import { MaterialIcons } from "@expo/vector-icons";
  import { useState } from "react";
  import { MaterialCommunityIcons } from "@expo/vector-icons";
  import { Ionicons } from "@expo/vector-icons";
  import Modalbutton from "../component/modalButton";
  import { AntDesign } from '@expo/vector-icons';
  // import { Colors } from "react-native/Libraries/NewAppScreen";
  import { Colors, FONT_FAMILY, RH, RW, RF, RR } from "../helper/constants";
  
  
  export default function InputCard2(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalSeen, setModalSeen] = useState(false);
    const keyboardVerticalOffset = Platform.OS === "ios" ? 150 : 10;
    const [reminder, SetReminder] = useState();
  
    return (
      <Container direction="row" marginTop={4}>
       <Container width={90} marginLeft={5}>
        <Text>
          {props.text}
        </Text>
        <Container width={100} direction="row">
        <TextInput style={{height:45, width:'90%', backgroundColor:'#D9D9D9', borderRadius:5, paddingLeft:10}} placeholder={props.placeholder}>
  
        </TextInput>
  <TouchWrap>
    <Container height={6} width={7} marginLeft={-8} verticalAlignment="center" horizontalAlignment="center">
    <AntDesign name="down" size={20} color={'#9E9E9E'} />
    </Container>
  </TouchWrap>
        </Container>
       </Container>
      </Container>
    );
  }