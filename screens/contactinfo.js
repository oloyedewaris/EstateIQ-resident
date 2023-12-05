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
  Modal,
} from "react-native";
import { Container, ImageWrap, TouchWrap } from "../helper/index";
import { AppIcons } from "../helper/images";

import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { useContext, useEffect, useState } from "react";

import InputCard from "../component/inputCard";
import { Colors, FONT_FAMILY, RH, RW, RF, RR } from "../helper/constants";
import LongButton from "../component/longbutton";
import { useFormik } from "formik";
import { useMutation, useQuery } from "react-query";
import * as Yup from 'yup';
import { GlobalContext } from "../context/Provider";
import { getUserEstateDetails, updateBioApi } from "../api/user";
import { getUserEstates } from "../api/estates";

const Contactinfo = (props) => {
  const [hide, setHide] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const keyboardVerticalOffset = Platform.OS === "ios" ? 150 : 0;
  const userEstateMutation = useMutation(getUserEstateDetails, {
    onSuccess: res => {
      const userEstateDetail = res?.data
      formik.setValues({
        email: userEstateDetail?.estate_user?.user?.email,
        mobile: userEstateDetail?.estate_user?.user?.mobile?.toString(),
      })
    }
  })

  useEffect(() => {
    userEstateMutation.mutate()
  }, [])


  const Schema = Yup.object().shape({
    email: Yup.string().required('Required'),
    mobile: Yup.string().required('Required').min(11, 'Number must be 11 digit'),
  });

  const profileMutation = useMutation(updateBioApi,
    {
      onSuccess: res => {
        setModalVisible(true)
      },
      onError: (err) => {
        ToastLong(JSON.stringify(err?.response?.data))
      }
    }
  )

  const formik = useFormik({
    initialValues: {
      email: '',
      mobile: '',
    },
    validationSchema: Schema,
    onSubmit: values => {
      profileMutation.mutate(values)
    }
  })



  return (
    <Container flex={1} backgroundColor={"#FFFFFF"}>
      <Container
        height={60}
        width={100}
        backgroundColor={Colors.appPrimaryBlue}
      >
        <TouchableOpacity
          style={{
            marginTop: "15%",
            marginLeft: "5%",
            flexDirection: "row",
            height: 20,
            width: 100,

            alignItems: "center",
          }}
          onPress={() => props.navigation.navigate("editprofile")}
        >
          <AntDesign name="left" size={15} color="white" />
          <Text style={{ color: "white", paddingLeft: 5 }}>Back</Text>
        </TouchableOpacity>
        <Container marginLeft={5} marginTop={3}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            Contact info
          </Text>
        </Container>
        <Container marginLeft={4} marginTop={3} width={90}>
          <Text style={{ color: "white", paddingLeft: 5 }}>
            Your contact information
          </Text>
        </Container>
        {/* <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={keyboardVerticalOffset}
        > */}
        <Container
          height={85}
          width={95}
          backgroundColor={"white"}
          elevation={10}
          marginTop={5}
          marginLeft={2.5}
          borderRadius={7}
        >
          <Container marginLeft={5} marginTop={3}>
            <InputCard
              error={(formik.errors.email && formik.touched.email) ? formik.errors.email : ''}
              onChangeText={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
              value={formik.values.email}
              text={"Email Address"}
              placeholder={"Bridget@yahoo.com"}
            />
          </Container>

          <Container marginLeft={5}>
            <InputCard
              error={(formik.errors.mobile && formik.touched.mobile) ? formik.errors.mobile : ''}
              onChangeText={formik.handleChange('mobile')}
              onBlur={formik.handleBlur('mobile')}
              value={formik.values.mobile}
              text={"Mobile Phone"}
              placeholder={"+234 9999"}
              keyboardType={'phone-pad'}
            />
          </Container>

          {/* <Container marginLeft={5}>
              <InputCard
                error={(formik.errors.first_name && formik.touched.first_name) ? formik.errors.first_name : ''}
                onChangeText={formik.handleChange('first_name')}
                onBlur={formik.handleBlur('first_name')}
                value={formik.values.first_name}
                text={"Emergency Contact"}
                placeholder={"+234 9999"}
              />
            </Container> */}

          <Container marginLeft={5} marginTop={5}>
            <LongButton
              onPress={formik.handleSubmit}
              isLoading={profileMutation.isLoading}
              text={"Update"}
            />
          </Container>

          <Container
            width={95}
            height={10}
            verticalAlignment="center"
            horizontalAlignment="center"
            marginTop={5}
          ></Container>
        </Container>
        {/* </KeyboardAvoidingView> */}
      </Container>
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
                <Text
                  style={{
                    fontSize: 20,
                  }}
                >
                  Contact Information updated
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
                onPress={() => { setModalVisible(false); props.navigation.goBack() }}
                text={"Okay"} width={50} np={50} />
            </Container>
          </Container>
        </Container>
      </Modal>
    </Container>
  );
};
export default Contactinfo;
