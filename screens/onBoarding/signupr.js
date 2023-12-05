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
import { Container, ImageWrap, TouchWrap } from "../../helper/index";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

import InputCard from "../../component/inputCard";
import { Colors, FONT_FAMILY, RH, RW, RF, RR } from "../../helper/constants";
import LongButton from "../../component/longbutton";

const Signup = (props) => {
  const [hide, setHide] = useState(true);
  const [hide2, setHide2] = useState(true);
  const keyboardVerticalOffset = Platform.OS === "ios" ? 150 : 0;
  return (
    <Container flex={1} backgroundColor={"#FFFFFF"}>
      <Container
        height={100}
        width={100}
        backgroundColor={Colors.appPrimaryBlue}
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
          onPress={() => props.navigation.navigate("login")}
        >
          <AntDesign name="left" size={15} color="white" />
          <Text style={{ color: "white", paddingLeft: 5 }}>Back</Text>
        </TouchableOpacity>
        <Container marginLeft={5} marginTop={3}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            Join Estate
          </Text>
        </Container>
        <Container marginLeft={4}>
          <Text style={{ color: "white", paddingLeft: 5 }}>
            Set up your account as a resident
          </Text>
        </Container>
        <ScrollView>
          <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={keyboardVerticalOffset}
          >
            <Container
              height={100}
              width={95}
              backgroundColor={"white"}
              elevation={10}
              marginTop={3}
              marginLeft={2.5}
              borderRadius={7}
            >
              <Container marginLeft={5}>
                <InputCard
                  text={"First Name"}
                  placeholder={"Enter your First name"}
                />
              </Container>
              <Container marginLeft={5}>
                <InputCard
                  text={"Last Name"}
                  placeholder={"Enter your Last Name"}
                />
              </Container>
              <Container marginLeft={5}>
                <InputCard
                  text={"Email Address"}
                  placeholder={"Enter your Email Address"}
                />
                <Container>
                  <InputCard
                    text={"Phone Number"}
                    placeholder={"Enter your Phone Number"}
                  />
                </Container>

                <Container direction="row" marginTop={2}>
                  <Container width={90}>
                    <Container marginBottom={1}>
                      <Text>Password</Text>
                    </Container>
                    <Container width={100} direction="row">
                      <TextInput
                        style={{
                          height: 45,
                          width: "85%",

                          borderRadius: 2,
                          paddingLeft: 10,
                          borderColor: "#D9D9D9",
                          borderWidth: 1,
                        }}
                        placeholder={"Enter your password"}
                        secureTextEntry={!hide}
                      ></TextInput>
                      <TouchWrap onPress={() => setHide(!hide)}>
                        <Container
                          height={6}
                          width={8}
                          marginLeft={-9}
                          verticalAlignment="center"
                          horizontalAlignment="center"
                        >
                          {hide ? (
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
                  </Container>
                </Container>

                <Container direction="row" marginTop={2}>
                  <Container width={90}>
                    <Container marginBottom={1}>
                      <Text>Confirm Password</Text>
                    </Container>
                    <Container width={100} direction="row">
                      <TextInput
                        style={{
                          height: 45,
                          width: "85%",

                          borderRadius: 2,
                          paddingLeft: 10,
                          borderColor: "#D9D9D9",
                          borderWidth: 1,
                        }}
                        placeholder={"Confirm your password"}
                        secureTextEntry={!hide2}
                      ></TextInput>
                      <TouchWrap onPress={() => setHide(!hide2)}>
                        <Container
                          height={6}
                          width={8}
                          marginLeft={-9}
                          verticalAlignment="center"
                          horizontalAlignment="center"
                        >
                          {hide2 ? (
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
                  </Container>
                </Container>
              </Container>
              <Container horizontalAlignment="center" marginTop={6}>
                <LongButton
                  text={"Next"}
                  borderWidth={3}
                  onPress={() => props.navigation.navigate("signup2")}
                />
              </Container>

              <Container
                direction="row"
                width={100}
                marginTop={2}
                horizontalAlignment="center"
              >
                <Container>
                  <Text style={{ fontSize: 15 }}>Existing User?</Text>
                </Container>
                <TouchWrap onPress={() => props.navigation.navigate("login")}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: Colors.appPrimaryBlue,
                      paddingLeft: 5,
                    }}
                  >
                    Login
                  </Text>
                </TouchWrap>
              </Container>
              {/* <Container
                width={100}
                height={20}
                backgroundColor={"red"}
                verticalAlignment="center"
                horizontalAlignment="center"
              ></Container> */}
            </Container>
          </KeyboardAvoidingView>
        </ScrollView>
      </Container>
      <StatusBar style="auto" />
    </Container>
  );
};
export default Signup;
