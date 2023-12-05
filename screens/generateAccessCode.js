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
} from "react-native";
import { Container, ImageWrap, TouchWrap } from "../helper/index";
import { AppIcons } from "../helper/images";
import { Button, Button2, ButtonM, H1 } from "../helper/element";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Foundation from "react-native-vector-icons/Foundation";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Colors, FONT_FAMILY, RH, RW, RF, RR } from "../helper/constants";
import ReportCard from "../cards/reportCard";

const GenerateAccessCode = (props) => {
  const keyboardVerticalOffset = Platform.OS === "ios" ? 150 : 0;
  return (
    <Container
      flex={1}
      backgroundColor={"#FFFFFF"}
      paddingHorizontal={8}
      horizontalAlignment="center"
    >
      <Container marginTop={7}>
        <Text style={{ fontWeight: "500", fontSize: 18, marginTop: 10 }}>
          Access Log
        </Text>

        <Text
          style={{
            fontWeight: "400",
            fontSize: 16,
            marginTop: 20,
            color: "#616161",
          }}
        >
          Turpis nulla mi et urna viverra vitae pharetra tristique fe
        </Text>
      </Container>

      <Container
        verticalAlignment="center"
        horizontalAlignment="space-between"
        marginTop={4}
        direction="row"
        backgroundColor={"#F2F4F6"}
        paddingHorizontal={8}
        paddingVertical={2}
        borderRadius={4}
        width={90}
      >
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 18,
            }}
          >
            Date
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 18,
            }}
          >
            Granted To
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 18,
            }}
          >
            Action
          </Text>
        </TouchableOpacity>
      </Container>

      <ImageWrap
        source={AppIcons.list_1}
        fit="contain"
        height={40}
        width={40}
      />

      <Text
        style={{
          fontWeight: "400",
          fontSize: 18,
        }}
      >
        You do not have any access log
      </Text>
      <Container marginTop={5}>
        <ButtonM text={"Generate"} style={{}} />
      </Container>
    </Container>
  );
};
export default GenerateAccessCode;
