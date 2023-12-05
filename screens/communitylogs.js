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
  Modal,
  ActivityIndicator,
} from "react-native";
import { Container, ImageWrap, TouchWrap } from "../helper/index";
import { AppIcons } from "../helper/images";

import AntDesign from "react-native-vector-icons/AntDesign";
import { Colors, FONT_FAMILY, RH, RW, RF, RR } from "../helper/constants";

import LongButton from "../component/longbutton";
import { useState } from "react";
import { useQuery } from "react-query";
import { getUtilitiesApi } from "../api/utilty";


const CommunityLogs = (props) => {
  const keyboardVerticalOffset = Platform.OS === "ios" ? 150 : 0;
  const [modalVisible, setModalVisible] = useState(false);
  const [toggle, setToggle] = useState(false);

  const utilityBillsQuery = useQuery(['getUtilitiesApi'], getUtilitiesApi);

  const utilities = utilityBillsQuery?.data?.data?.results;

  return (
    <Container flex={1} backgroundColor={"#FFFFFF"}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Container
          verticalAlignment="center"
          marginTop={7}
          direction="row"
          paddingHorizontal={8}
        >
          <AntDesign name="left" color={"black"} size={20} />
          <Text style={{ marginLeft: 10 }}>Back</Text>
        </Container>
      </TouchableOpacity>
      {toggle == false ? (
        <Container>
          <Container paddingHorizontal={8} marginTop={3}>
            <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 10 }}>
              Community Bills
            </Text>

            <Text
              style={{
                fontWeight: "400",
                fontSize: 15,
                marginTop: 20,
                color: "#616161",
              }}
            >
              Pay fees and dues are critical to maintaining infrastructure.
              EstateIQ makes payments convenient, and collections seamless.
            </Text>
          </Container>
          <Container
            verticalAlignment="center"
            marginTop={4}
            direction="row"
            backgroundColor={Colors.appInactiveGrey}
            height={5}
          >
            <TouchableOpacity
              style={{
                height: "70%",
                width: "25%",

                alignItems: "center",
                justifyContent: "center",
                marginLeft: "8%",
                borderBottomColor:
                  toggle == false ? Colors.appPrimaryBlue : Colors.appTextGrey,
                borderBottomWidth: 3,
              }}
              onPress={() => setToggle(false)}
            >
              <Text
                style={{
                  color:
                    toggle == false
                      ? Colors.appPrimaryBlue
                      : Colors.appTextGrey,
                }}
              >
                Current Bills
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: "70%",
                width: "30%",

                justifyContent: "center",
                marginLeft: "30%",
                borderBottomColor:
                  toggle == true ? Colors.appPrimaryBlue : Colors.appTextGrey,
                borderBottomWidth: 3,
              }}
              onPress={() => setToggle(true)}
            >
              <Text
                style={{
                  color:
                    toggle == true ? Colors.appPrimaryBlue : Colors.appTextGrey,
                }}
              >
                {" "}
                Upcoming Bills
              </Text>
            </TouchableOpacity>
          </Container>


          {utilityBillsQuery?.isLoading ? (
            <View style={{ width: '100%', height: '50%', justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator color={Colors.appPrimaryBlue} size={'large'} />
            </View>
          ) : (
            <>
              {!utilities.length ? (
                <Container>
                  <Container height={40} width={70} marginLeft={15}>
                    <ImageWrap source={AppIcons.lists} fit="contain" />
                  </Container>
                  <Container>
                    <Text
                      style={{
                        fontSize: 16,
                        textAlign: "center",
                      }}
                    >
                      No current Bill yet!
                    </Text>
                  </Container>
                  <Container horizontalAlignment="center" marginTop={5}>
                    <LongButton
                      text={"Back to Bills and payment"}
                      onPress={() => props.navigation.navigate("bills")}
                    />
                  </Container>
                </Container>
              ) : (
                <ScrollView>
                  {utilities?.map(utility => (
                    <Container
                      key={utility?.id}
                      height={10}
                      width={90}
                      marginLeft={5}
                      direction="row"
                      marginTop={5}
                    >
                      <Container height={10} width={65}>
                        <Container height={5} width={65} verticalAlignment="center">
                          <Text
                            style={{ color: "black", fontWeight: "bold", fontSize: 17 }}
                          >
                            {utility?.name}
                          </Text>
                        </Container>
                        <Container height={5} width={65}>
                          <Text style={{ color: Colors.appTextGrey, fontSize: 12 }}>
                            Make payment for estate due for july
                          </Text>
                        </Container>
                      </Container>
                      <Container
                        verticalAlignment="center"
                        horizontalAlignment="center"
                        width={25}
                      >
                        <TouchWrap
                          onPress={() =>
                            props.navigation.navigate("communitybillsdetails", { id: utility?.id })
                          }
                        >
                          <Text style={{ color: Colors.appPrimaryBlue }}>
                            View Details
                          </Text>
                        </TouchWrap>
                      </Container>
                    </Container>
                  ))}
                </ScrollView>
              )}
            </>
          )}
        </Container>
      ) : (
        <Container>
          <Container paddingHorizontal={8} marginTop={3}>
            <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 10 }}>
              Community Bills
            </Text>

            <Text
              style={{
                fontWeight: "400",
                fontSize: 15,
                marginTop: 20,
                color: "#616161",
              }}
            >
              Here's a list of bills for your attention and prompt payment
            </Text>
          </Container>
          <Container
            verticalAlignment="center"
            marginTop={4}
            direction="row"
            backgroundColor={Colors.appInactiveGrey}
            height={5}
          >
            <TouchableOpacity
              style={{
                height: "70%",
                width: "25%",

                alignItems: "center",
                justifyContent: "center",
                marginLeft: "8%",
                borderBottomColor:
                  toggle == false ? Colors.appPrimaryBlue : Colors.appTextGrey,
                borderBottomWidth: 3,
              }}
              onPress={() => setToggle(false)}
            >
              <Text
                style={{
                  color:
                    toggle == false
                      ? Colors.appPrimaryBlue
                      : Colors.appTextGrey,
                }}
              >
                Current Bills
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: "70%",
                width: "30%",

                justifyContent: "center",
                marginLeft: "30%",
                borderBottomColor:
                  toggle == true ? Colors.appPrimaryBlue : Colors.appTextGrey,
                borderBottomWidth: 3,
              }}
              onPress={() => setToggle(true)}
            >
              <Text
                style={{
                  color:
                    toggle == true ? Colors.appPrimaryBlue : Colors.appTextGrey,
                }}
              >
                {" "}
                Upcoming Bills
              </Text>
            </TouchableOpacity>
          </Container>


          {utilityBillsQuery?.isLoading ? (
            <View style={{ width: '100%', height: '50%', justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator color={Colors.appPrimaryBlue} size={'large'} />
            </View>
          ) : (
            <>
              {!utilities.length ? (
                <Container>
                  <Container height={40} width={70} marginLeft={15}>
                    <ImageWrap source={AppIcons.lists} fit="contain" />
                  </Container>
                  <Container>
                    <Text
                      style={{
                        fontSize: 16,
                        textAlign: "center",
                      }}
                    >
                      No current Bill yet!
                    </Text>
                  </Container>
                  <Container horizontalAlignment="center" marginTop={5}>
                    <LongButton
                      text={"Back to Bills and payment"}
                      onPress={() => props.navigation.navigate("bills")}
                    />
                  </Container>
                </Container>
              ) : (
                <ScrollView>
                  {utilities?.map(utility => (
                    <Container
                      key={utility?.id}
                      height={10}
                      width={90}
                      marginLeft={5}
                      direction="row"
                      marginTop={5}
                    >
                      <Container height={10} width={65}>
                        <Container height={5} width={65} verticalAlignment="center">
                          <Text
                            style={{ color: "black", fontWeight: "bold", fontSize: 17 }}
                          >
                            {utility?.name}
                          </Text>
                        </Container>
                        <Container height={5} width={65}>
                          <Text style={{ color: Colors.appTextGrey, fontSize: 12 }}>
                            Make payment for estate due for july
                          </Text>
                        </Container>
                      </Container>
                      <Container
                        verticalAlignment="center"
                        horizontalAlignment="center"
                        width={25}
                      >
                        <TouchWrap
                          onPress={() =>
                            props.navigation.navigate("communitybillsdetails", { id: utility?.id })
                          }
                        >
                          <Text style={{ color: Colors.appPrimaryBlue }}>
                            View Details
                          </Text>
                        </TouchWrap>
                      </Container>
                    </Container>
                  ))}
                </ScrollView>
              )}
            </>
          )}
        </Container>
      )}
    </Container>
  );
};
export default CommunityLogs;
