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
import { Container, ImageWrap, TouchWrap } from "../helper/index";
import { AppIcons } from "../helper/images";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
// import { Colors } from "react-native/Libraries/NewAppScreen";
import InputCard from "../component/inputCard";
import { Colors, FONT_FAMILY, RH, RW, RF, RR } from "../helper/constants";
import LongButton from "../component/longbutton";
import { useRoute } from "@react-navigation/native";

import * as Yup from 'yup';
import { useMutation } from "react-query";
import { setPassword } from "../api/auth";
import { useFormik } from "formik";
import InputCardPassword from "../component/inputCardPassword";

const SetPassword = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const keyboardVerticalOffset = Platform.OS === "ios" ? 150 : 0;

  const changePasswordMutation = useMutation(setPassword, {
    onSuccess: res => {
      setModalVisible(true)
    },
    onError: (err) => {
      Alert.alert('An error occurred', JSON.stringify(err?.response?.data))
    }
  })

  const Schema = Yup.object().shape({
    password1: Yup.string().required('Required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
        'Password must be a minimum of eight characters, a uppercase, a lowercase and a number character'
      ),
    password2: Yup.string().required('Required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
        'Password must be a minimum of eight characters, a uppercase, a lowercase and a number character'
      ),
  });


  const formik = useFormik({
    initialValues: {
      password1: '',
      password2: '',
    },
    validationSchema: Schema,
    onSubmit: values => {
      const formData = new FormData()
      formData.append('password', values.password1)
      formData.append('verify_password', values.password2)
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
          onPress={() => props.navigation.goBack()}
        >
          <AntDesign name="left" size={15} color="white" />
          <Text style={{ color: "white", paddingLeft: 5 }}>Back</Text>
        </TouchableOpacity>
        <Container marginLeft={5} marginTop={3}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            Change your password
          </Text>
        </Container>
        <Container marginLeft={4} marginTop={3} width={90}>
          <Text style={{ color: "white", paddingLeft: 5 }}>
            Change your password if you notice irregularities in your account
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
            <InputCardPassword
              text={"Password"}
              error={(formik.errors.password1 && formik.touched.password1) ? formik.errors.password1 : ''}
              onChangeText={formik.handleChange('password1')}
              onBlur={formik.handleBlur('password1')}
              value={formik.values.password1}
              placeholder={"Enter your new password"}
            />

            <InputCardPassword
              text={"Verify Password"}
              error={(formik.errors.password2 && formik.touched.password2) ? formik.errors.password2 : ''}
              onChangeText={formik.handleChange('password2')}
              onBlur={formik.handleBlur('password2')}
              value={formik.values.password2}
              placeholder={"Confirm your new password"}
            />

            <Container marginLeft={5} marginTop={5}>
              <LongButton
                text={"Change Password"}
                isLoading={changePasswordMutation.isLoading}
                onPress={formik.handleSubmit}
              />
            </Container>
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
      <Modal onRequestClose={() => setModalVisible(false)} animationType="slide" visible={modalVisible} transparent>
        <Container
          flex={1}
          verticalAlignment="center"
          horizontalAlignment="center"
          backgroundColor={'white'}
        >
          <Container>
            <Text
              style={{
                color: Colors.appPrimaryBlue,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Successful Password Changed
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
              text={"Okay"}
              onPress={() => props.navigation.goBack()}
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
export default SetPassword;
