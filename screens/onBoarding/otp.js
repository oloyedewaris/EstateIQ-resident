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
  Alert,
} from "react-native";
import { Container, ImageWrap, TouchWrap } from "../../helper/index";
import { AppIcons } from "../../helper/images";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
// import { Colors } from "react-native/Libraries/NewAppScreen";
import InputCard from "../../component/inputCard";
import { Colors, FONT_FAMILY, RH, RW, RF, RR } from "../../helper/constants";
import LongButton from "../../component/longbutton";
import { useRoute } from "@react-navigation/native";

import * as Yup from 'yup';
import { useMutation } from "react-query";
import { resetPassword } from "../../api/auth";
import { ToastLong } from "../../helper/toast";
import { useFormik } from "formik";
import InputCardPassword from "../../component/inputCardPassword";

const OTP = (props) => {
  const [hide, setHide] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const keyboardVerticalOffset = Platform.OS === "ios" ? 150 : 0;
  const route = useRoute();

  const changePasswordMutation = useMutation(resetPassword, {
    onSuccess: res => {
      setModalVisible(true)
    },
    onError: (err) => {
      Alert.alert('An error occurred', JSON.stringify(err?.response?.data))
    }
  })

  const Schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    otp: Yup.string().required('Required'),
    password: Yup.string().required('Required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
        'Password must be a minimum of eight characters, a uppercase, a lowercase and a number character'
      ),
  });


  const formik = useFormik({
    initialValues: {
      email: route.params?.values?.email || '',
      otp: '',
      password: '',
    },
    validationSchema: Schema,
    onSubmit: values => {
      const formData = new FormData()
      formData.append('email', values.email)
      formData.append('otp', values.otp)
      formData.append('password', values.password)
      changePasswordMutation.mutate(formData)
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
            marginTop: "10%",
            marginLeft: "5%",
            flexDirection: "row",
            height: 20,
            width: 100,

            alignItems: "center",
          }}
          onPress={() => props.navigation.navigate("forgetpassword")}
        >
          <AntDesign name="left" size={15} color="white" />
          <Text style={{ color: "white", paddingLeft: 5 }}>Back</Text>
        </TouchableOpacity>
        <Container marginLeft={5} marginTop={3}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            Reset Password with OTP
          </Text>
        </Container>
        <Container marginLeft={4} marginTop={3} width={90}>
          <Text style={{ color: "white", paddingLeft: 5 }}>
            An OTP has been sent to your email address. Please enter new
            password alongside the sent OTP
          </Text>
        </Container>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={keyboardVerticalOffset}
        >
          <Container
            height={75}
            width={95}
            backgroundColor={"white"}
            elevation={10}
            marginTop={5}
            marginLeft={2.5}
            borderRadius={7}
          >
            <Container direction="row" marginTop={4} marginLeft={5}>
              <InputCard
                text={"Email Address"}
                error={(formik.errors.email && formik.touched.email) ? formik.errors.email : ''}
                onChangeText={formik.handleChange('email')}
                onBlur={formik.handleBlur('email')}
                value={formik.values.email}

                placeholder={"Enter your Email address"}
              />
            </Container>

            <Container direction="row" marginLeft={5}>
              <InputCard
                text={"OTP"}
                error={(formik.errors.otp && formik.touched.otp) ? formik.errors.otp : ''}
                onChangeText={formik.handleChange('otp')}
                onBlur={formik.handleBlur('otp')}
                value={formik.values.otp}

                placeholder={"Enter OTP"}
              />
            </Container>

            <InputCardPassword
              text={"Password"}
              error={(formik.errors.password && formik.touched.password) ? formik.errors.password : ''}
              onChangeText={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
              value={formik.values.password}
              placeholder={"Enter your new password"}
            />

            <Container marginLeft={5} marginTop={5}>
              <LongButton
                text={"Reset Password"}
                isLoading={changePasswordMutation.isLoading}
                onPress={formik.handleSubmit}
              />
            </Container>
            <TouchWrap onPress={() => props.navigation.navigate("login")}>
              <Text
                style={{
                  color: Colors.appPrimaryBlue,
                  textAlign: "center",
                  paddingTop: 20,
                }}
              >
                Back to Login
              </Text>
            </TouchWrap>
            <Container
              width={95}
              height={10}
              verticalAlignment="center"
              horizontalAlignment="center"
              marginTop={5}
            >
              <Container width={20} height={20}>
                <ImageWrap source={AppIcons.tacks} fit="contain" />
              </Container>
            </Container>
          </Container>
        </KeyboardAvoidingView>
      </Container>
      <Modal backgroundColor={"rgba(0, 0, 0, 0.7)"} onRequestClose={() => setModalVisible(false)} animationType="slide" visible={modalVisible} transparent>
        <Container
          flex={1}
          verticalAlignment="center"
          horizontalAlignment="center"
          backgroundColor={"white"}
        >
          <Container backgroundColor={"white"}>
            <Text
              style={{
                color: Colors.appPrimaryBlue,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Successful Password Reset
            </Text>
          </Container>

          <Container
            marginTop={5}
            width={90}
            horizontalAlignment="center"
            verticalAlignment="center"
          >
            <Text
              style={{
                color: "black",
                fontSize: 16,

                textAlign: "center",
              }}
            >
              You can now use your new password to log in to your account!
            </Text>
          </Container>

          <Container marginTop={10}>
            <LongButton
              text={"Login"}
              onPress={() => props.navigation.navigate("login")}
            />
          </Container>
          <Container
            width={100}
            height={20}
            verticalAlignment="center"
            horizontalAlignment="center"
          >
            <Container width={20} height={20} marginTop={35}>
              <ImageWrap source={AppIcons.tacks} fit="contain" />
            </Container>
          </Container>
        </Container>
      </Modal>
      <StatusBar style="auto" />
    </Container>
  );
};
export default OTP;
