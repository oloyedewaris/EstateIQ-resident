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
import { fetchMarketplace } from "../api/emergency";
import { useRoute } from "@react-navigation/native";

const Marketplace = (props) => {
  const route = useRoute()
  const marketplaceQuery = useQuery(['fetchMarketplace'], fetchMarketplace)
  const marketplaceData = marketplaceQuery?.data?.data?.results

  const marketplaceDetails = [
    {
      icon: AppIcons.circle1,
      id: 'GROCERIES_SHOPPING',
      title: 'Groceries',
      desc: `Affordable, wholesome food, fruits, and vegetables & lots more from sellers who have their ears to the ground and know their onions!`
    },
    {
      icon: AppIcons.circle2,
      id: 'HEALTH_AND_WELLNESS',
      title: 'Health & Wellness',
      desc: `Elevate your wellness journey with our premium range of services from our partners.`
    },
    {
      icon: AppIcons.circle3,
      id: 'REAL_ESTATE',
      title: 'Real Estate',
      desc: `Enjoy exclusive discounts on rentals and sales from our partners when you use our privilege codes!`
    },
    {
      icon: AppIcons.circle4,
      id: 'FASHION',
      title: 'Fashion & Lifestyle',
      desc: `Fashion & Lifestyle Get as much as a 30% discount on bestselling brands and other benefits like free delivery when you use our privilege codes!`
    },
    {
      icon: AppIcons.circle5,
      id: 'AUTOMOBILE',
      title: 'AutoMobile',
      desc: `Rental services that cover airport shuttle, parking, and diagnosis.`
    },
    {
      icon: AppIcons.circle6,
      id: 'DELIVERY',
      title: 'Delivery',
      desc: `Get as much as a 10% discount. For courier services, same-day delivery, to and from anywhere in Lagos when you use our partners`
    },
  ]

  const marketplaceDetail = marketplaceDetails.find(detail => detail.id === route?.params?.type);

  const marketplace = marketplaceData && marketplaceData.filter(mar => mar.type === route?.params?.type)


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
            {marketplaceDetail?.title}
          </Text>
        </Container>
        <Container marginLeft={5} marginTop={2}>
          <Text style={{ fontSize: 15, color: Colors.appTextGrey }}>
            {marketplaceDetail.desc}
          </Text>
        </Container>

        {marketplaceQuery.isLoading ? (
          <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator color={Colors.appPrimaryBlue} size='large' />
          </View>
        ) : !marketplace?.length ? (
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
            {marketplace?.map((advert, i) => (
              <Vendcard
                key={advert.id}
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
export default Marketplace;
