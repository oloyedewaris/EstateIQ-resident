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
import { fetchAdverts } from "../api/advert";

const DiscountedMarketplace = (props) => {
  const marketplaceQuery = useQuery(['fetchMarketplace'], fetchAdverts);
  const marketplaceData = marketplaceQuery?.data?.data?.results;


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
            Discounted Marketplace
          </Text>
        </Container>
        <Container marginLeft={5} marginTop={2}>
          <Text style={{ fontSize: 15, color: Colors.appTextGrey }}>
            You get discounted product and service here
          </Text>
        </Container>

        {marketplaceQuery.isLoading ? (
          <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator color={Colors.appPrimaryBlue} size='large' />
          </View>
        ) : !marketplaceData?.length ? (
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
            {marketplaceData?.map((advert, i) => (
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
export default DiscountedMarketplace;
