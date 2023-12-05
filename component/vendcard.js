import {
  Text,
  Linking,
  Alert,
} from "react-native";
import { Container, ImageWrap, TouchWrap } from "../helper";
import { Colors } from "../helper/constants";
import { AppIcons } from "../helper/images";

export default function Vendcard(props) {

  const LunchWhatsapp = (phone) => {
    const text = `Hello, I want to contact the vendor ${props.id}`
    const url = `whatsapp://send?phone=${+2347033221526}&text=${text}`;
    Linking.openURL(url);
    // Linking.canOpenURL(url).then((supported) => {
    //   if (supported) {
    //     Linking.openURL(url);
    //   } else {
    //     Alert.alert("Opps", "WhatsApp is not installed");
    //   }
    // });
  };

  const handleEnquiry = () => {
    if (props.isWhatsapp) {
      LunchWhatsapp(props?.whatsapp)
    } else {
      Linking.openURL(`tel:${props?.phone}`)
    }
  }

  return (
    <Container>
      <Container
        marginLeft={3}
        marginTop={1}
        padding={2}
        borderRadius={10}
        width={90}
      >
        <Container height={25} width={90}>
          <ImageWrap fit="stretch" source={props?.source ? ({ uri: props?.source }) : AppIcons.logo} />
        </Container>
        <Container
          width={90}
          padding={2}
          borderBottomLeftRadius={5}
          borderBottomRightRadius={5}
          backgroundColor={"white"}
          elevation={15}
          marginTop={-2}
        >
          <Container marginTop={2} marginLeft={4}>
            <Text
              style={{
                color: Colors.appPrimaryBlue,
                fontSize: 17,
                fontWeight: "bold",
              }}
            >
              {props.text1}
            </Text>
          </Container>
          <Container marginTop={2} marginLeft={4} width={82}>
            <Text
              style={{
                color: Colors.appTextGrey,
                fontSize: 14,
              }}
            >
              {props.text2}
            </Text>
          </Container>
          <TouchWrap onPress={props.onPress}>
            <TouchWrap onPress={handleEnquiry}>
              <Container
                height={5}
                width={35}
                borderRadius={5}
                backgroundColor={Colors.appPrimaryBlue}
                verticalAlignment="center"
                horizontalAlignment="center"
                marginLeft={3}
                marginBottom={2}
                marginTop={2}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Make an Enquiry
                </Text>
              </Container>
            </TouchWrap>
          </TouchWrap>
        </Container>
      </Container>
    </Container>
  );
}
