import { StatusBar } from "expo-status-bar";
import {
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
import { Button, H1 } from "../../helper/element";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import InputCard from "../../component/inputCard";
import { Colors, FONT_FAMILY, RH, RW, RF, RR } from "../../helper/constants";
import LongButton from "../../component/longbutton";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Yup from 'yup';
import { useMutation, useQuery } from "react-query";
import { listEstates, registerApi } from "../../api/auth";
import { useFormik } from "formik";
import SelectDropdown from "../../component/selectDropdown";

const Signup2 = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const keyboardVerticalOffset = Platform.OS === "ios" ? -40 : -40;
  const route = useRoute();
  const navigation = useNavigation();


  const Schema = Yup.object().shape({
    estate_id: Yup.string().required('Required'),
    // estate_name: Yup.string().required('Required'),
    estate_address: Yup.string().required('Required'),
    role: Yup.string().required('Required'),
    // estate_name: Yup.string().required('Required'),
  });

  const registrationMutation = useMutation(registerApi, {
    onSuccess: res => {
      setModalVisible(true)
    },
    onError: (err) => {
      Alert.alert('An error occurred', JSON.stringify(err?.response?.data))
    }
  })

  const formik = useFormik({
    initialValues: {
      first_name: route.params?.values?.first_name,
      last_name: route.params?.values?.last_name,
      email: route.params?.values?.email,
      mobile: route.params?.values?.mobile,
      password1: route.params?.values?.password1,
      password2: route.params?.values?.password2,

      estate_choice: 'JOIN',
      estate_id: '',
      estate_name: '',
      estate_address: 'Test',
      user_house_address: '',
      estate_country: 'Nigeria',
      estate_lga: 'Ikorodu',
      estate_state: 'Lagos',
      role: '',
    },
    validationSchema: Schema,
    onSubmit: values => {
      if (!formik.values.estate_name)
        return Alert.alert('The estate ID you entered is not valid')
      if (!isSelected)
        return Alert.alert('You have to accept the terms and conditions to proceed')
      registrationMutation.mutate(values)
    }
  })

  const estateListsQuery = useQuery(
    ['listEstates', formik?.values?.estate_id],
    () => listEstates(formik?.values?.estate_id),
    {
      onSuccess: res => {
        formik.setFieldValue('estate_name', res?.data?.name)
      },
      onError: res => {
        formik.setFieldValue('estate_name', '')
      }
    }
  );


  return (
    <Container flex={1} backgroundColor={"#FFFFFF"}>
      <KeyboardAvoidingView
        behavior="height"
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <ScrollView>
          <View
            style={{
              height: 620,
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
              onPress={() => props.navigation.goBack()}
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
                Enter your estate info
              </Text>
            </Container>
          </View>
          <View
            style={{
              height: 700,
              width: "95%",
              backgroundColor: "white",
              marginTop: "-130%",
              elevation: 10,
              marginLeft: "2.5%",
              borderRadius: 5,
            }}
          >
            <Container
              backgroundColor={"#F1CD15"}
              width={95}
              height={1}
            ></Container>

            <Container marginTop={1} marginLeft={5}>
              <InputCard
                error={(formik.errors.estate_id && formik.touched.estate_id) ? formik.errors.estate_id : ''}
                onChangeText={formik.handleChange('estate_id')}
                onBlur={formik.handleBlur('estate_id')}
                value={formik.values.estate_id}
                text={"Estate ID"}
                placeholder={"Enter Correct Estate ID"}
              />
            </Container>
            <Container marginTop={1} marginLeft={5}>
              <InputCard
                editable={false} selectTextOnFocus={false}
                error={(formik.errors.estate_name && formik.touched.estate_name) ? formik.errors.estate_name : ''}
                onChangeText={formik.handleChange('estate_name')}
                onBlur={formik.handleBlur('estate_name')}
                value={formik.values.estate_name}
                text={"Estate Name"}
                placeholder={"Automatically populated"}
              />
            </Container>
            <Container marginTop={1} marginLeft={5}>
              <SelectDropdown
                data={[
                  { label: 'Resident', value: 'RESIDENT' },
                  { label: 'Facility manager', value: 'FACILITY_MANAGER' },
                  { label: 'Staff', value: 'Staff' },
                  { label: 'Community Association Exco', value: 'COMMUNITY_ASSOCIATION_EXCO' },
                  { label: 'Property developer', value: 'PROPERTY_DEVELOPER' },
                  { label: 'Others', value: 'Others' },
                ]}
                placeholder={'Select a role'}
                text={'Role within the Estate'}
                error={(formik.errors.role && formik.touched.role) ? formik.errors.role : ''}
                onChangeText={item => formik.handleChange('role')(item?.value)}
                onBlur={formik.handleBlur('role')}
                value={formik.values.role}
              />
            </Container>
            {/* <Container marginTop={1} marginLeft={5}>
              <InputCard
                error={(formik.errors.estate_address && formik.touched.estate_address) ? formik.errors.estate_address : ''}
                onChangeText={formik.handleChange('estate_address')}
                onBlur={formik.handleBlur('estate_address')}
                value={formik.values.estate_address}

                text={"Street"} placeholder={"Select Your Street"} />
            </Container> */}

            <Container marginTop={1} marginLeft={5}>
              <InputCard
                error={(formik.errors.user_house_address && formik.touched.user_house_address) ? formik.errors.user_house_address : ''}
                onChangeText={formik.handleChange('user_house_address')}
                onBlur={formik.handleBlur('user_house_address')}
                value={formik.values.user_house_address}
                text={"House Address"}
                placeholder={"Enter house address correctly"}
              />
            </Container>

            <TouchableOpacity
              style={{
                width: "90%",
                height: "5%",
                borderRadius: 5,
                marginLeft: "5%",
                marginTop: 25,
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => setSelection(!isSelected)}
            >
              {!isSelected ? (
                <Container
                  width={6}
                  height={3}
                  borderRadius={4}
                  borderColor={Colors.appPrimaryBlue}
                  borderWidth={2}
                ></Container>
              ) : (
                <Feather
                  name="check-square"
                  size={24}
                  color={Colors.appPrimaryBlue}
                />
              )}
              <Container direction="row" height={3} verticalAlignment="center">
                <Text style={{ paddingLeft: 5 }}>I accept EstateIQ</Text>
                <Text
                  style={{
                    paddingLeft: 5,
                    color: Colors.appPrimaryBlue,
                  }}
                >
                  Terms and Conditions
                </Text>
              </Container>
            </TouchableOpacity>

            <Container marginTop={5} horizontalAlignment="center">
              <LongButton
                isLoading={registrationMutation.isLoading}
                text={"Submit"}
                borderWidth={3}
                onPress={() => formik.handleSubmit()}
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
                  Log in
                </Text>
              </TouchWrap>
            </Container>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <Modal backgroundColor={"rgba(0, 0, 0, 0.7)"} animationType="slide" visible={modalVisible} transparent>
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
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Congratulations!!!
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
              Your account registration was successful.Please check your email
              to verify your account.
            </Text>
          </Container>

          <Container marginTop={5}>
            <LongButton
              text={"Login"}
              onPress={() => { setModalVisible(false); navigation.navigate('login') }}
            />
          </Container>
          <Container
            width={100}
            height={20}
            verticalAlignment="center"
            horizontalAlignment="center"
          >
            <Container height={30} width={35} marginTop={40}>
              <ImageWrap source={AppIcons.estate} fit="contain" />
            </Container>
          </Container>
        </Container>
      </Modal>
      <StatusBar style="auto" />
    </Container>
  );
};
export default Signup2;
