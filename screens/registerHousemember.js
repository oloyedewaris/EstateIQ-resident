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

import { AntDesign } from "@expo/vector-icons";

import { useState } from "react";
// import { Colors } from "react-native/Libraries/NewAppScreen";
import InputCard from "../component/inputCard";
import { Colors, FONT_FAMILY, RH, RW, RF, RR } from "../helper/constants";
import LongButton from "../component/longbutton";
import { useFormik } from "formik";
import { useMutation } from "react-query";
import SelectDropdown from "../component/selectDropdown";
import { addMembers } from "../api/invite";
import * as Yup from 'yup';
import { ToastLong } from "../helper/toast";

const RegisterHouse = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const keyboardVerticalOffset = Platform.OS === "ios" ? 150 : 0;

  const Schema = Yup.object().shape({
    first_name: Yup.string().required('Required'),
    last_name: Yup.string().required('Required'),
    email: Yup.string().required('Required'),
    mobile: Yup.string().required('Required'),
    relationship: Yup.string().required('Required'),
  });

  const addMemberApi = useMutation(addMembers,
    {
      onSuccess: res => {
        setModalVisible(true)
        formik.resetForm()
      },
      onError: (err) => {
        Alert.alert('An error occurred', JSON.stringify(err?.response?.data))
      }
    }
  )

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      mobile: '',
      relationship: '',
      user_category: 'FAMILY_MEMBER',
    },
    validationSchema: Schema,
    onSubmit: values => {
      const formData = new FormData()
      formData.append('first_name', values.first_name)
      formData.append('last_name', values.last_name)
      formData.append('email', values.email)
      formData.append('mobile', values.mobile)
      formData.append('relationship', values.relationship)
      formData.append('user_category', values.user_category)
      addMemberApi.mutate(formData)
    }
  })


  return (
    <Container flex={1} backgroundColor={"#FFFFFF"}>
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
              marginTop: "11%",
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
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
            >
              Register HouseHold Member
            </Text>
          </Container>
          <Container marginLeft={4}>
            <Text style={{ color: "white", paddingLeft: 5 }}>
              Kindly fill this information
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
          <Container marginTop={1} marginLeft={5}>
            <InputCard
              error={(formik.errors.first_name && formik.touched.first_name) ? formik.errors.first_name : ''}
              onChangeText={formik.handleChange('first_name')}
              onBlur={formik.handleBlur('first_name')}
              value={formik.values.first_name}

              text={"First Name"}
              placeholder={"Enter your house member first name"}
            />
          </Container>
          <Container marginTop={1} marginLeft={5}>
            <InputCard
              error={(formik.errors.last_name && formik.touched.last_name) ? formik.errors.last_name : ''}
              onChangeText={formik.handleChange('last_name')}
              onBlur={formik.handleBlur('last_name')}
              value={formik.values.last_name}

              text={"Last Name"}
              placeholder={"Enter your house member last name"}
            />
          </Container>
          <Container marginTop={1} marginLeft={5}>
            <SelectDropdown
              data={[
                { label: 'Child', value: 'CHILD' },
                { label: 'Sibling', value: 'SIBLING' },
                { label: 'Parent', value: 'PARENT' },
                { label: 'Relative', value: 'RELATIVE ' },
                { label: 'Others', value: 'OTHERS' }
              ]}
              onChangeText={item => formik.handleChange('relationship')(item?.value)}
              error={(formik.errors.relationship && formik.touched.relationship) ? formik.errors.relationship : ''}
              onBlur={formik.handleBlur('relationship')}
              value={formik.values.relationship}

              text={"Relationship"}
              placeholder={"Select household member relationship"}
            />
          </Container>
          <Container marginTop={1} marginLeft={5}>
            <InputCard
              error={(formik.errors.email && formik.touched.email) ? formik.errors.email : ''}
              onChangeText={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
              value={formik.values.email}

              text={"Email Address"}
              placeholder={"Enter email address"}
            />
          </Container>

          <Container marginTop={1} marginLeft={5}>
            <InputCard
              error={(formik.errors.mobile && formik.touched.mobile) ? formik.errors.mobile : ''}
              onChangeText={formik.handleChange('mobile')}
              onBlur={formik.handleBlur('mobile')}
              value={formik.values.mobile}

              text={"Mobile Phone"}
              placeholder={"Enter your house member mobile phone"}
              keyboardType={'number-pad'}
            />
          </Container>

          <Container marginTop={5} horizontalAlignment="center">
            <LongButton
              onPress={formik.handleSubmit}
              isLoading={addMemberApi.isLoading}
              text={"Invite"}
            />
          </Container>
        </View>
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
            <Container width={90} direction="row" marginTop={3}>
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
                  User Invited
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
                text={"Okay"}
                width={50}
                np={50}
                onPress={() => props.navigation.goBack()}
              />
            </Container>
          </Container>
        </Container>
      </Modal>
    </Container>
  );
};
export default RegisterHouse;
