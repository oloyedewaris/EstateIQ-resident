import {
  Text,
  View,
  Platform,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert,
  Dimensions,
} from "react-native";
import { Container, ImageWrap, TouchWrap } from "../helper/index";
import { AppIcons } from "../helper/images";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useCallback, useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import InputCard from "../component/inputCard";
import { Colors } from "../helper/constants";
import LongButton from "../component/longbutton";
import { useFormik } from "formik";
import { useMutation, useQuery } from "react-query";
import { createPrivateCodeApi } from "../api/accessCode";
import * as Yup from 'yup';
import SelectDropdown from "../component/selectDropdown";
import onShare from "../utils/share";
import { getUserEstateDetails } from "../api/user";
import { formatAMPM } from "../utils/formatDate";
import { useFocusEffect } from "@react-navigation/native";
import { handleBackendError } from "../utils/errors";
import copyToClipboard from "../utils/clipBoard";

const PrivateGenerateCode = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [addressModalVisible, setAddressModalVisible] = useState(false);
  const [fetchedCode, setFetchedCode] = useState('');
  const [showArrival, setShowArrival] = useState(false);
  const [showDeparture, setShowDeparture] = useState(false);
  const { width, height } = Dimensions.get('window');


  const userEstateDetail = useQuery(['getUserEstateDetails'], getUserEstateDetails)
  const userDetailsAddress = userEstateDetail?.data?.data?.address

  useFocusEffect(
    useCallback(() => {
      formik.setFieldValue('from_date', new Date().toISOString());
      formik.setFieldValue('to_date', new Date().toISOString());
    }, [])
  )


  const onChangeArrival = (selectedDate) => {
    const newISOFormat = new Date(selectedDate).toISOString()
    formik.setFieldValue('from_date', newISOFormat);
    setShowArrival(false);
  };

  const onChangeDeparture = (selectedDate) => {
    const newISOFormat = new Date(selectedDate).toISOString()
    formik.setFieldValue('to_date', newISOFormat);
    setShowDeparture(false);
  };


  const Schema = Yup.object().shape({
    first_name: Yup.string().required('Required'),
    last_name: Yup.string().required('Required'),
    from_date: Yup.string().required('Required'),
    to_date: Yup.string().required('Required'),
    access_type: Yup.string().required('Required'),
    category: Yup.string().required('Required'),
  });

  const createCodeMutation = useMutation(createPrivateCodeApi,
    {
      onSuccess: res => {
        setModalVisible(true)
        setFetchedCode(res?.data?.access_code)
        // formik.resetForm()
      },
      onError: (err) => {
        const setHomeError = err?.response?.data?.error === 'Set home address in profile page before generating access code.'
        if (setHomeError)
          setAddressModalVisible(true)
        else
          Alert.alert('An error occurred', handleBackendError(err?.response?.data))
      }
    }
  )

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      address: '',
      from_date: new Date().toISOString(),
      to_date: new Date().toISOString(),
      access_type: '',
      category: '',
    },
    validationSchema: Schema,
    onSubmit: values => {
      if (values?.access_type === 'PERMANENT')
        delete values.from_date
      createCodeMutation.mutate(values)
    }
  })

  const formattedToDate = `${new Date(formik.values?.to_date).toLocaleDateString()} ${formatAMPM(new Date(formik.values?.to_date))}`;
  const formattedFromDate = `${new Date(formik.values?.from_date).toLocaleDateString()} ${formatAMPM(new Date(formik.values?.from_date))}`;

  const shareString = (formik.values?.access_type && formik.values?.access_type) === 'PERMANENT' ? `
  Hi ${formik.values?.first_name} ${formik.values?.last_name},
  
  Your permanent access code is 
  
  ${fetchedCode}
  
  Address : ${userDetailsAddress},
  
  expires on ${formattedToDate}

  Powered by: www.estateiq.ng 
  ` : `
  Hi ${formik.values?.first_name} ${formik.values?.last_name},
  
  Your one-time access code is 
  
  ${fetchedCode}
  
  Address : ${userDetailsAddress},
  
  valid from ${formattedFromDate} to ${formattedToDate}
  
  Powered by: www.estateiq.ng 
  `

  return (
    <Container flex={1} backgroundColor={"#FFFFFF"}>
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
          <Container marginLeft={5} marginTop={2}>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
            >
              Generate Access Code
            </Text>
          </Container>
          <Container marginLeft={4} marginTop={2}>
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
            marginTop: -(height / 3.1),
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
              value={formik.values?.first_name}
              text={"First Name"}
              placeholder={"(Guest)"}
            />
          </Container>
          <Container marginTop={1} marginLeft={5}>
            <InputCard
              error={(formik.errors.last_name && formik.touched.last_name) ? formik.errors.last_name : ''}
              onChangeText={formik.handleChange('last_name')}
              onBlur={formik.handleBlur('last_name')}
              value={formik.values?.last_name}

              text={"Last Name"}
              placeholder={"(Guest)"}
            />
          </Container>
          <Container marginTop={1} marginLeft={5}>
            <SelectDropdown
              data={[
                { label: 'Visitor', value: 'VISITOR' },
                { label: 'Artisan', value: 'ARTISAN' },
                { label: 'Taxi', value: 'TAXI' },
                { label: 'Delivery', value: 'DELIVERY' },
                { label: 'Event', value: 'EVENT' },
                { label: 'Others', value: 'OTHERS' }
              ]}
              error={(formik.errors.category && formik.touched.category) ? formik.errors.category : ''}
              onChangeText={item => formik.handleChange('category')(item?.value)}
              onBlur={formik.handleBlur('category')}
              value={formik.values?.category}

              text={"Guest Type"}
              placeholder={"Select"}
            />
          </Container>
          <Container marginTop={1} marginLeft={5}>
            <SelectDropdown
              data={[
                { label: 'One Time', value: 'ONE_TIME' },
                { label: 'Permanent', value: 'PERMANENT' }
              ]}
              error={(formik.errors.access_type && formik.touched.access_type) ? formik.errors.access_type : ''}
              onChangeText={item => formik.handleChange('access_type')(item?.value)}
              onBlur={formik.handleBlur('access_type')}
              value={formik.values?.access_type}

              text={"Access Type"}
              placeholder={"Select"}
            />
          </Container>

          {(formik.values?.access_type && formik.values?.access_type) === 'PERMANENT' ? (
            <TouchableOpacity onPress={() => setShowDeparture(true)}>
              <Container marginTop={1} marginLeft={5}>
                <View removeClippedSubviews={true} pointerEvents="none">
                  <InputCard
                    selectTextOnFocus={false}
                    error={(formik.errors.to_date && formik.touched.to_date) ? formik.errors.to_date : ''}
                    onChangeText={formik.handleChange('to_date')}
                    onBlur={formik.handleBlur('to_date')}
                    value={formik.values?.to_date && formattedToDate}

                    text={"Expiry Date and Time"}
                    placeholder={"DD/MM/YYYY:TT"}
                  />
                </View>
              </Container>
            </TouchableOpacity>
          ) : (
            <>
              <TouchableOpacity onPress={() => setShowArrival(true)}>
                <Container marginTop={1} marginLeft={5}>
                  <View removeClippedSubviews={true} pointerEvents="none">
                    <InputCard
                      selectTextOnFocus={false}
                      error={(formik.errors.from_date && formik.touched.from_date) ? formik.errors.from_date : ''}
                      onChangeText={formik.handleChange('from_date')}
                      onBlur={formik.handleBlur('from_date')}
                      value={formik.values?.from_date && formattedFromDate}
                      text={"Arrival Date and Time"}
                      placeholder={"DD/MM/YYYY"}
                    />
                  </View>
                </Container>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShowDeparture(true)}>
                <Container marginTop={1} marginLeft={5}>
                  <View removeClippedSubviews={true} pointerEvents="none">
                    <InputCard
                      selectTextOnFocus={false}
                      error={(formik.errors.to_date && formik.touched.to_date) ? formik.errors.to_date : ''}
                      onChangeText={formik.handleChange('to_date')}
                      onBlur={formik.handleBlur('to_date')}
                      value={formik.values?.to_date && formattedToDate}
                      text={"Departure Date and Time"}
                      placeholder={"DD/MM/YYYY:TT"}
                    />
                  </View>
                </Container>
              </TouchableOpacity>
            </>
          )}


          <DateTimePickerModal
            minimumDate={new Date()}
            isVisible={showArrival}
            mode="datetime"
            onCancel={() => setShowArrival(false)}
            onConfirm={onChangeArrival}
          />
          <DateTimePickerModal
            minimumDate={new Date()}
            isVisible={showDeparture}
            mode="datetime"
            onCancel={() => setShowDeparture(false)}
            onConfirm={onChangeDeparture}
          />

          <Container marginTop={5} horizontalAlignment="center">
            <LongButton
              text={"Generate"}
              isLoading={createCodeMutation.isLoading}
              onPress={() => formik.handleSubmit()}
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
            <Container width={10} marginLeft={70}>
              <TouchWrap onPress={() => setModalVisible(false)}>
                <AntDesign name="close" size={24} color="black" />
              </TouchWrap>
            </Container>
            <Container width={90} direction="row" marginTop={3}>
              <Container
                width={90}
                verticalAlignment="center"
                horizontalAlignment="center"
              >
                <Text
                  style={{
                    color: Colors.appPrimaryBlue,
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  Access Code
                </Text>
              </Container>
            </Container>

            <Container
              marginTop={2}
              width={90}
              horizontalAlignment="center"
              verticalAlignment="center"
              direction="row"
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 26,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {fetchedCode}
              </Text>
              <TouchableOpacity onPress={() => copyToClipboard(fetchedCode)}>
                <Container marginLeft={3} height={3} width={10}>
                  <FontAwesome5 name="clipboard" size={20} color="black" />
                </Container>
              </TouchableOpacity>

            </Container>

            <Container
              marginTop={4}
              width={90}
              verticalAlignment="center"
              horizontalAlignment="center"
            >
              <LongButton
                text={"Share"}
                width={50}
                np={50}
                onPress={() => {
                  onShare(shareString);
                  props.navigation.goBack()
                }}
              />
            </Container>
          </Container>
        </Container>
      </Modal>

      <Modal animationType="slide" visible={addressModalVisible} transparent>
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
                <Text style={{ fontSize: 20, textAlign: 'center', paddingHorizontal: 10 }}>
                  To start using this feature, you have to first set your home address for your guests. Kindly set your home address here
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
                onPress={() => props.navigation.navigate('personalbio')}
                text={"Set Home Address"} width={50} np={50} />
            </Container>
          </Container>
        </Container>
      </Modal>
    </Container>
  );
};
export default PrivateGenerateCode;
