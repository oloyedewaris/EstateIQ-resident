import {
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Modal,
  Alert,
} from "react-native";
import { Container, ImageWrap } from "../helper/index";
import { AppIcons } from "../helper/images";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useMutation } from "react-query";
import { useFormik } from "formik";
import { reportIssueApi } from "../api/reportIssue";
import * as Yup from 'yup';
import SelectDropdown from "../component/selectDropdown";
import InputCard from "../component/inputCard";
import { ToastLong } from "../helper/toast";
import { useState } from "react";
import { Colors } from "../helper/constants";
import LongButton from "../component/longbutton";

const ReportIssueFill = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const Schema = Yup.object().shape({
    title: Yup.string().required('Required'),
    message: Yup.string().required('Required'),
    receivers: Yup.string().required('Required'),
    // reason: Yup.string().required('Required'),
  });

  const submitMutation = useMutation(reportIssueApi,
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
      title: '',
      message: '',
      receivers: '',
      reason: '',
    },
    validationSchema: Schema,
    onSubmit: values => {
      submitMutation.mutate(values)
    }
  })


  return (
    <Container flex={1} backgroundColor={"#FFFFFF"} paddingHorizontal={6}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Container verticalAlignment="center" marginTop={5} direction="row">
            <AntDesign name="left" color={"black"} size={20} />
            <Text style={{ marginLeft: 10 }}>Back</Text>
          </Container>
        </TouchableOpacity>

        <SelectDropdown
          text='Issue Category'
          data={[
            { label: 'Security', value: 'Security' },
            { label: 'Infrastructure', value: 'Infrastructure' },
            { label: 'Electricity', value: 'Electricity' },
            { label: 'Drainage', value: 'Drainage' },
            { label: 'Sewage', value: 'Sewage' },
            { label: 'Waste', value: 'Waste' },
            { label: 'Pollution', value: 'Pollution' },
            { label: 'Payment', value: 'Payment' },
            { label: 'Others', value: 'Others' },
          ]}
          onChangeText={item => formik.handleChange('title')(item?.value)}
          error={(formik.errors.title && formik.touched.title) ? formik.errors.title : ''}
          onBlur={formik.handleBlur('title')}
          value={formik.values.title}
          placeholder="Select category"
        />

        <Container>
          <Text style={{ fontWeight: "400", fontSize: 16, marginTop: 30 }}>
            Message
          </Text>
          <TextInput
            onChangeText={formik.handleChange('message')}
            onBlur={formik.handleBlur('message')}
            value={formik.values.message}

            style={{
              borderWidth: 1,
              paddingBottom: 80,
              borderColor: (formik.errors.message && formik.touched.message) ? "#D00000" : "#D9D9D9",
              borderRadius: 3,
              marginTop: 3,
              paddingLeft: 15,
              justifyContent: "flex-start",
            }}
            multiline
          />
        </Container>

        <SelectDropdown
          data={[
            { label: 'Chef security officer', value: 'CHIEF_SECURITY_OFFICER' },
            { label: 'Financial secretary', value: 'FINANCIAL_SECRETARY' },
            { label: 'Estate manager', value: 'ESTATE_MANAGER' },
            { label: 'Exco', value: 'EXCOS' },
          ]}

          onChangeText={item => formik.handleChange('receivers')(item?.value)}
          error={(formik.errors.receivers && formik.touched.receivers) ? formik.errors.receivers : ''}
          onBlur={formik.handleBlur('receivers')}
          value={formik.values.receivers}
          text='Receiver'
          placeholder="Select"
        />

        <SelectDropdown
          data={[
            { label: 'Low', value: 'LOW' },
            { label: 'Medium', value: 'MEDIUM' },
            { label: 'High', value: 'HIGH' },
          ]}

          onChangeText={item => formik.handleChange('reason')(item?.value)}
          text='Priority'
          error={(formik.errors.reason && formik.touched.reason) ? formik.errors.reason : ''}
          onBlur={formik.handleBlur('reason')}
          value={formik.values.reason}
          placeholder="Choose priority level"
        />

        <TouchableOpacity
          disabled={submitMutation.isLoading}
          onPress={formik.handleSubmit}
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 14,
            backgroundColor: "#1037B5",
            marginTop: 80,
            borderRadius: 10,
          }}
        >
          {submitMutation.isLoading ? (
            <ActivityIndicator color='white' />
          ) : (
            <Text style={{ fontWeight: "500", fontSize: 18, color: "white" }}>
              Submit
            </Text>
          )}
        </TouchableOpacity>
        <Container horizontalAlignment="center">
          <ImageWrap
            source={AppIcons.logo}
            fit="contain"
            height={30}
            width={40}
          />
        </Container>
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
                  Issue Submitted
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
                onPress={() => { setModalVisible(false); props.navigation.navigate('ReportAnIssue') }}
                text={"View Issues"} width={50} np={50} />
            </Container>
          </Container>
        </Container>
      </Modal>
    </Container>
  );
};
export default ReportIssueFill;
