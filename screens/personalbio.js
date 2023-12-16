import {
  Text,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Container } from "../helper/index";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import InputCard from "../component/inputCard";
import { Colors } from "../helper/constants";
import LongButton from "../component/longbutton";
import SelectDropdown from "../component/selectDropdown";
import { useFormik } from "formik";
import { useMutation } from "react-query";
import * as Yup from 'yup';
import { getUserEstateDetails, updateBioApi } from "../api/user";
import { ToastLong } from "../helper/toast";

const Personalbio = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const userEstateMutation = useMutation(getUserEstateDetails, {
    onSuccess: res => {
      const userEstateDetail = res?.data
      formik.setValues({
        first_name: userEstateDetail?.estate_user?.user?.first_name,
        last_name: userEstateDetail?.estate_user?.user?.last_name,
        gender: userEstateDetail?.gender,
        address: userEstateDetail?.address,
      })
    }
  })

  useEffect(() => {
    userEstateMutation.mutate()
  }, [])

  const Schema = Yup.object().shape({
    first_name: Yup.string().required('Required'),
    last_name: Yup.string().required('Required'),
    gender: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
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
      first_name: '',
      last_name: '',
      gender: '',
      address: '',
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
            Personal Bio
          </Text>
        </Container>
        <Container marginLeft={4} marginTop={3} width={90}>
          <Text style={{ color: "white", paddingLeft: 5 }}>
            Your basic information
          </Text>
        </Container>
        <Container
          height={80}
          width={95}
          backgroundColor={"white"}
          elevation={10}
          marginTop={5}
          marginLeft={2.5}
          borderRadius={7}
        >
          <Container marginLeft={5} marginTop={3}>
            <InputCard
              error={(formik.errors.first_name && formik.touched.first_name) ? formik.errors.first_name : ''}
              onChangeText={formik.handleChange('first_name')}
              onBlur={formik.handleBlur('first_name')}
              value={formik.values.first_name}
              text={"First Name"}
              placeholder={'Your First Name'}
            />
          </Container>

          <Container marginLeft={5}>
            <InputCard
              error={(formik.errors.last_name && formik.touched.last_name) ? formik.errors.last_name : ''}
              onChangeText={formik.handleChange('last_name')}
              onBlur={formik.handleBlur('last_name')}
              value={formik.values.last_name}
              text={"Last Name"}
              placeholder={'Your Last Name'}
            />
          </Container>

          <Container direction="row" marginTop={2} marginLeft={5}>
            <Container width={90}>
              <Container marginBottom={1}>
                <Text>Gender</Text>
              </Container>
              <SelectDropdown
                data={[
                  { label: 'Female', value: 'FEMALE' },
                  { label: 'Male', value: 'MALE' },
                ]}
                placeholder={'Select gender'}
                text={'Gender'}
                error={(formik.errors.gender && formik.touched.gender) ? formik.errors.gender : ''}
                onChangeText={item => formik.handleChange('gender')(item?.value)}
                onBlur={formik.handleBlur('gender')}
                value={formik.values.gender}
              />
            </Container>
          </Container>
          <Container marginLeft={5}>
            <InputCard
              error={(formik.errors.address && formik.touched.address) ? formik.errors.address : ''}
              onChangeText={formik.handleChange('address')}
              onBlur={formik.handleBlur('address')}
              value={formik.values.address}
              text={"Address"}
              placeholder={"Your home address"}
            />
          </Container>

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
                  Personal Bio updated
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
export default Personalbio;
