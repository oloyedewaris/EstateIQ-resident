import {
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Container, ImageWrap, TouchWrap } from "../helper/index";
import { AppIcons } from "../helper/images";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../helper/constants";

const Vendor = (props) => {

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
        <Container>
          <Container marginTop={2} marginLeft={5}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Marketplace</Text>
          </Container>
          <Container marginLeft={5}>
            <Text style={{ fontSize: 15, color: Colors.appTextGrey }}>
              {" "}
              Reach out directly to advertised brands
            </Text>
          </Container>

          <Container
            width={90}
            height={15}
            marginLeft={5}
            direction="row"
            verticalAlignment="center"
            marginTop={3}
          >
            <Container height={13} width={23} horizontalAlignment="center">
              <TouchWrap onPress={() => props.navigation.navigate("marketplace", { type: 'GROCERIES_SHOPPING' })}>
                <Container width={17} height={8} borderRadius={50}>
                  <ImageWrap source={AppIcons.circle1} fit="contain" />
                  <Text style={{ fontSize: 13, color: Colors.appPrimaryBlue }}>
                    Groceries Shopping
                  </Text>
                </Container>
              </TouchWrap>
            </Container>
            <Container height={13} width={23} horizontalAlignment="center">
              <TouchWrap onPress={() => props.navigation.navigate("marketplace", { type: 'HEALTH_AND_WELLNESS' })}>
                <Container width={17} height={8} borderRadius={50}>
                  <ImageWrap source={AppIcons.circle2} fit="contain" />
                  <Text style={{ fontSize: 13, color: Colors.appPrimaryBlue }}>
                    Health & Wellness
                  </Text>
                </Container>
              </TouchWrap>
            </Container>

            <Container height={13} width={23} horizontalAlignment="center">
              <TouchWrap onPress={() => props.navigation.navigate("marketplace", { type: 'REAL_ESTATE' })}>
                <Container width={17} height={8} borderRadius={50}>
                  <ImageWrap source={AppIcons.circle3} fit="contain" />
                  <Text
                    style={{
                      fontSize: 13,
                      color: Colors.appPrimaryBlue,
                      textAlign: "center",
                    }}
                  >
                    Real Estate
                  </Text>
                </Container>
              </TouchWrap>
            </Container>
            <Container height={13} width={23} horizontalAlignment="center">
              <TouchWrap onPress={() => props.navigation.navigate("marketplace", { type: 'FASHION' })}>
                <Container width={17} height={8} borderRadius={50}>
                  <ImageWrap source={AppIcons.circle4} fit="contain" />
                  <Text
                    style={{
                      fontSize: 13,
                      color: Colors.appPrimaryBlue,
                      textAlign: "center",
                    }}
                  >
                    Fashion & Lifestyle
                  </Text>
                </Container>
              </TouchWrap>
            </Container>
          </Container>

          <Container
            width={90}
            height={15}
            marginLeft={5}
            direction="row"
            verticalAlignment="center"
          >
            <Container height={13} width={24} horizontalAlignment="center">
              <TouchWrap onPress={() => props.navigation.navigate("marketplace", { type: 'AUTOMOBILE' })}>
                <Container width={20} height={8} borderRadius={50}>
                  <ImageWrap source={AppIcons.circle5} fit="contain" />
                  <Text
                    style={{
                      fontSize: 13,
                      color: Colors.appPrimaryBlue,
                      textAlign: "center",
                    }}
                  >
                    Automobile
                  </Text>
                </Container>
              </TouchWrap>
            </Container>
            <Container height={13} width={23} horizontalAlignment="center">
              <TouchWrap onPress={() => props.navigation.navigate("marketplace", { type: 'DELIVERY' })}>
                <Container width={17} height={8} borderRadius={50}>
                  <ImageWrap source={AppIcons.circle6} fit="contain" />
                  <Text style={{ fontSize: 13, color: Colors.appPrimaryBlue }}>
                    Delivery
                  </Text>
                </Container>
              </TouchWrap>
            </Container>
          </Container>
        </Container>

        <Container>
          <Container marginTop={2} marginLeft={5}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Home Service</Text>
          </Container>
          <Container marginLeft={5}>
            <Text style={{ fontSize: 15, color: Colors.appTextGrey }}>
              Prompt & Quality Services for on-demand home service. Book vetted
              technicians /Artisans fast
            </Text>
          </Container>

          <Container
            width={90}
            height={15}
            marginLeft={5}
            direction="row"
            verticalAlignment="center"
            marginTop={3}
          >
            <Container height={13} width={23} horizontalAlignment="center">
              <TouchWrap onPress={() => props.navigation.navigate("homeService", { type: 'AC_REPAIR' })}>
                <Container width={17} height={8} borderRadius={50}>
                  <ImageWrap source={AppIcons.circle7} fit="contain" />
                  <Text style={{ fontSize: 13, color: Colors.appPrimaryBlue }}>
                    Ac Repair
                  </Text>
                </Container>
              </TouchWrap>
            </Container>
            <Container height={13} width={23} horizontalAlignment="center">
              <TouchWrap onPress={() => props.navigation.navigate("homeService", { type: 'CHEF' })}>
                <Container width={17} height={8} borderRadius={50}>
                  <ImageWrap source={AppIcons.circle8} fit="contain" />
                  <Text
                    style={{
                      fontSize: 13,
                      color: Colors.appPrimaryBlue,
                      textAlign: "center",
                    }}
                  >
                    Chef
                  </Text>
                </Container>
              </TouchWrap>
            </Container>

            <Container height={13} width={23} horizontalAlignment="center">
              <TouchWrap onPress={() => props.navigation.navigate("homeService", { type: 'CLEANING' })}>
                <Container width={17} height={8} borderRadius={50}>
                  <ImageWrap source={AppIcons.circle15} fit="contain" />
                  <Text
                    style={{
                      fontSize: 13,
                      color: Colors.appPrimaryBlue,
                      textAlign: "center",
                    }}
                  >
                    Cleaning
                  </Text>
                </Container>
              </TouchWrap>
            </Container>
            <Container height={13} width={23} horizontalAlignment="center">
              <TouchWrap onPress={() => props.navigation.navigate("homeService", { type: 'GARDENER' })}>
                <Container width={17} height={8} borderRadius={50}>
                  <ImageWrap source={AppIcons.circle10} fit="contain" />
                  <Text
                    style={{
                      fontSize: 13,
                      color: Colors.appPrimaryBlue,
                      textAlign: "center",
                    }}
                  >
                    Gardener
                  </Text>
                </Container>
              </TouchWrap>
            </Container>
          </Container>
          <Container
            width={90}
            height={15}
            marginLeft={5}
            direction="row"
            verticalAlignment="center"
          >
            <Container height={13} width={23} horizontalAlignment="center">
              <TouchWrap onPress={() => props.navigation.navigate("homeService", { type: 'PLUMBER' })}>
                <Container width={17} height={8} borderRadius={50}>
                  <ImageWrap source={AppIcons.circle11} fit="contain" />
                  <Text style={{ fontSize: 13, color: Colors.appPrimaryBlue }}>
                    Plumber
                  </Text>
                </Container>
              </TouchWrap>
            </Container>
            <Container height={13} width={23} horizontalAlignment="center">
              <TouchWrap onPress={() => props.navigation.navigate("homeService", { type: 'SECURITY' })}>
                <Container width={17} height={8} borderRadius={50}>
                  <ImageWrap source={AppIcons.circle12} fit="contain" />
                  <Text
                    style={{
                      fontSize: 13,
                      color: Colors.appPrimaryBlue,
                      textAlign: "center",
                    }}
                  >
                    Security
                  </Text>
                </Container>
              </TouchWrap>
            </Container>

            <Container height={13} width={23} horizontalAlignment="center">
              <TouchWrap onPress={() => props.navigation.navigate("homeService", { type: 'ELECTRICIAN' })}>
                <Container width={18} height={8} borderRadius={50}>
                  <ImageWrap source={AppIcons.circle13} fit="contain" />
                  <Text
                    style={{
                      fontSize: 13,
                      color: Colors.appPrimaryBlue,
                      textAlign: "center",
                    }}
                  >
                    Electrician
                  </Text>
                </Container>
              </TouchWrap>
            </Container>
            <Container height={13} width={23} horizontalAlignment="center">
              <TouchWrap onPress={() => props.navigation.navigate("homeService", { type: 'FUMIGATION' })}>
                <Container width={20} height={8} borderRadius={50}>
                  <ImageWrap source={AppIcons.circle14} fit="contain" />
                  <Text
                    style={{
                      fontSize: 13,
                      color: Colors.appPrimaryBlue,
                      textAlign: "center",
                    }}
                  >
                    Fumigation
                  </Text>
                </Container>
              </TouchWrap>
            </Container>
          </Container>
          <Container
            width={90}
            height={15}
            marginLeft={5}
            direction="row"
            verticalAlignment="center"
          >
            <Container height={13} width={23} horizontalAlignment="center">
              <TouchWrap onPress={() => props.navigation.navigate("homeService", { type: 'CARPENTER' })}>
                <Container width={17} height={8} borderRadius={50}>
                  <ImageWrap source={AppIcons.circle9} fit="contain" />
                  <Text style={{ fontSize: 13, color: Colors.appPrimaryBlue }}>
                    Carpenter
                  </Text>
                </Container>
              </TouchWrap>
            </Container>
            <Container height={13} width={23} horizontalAlignment="center">
              <TouchWrap onPress={() => props.navigation.navigate("homeService", { type: 'PAINTER' })}>
                <Container width={17} height={8} borderRadius={50}>
                  <ImageWrap source={AppIcons.circle16} fit="contain" />
                  <Text
                    style={{
                      fontSize: 13,
                      color: Colors.appPrimaryBlue,
                      textAlign: "center",
                    }}
                  >
                    Painter
                  </Text>
                </Container>
              </TouchWrap>
            </Container>

            <Container height={13} width={23} horizontalAlignment="center">
              <TouchWrap onPress={() => props.navigation.navigate("homeService", { type: 'TAILOR' })}>
                <Container width={17} height={8} borderRadius={50}>
                  <ImageWrap source={AppIcons.circle17} fit="contain" />
                  <Text
                    style={{
                      fontSize: 13,
                      color: Colors.appPrimaryBlue,
                      textAlign: "center",
                    }}
                  >
                    Tailor
                  </Text>
                </Container>
              </TouchWrap>
            </Container>
            <Container height={13} width={23} horizontalAlignment="center">
              <TouchWrap onPress={() => props.navigation.navigate("homeService", { type: 'MECHANIC' })}>
                <Container width={17} height={8} borderRadius={50}>
                  <ImageWrap source={AppIcons.circle18} fit="contain" />
                  <Text
                    style={{
                      fontSize: 13,
                      color: Colors.appPrimaryBlue,
                      textAlign: "center",
                    }}
                  >
                    Mechanic
                  </Text>
                </Container>
              </TouchWrap>
            </Container>
          </Container>
          <Container
            width={90}
            height={15}
            marginLeft={5}
            direction="row"
            verticalAlignment="center"
          >
            <Container height={13} width={23} horizontalAlignment="center">
              <TouchWrap onPress={() => props.navigation.navigate("homeService", { type: 'PHOTOGRAPH' })}>
                <Container width={20} height={8} borderRadius={50}>
                  <ImageWrap source={AppIcons.circle19} fit="contain" />
                  <Text style={{ fontSize: 13, color: Colors.appPrimaryBlue }}>
                    Photograph
                  </Text>
                </Container>
              </TouchWrap>
            </Container>
            <Container height={13} width={23} horizontalAlignment="center">
              <TouchWrap onPress={() => props.navigation.navigate("homeService", { type: 'BARBER' })}>
                <Container width={17} height={8} borderRadius={50}>
                  <ImageWrap source={AppIcons.circle20} fit="contain" />
                  <Text
                    style={{
                      fontSize: 13,
                      color: Colors.appPrimaryBlue,
                      textAlign: "center",
                    }}
                  >
                    Barber
                  </Text>
                </Container>
              </TouchWrap>
            </Container>
          </Container>
        </Container>
      </ScrollView>
    </Container>
  );
};
export default Vendor;
