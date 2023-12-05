import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import { Container, ImageWrap, TouchWrap } from "../helper/index";
import { AppIcons } from "../helper/images";

import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import LongButton from "../component/longbutton";

import { AntDesign } from "@expo/vector-icons";
import { Colors, FONT_FAMILY, RH, RW, RF, RR } from "../helper/constants";

const Transfer = ({ navigation }) => {
  const keyboardVerticalOffset = Platform.OS === "ios" ? 150 : 0;
  const [modalVisible, setModalVisible] = useState(false);
  const [isSelected, setSelection] = useState(true);
  return (
    <Container flex={1} backgroundColor={"#FFFFFF"}>
      <ScrollView>
        <TouchableOpacity
          style={{
            marginTop: "11%",
            marginLeft: "5%",
            flexDirection: "row",
            height: 20,
            width: 100,

            alignItems: "center",
          }}
          onPress={() => navigation.navigate("electricity")}
        >
          <AntDesign name="left" size={15} color="black" />
          <Text style={{ color: "black", paddingLeft: 5 }}>Back</Text>
        </TouchableOpacity>
        <Container marginTop={2} marginLeft={5}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Pay with Bank Transfer
          </Text>
        </Container>

        <Container
          height={10}
          width={90}
          verticalAlignment="center"
          marginLeft={5}
        >
          <Text
            style={{
              fontSize: 14,
              color: Colors.appTextGrey,
            }}
          >
            By selecting Bank Transfer option, you agree to make an Internet
            Transfer as payment for your transaction
          </Text>
        </Container>

        <TouchableOpacity
          style={{
            width: "90%",
            height: "5%",
            borderRadius: 5,
            marginLeft: "5%",
            marginTop: "10%",
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => setSelection(!isSelected)}
        >
          {isSelected ? (
            <Container
              width={6}
              height={3}
              borderRadius={2}
              borderColor={Colors.appPrimaryBlue}
              borderWidth={2}
            ></Container>
          ) : (
            <Feather
              name="check-square"
              size={24}
              color={Colors.appPrimaryBlue}
            />
          )}
          <Container direction="row" height={3} verticalAlignment="center">
            <Text style={{ paddingLeft: 5 }}>
              Click to accept Bank Transfer terms
            </Text>
          </Container>
        </TouchableOpacity>

        <Container
          direction="row"
          width={90}
          height={5}
          marginTop={5}
          marginLeft={5}
          verticalAlignment="center"
        >
          <Container>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>
              Bank: Optimus
            </Text>
          </Container>
        </Container>

        <Container
          direction="row"
          width={90}
          height={5}
          marginTop={5}
          marginLeft={5}
          verticalAlignment="center"
        >
          <Container>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>
              Name: EstateIQ
            </Text>
          </Container>
        </Container>

        <Container
          direction="row"
          width={90}
          height={5}
          marginTop={5}
          marginLeft={5}
          verticalAlignment="center"
        >
          <Container>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>
              Account Number: 8098800088
            </Text>
          </Container>
        </Container>

        <Container
          direction="row"
          width={90}
          height={5}
          marginTop={5}
          marginLeft={5}
          verticalAlignment="center"
        >
          <Container>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>
              Amount: NGN10,100.00
            </Text>
          </Container>
        </Container>

        <Container horizontalAlignment="center" marginTop={5} marginBottom={2}>
          <LongButton
            text={"Pay N10,100"}
            onPress={() => setModalVisible(true)}
          />
        </Container>
      </ScrollView>
      <Modal animationType="slide" visible={modalVisible} transparent>
        <Container flex={1} horizontalAlignment="center">
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
            width={100}
            verticalAlignment="center"
            direction="row"
            marginLeft={25}
          >
            <Text
              style={{
                color: "black",
                fontSize: 16,

                textAlign: "center",
              }}
            >
              The payment for electricity token was successful.
            </Text>
            <Container height={6} width={6} marginTop={2} marginLeft={-25}>
              <ImageWrap source={AppIcons.hands} fit="contain" />
            </Container>
          </Container>

          <Container marginTop={5}>
            <LongButton
              text={"Go back to bills & payment"}
              onPress={() => navigation.navigate("bills")}
            />
          </Container>
        </Container>
      </Modal>
    </Container>
  );
};
export default Transfer;
