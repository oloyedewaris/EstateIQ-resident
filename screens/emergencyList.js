import {
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from "react-native";
import { Container, ImageWrap, TouchWrap } from "../helper/index";
import EmergencyContactData from "../utils/emergencyDetails";
import EmergencyCard from "../cards/EmergencyCard";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useQuery } from "react-query";
import { fetchEmergency } from "../api/emergency";
import { AppIcons } from "../helper/images";
import { Colors } from "../helper/constants";

const EmergencyList = (props) => {
  const route = useRoute()
  const emergencyQuery = useQuery(['fetchEmergency'], fetchEmergency)
  const emergencyData = emergencyQuery?.data?.data?.results
  const sortedEmergency = emergencyData && emergencyData.filter(emerg => emerg.type === route?.params?.type)

  return (
    <Container flex={1} backgroundColor={"#FFFFFF"}>
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

      <Container paddingHorizontal={8} marginTop={2}>
        <Text style={{ fontWeight: "500", fontSize: 16, marginTop: 10 }}>
          Emergency List
        </Text>

        <Text
          style={{
            fontWeight: "400",
            fontSize: 15,
            marginTop: 20,
            color: "#616161",
          }}
        >
          List of emergency services avilable and their contacts
        </Text>
      </Container>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Container paddingHorizontal={8} marginBottom={10}>

          {emergencyQuery.isLoading ? (
            <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator color={Colors.appPrimaryBlue} size='large'/>
            </View>
          ) : !sortedEmergency?.length ? (
            <>
              <Container height={40} width={80}>
                <ImageWrap source={AppIcons.lists} fit="contain" />
              </Container>
              <Container>
                <Text style={{ fontWeight: "bold", fontSize: 16, textAlign: "center" }}>
                  No emergency contact yet!
                </Text>
              </Container>
            </>
          ) : (
            <>
              {sortedEmergency?.map((emergency, i) => (
                <EmergencyCard emergency={emergency} key={i} />
              ))}
            </>
          )}

        </Container>
      </ScrollView>
    </Container>
  );
};
export default EmergencyList;
