import {
  Text,
  View,
  TextInput,
  Platform,
  TouchableOpacity,
  ScrollView,
  Modal,
  ActivityIndicator,
  Image,
  Alert,
} from "react-native";
import { Container, ImageWrap, TouchWrap } from "../helper/index";
import { AppIcons } from "../helper/images";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { EvilIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useContext, useRef, useState } from "react";
import LongButton from "../component/longbutton";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../helper/constants";
import Setting from "../component/settingbutton";
import { GlobalContext } from "../context/Provider";
import { getEstateId, getUserEstateDetails } from "../api/user";
import BottomSheet from "../component/bottomSheet";
import * as ImagePicker from 'expo-image-picker';
import axiosInstance from "../utils/axiosInstance";
import { ToastLong } from "../helper/toast";
import { logout } from "../context/actions/auth";
import { useQuery } from "react-query";

const Editprofile = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { authState: { user, estateData }, authDispatch } = useContext(GlobalContext);
  const cameraRef = useRef();
  const [uploading, setUploading] = useState(false)

  const userDetailsQuery = useQuery(['getUserEstateDetails'], getUserEstateDetails)
  const profileImage = userDetailsQuery?.data?.data?.profile_image;

  const updateImageFn = async (formData) => {
    const id = await getEstateId();
    setUploading(true)
    return axiosInstance.post(
      `/estate_users/estate_user_profile_image_update/?estate_id=${id}`,
      formData,
      { headers: { "Content-Type": "multipart/form-data", Accept: "application/json" } }
    )
      .then(async res => {
        Alert.alert('Successful', 'Profile image updated')
        await userDetailsQuery.refetch()
      })
      .catch(err => {
        Alert.alert('An error occurred', JSON.stringify(err?.response?.data))
      })
      .finally(() => setUploading(false))
  }


  const updateImage = (file) => {
    let localUri = file.uri;
    let filename = localUri.split('/').pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    const formData = new FormData();
    const fileToUse = {
      name: `${user?.first_name}-${user?.last_name}-${Date.now()}.${match[1] || 'png'}`,
      type,
      uri: Platform.OS === "android" ? file?.uri : file?.uri?.replace("file://", "")
    }

    formData.append("profile_image", fileToUse);

    return updateImageFn(formData)
  }

  const pickImage = async () => {
    cameraRef.current.close()
    // No permissions request is necessary for launching the image library
    // ImagePicker.
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 0.2,
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
      aspect: [4, 4],
      quality: 0.2,
    });

    if (!result.canceled) {
      updateImage(result.assets[0]);
    }
  };

  return (
    <Container flex={1} backgroundColor={"#FFFFFF"}>
      <ScrollView>
        <TouchableOpacity
          style={{
            marginTop: "11%",
            marginLeft: "5%",
            flexDirection: "row",
            height: 20,
            width: 100,

            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Settings")}
        >
          <AntDesign name="left" size={15} color="black" />
          <Text style={{ color: "black", paddingLeft: 5 }}>Back</Text>
        </TouchableOpacity>
        <Container marginTop={2} marginLeft={5}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Edit profile</Text>
        </Container>
        <Container
          height={15}
          width={90}
          marginLeft={5}
          borderRadius={10}
          marginTop={2}
          verticalAlignment="center"
          direction="row"
        >
          <TouchableOpacity onPress={() => cameraRef.current.open()}>
            <Container width={17} height={9} borderRadius={50}>
              {uploading ? (
                <View style={{ backgroundColor: '#eee', justifyContent: 'center', alignItems: 'center', width: 60, height: 60, borderRadius: 1000 }}>
                  <ActivityIndicator size={35} color={Colors.appPrimaryBlue} />
                </View>
              ) : (
                <>
                  {profileImage ? (
                    <Image style={{ width: 60, height: 60, borderRadius: 100 }} source={{ uri: `https://api.estateiq.ng/${profileImage}` }} fit="contain" />
                  ) : (
                    <ImageWrap source={AppIcons.avatar} fit="contain" />
                  )}
                </>
              )}
              <Container
                backgroundColor={Colors.appPrimaryBlue}
                width={8}
                height={4}
                borderRadius={20}
                verticalAlignment="center"
                horizontalAlignment="center"
                marginLeft={4}
                marginTop={-2}
              >
                <EvilIcons name="camera" size={24} color={"white"} />
              </Container>
            </Container>
          </TouchableOpacity>
          <Container width={43} height={10} marginLeft={3}>
            <Container width={67} height={5} verticalAlignment="center">
              <Text
                style={{ color: "black", fontSize: 15, fontWeight: "bold" }}
              >
                {user?.first_name} {user?.last_name}
              </Text>
            </Container>
            <Container verticalAlignment="center" width={67}>
              <Text
                style={{
                  color: Colors.appTextGrey,
                  fontSize: 13,
                }}
              >
                {user?.email}
              </Text>
            </Container>
          </Container>
          <Container height={10} width={25} verticalAlignment="center">
            <TouchWrap onPress={() => navigation.navigate('changeEstate')}>
              <Container
                padding={2}
                backgroundColor={Colors.appPrimaryBlue}
                borderRadius={5}
                horizontalAlignment="center"
                verticalAlignment="center"
              >
                <Text style={{ color: "white", fontSize: 12 }}>
                  Switch Estate
                </Text>
              </Container>
            </TouchWrap>
          </Container>
        </Container>
        <Container
          width={100}
          height={0.3}
          marginTop={1}
          backgroundColor={Colors.appInactiveGrey}
        ></Container>
        <Container height={10} width={90} marginLeft={5} marginTop={3}>
          <Container height={5} width={90} verticalAlignment="center">
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Estate Name
            </Text>
          </Container>
          <Container height={5} width={90} verticalAlignment="center">
            <Text
              style={{
                fontSize: 14,
                color: Colors.appTextGrey,
              }}
            >
              {estateData?.estate?.name}
            </Text>
          </Container>
        </Container>

        <Container height={10} width={90} marginLeft={5} marginTop={3}>
          <Container height={5} width={90} verticalAlignment="center">
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>Estate ID</Text>
          </Container>
          <Container height={5} width={90} verticalAlignment="center">
            <Text
              style={{
                fontSize: 14,
                color: Colors.appTextGrey,
              }}
            >
              {estateData?.estate?.estate_id}
            </Text>
          </Container>
        </Container>

        <Container height={10} width={90} marginLeft={5} marginTop={3}>
          <Container height={5} width={90} verticalAlignment="center">
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Estate Type
            </Text>
          </Container>
          <Container height={5} width={90} verticalAlignment="center">
            <Text
              style={{
                fontSize: 14,
                color: Colors.appTextGrey,
              }}
            >
              {estateData?.estate?.estate_type}
            </Text>
          </Container>
        </Container>

        <Container width={90} marginLeft={5} marginTop={3}>
          <Container width={90} verticalAlignment="center">
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>Password</Text>
          </Container>
          <Container width={90} verticalAlignment="center">
            <TextInput
              style={{
                height: 35,
                width: "100%",
                backgroundColor: Colors.appInactiveGrey,
                borderRadius: 5,
                paddingLeft: 10,
              }}
              editable={false}
              placeholder="******************"
            ></TextInput>

            <Container
              horizontalAlignment="flex-end"
              marginTop={2}
              marginBottom={3}
            >
              <TouchWrap onPress={() => navigation.navigate('setPassword')} height={3}>
                <Text
                  style={{ color: Colors.appPrimaryBlue, fontWeight: "bold" }}
                >
                  Change Password ?
                </Text>
              </TouchWrap>
            </Container>
          </Container>
        </Container>

        <Container
          width={100}
          height={0.2}
          marginTop={1}
          backgroundColor={Colors.appInactiveGrey}
        ></Container>
        <Container marginTop={2} marginLeft={5}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Basic information
          </Text>
        </Container>
        <Container marginTop={2}>
          <Setting
            icon={<FontAwesome name="user-o" size={22} color={"black"} />}
            text={"Personal bio"}
            onPress={() => navigation.navigate("personalbio")}
          />
        </Container>

        <Container marginTop={2}>
          <Setting
            icon={<Feather name="phone-call" size={24} color="black" />}
            text={"Contact info"}
            onPress={() => navigation.navigate("contactinfo")}
          />
        </Container>
        <TouchWrap onPress={() => setModalVisible(true)}>
          <Container
            direction="row"
            marginLeft={10}
            marginTop={5}
            marginBottom={5}
          >
            <Container>
              <SimpleLineIcons name="logout" size={24} color="red" />
            </Container>
            <Container marginLeft={5}>
              <Text style={{ color: "red" }}>Logout</Text>
            </Container>
          </Container>
        </TouchWrap>
      </ScrollView>
      <Modal animationType="fade" visible={modalVisible} transparent>
        <Container
          flex={1}
          verticalAlignment="center"
          horizontalAlignment="center"
          backgroundColor={"rgba(52, 52, 52, 0.7)"}
        >
          <Container
            backgroundColor={"white"}
            height={40}
            width={90}
            borderRadius={7}
            horizontalAlignment="center"
          >
            <Container
              width={75}
              height={3}
              horizontalAlignment="flex-end"
              marginTop={3}
            >
              <TouchWrap onPress={() => setModalVisible(false)}>
                <AntDesign name="close" size={24} color="red" />
              </TouchWrap>
            </Container>
            <Container marginTop={2}>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Log out?
              </Text>
            </Container>
            <Container marginTop={5} width={80}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 15,
                  color: Colors.appTextGrey,
                }}
              >
                Are you sure you want to log out of your account
              </Text>
            </Container>
            <Container
              marginTop={3}
            >
              <LongButton
                onPress={() => logout()(authDispatch)}
                text={"Yes, Log out"}
              />
            </Container>
            <TouchWrap width={80} onPress={() => setModalVisible(false)}>
              <Text
                style={{
                  textAlign: "center",
                  paddingTop: "10%",
                  color: Colors.appPrimaryBlue,
                  fontSize: 16,
                }}
              >
                No, Go back
              </Text>
            </TouchWrap>
          </Container>
        </Container>
      </Modal>
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
    </Container>
  );
};
export default Editprofile;
