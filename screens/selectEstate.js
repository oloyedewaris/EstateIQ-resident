import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Image,
  Alert,
} from "react-native";
import { Container, ImageWrap, TouchWrap } from "../helper/index";
import { AppIcons } from "../helper/images";

import { AntDesign } from "@expo/vector-icons";

import { useContext, useState } from "react";
// import { Colors } from "react-native/Libraries/NewAppScreen";
import InputCard from "../component/inputCard";
import { Colors, FONT_FAMILY, RH, RW, RF, RR } from "../helper/constants";
import { useQuery } from "react-query";
import { getUserEstates } from "../api/estates";
import { GlobalContext } from "../context/Provider";
import { setEstate } from "../context/actions/auth";
import { useNavigation } from "@react-navigation/native";

const SetEstate = (props) => {
  const { authDispatch } = useContext(GlobalContext)
  const estateDetailsQuery = useQuery(['getUserEstates'], getUserEstates)
  const currentEstates = estateDetailsQuery?.data?.data?.results?.length && estateDetailsQuery?.data?.data?.results;
  const navigation = useNavigation();

  const handleSelectEstate = (estate) => {
    if (estate.status !== 'ACTIVE')
      return Alert.alert('Validation Error', `Your estate admin is yet to approve your request to join ${estate?.estate?.name} on EstateIQ. Kindly contact your estate admin for approval.`)
    setEstate(estate)(authDispatch);
    navigation.navigate('buttomTab');
  }

  return (
    <Container flex={1} backgroundColor={"#FFFFFF"}>
      <View style={{ width: "100%", }}>
        <Container marginLeft={5} marginTop={10}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
            Choose estate
          </Text>
        </Container>
        <Container marginLeft={4} marginTop={1}>
          <Text style={{ color: "black", paddingLeft: 5 }}>
            Select the estate that you wish to log into
          </Text>
        </Container>
      </View>
      <ScrollView>
        {estateDetailsQuery.isLoading ? (
          <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator color={Colors.appPrimaryBlue} size='large' />
          </View>
        ) : (
          <View>
            {currentEstates?.map(estate => (
              <TouchableOpacity key={estate.id}
                onPress={() => handleSelectEstate(estate)}
              >
                <Container
                  height={23}
                  marginTop={3}
                  borderRadius={12}
                  borderWidth={1}
                  width={90}
                  marginLeft={5}
                  backgroundColor={"#F2F4F6"}
                  borderColor={Colors.appPrimaryBlue}
                >
                  <Container height={9} width={90} direction="row">
                    <Container height={10} width={45} marginTop={2} paddingLeft={5}>
                      <Image source={require('../assets/icon.png')} style={{ width: 70, height: 70 }} />
                    </Container>

                    <Container height={10} width={45}></Container>
                  </Container>
                  <Container marginLeft={5} marginTop={4}>
                    <Text
                      style={{ fontSize: 18, fontWeight: "bold", color: "black" }}
                    >
                      {estate?.estate?.name}
                    </Text>
                  </Container>
                  <Container marginLeft={4} marginTop={1}>
                    <Text style={{ color: "black", paddingLeft: 5 }}>
                      {estate?.estate?.address}
                    </Text>
                  </Container>
                </Container>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <Container height={30}></Container>

        <Container
          height={20}
          width={90}
          marginLeft={5}
          verticalAlignment="center"
          horizontalAlignment="center"
        >
          <ImageWrap
            source={AppIcons.estate}
            fit="contain"
            height={40}
            width={40}
          />
        </Container>
      </ScrollView>
    </Container>
  );
};
export default SetEstate;
