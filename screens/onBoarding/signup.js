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
  Dimensions,
} from "react-native";
import { Container, TouchWrap } from "../../helper/index";

import { AntDesign } from "@expo/vector-icons";
import InputCard from "../../component/inputCard";
import { Colors } from "../../helper/constants";
import LongButton from "../../component/longbutton";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputCardPassword from "../../component/inputCardPassword";
import { ToastLong } from "../../helper/toast";


const Signup = (props) => {
  const keyboardVerticalOffset = Platform.OS === "ios" ? -40 : -40;
  const { width, height } = Dimensions.get('window');

  const Schema = Yup.object().shape({
    first_name: Yup.string().required('Required'),
    last_name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    mobile: Yup.string().min(10, 'Phone should be 10 digits').required('Required'),
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
      first_name: '',
      last_name: '',
      email: '',
      mobile: '',
      password1: '',
      password2: '',

      estate_choice: '',
      estate_id: '',
      estate_name: '',
      estate_address: '',
      estate_country: '',
      estate_lga: '',
      estate_state: '',
    },
    validationSchema: Schema,
    onSubmit: values => {
      if (values.password1 !== values.password2)
        return ToastLong('Password and confirm password doesn\'t match')
      props.navigation.navigate("signup2", { values: formik.values })
    }
  })


  return (
    <Container flex={1} backgroundColor={"#FFFFFF"}>
      <KeyboardAvoidingView
        behavior="height"
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <ScrollView>
          <View
            style={{
              height: height / 2,
              width: "100%",
              backgroundColor: Colors.appPrimaryBlue,
            }}
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
              onPress={() => props.navigation.navigate("login")}
            >
              <AntDesign name="left" size={15} color="white" />
              <Text style={{ color: "white", paddingLeft: 5 }}>Back</Text>
            </TouchableOpacity>
            <Container marginLeft={5} marginTop={2}>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
              >
                Join Estate
              </Text>
            </Container>
            <Container marginLeft={4}>
              <Text style={{ color: "white", paddingLeft: 5 }}>
                Set up your account as a resident
              </Text>
            </Container>
          </View>
          <View
            style={{
              height: 700,
              width: "95%",
              backgroundColor: "white",
              marginTop: -(height / 3.1),
              elevation: 10,
              marginLeft: "2.5%",
              borderRadius: 5,
            }}
          >
            <Container
              backgroundColor={"#F1CD15"}
              width={45}
              height={1}
            ></Container>

            <Container marginTop={1} marginLeft={5}>
              <InputCard
                error={(formik.errors.first_name && formik.touched.first_name) ? formik.errors.first_name : ''}
                onChangeText={formik.handleChange('first_name')}
                onBlur={formik.handleBlur('first_name')}
                value={formik.values.first_name}
                text={"First Name"}
                placeholder={"Enter your first name"}
              />
            </Container>
            <Container marginTop={1} marginLeft={5}>
              <InputCard
                text={"Last Name"}
                error={(formik.errors.last_name && formik.touched.last_name) ? formik.errors.last_name : ''}
                onChangeText={formik.handleChange('last_name')}
                onBlur={formik.handleBlur('last_name')}
                value={formik.values.last_name}
                placeholder={"Enter your last name"}
              />
            </Container>
            <Container marginTop={1} marginLeft={5}>
              <InputCard
                text={"Email Address"}
                error={(formik.errors.email && formik.touched.email) ? formik.errors.email : ''}
                onChangeText={formik.handleChange('email')}
                onBlur={formik.handleBlur('email')}
                value={formik.values.email}
                placeholder={"Enter your email address"}
              />
            </Container>
            <Container marginTop={1} marginLeft={5}>
              <InputCard
                text={"Phone Number"}
                error={(formik.errors.mobile && formik.touched.mobile) ? formik.errors.mobile : ''}
                onChangeText={formik.handleChange('mobile')}
                onBlur={formik.handleBlur('mobile')}
                value={formik.values.mobile}
                placeholder={"Enter your phone number"}
                keyboardType={"numeric"}
              />
            </Container>

            <InputCardPassword
              text={"Password"}
              error={(formik.errors.password1 && formik.touched.password1) ? formik.errors.password1 : ''}
              onChangeText={formik.handleChange('password1')}
              onBlur={formik.handleBlur('password1')}
              value={formik.values.password1}
              placeholder={"Enter your password"}
            />
            <InputCardPassword
              text={"Confirm Password"}
              error={(formik.errors.password2 && formik.touched.password2) ? formik.errors.password2 : ''}
              onChangeText={formik.handleChange('password2')}
              onBlur={formik.handleBlur('password2')}
              value={formik.values.password2}
              placeholder={"Confirm your password"}
            />

            <Container marginTop={5} horizontalAlignment="center">
              <LongButton
                onPress={formik.handleSubmit}
                text={"Next"}
                borderWidth={3}
              />
            </Container>
            <Container
              direction="row"
              width={100}
              marginTop={2}
              horizontalAlignment="center"
            >
              <Container>
                <Text style={{ fontSize: 15 }}>Existing User?</Text>
              </Container>
              <TouchWrap onPress={() => props.navigation.navigate("login")}>
                <Text
                  style={{
                    fontSize: 15,
                    color: Colors.appPrimaryBlue,
                    paddingLeft: 5,
                  }}
                >
                  Login
                </Text>
              </TouchWrap>
            </Container>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </Container>
  );
};
export default Signup;