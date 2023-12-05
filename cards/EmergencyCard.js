import {
  Text,
  Image,
  Linking,
} from "react-native";
import { Container, ImageWrap, TouchWrap } from "../helper/index";
import { AppIcons } from "../helper/images";
import { Colors } from "../helper/constants";
import { formattedDateToUse } from "../utils/formatDate";

const EmergencyCard = ({ emergency }) => {

  return (
    <Container
      borderWidth={1}
      borderColor={Colors.appPrimaryBlue}
      borderRadius={10}
      marginTop={3}
      paddingHorizontal={4}
      paddingVertical={4}
    >

      <Container
        direction="row" verticalAlignment="center"
        marginTop={emergency?.estate_user?.profile_image ? 0 : -2}
      >
        <Container verticalAlignment="center" >
          <Text
            style={{
              fontWeight: "700",
              fontSize: 16,
            }}
          >
            {emergency?.title}
          </Text>
          <Text
            style={{
              marginTop: 7,
              fontWeight: "400",
              fontSize: 12,
            }}
          >
            {emergency?.description}
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontWeight: "300",
              fontSize: 12,
            }}
          >
            Address: {emergency?.address}
          </Text>
        </Container>
      </Container>


      <Container
        verticalAlignment="flex-end"
        direction="row"
        horizontalAlignment="space-between"
        marginTop={2}
      >
        <Container
          // verticalAlignment="center"
          direction="column"
          // horizontalAlignment="center"
          marginTop={2}
        >
          <Text
            style={{
              marginVertical: 12,
              fontWeight: "400",
              fontSize: 14,
            }}
          >
            {emergency?.contact_phone}
          </Text>

          <Text
            style={{
              fontWeight: "400",
              fontSize: 14,
              color: "#616161",
            }}
          >
            {emergency?.contact_email}
          </Text>
        </Container>

        <Container
          verticalAlignment="center"
          direction="row"
          horizontalAlignment="center"
        >
          <TouchWrap onPress={() => Linking.openURL(`mailto:${emergency?.contact_email}`)}>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 14,
                color: "#1037B5",
              }}
            >
              Mail
            </Text>
          </TouchWrap>
          <TouchWrap onPress={() => Linking.openURL(`tel:${emergency?.contact_phone}`)}>
            <Text
              style={{
                marginLeft: 15,
                fontWeight: "500",
                fontSize: 14,
                color: "green",
              }}
            >
              Call
            </Text>
          </TouchWrap>
        </Container>
      </Container>
    </Container>
  );
};
export default EmergencyCard;
