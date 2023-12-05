import {
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Container, TouchWrap } from "../helper/index";
import { AppIcons } from "../helper/images";

import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../helper/constants";

const Emergency = (props) => {

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
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Emergency</Text>
        </Container>
        <Container marginLeft={5} marginTop={2}>
          <Text style={{ fontSize: 15, color: Colors.appTextGrey }}>
            Get urgent access to emergency services!
          </Text>
        </Container>
        <Container
          width={90}
          marginLeft={5}
          height={19}
          borderRadius={10}
          backgroundColor={Colors.appInactiveGrey}
          direction="row"
          marginTop={5}
        >
          <Container height={20} width={20}>
            <Image
              source={AppIcons.push}
              style={{ marginTop: "35%", height: "47%", width: "100%" }}
            />
          </Container>
          <Container height={20} width={70}>
            <Container height={3} marginTop={2} marginLeft={2}>
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 16 }}
              >
                Panic Button
              </Text>
            </Container>
            <Container height={8} verticalAlignment="center" marginLeft={2}>
              <Text>
                Request for help if anything happens, notify your emergency
                contact first in the case of an accident or distress.
              </Text>
            </Container>
            <Container height={5} verticalAlignment="center" marginLeft={47}>
              <TouchWrap onPress={() => props.navigation.navigate('emergencyList', { type: 'PANIC' })}>
                <Text
                  style={{ color: Colors.appPrimaryBlue, fontWeight: "bold" }}
                >
                  Click here
                </Text>
              </TouchWrap>
            </Container>
          </Container>
        </Container>

        <Container
          width={90}
          marginLeft={5}
          height={19}
          borderRadius={10}
          backgroundColor={Colors.appInactiveGrey}
          direction="row"
          marginTop={3}
        >
          <Container height={20} width={20}>
            <Image
              source={AppIcons.amb}
              style={{ marginTop: "35%", height: "47%", width: "100%" }}
            />
          </Container>
          <Container height={20} width={70}>
            <Container height={3} marginTop={2} marginLeft={2}>
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 16 }}
              >
                Ambulance
              </Text>
            </Container>
            <Container height={8} verticalAlignment="center" marginLeft={2}>
              <Text>
                urgent pre-hospital treatment and stabilization for serious
                illness and injuries and transport to proper care
              </Text>
            </Container>
            <Container height={5} verticalAlignment="center" marginLeft={47}>
              <TouchWrap onPress={() => props.navigation.navigate('emergencyList', { type: 'AMBULANCE' })}>
                <Text
                  style={{ color: Colors.appPrimaryBlue, fontWeight: "bold" }}
                >
                  Click here
                </Text>
              </TouchWrap>
            </Container>
          </Container>
        </Container>
        <Container
          width={90}
          marginLeft={5}
          height={19}
          borderRadius={10}
          backgroundColor={Colors.appInactiveGrey}
          direction="row"
          marginTop={3}
        >
          <Container height={20} width={20}>
            <Image
              source={AppIcons.bug}
              style={{ marginTop: "35%", height: "47%", width: "100%" }}
            />
          </Container>
          <Container height={20} width={70}>
            <Container height={3} marginTop={2} marginLeft={2}>
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 16 }}
              >
                Burglary
              </Text>
            </Container>
            <Container height={8} verticalAlignment="center" marginLeft={2}>
              <Text>
                report cases of illegal entering your facility, whether or not
                something is stolen.e
              </Text>
            </Container>
            <Container height={5} verticalAlignment="center" marginLeft={47}>
              <TouchWrap onPress={() => props.navigation.navigate('emergencyList', { type: 'BURGLARY' })}>
                <Text
                  style={{ color: Colors.appPrimaryBlue, fontWeight: "bold" }}
                >
                  Click here
                </Text>
              </TouchWrap>
            </Container>
          </Container>
        </Container>
        <Container
          width={90}
          marginLeft={5}
          height={19}
          borderRadius={10}
          backgroundColor={Colors.appInactiveGrey}
          direction="row"
          marginTop={3}
        >
          <Container height={20} width={20}>
            <Image
              source={AppIcons.fire}
              style={{ marginTop: "35%", height: "47%", width: "100%" }}
            />
          </Container>
          <Container height={20} width={70}>
            <Container height={3} marginTop={2} marginLeft={2}>
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 16 }}
              >
                Firefighter
              </Text>
            </Container>
            <Container height={8} verticalAlignment="center" marginLeft={2}>
              <Text>
                Request for help if anything happens, notify your emergency
                contact first in the case of an accident or distress.
              </Text>
            </Container>
            <Container height={5} verticalAlignment="center" marginLeft={47}>
              <TouchWrap onPress={() => props.navigation.navigate('emergencyList', { type: 'FIREFIGHTER' })}>
                <Text
                  style={{ color: Colors.appPrimaryBlue, fontWeight: "bold" }}
                >
                  Click here
                </Text>
              </TouchWrap>
            </Container>
          </Container>
        </Container>

        <Container
          width={90}
          marginLeft={5}
          height={19}
          borderRadius={10}
          backgroundColor={Colors.appInactiveGrey}
          direction="row"
          marginTop={3}
          marginBottom={5}
        >
          <Container height={20} width={20}>
            <Image
              source={AppIcons.dom}
              style={{ marginTop: "35%", height: "47%", width: "100%" }}
            />
          </Container>
          <Container height={20} width={70}>
            <Container height={3} marginTop={2} marginLeft={2}>
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 16 }}
              >
                Domestic Abuse
              </Text>
            </Container>
            <Container height={8} verticalAlignment="center" marginLeft={2}>
              <Text>
                Request for help if anything happens, notify your emergency
                contact first in the case of an accident or distress.
              </Text>
            </Container>
            <Container height={5} verticalAlignment="center" marginLeft={47}>
              <TouchWrap onPress={() => props.navigation.navigate('emergencyList', { type: 'DOMESTIC' })}>
                <Text
                  style={{ color: Colors.appPrimaryBlue, fontWeight: "bold" }}
                >
                  Click here
                </Text>
              </TouchWrap>
            </Container>
          </Container>
        </Container>
      </ScrollView>
    </Container>
  );
};
export default Emergency;




let EmergencyContactData = [
  {
    id: 1,
    row_number: 1,
    emergency_detail: "Glory Memorial Hospital",
    type: "Fire Service",
    address: "15163 Maywood Way",
    contact_phone: "08129094243",
    contact_email: "vcounter0@furl.net",
  },
  {
    id: 2,
    row_number: 2,
    emergency_detail: "Lagos State Fire Service",
    type: "Ambulance",
    address: "3 International Street",
    contact_phone: "07034567123",
    contact_email: "bducarne1@mysql.com",
  },
  {
    id: 3,
    row_number: 3,
    emergency_detail: "Lagos State Fire Service",
    type: "Fire Service",
    address: "8 Sugar Park",
    contact_phone: "08165623144",
    contact_email: "sdangerfield2@wordpress.com",
  },
  {
    id: 4,
    row_number: 4,
    emergency_detail: "Glory Memorial Hospital",
    type: "Ambulance",
    address: "07201 Mitchell Point",
    contact_phone: "07034567123",
    contact_email: "mseide3@rambler.ru",
  },
  {
    id: 5,
    row_number: 5,
    emergency_detail: "Glory Memorial Hospital",
    type: "Fire Service",
    address: "6504 Florence Center",
    contact_phone: "08165623144",
    contact_email: "gjudd4@pinterest.com",
  },
  {
    id: 6,
    row_number: 6,
    emergency_detail: "Glory Memorial Hospital",
    type: "Ambulance",
    address: "78 8th Way",
    contact_phone: "08165623144",
    contact_email: "jnenci5@noaa.gov",
  },
  {
    id: 7,
    row_number: 7,
    emergency_detail: "Glory Memorial Hospital",
    type: "Fire Service",
    address: "9441 Sycamore Way",
    contact_phone: "08165623144",
    contact_email: "ggennrich6@topsy.com",
  },
  {
    id: 8,
    row_number: 8,
    emergency_detail: "Glory Memorial Hospital",
    type: "Fire Service",
    address: "3 Scott Drive",
    contact_phone: "08165623144",
    contact_email: "weastwood7@examiner.com",
  },
  {
    id: 9,
    row_number: 9,
    emergency_detail: "Lagos State Fire Service",
    type: "Ambulance",
    address: "51 Dakota Alley",
    contact_phone: "07034567123",
    contact_email: "alappin8@nydailynews.com",
  },
  {
    id: 10,
    row_number: 10,
    emergency_detail: "Glory Memorial Hospital",
    type: "Fire Service",
    address: "947 Sugar Hill",
    contact_phone: "07034567123",
    contact_email: "ckording9@berkeley.edu",
  },
  {
    id: 11,
    row_number: 11,
    emergency_detail: "Lagos State Fire Service",
    type: "Ambulance",
    address: "1276 Loomis Road",
    contact_phone: "08129094243",
    contact_email: "abelleniea@answers.com",
  },
  {
    id: 12,
    row_number: 12,
    emergency_detail: "Lagos State Fire Service",
    type: "Fire Service",
    address: "95454 Evergreen Court",
    contact_phone: "08165623144",
    contact_email: "ltarquinib@disqus.com",
  },
  {
    id: 13,
    row_number: 13,
    emergency_detail: "Glory Memorial Hospital",
    type: "Ambulance",
    address: "372 Algoma Park",
    contact_phone: "08165623144",
    contact_email: "jpeersc@imdb.com",
  },
  {
    id: 14,
    row_number: 14,
    emergency_detail: "Glory Memorial Hospital",
    type: "Fire Service",
    address: "690 Anzinger Plaza",
    contact_phone: "08165623144",
    contact_email: "msamworthd@1688.com",
  },
  {
    id: 15,
    row_number: 15,
    emergency_detail: "Lagos State Fire Service",
    type: "Ambulance",
    address: "21 Redwing Junction",
    contact_phone: "08165623144",
    contact_email: "blowlee@mapquest.com",
  },
  {
    id: 16,
    row_number: 16,
    emergency_detail: "Lagos State Fire Service",
    type: "Fire Service",
    address: "6 Forster Center",
    contact_phone: "08165623144",
    contact_email: "rbenleyf@etsy.com",
  },
  {
    id: 17,
    row_number: 17,
    emergency_detail: "Lagos State Fire Service",
    type: "Fire Service",
    address: "61 Sage Drive",
    contact_phone: "08129094243",
    contact_email: "pnourseg@fc2.com",
  },
  {
    id: 18,
    row_number: 18,
    emergency_detail: "Glory Memorial Hospital",
    type: "Ambulance",
    address: "58 Twin Pines Plaza",
    contact_phone: "07034567123",
    contact_email: "rmitchenerh@homestead.com",
  },
  {
    id: 19,
    row_number: 19,
    emergency_detail: "Glory Memorial Hospital",
    type: "Ambulance",
    address: "772 Kim Circle",
    contact_phone: "08129094243",
    contact_email: "gwilksi@shop-pro.jp",
  },
  {
    id: 20,
    row_number: 20,
    emergency_detail: "Glory Memorial Hospital",
    type: "Fire Service",
    address: "34 Killdeer Court",
    contact_phone: "08165623144",
    contact_email: "galgyj@answers.com",
  },
  {
    id: 21,
    row_number: 21,
    emergency_detail: "Glory Memorial Hospital",
    type: "Fire Service",
    address: "7 Westridge Drive",
    contact_phone: "08129094243",
    contact_email: "bcaudrelierk@google.ca",
  },
  {
    id: 22,
    row_number: 22,
    emergency_detail: "Glory Memorial Hospital",
    type: "Ambulance",
    address: "15 Montana Drive",
    contact_phone: "08129094243",
    contact_email: "mlammertsl@studiopress.com",
  },
  {
    id: 23,
    row_number: 23,
    emergency_detail: "Lagos State Fire Service",
    type: "Fire Service",
    address: "402 Pond Crossing",
    contact_phone: "07034567123",
    contact_email: "sknellenm@hugedomains.com",
  },
  {
    id: 24,
    row_number: 24,
    emergency_detail: "Lagos State Fire Service",
    type: "Fire Service",
    address: "738 Crest Line Place",
    contact_phone: "08165623144",
    contact_email: "lweippertn@zimbio.com",
  },
  {
    id: 25,
    row_number: 25,
    emergency_detail: "Lagos State Fire Service",
    type: "Fire Service",
    address: "013 Sachtjen Road",
    contact_phone: "08129094243",
    contact_email: "sfalko@cbsnews.com",
  },
  {
    id: 26,
    row_number: 26,
    emergency_detail: "Lagos State Fire Service",
    type: "Fire Service",
    address: "65183 Huxley Drive",
    contact_phone: "07034567123",
    contact_email: "obendep@prnewswire.com",
  },
  {
    id: 27,
    row_number: 27,
    emergency_detail: "Lagos State Fire Service",
    type: "Ambulance",
    address: "2430 Melby Alley",
    contact_phone: "07034567123",
    contact_email: "dgiblingq@slideshare.net",
  },
  {
    id: 28,
    row_number: 28,
    emergency_detail: "Lagos State Fire Service",
    type: "Ambulance",
    address: "8 Burrows Avenue",
    contact_phone: "08129094243",
    contact_email: "jallchinr@dot.gov",
  },
  {
    id: 29,
    row_number: 29,
    emergency_detail: "Glory Memorial Hospital",
    type: "Fire Service",
    address: "63 Moland Plaza",
    contact_phone: "08129094243",
    contact_email: "fklejnas@bravesites.com",
  },
  {
    id: 30,
    row_number: 30,
    emergency_detail: "Lagos State Fire Service",
    type: "Fire Service",
    address: "49512 Kingsford Hill",
    contact_phone: "08165623144",
    contact_email: "tdoodt@thetimes.co.uk",
  },
];