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
} from "react-native";
import { Container, ImageWrap, TouchWrap } from "../helper/index";
import { AppIcons } from "../helper/images";
import { Button, H1 } from "../helper/element";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Foundation from "react-native-vector-icons/Foundation";
import { Colors, FONT_FAMILY, RH, RW, RF, RR } from "../helper/constants";
import { formattedDateToUse } from "../utils/formatDate";

const ReportCard = ({ issue }) => {

  return (
    <Container
      borderWidth={1}
      borderColor={Colors.appPrimaryBlue}
      borderRadius={10}
      marginTop={3}
      paddingHorizontal={4}
      paddingVertical={1}
    >
      <Container direction="row" verticalAlignment="center" marginTop={issue?.estate_user?.profile_image ? 0 : -2}>
        {issue?.estate_user?.profile_image ? (
          <Image
            style={{ width: 50, height: 50, borderRadius: 100 }}
            source={{ uri: `https://api.estateiq.ng/${issue?.estate_user?.profile_image}` }}
            fit="contain"
          />
        ) : (
          <ImageWrap
            source={AppIcons.avatar}
            fit="contain"
            height={13}
            width={13}
          />
        )}
        <Container verticalAlignment="center" paddingLeft={2}>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 16,
            }}
          >
            {issue?.estate_user?.user?.first_name}  {issue?.estate_user?.user?.last_name}
          </Text>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 12,
            }}
          >
            {issue?.estate_user?.user_type}
          </Text>
        </Container>
      </Container>

      <Container>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 14,
          }}
        >
          {issue?.message}
        </Text>
        <Container
          verticalAlignment="center"
          direction="row"
          horizontalAlignment="space-between"
          marginTop={3}
        >
          <Text
            style={{
              fontWeight: "400",
              fontSize: 14,
              color: "#616161",
            }}
          >
            {issue?.timestamp && formattedDateToUse(issue?.timestamp)}
          </Text>

          <Text
            style={{
              fontWeight: "500",
              fontSize: 14,
              color: "#1037B5",
            }}
          >
            {issue?.status}
          </Text>
        </Container>
      </Container>
    </Container>
  );
};
export default ReportCard;
