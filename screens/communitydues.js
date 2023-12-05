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
  Modal,
} from "react-native";
import { Container, ImageWrap, TouchWrap } from "../helper/index";
import { AppIcons } from "../helper/images";

import { AntDesign } from "@expo/vector-icons";

import { useState } from "react";
// import { Colors } from "react-native/Libraries/NewAppScreen";
import InputCard from "../component/inputCard";
import { Colors, FONT_FAMILY, RH, RW, RF, RR } from "../helper/constants";
import LongButton from "../component/longbutton";

const CommunityDues = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
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
              onPress={() => props.navigation.goBack()}
            >
              <AntDesign name="left" size={15} color="white" />
              <Text style={{ color: "white", paddingLeft: 5 }}>Back</Text>
            </TouchableOpacity>
            <Container marginLeft={5} marginTop={3}>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
              >
                Estate Dues Payment
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
              <InputCard text={"Name"} placeholder={"Enter full name"} />
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
      <Modal backgroundColor={"rgba(0, 0, 0, 0.7)"} animationType="slide" visible={modalVisible} transparent>
        <Container flex={1} horizontalAlignment="center" backgroundColor={'white'}>
          <Container marginTop={25}>
            <Text
              style={{
                color: Colors.appPrimaryBlue,
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Payment Successful
            </Text>
          </Container>

          <Container
            marginTop={5}
            width={90}
            horizontalAlignment="center"
            verticalAlignment="center"
            direction="row"
          >
            <Text
              style={{
                color: "black",
                fontSize: 16,

                textAlign: "center",
              }}
            >
              Your electricity bill was successful
            </Text>
            <Container height={3} width={10}>
              <ImageWrap source={AppIcons.hands} fit="contain" />
            </Container>
          </Container>

          <Container marginTop={5}>
            <LongButton
              text={"Go back to bills & payment"}
              onPress={() => props.navigation.navigate("bills")}
            />
          </Container>
        </Container>
      </Modal>
    </Container>
  );
};
export default CommunityDues;
