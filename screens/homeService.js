import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Container, ImageWrap } from "../helper/index";
import { AppIcons } from "../helper/images";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../helper/constants";
import Vendcard from "../component/vendcard";
import { useQuery } from "react-query";
import { fetchHomeServices } from "../api/emergency";
import { useRoute } from "@react-navigation/native";

const HomeService = (props) => {
  const route = useRoute();
  const homeserviceQuery = useQuery(['fetchHomeServices'], fetchHomeServices);
  const homeserviceData = homeserviceQuery?.data?.data?.results;


  const homeserviceDetails = [
    {
      icon: AppIcons.circle1,
      id: 'AC_REPAIR',
      title: 'AC Repair',
    },
    {
      icon: AppIcons.circle2,
      id: 'CHEF',
      title: 'Chef',
    },
    {
      icon: AppIcons.circle3,
      id: 'CLEANING',
      title: 'Cleaning',
    },
    {
      icon: AppIcons.circle4,
      id: 'GARDENER',
      title: 'Gardener',
    },
    {
      icon: AppIcons.circle5,
      id: 'PLUMBER',
      title: 'Plumber',
    },
    {
      icon: AppIcons.circle5,
      id: 'SECURITY',
      title: 'Security',
    },
    {
      icon: AppIcons.circle6,
      id: 'ELECTRICIAN',
      title: 'Electrician',
    },
    {
      icon: AppIcons.circle6,
      id: 'FUMIGATION',
      title: 'Fumigation',
    },
    {
      icon: AppIcons.circle6,
      id: 'CARPENTER',
      title: 'Carpenter',
    },
    {
      icon: AppIcons.circle6,
      id: 'PAINTER',
      title: 'Painter',
    },
    {
      icon: AppIcons.circle6,
      id: 'TAILOR',
      title: 'Tailor',
    },
    {
      icon: AppIcons.circle6,
      id: 'MECHANIC',
      title: 'Mechanic',
    },
    {
      icon: AppIcons.circle6,
      id: 'BARBER',
      title: 'Barber',
    },
    {
      icon: AppIcons.circle6,
      id: 'PHOTOGRAPH',
      title: 'Photograph',
    },
  ]

  const homeserviceDetail = homeserviceDetails.find(detail => detail.id === route?.params?.type);


  const homeservice = homeserviceData && homeserviceData.filter(mar => mar.type === route?.params?.type)


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
        <Container marginVertical={3} marginLeft={5}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {homeserviceDetail?.title}
          </Text>
        </Container>

        {homeserviceQuery.isLoading ? (
          <View style={{ height: 100, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator color={Colors.appPrimaryBlue} size='large'/>
          </View>
        ) : !homeservice?.length ? (
          <>
            <Container height={40} width={100}>
              <ImageWrap source={AppIcons.lists} fit="contain" />
            </Container>
            <Container>
              <Text style={{ fontWeight: "bold", fontSize: 16, textAlign: "center" }}>
                No advert yet!
              </Text>
            </Container>
          </>
        ) : (
          <>
            {homeservice?.map((advert, i) => (
              <Vendcard
                key={advert?.id}
                id={advert.id}
                source={advert?.image}
                text1={advert?.title}
                text2={advert?.description}
                phone={advert?.phone_number}
                whatsapp={advert?.whatsapp_number}
                isWhatsapp
              />
            ))}
          </>
        )}
      </ScrollView>
    </Container>
  );
};
export default HomeService;
