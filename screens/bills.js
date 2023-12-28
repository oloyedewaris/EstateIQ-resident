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
  Alert,
} from "react-native";
import { Container, ImageWrap, TouchWrap } from "../helper/index";
import { AppIcons } from "../helper/images";

import { useState } from "react";

import { AntDesign } from "@expo/vector-icons";
import { Colors, FONT_FAMILY, RH, RW, RF, RR } from "../helper/constants";

const Bills = (props) => {
  const keyboardVerticalOffset = Platform.OS === "ios" ? 150 : 0;
  const [modalVisible, setModalVisible] = useState(false);
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
          onPress={() => props.navigation.goBack()}
        >
          <AntDesign name="left" size={15} color="black" />
          <Text style={{ color: "black", paddingLeft: 5 }}>Back</Text>
        </TouchableOpacity>
        <Container marginTop={2} marginLeft={5}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Bills & Payment
          </Text>
        </Container>
        <Container marginTop={2} marginLeft={5}>
          <Text style={{ fontSize: 15, color: Colors.appTextGrey }}>
            Select your preferred option
          </Text>
        </Container>
        {/* <Container
          height={10}
          width={90}
          marginLeft={5}
          marginTop={5}
          verticalAlignment="center"
          direction="row"
          elevation={5}
          backgroundColor={"white"}
          borderRadius={10}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => props.navigation.navigate("electricity")}
          >
            <Container width={10} height={5} borderRadius={50} marginLeft={3}>
              <ImageWrap source={AppIcons.mm} fit="contain" />
            </Container>
            <Container width={60} height={10} marginLeft={3}>
              <Container
                width={67}
                height={5}
                verticalAlignment="center"
                marginTop={1}
              >
                <Text
                  style={{ color: "black", fontSize: 15, fontWeight: "bold" }}
                >
                  Purchase Utilities
                </Text>
              </Container>
              <Container verticalAlignment="center" width={67}>
                <Text
                  style={{
                    color: Colors.appTextGrey,
                    fontSize: 12,
                  }}
                >
                  electricity, gas refill, internet, water, adverts
                </Text>
              </Container>
            </Container>
          </TouchableOpacity>
        </Container> */}

        <Container
          height={10}
          width={90}
          marginLeft={5}
          marginTop={5}
          verticalAlignment="center"
          direction="row"
          elevation={5}
          backgroundColor={"white"}
          borderRadius={10}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            // onPress={() => props.navigation.navigate("communitylogs")}
            onPress={() => Alert.alert('Error', 'This feature is not available on your package')}
          >
            <Container width={10} height={5} borderRadius={50} marginLeft={3}>
              <ImageWrap source={AppIcons.mm} fit="contain" />
            </Container>
            <Container width={60} height={10} marginLeft={3}>
              <Container width={67} height={5} verticalAlignment="center">
                <Text
                  style={{ color: "black", fontSize: 15, fontWeight: "bold" }}
                >
                  Pay Community Bills
                </Text>
              </Container>
              <Container verticalAlignment="center" width={70}>
                <Text
                  style={{
                    color: Colors.appTextGrey,
                    fontSize: 12,
                  }}
                >
                  pay estate dues, waste, service charge, recreational
                </Text>
              </Container>
            </Container>
          </TouchableOpacity>
        </Container>

        <Container
          height={10}
          width={90}
          marginLeft={5}
          marginTop={5}
          verticalAlignment="center"
          direction="row"
          elevation={5}
          backgroundColor={"white"}
          borderRadius={10}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => Alert.alert('Error', 'This feature is not available on your package')}
          // onPress={() => props.navigation.navigate("paymenttransaction")}
          >
            <Container width={10} height={5} borderRadius={50} marginLeft={3}>
              <ImageWrap source={AppIcons.mm} fit="contain" />
            </Container>
            <Container width={60} height={10} marginLeft={3}>
              <Container
                width={67}
                height={5}
                verticalAlignment="center"
                marginTop={1}
              >
                <Text
                  style={{ color: "black", fontSize: 15, fontWeight: "bold" }}
                >
                  Payment Transactions
                </Text>
              </Container>
              <Container verticalAlignment="center" width={67}>
                <Text
                  style={{
                    color: Colors.appTextGrey,
                    fontSize: 12,
                  }}
                >
                  View all old and recent transactions
                </Text>
              </Container>
            </Container>
          </TouchableOpacity>
        </Container>
        <Container
          height={10}
          width={90}
          marginLeft={5}
          marginTop={5}
          verticalAlignment="center"
          direction="row"
          elevation={5}
          backgroundColor={"white"}
          borderRadius={10}
          marginBottom={3}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            // onPress={() => props.navigation.navigate("nubanacct")}
            onPress={() => Alert.alert('Error', 'This feature is not available on your package')}
          >
            <Container width={10} height={5} borderRadius={50} marginLeft={3}>
              <ImageWrap source={AppIcons.mm} fit="contain" />
            </Container>
            <Container width={60} height={10} marginLeft={3}>
              <Container
                width={67}
                height={5}
                verticalAlignment="center"
                marginTop={1}
              >
                <Text
                  style={{ color: "black", fontSize: 15, fontWeight: "bold" }}
                >
                  View Virtual Accounts
                </Text>
              </Container>
              <Container verticalAlignment="center" width={70}>
                <Text
                  style={{
                    color: Colors.appTextGrey,
                    fontSize: 12,
                  }}
                >
                  View registered account details{" "}
                </Text>
              </Container>
            </Container>
          </TouchableOpacity>
        </Container>
      </ScrollView>
    </Container>
  );
};
export default Bills;
