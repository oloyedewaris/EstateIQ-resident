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
} from "react-native";
import { Container, ImageWrap, TouchWrap } from "../helper/index";
import { AppIcons } from "../helper/images";

import { AntDesign } from "@expo/vector-icons";

import { useState } from "react";
// import { Colors } from "react-native/Libraries/NewAppScreen";
import InputCard from "../component/inputCard";
import { Colors, FONT_FAMILY, RH, RW, RF, RR } from "../helper/constants";

const AccessCode = (props) => {
  const [hide, setHide] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const keyboardVerticalOffset = Platform.OS === "ios" ? -40 : -40;
  return (
    <Container flex={1} backgroundColor={"#FFFFFF"}>
      <View
        style={{
          width: "100%",
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
          <AntDesign name="left" size={15} color="black" />
          <Text style={{ color: "black", paddingLeft: 5 }}>Back</Text>
        </TouchableOpacity>
        <Container marginLeft={5} marginTop={3}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
            Generate Access code
          </Text>
        </Container>
        <Container marginLeft={4} marginTop={1}>
          <Text style={{ color: "black", paddingLeft: 5 }}>
            Kindly select the type of access code you want to generate
          </Text>
        </Container>
      </View>
      <ScrollView>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("PrivateGenerateCode")}
        >
          <Container
            height={23}
            marginTop={3}
            borderRadius={12}
            borderWidth={1}
            width={90}
            marginLeft={5}
            backgroundColor={"#F2F4F6"}
            borderColor={Colors.appPrimaryBlue}
          >
            <Container height={9} width={90} direction="row">
              <Container height={10} width={45} paddingLeft={5}>
                <ImageWrap
                  source={AppIcons.private}
                  fit="contain"
                  height={10}
                  width={10}
                />
              </Container>

              <Container height={10} width={45}></Container>
            </Container>
            <Container marginLeft={5} marginTop={0}>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "black" }}
              >
                Private
              </Text>
            </Container>
            <Container marginLeft={4} marginTop={1}>
              <Text style={{ color: "black", paddingLeft: 5 }}>
                Generate access code for scheduled visits to your home
              </Text>
            </Container>
          </Container>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("BusinessGenerateCode")}
        >
          <Container
            height={23}
            marginTop={3}
            borderRadius={12}
            borderWidth={1}
            width={90}
            marginLeft={5}
            backgroundColor={"#F2F4F6"}
            borderColor={"#F5CD16"}
          >
            <Container height={9} width={90} direction="row">
              <Container height={10} width={45} paddingLeft={5}>
                <ImageWrap
                  source={AppIcons.exit}
                  fit="contain"
                  height={10}
                  width={10}
                />
              </Container>

              <Container height={10} width={45}></Container>
            </Container>
            <Container marginLeft={5} marginTop={0}>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "black" }}
              >
                Business
              </Text>
            </Container>
            <Container marginLeft={4} marginTop={1}>
              <Text style={{ color: "black", paddingLeft: 5 }}>
                Generate exit passcode for unplanned business visits to shops
                and offices within the estate
              </Text>
            </Container>
          </Container>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("WaybillGenerateCode")}
        >
          <Container
            height={23}
            marginTop={3}
            borderRadius={12}
            borderWidth={1}
            width={90}
            marginLeft={5}
            backgroundColor={"#F2F4F6"}
            borderColor={Colors.appPrimaryBlue}
          >
            <Container height={9} width={90} direction="row">
              <Container height={10} width={45} paddingLeft={5}>
                <ImageWrap
                  source={AppIcons.waybill}
                  fit="contain"
                  height={10}
                  width={10}
                />
              </Container>

              <Container height={10} width={45}></Container>
            </Container>
            <Container marginLeft={5} marginTop={0}>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "black" }}
              >
                Waybill
              </Text>
            </Container>
            <Container marginLeft={4} marginTop={1} paddingRight={5}>
              <Text style={{ color: "black", paddingLeft: 5 }}>
                Generate a waybill number for goods that require authorization
                in/out of the estate.
              </Text>
            </Container>
          </Container>
        </TouchableOpacity>
        <Container height={3}></Container>
        <Container
          height={20}
          width={90}
          marginLeft={5}
          verticalAlignment="center"
          horizontalAlignment="center"
        >
          <ImageWrap
            source={AppIcons.estate}
            fit="contain"
            height={40}
            width={40}
          />
        </Container>
      </ScrollView>
    </Container>
  );
};
export default AccessCode;
