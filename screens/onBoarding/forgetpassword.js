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
} from "react-native";
import { Container, ImageWrap, TouchWrap } from "../../helper/index";
import { AppIcons } from "../../helper/images";

import { AntDesign } from "@expo/vector-icons";

import { useState } from "react";
// import { Colors } from "react-native/Libraries/NewAppScreen";
import InputCard from "../../component/inputCard";
import { Colors, FONT_FAMILY, RH, RW, RF, RR } from "../../helper/constants";
import LongButton from "../../component/longbutton";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useMutation } from "react-query";
import { requestOTP } from "../../api/auth";
import { ToastLong } from "../../helper/toast";

const Forgetpassword = (props) => {
  const sendOTPMutation = useMutation(requestOTP, {
    onSuccess: res => {
      props.navigation.navigate("otp", { values: formik.values })
    },
    onError: (err) => {
      ToastLong(JSON.stringify(err?.response?.data))
    }
  })

  const Schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
  });


  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Schema,
    onSubmit: values => {
      const formData = new FormData()
      formData.append('email', values.email)
      sendOTPMutation.mutate(formData)
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
          onPress={() => props.navigation.navigate("login")}
        >
          <AntDesign name="left" size={15} color="white" />
          <Text style={{ color: "white", paddingLeft: 5 }}>Back</Text>
        </TouchableOpacity>
        <Container marginLeft={5} marginTop={3}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            Reset Password
          </Text>
        </Container>
        <Container marginLeft={4} marginTop={2} width={90}>
          <Text style={{ color: "white", paddingLeft: 5, fontSize: 13 }}>
            Enter the email associated with your account and we’ll send an email
            with instructions to reset your password.
          </Text>
        </Container>

        <Container
          height={75}
          width={95}
          backgroundColor={"white"}
          elevation={10}
          marginTop={5}
          marginLeft={2.5}
          borderRadius={7}
        >
          <Container marginTop={8} marginLeft={5}>
            <InputCard
              text={"Email Address"}
              error={(formik.errors.email && formik.touched.email) ? formik.errors.email : ''}
              onChangeText={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
              value={formik.values.email}

              placeholder={"Enter your Email address"}
            />
          </Container>
          <Container marginLeft={5} marginTop={5}>
            <LongButton
              isLoading={sendOTPMutation.isLoading}
              text={"Send Instructions"}
              onPress={formik.handleSubmit}
            />
          </Container>
          <Container
            width={95}
            height={10}
            verticalAlignment="center"
            horizontalAlignment="center"
            marginTop={20}
          >
            <Container width={20} height={20}>
              <ImageWrap source={AppIcons.tacks} fit="contain" />
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
export default Forgetpassword;
