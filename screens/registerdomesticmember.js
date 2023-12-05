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
  Image,
  Modal,
  Alert,
} from "react-native";
import { Container, ImageWrap, TouchWrap } from "../helper/index";
import { AppIcons } from "../helper/images";
import { AntDesign } from "@expo/vector-icons";
import { useContext, useRef, useState } from "react";
import InputCard from "../component/inputCard";
import { Colors } from "../helper/constants";
import LongButton from "../component/longbutton";
import * as Yup from 'yup';
import { addMembers } from "../api/invite";
import { useMutation } from "react-query";
import { useFormik } from "formik";
import * as ImagePicker from 'expo-image-picker';
import { ToastLong } from "../helper/toast";
import BottomSheet from "../component/bottomSheet";
import { GlobalContext } from "../context/Provider";
import SelectDropdown from "../component/selectDropdown";


const RegisterDomestic = (props) => {
  const { authState: { user } } = useContext(GlobalContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState('')
  const cameraRef = useRef();

  const updateImage = (file) => {
    let localUri = file.uri;
    let filename = localUri.split('/').pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    const fileToUse = {
      name: `${user?.first_name}-${user?.last_name}-${Date.now()}.${match[1] || 'png'}`,
      type,
      uri: Platform.OS === "android" ? file?.uri : file?.uri?.replace("file://", "")
    }

    formik.setFieldValue("profile_image", fileToUse);
    setImage(file?.uri);
  }


  const pickImage = async () => {
    cameraRef.current.close()
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      updateImage(result.assets[0]);
    }
  };

  const openCamera = async () => {
    cameraRef.current.close()
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      updateImage(result.assets[0]);
    }
  };


  const Schema = Yup.object().shape({
    first_name: Yup.string().required('Required'),
    last_name: Yup.string().required('Required'),
    designation: Yup.string().required('Required'),
    email: Yup.string().required('Required').email('Invalid email address'),
    mobile: Yup.string().required('Required'),
    gender: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
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
      designation: '',
      email: '',
      mobile: '',
      gender: '',
      address: '',
      user_category: 'DOMESTIC_STAFF',
    },
    validationSchema: Schema,
    onSubmit: values => {
      const formData = new FormData()
      formData.append('first_name', values.first_name)
      formData.append('last_name', values.last_name)
      formData.append('designation', values.designation)
      formData.append('email', values.email)
      formData.append('mobile', values.mobile)
      formData.append('gender', values.gender)
      formData.append('address', values.address)
      formData.append('user_category', values.user_category)
      if (!values.profile_image)
        return Alert.alert('Form error', 'Please insert an image to proceed')
      formData.append('profile_image', values.profile_image)
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
              Register Domestic Staff
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
            height: 800,
            width: "95%",
            backgroundColor: "white",
            marginTop: "-130%",
            elevation: 10,
            marginLeft: "2.5%",
            borderRadius: 5,
          }}
        >
          <TouchableOpacity onPress={() => cameraRef.current.open()}>
            <Container width={30} height={10} marginLeft={33} marginTop={5}>
              {image ? (
                <Image style={{ width: 60, height: 60, borderRadius: 100 }} source={{ uri: image }} fit="contain" />
              ) : (
                <ImageWrap source={AppIcons.prof} fit="contain" />
              )}
            </Container>
          </TouchableOpacity>

          <Container marginTop={2} marginLeft={5} direction="row">
            <Container width={40}>
              <Container marginBottom={1}>
                <Text> First Name</Text>
              </Container>
              <Container width={100}>
                <TextInput
                  style={{
                    height: 45,
                    width: "40%",

                    borderRadius: 2,
                    paddingLeft: 10,
                    borderColor: (formik.errors.first_name && formik.touched.first_name) ? "#D00000" : "#D9D9D9",
                    borderWidth: 1,
                  }}
                  error={(formik.errors.first_name && formik.touched.first_name) ? formik.errors.first_name : ''}
                  onChangeText={formik.handleChange('first_name')}
                  onBlur={formik.handleBlur('first_name')}
                  value={formik.values.first_name}

                  placeholder={"Staff first name"}
                ></TextInput>
              </Container>
            </Container>

            <Container width={40} marginLeft={5}>
              <Container marginBottom={1}>
                <Text> Last Name</Text>
              </Container>
              <Container width={100}>
                <TextInput
                  style={{
                    height: 45,
                    width: "40%",

                    borderRadius: 2,
                    paddingLeft: 10,
                    borderColor: (formik.errors.last_name && formik.touched.last_name) ? "#D00000" : "#D9D9D9",
                    borderWidth: 1,
                  }}
                  // error={(formik.errors.last_name && formik.touched.last_name) ? formik.errors.last_name : ''}
                  onChangeText={formik.handleChange('last_name')}
                  onBlur={formik.handleBlur('last_name')}
                  value={formik.values.last_name}

                  placeholder={"Staff last name"}
                ></TextInput>
              </Container>
            </Container>
          </Container>

          <Container marginTop={1} marginLeft={5}>
            <SelectDropdown
              data={[
                { label: 'Security', value: 'SECURITY' },
                { label: 'House keeper', value: 'HOUSE_KEEPER' },
                { label: 'Lesson teacher', value: 'LESSON_TEACHER' },
                { label: 'Driver', value: 'DRIVER ' },
                { label: 'Gardener', value: 'GARDENER' },
                { label: 'Nurse', value: 'NURSE' },
                { label: 'Chef', value: 'CHEF' },
                { label: 'Others', value: 'OTHERS' },
              ]}

              onChangeText={item => formik.handleChange('designation')(item?.value)}
              error={(formik.errors.designation && formik.touched.designation) ? formik.errors.designation : ''}
              onBlur={formik.handleBlur('designation')}
              value={formik.values.designation}

              text={"Designation"}
              placeholder={"Select designation"}
            />
          </Container>
          <Container marginTop={1} marginLeft={5}>
            <InputCard
              error={(formik.errors.email && formik.touched.email) ? formik.errors.email : ''}
              onChangeText={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
              value={formik.values.email}

              text={"Email address"}
              placeholder={"Enter email address of domestic staff"}
              keyboardType={'email-address'}
            />
          </Container>
          <Container marginTop={1} marginLeft={5}>
            <InputCard
              error={(formik.errors.mobile && formik.touched.mobile) ? formik.errors.mobile : ''}
              onChangeText={formik.handleChange('mobile')}
              onBlur={formik.handleBlur('mobile')}
              value={formik.values.mobile}

              text={"Mobile Phone"}
              placeholder={"Enter mobile phone of domestic staff"}
              keyboardType={'phone-pad'}
            />
          </Container>
          <Container marginTop={1} marginLeft={5}>
            <SelectDropdown
              data={[
                { label: 'Male', value: 'MALE' },
                { label: 'Female', value: 'FEMALE' },
              ]}

              onChangeText={item => formik.handleChange('gender')(item?.value)}
              error={(formik.errors.gender && formik.touched.gender) ? formik.errors.gender : ''}
              onBlur={formik.handleBlur('gender')}
              value={formik.values.gender}

              text={"Gender"} placeholder={"Select gender"} />
          </Container>

          <Container marginTop={1} marginLeft={5}>
            <InputCard
              error={(formik.errors.address && formik.touched.address) ? formik.errors.address : ''}
              onChangeText={formik.handleChange('address')}
              onBlur={formik.handleBlur('address')}
              value={formik.values.address}

              text={"Permanent Address"}
              placeholder={"Enter home address of domestic staff"}
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
      <BottomSheet ref={cameraRef} height={150}>
        <View style={{ marginHorizontal: 17, marginVertical: 12 }}>
          <TouchableOpacity
            onPress={() => openCamera()}
            style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: 8 }}
          >
            {/* <CustomIcon size={normalize(25)} name='camera' /> */}
            <Text style={{ fontSize: 18, fontWeight: '400', marginLeft: 10 }}>Take a picture</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => pickImage()}
            style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: 8 }}
          >
            {/* <CustomIcon size={25} name='image' /> */}
            <Text style={{ fontSize: 18, fontWeight: '400', marginLeft: 10 }}>Choose from gallery</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
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
export default RegisterDomestic;
