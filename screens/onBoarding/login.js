import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Container, ImageWrap, TouchWrap } from "../../helper/index";
import { AppIcons } from "../../helper/images";
import { Button, H1 } from "../../helper/element";

import { useContext, useState } from "react";

import InputCard from "../../component/inputCard";
import { Colors, FONT_FAMILY, RH, RW, RF, RR } from "../../helper/constants";
import LongButton from "../../component/longbutton";
import { loginApi } from "../../api/auth";
import * as Yup from 'yup';
import { useMutation } from "react-query";
import { useFormik } from "formik";
import InputCardPassword from "../../component/inputCardPassword";
import { GlobalContext } from "../../context/Provider";
import { loginUser } from "../../context/actions/auth";

const Login = (props) => {
  const keyboardVerticalOffset = Platform.OS === "ios" ? 150 : 0;
  const { authDispatch } = useContext(GlobalContext)


  const Schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required').min(6, 'must be minimum of 6 characters').required('Required'),
  });

  const loginMutation = useMutation(loginApi, {
    onSuccess: res => {
      if (res.data?.user && res.data?.access_token) {
        loginUser(res.data)(authDispatch)
        props.navigation.navigate('setEstate')
      }
      // else
      //   ToastLong('An error occurred try again')
    },
    onError: (err) => {
      Alert.alert('Login Error', JSON.stringify(err?.response?.data))
    }
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Schema,
    onSubmit: values => {
      loginMutation.mutate(values)
    }
  })


  return (
    <Container flex={1} backgroundColor={"#FFFFFF"}>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <Container
          height={60}
          width={100}
          backgroundColor={Colors.appPrimaryBlue}
        >
          <Container
            height={90}
            width={95}
            backgroundColor={"white"}
            elevation={10}
            marginTop={15}
            marginLeft={2.5}
            borderRadius={7}
          >
            <Container
              marginTop={5}
              marginLeft={5}
              direction="row"
              height={4}
              verticalAlignment="center"
            >
              <H1 fontWeight="bold" color={Colors.appPrimaryBlue} fontSize={20}>
                Welcome
              </H1>
              <Container width={6} height={3} marginLeft={2}>
                <ImageWrap source={AppIcons.emo} fit="contain" />
              </Container>
            </Container>
            <Container marginLeft={5} marginTop={1}>
              <Text style={{ color: Colors.appTextGrey2 }}>
                Log in to continue
              </Text>
            </Container>
            <Container marginTop={2} marginLeft={5}>
              <InputCard
                text={"Email"}
                error={(formik.errors.email && formik.touched.email) ? formik.errors.email : ''}
                onChangeText={formik.handleChange('email')}
                onBlur={formik.handleBlur('email')}
                value={formik.values.email}
                placeholder={"Enter your email"}
                keyboardType={'email-address'}
              />
            </Container>
            <InputCardPassword
              text={"Password"}
              error={(formik.errors.password && formik.touched.password) ? formik.errors.password : ''}
              onChangeText={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
              value={formik.values.password}
              placeholder={"Enter your password"}
            />

            <Container
              marginLeft={45}
              marginTop={2}
              paddingLeft={10}
              marginBottom={2}
              width={45}
            >
              <TouchWrap
                height={3}
                onPress={() => props.navigation.navigate("forgetpassword")}
              >
                <Text
                  style={{ color: Colors.appPrimaryBlue, textAlign: "right" }}
                >
                  Forgot Password ?
                </Text>
              </TouchWrap>
            </Container>

            <Container horizontalAlignment="center" marginTop={7}>
              <LongButton
                hitSlop={{ bottom: 10, right: 10, left: 10, top: 10 }}
                isLoading={loginMutation.isLoading}
                text={"Login"}
                onPress={formik.handleSubmit}
              />
            </Container>

            <Container
              direction="row"
              width={100}
              marginTop={4}
              horizontalAlignment="center"
              paddingVertical={4}
            >
              <Container>
                <Text style={{ fontSize: 15 }}>New user?</Text>
              </Container>
              <Container height={9}>
                <TouchableOpacity hitSlop={{ top: 30, bottom: 30 }} onPress={() => props.navigation.navigate("signup")}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: Colors.appPrimaryBlue,
                      paddingLeft: 5,
                    }}
                  >
                    Create your account
                  </Text>
                </TouchableOpacity>
              </Container>
            </Container>
            <Container
              width={100}
              height={10}
              verticalAlignment="center"
              horizontalAlignment="center"
            >
              <Container height={30} width={35}>
                <ImageWrap source={AppIcons.estate} fit="contain" />
              </Container>
            </Container>
          </Container>
        </Container>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </Container>
  );
};
export default Login;
