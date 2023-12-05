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
import { Feather } from "@expo/vector-icons";
import { useQuery } from "react-query";
import { getMembers } from "../api/invite";

// import { Colors } from "react-native/Libraries/NewAppScreen";

const Household = (props) => {
  const keyboardVerticalOffset = Platform.OS === "ios" ? 150 : 0;
  const [modalVisible, setModalVisible] = useState(false);

  const membersQuery = useQuery(['getMembers'], getMembers)

  const members = membersQuery?.data?.data?.results

  const offmodal = () => {
    setModalVisible(false);
    props.navigation.navigate("registerhouse");
  };
  const offmodal2 = () => {
    setModalVisible(false);
    props.navigation.navigate("registerdomestic");
  };

  return (
    <Container flex={1} backgroundColor={"#FFFFFF"}>
      <ScrollView>
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

        <Container paddingHorizontal={8} marginTop={3}>
          <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 10 }}>
            Household
          </Text>

          <Text
            style={{
              fontWeight: "400",
              fontSize: 15,
              marginTop: 20,
              color: "#616161",
            }}
          >
            Onboard your family members so that they can use EstateIQ and profile
            your domestic staff for security checks
          </Text>
        </Container>

        <Container horizontalAlignment="center" marginTop={4}>
          <LongButton text={"Register"} onPress={() => setModalVisible(true)} />
        </Container>


        <Container
          verticalAlignment="center"
          horizontalAlignment="space-between"
          marginTop={4}
          direction="row"
          backgroundColor={Colors.appPrimaryBlue}
          paddingHorizontal={8}
          paddingVertical={1}
        >
          <TouchableOpacity style={{ maxWidth: '35%' }}>
            <Text style={{ color: "white" }}>Name</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ maxWidth: '30%' }}>
            <Text style={{ color: "white" }}>Mobile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ maxWidth: '35%' }}>
            <Text style={{ color: "white" }}> User Category</Text>
          </TouchableOpacity>
        </Container>
        {membersQuery.isLoading ? (
          <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator color={Colors.appPrimaryBlue} size='large'/>
          </View>
        ) : !members?.length ? (
          <>
            <Container height={40} width={70} marginLeft={15}>
              <ImageWrap source={AppIcons.lists} fit="contain" />
            </Container>
            <Container>
              <Text style={{ fontWeight: "bold", fontSize: 16, textAlign: "center" }}>
                You have not registered any member yet!
              </Text>
            </Container>
          </>
        ) : (
          <>{members?.map(member => (
            <Container
              id={member.id}
              key={member.id}
              verticalAlignment="center"
              horizontalAlignment="space-between"
              marginTop={4}
              direction="row"
              paddingHorizontal={8}
              paddingVertical={1}
            >
              {/* <TouchableOpacity>
              <Text style={{ color: Colors.appPrimaryBlue }}>{member?.id}</Text>
            </TouchableOpacity> */}

              <TouchableOpacity style={{ maxWidth: '35%' }}>
                <Text style={{ color: Colors.appPrimaryBlue }}>{member?.user?.first_name} {member?.user?.last_name}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ maxWidth: '30%' }}>
                <Text style={{ color: Colors.appPrimaryBlue }}>{member?.user?.mobile}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ maxWidth: '35%' }}>
                <Text style={{ color: Colors.appPrimaryBlue }}> {member?.user_category}</Text>
              </TouchableOpacity>
            </Container>
          ))}</>
        )}
        <Container horizontalAlignment="center">
          <ImageWrap
            source={AppIcons.logo}
            fit="contain"
            height={20}
            width={40}
          />
        </Container>
      </ScrollView>

      <Modal onRequestClose={() => setModalVisible(false)} animationType="slide" visible={modalVisible} transparent>
        <Container
          flex={1}
          verticalAlignment="flex-end"
          horizontalAlignment="center"
          backgroundColor={"rgba(52, 52, 52, 0.8)"}
        >
          <Container
            backgroundColor={'silver'}
            height={60}
            width={95}
            borderRadius={7}
          >
            <Container marginTop={3} marginLeft={8}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Choose your preferred option
              </Text>
            </Container>
            <TouchWrap onPress={() => offmodal()}>
              <Container
                height={20}
                width={80}
                marginLeft={7}
                marginTop={3}
                borderRadius={5}
                backgroundColor={'white'}
              >
                <Container width={80} height={5} marginTop={2} direction="row">
                  <Container height={5} width={15}>
                    <ImageWrap source={AppIcons.chii} fit="contain" />
                  </Container>
                  <Container
                    verticalAlignment="center"
                    horizontalAlignment="flex-end"
                    width={60}
                  >
                    <Feather
                      name="chevron-right"
                      size={24}
                      color={Colors.appTextGrey}
                    />
                  </Container>
                </Container>
                <Container marginLeft={3} marginTop={2}>
                  <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                    {" "}
                    Register HouseHold Members
                  </Text>
                </Container>
                <Container marginLeft={3} marginTop={2}>
                  <Text style={{ color: Colors.appTextGrey }}>
                    Add your household members for easy access into the estate
                  </Text>
                </Container>
              </Container>
            </TouchWrap>
            <TouchWrap onPress={() => offmodal2()}>
              <Container
                height={20}
                width={80}
                marginLeft={7}
                marginTop={3}
                borderRadius={5}
                backgroundColor={'white'}
              >
                <Container width={80} height={5} marginTop={2} direction="row">
                  <Container height={5} width={15}>
                    <ImageWrap source={AppIcons.tolls} fit="contain" />
                  </Container>
                  <Container
                    verticalAlignment="center"
                    horizontalAlignment="flex-end"
                    width={60}
                  >
                    <Feather
                      name="chevron-right"
                      size={24}
                      color={Colors.appTextGrey}
                    />
                  </Container>
                </Container>
                <Container marginLeft={3} marginTop={2}>
                  <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                    Register Domestic Staff
                  </Text>
                </Container>
                <Container marginLeft={3} marginTop={2}>
                  <Text style={{ color: Colors.appTextGrey }}>
                    Add your domestic staff for security checks at the estate
                    gate
                  </Text>
                </Container>
              </Container>
            </TouchWrap>
          </Container>
        </Container>
      </Modal>
    </Container>
  );
};
export default Household;
