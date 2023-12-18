import {
  Text,
  Image,
  ScrollView,
  Alert,
  Linking,
  Modal,
} from "react-native";
import { Container, ImageWrap, TouchWrap } from "../helper/index";
import { AppIcons } from "../helper/images";
import React, { useContext, useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../helper/constants";
import { GlobalContext } from "../context/Provider";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useQuery } from "react-query";
import { getUserEstateDetails } from "../api/user";
import { fetchAdverts } from "../api/advert";
import { logout } from "../context/actions/auth";
import LongButton from "../component/longbutton";

const Home = (props) => {
  const { authState: { user, estateData }, authDispatch } = useContext(GlobalContext);
  const [modalVisible, setModalVisible] = useState(false);

  const userDetailsQuery = useQuery(['getUserEstateDetails'], getUserEstateDetails, { cacheTime: 0 })
  const profileImage = userDetailsQuery?.data?.data?.profile_image;
  const profile = userDetailsQuery?.data?.data;

  useEffect(() => {
    if (profile?.estate_user && profile?.estate_user?.user_type !== 'RESIDENT') {
      setModalVisible(true)
    } else {
      setModalVisible(false)
    }
  }, [profile?.estate_user])

  const advertsQuery = useQuery(['fetchAdverts'], fetchAdverts);
  const advert = advertsQuery?.data?.data?.results?.length && advertsQuery?.data?.data?.results[0];

  const getTimeGreet = () => {
    var today = new Date()
    var curHr = today.getHours()

    if (curHr < 12) {
      return 'Good morning';
    } else if (curHr < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  }

  return (
    <Container flex={1} backgroundColor={"#FFFFFF"} marginBottom={7}>
      <ScrollView>
        <Container width={100} height={7} marginTop={5} direction="row">
          <Container height={7} marginLeft={5} verticalAlignment="center">
            <MaterialIcons name="location-on" size={22} color="#1037B5" />
          </Container>
          <Container
            height={7}
            width={68}
            verticalAlignment="center"
            marginLeft={4}
          >
            <Text style={{ fontSize: 16 }}>{estateData?.estate?.name}</Text>
          </Container>
          <Container
            height={7}
            width={15}
            verticalAlignment="center"
            horizontalAlignment="center"
          >
            <TouchWrap onPress={() => props.navigation.navigate('notifications')}>
              <ImageWrap
                source={AppIcons.bell}
                fit="contain"
                height={6}
                width={6}
              />
            </TouchWrap>
          </Container>
        </Container>
        <TouchableOpacity onPress={() => props.navigation.navigate('editprofile')}>
          <Container
            height={15}
            width={90}
            marginLeft={5}
            borderRadius={10}
            verticalAlignment="center"
            backgroundColor={Colors.appPrimaryBlue}
            direction="row"
          >
            <Container width={20} height={10} borderRadius={50} marginLeft={5} marginRight={3}>
              {profileImage ? (
                <Image style={{ width: 60, height: 60, borderRadius: 100, marginTop: 7 }} source={{ uri: `https://api.estateiq.ng/${profileImage}` }} fit="contain" />
              ) : (
                <ImageWrap
                  source={AppIcons.avatar}
                  borderRadius={1000}
                  fit="contain"
                  width={15}
                  height={10}
                />
              )}
            </Container>
            <Container width={50} height={10} marginLeft={-2}>
              <Container width={50} height={5} verticalAlignment="center">
                <Text style={{ color: "white", fontSize: 14 }}>{getTimeGreet()}</Text>
              </Container>
              <Container width={50} verticalAlignment="center">
                <Text
                  style={{ color: "white", fontSize: 19, fontWeight: "bold" }}
                >
                  {user?.first_name} {user?.last_name}
                </Text>
              </Container>
            </Container>
          </Container>
        </TouchableOpacity>

        <Container marginTop={2} marginLeft={6}>
          <Text>Select a preferred option</Text>
        </Container>
        <Container width={100} height={16} direction="row" marginTop={2}>
          <TouchWrap onPress={() => props.navigation.navigate("AccessCode")}>
            <Container
              height={14}
              width={43}
              marginLeft={5}
              verticalAlignment="center"
              horizontalAlignment="center"
            >
              <Container height={30} width={43} marginTop={1}>
                <ImageWrap source={AppIcons.box1} fit="contain" />
              </Container>
            </Container>
          </TouchWrap>
          <TouchWrap
            onPress={() => props.navigation.navigate("ReportIssueFill")}
          >
            <Container
              height={14}
              width={43}
              marginLeft={3}
              verticalAlignment="center"
              horizontalAlignment="center"
            >
              <Container height={30} width={43} marginTop={1}>
                <ImageWrap source={AppIcons.box2} fit="contain" />
              </Container>
            </Container>
          </TouchWrap>
        </Container>
        <Container width={100} height={16} direction="row" marginTop={2}>
          <TouchWrap onPress={() => props.navigation.navigate("household")}>
            <Container
              height={14}
              width={43}
              marginLeft={5}
              verticalAlignment="center"
              horizontalAlignment="center"
            >
              <Container height={30} width={43} marginTop={1}>
                <ImageWrap source={AppIcons.box3} fit="contain" />
              </Container>
            </Container>
          </TouchWrap>
          <TouchWrap onPress={() => props.navigation.navigate("bills")}>
            <Container
              height={14}
              width={43}
              marginLeft={3}
              verticalAlignment="center"
              horizontalAlignment="center"
            >
              <Container height={30} width={43} marginTop={1}>
                <ImageWrap source={AppIcons.box4} fit="contain" />
              </Container>
            </Container>
          </TouchWrap>
        </Container>
        <Container width={100} direction="row" marginTop={2}>
          <TouchWrap onPress={() => props.navigation.navigate("emergency")}>
            <Container
              height={14}
              width={43}
              marginLeft={5}
              verticalAlignment="center"
              horizontalAlignment="center"
            >
              <Container height={30} width={43} marginTop={1}>
                <ImageWrap source={AppIcons.box5} fit="contain" />
              </Container>
            </Container>
          </TouchWrap>
          <TouchWrap onPress={() => props.navigation.navigate("vendor")}>
            <Container
              height={14}
              width={43}
              marginLeft={3}
              verticalAlignment="center"
              horizontalAlignment="center"
            >
              <Container height={30} width={43} marginTop={1}>
                <ImageWrap source={AppIcons.box6} fit="contain" />
              </Container>
            </Container>
          </TouchWrap>
        </Container>

        <Container
          width={90}
          marginLeft={5}
          height={3}
          direction="row"
          marginTop={3}
        >
          <Container width={45}>
            <Text style={{ fontWeight: "bold" }}>Discount Marketplace</Text>
          </Container>
          <Container width={45} horizontalAlignment="flex-end">
            <TouchWrap hitSlop={{ bottom: 10, top: 10, right: 10, left: 10 }} onPress={() => props.navigation.navigate('discountedMarketplace')}>
              <Text
                style={{ fontWeight: "bold", color: Colors.appPrimaryBlue }}
              >
                More
              </Text>
            </TouchWrap>
          </Container>
        </Container>

        {/* <Container
          width={90}
          borderRadius={5}
          marginLeft={5}
          height={6}
          marginTop={3}
          direction="row"
          backgroundColor={"#D9D9D9"}
          verticalAlignment="center"
          horizontalAlignment="center"
        >
          <Container width={45}>
            <Text style={{ fontWeight: "bold", color: Colors.appPrimaryBlue }}>
              Fashion and Lifestyle
            </Text>
          </Container>
          <Container width={45} horizontalAlignment="flex-end">
            <Container width={15} height={20}>
              <ImageWrap source={AppIcons.log} fit="contain" />
            </Container>
          </Container>
        </Container> */}

        {advert ? (
          <Container
            width={90}
            marginLeft={5}
            marginTop={3}
            backgroundColor={"#E4E4E4"}
            borderBottomLeftRadius={10}
            borderBottomRightRadius={10}
            borderTopLeftRadius={4}
            borderTopRightRadius={4}
            marginBottom={5}
            paddingVertical={2}
          >
            <Container horizontalAlignment="center" paddingHorizontal={3}>
              <Container
                width={90}
                borderRadius={5}
                height={3}
                direction="row"
                verticalAlignment="center"
                marginLeft={7}
              >
                <Container width={38}>
                  <Text
                    style={{ fontWeight: "bold", color: Colors.appPrimaryBlue }}
                  >
                    {advert?.title}
                  </Text>
                </Container>
                <Container
                  width={48}
                  horizontalAlignment="flex-end"
                  height={4}
                  verticalAlignment="center"
                >
                  <Container width={17} height={17}>
                    <ImageWrap source={{ uri: advert?.image }} fit="contain" />
                  </Container>
                </Container>
              </Container>

              <Container marginTop={1}>
                <Text style={{ color: "black", fontSize: 10.5 }}>
                  {advert?.description}
                </Text>
              </Container>
            </Container>
            <TouchWrap>
              <Container
                width={40}
                height={5}
                backgroundColor={Colors.appPrimaryBlue}
                borderRadius={5}
                verticalAlignment="center"
                horizontalAlignment="center"
                marginLeft={3}
                marginTop={1.5}
              >
                <TouchWrap onPress={() => Linking.openURL(`tel:${advert?.phone}`)}>
                  <Text style={{ color: Colors.appWhite }}>Make an Enquiry</Text>
                </TouchWrap>
              </Container>
            </TouchWrap>
          </Container>
        ) : null}
      </ScrollView>

      <Modal animationType="slide" visible={modalVisible} transparent>
        <Container
          flex={1}
          verticalAlignment="center"
          horizontalAlignment="center"
          backgroundColor={"rgba(0, 0, 0, 0.7)"}
        >
          <Container
            height={35}
            width={90}
            verticalAlignment="center"
            horizontalAlignment="center"
            backgroundColor={"white"}
            borderRadius={10}
          >
            <Container width={90} direction="row">
              <Container width={70}></Container>
            </Container>
            <Container width={90} direction="row" marginTop={-1}>
              <Container
                width={90}
                verticalAlignment="center"
                horizontalAlignment="center"
              >
                <Text style={{ fontSize: 20, fontWeight: '500', textAlign: 'center' }}>
                  This is account is not supported on this app, Please use the security app for a security account
                </Text>
              </Container>
            </Container>


            <Container
              marginTop={4}
              width={90}
              verticalAlignment="center"
              horizontalAlignment="center"
            >
              <LongButton
                onPress={() => {
                  logout()(authDispatch)
                  Linking.openURL('https://play.google.com/store/apps/details?id=com.estateiq.security')
                }}
                text={"Get Security App Here"} width={50} np={50} />
            </Container>
          </Container>
        </Container>
      </Modal>
    </Container>
  );
};
export default Home;
