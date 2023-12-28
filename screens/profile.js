import { Text, Platform, Modal, TouchableOpacity, Image, ActivityIndicator, View, Linking, Touchable, Alert, } from "react-native";
import { Container, ImageWrap, TouchWrap } from "../helper/index";
import { AppIcons } from "../helper/images";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import LongButton from "../component/longbutton";
import { useContext, useRef, useState } from "react";
import { Colors } from "../helper/constants";
import Setting from "../component/settingbutton";
import { GlobalContext } from "../context/Provider";
import { logout } from "../context/actions/auth";
import { useQuery } from "react-query";
import { getEstateId, getUserEstateDetails } from "../api/user";
import axiosInstance from "../utils/axiosInstance";
import * as ImagePicker from 'expo-image-picker';
import { ToastLong } from "../helper/toast";
import BottomSheet from "../component/bottomSheet";

const Profilee = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSeen, setModalSeen] = useState(false);
  const { authDispatch } = useContext(GlobalContext);
  const { authState: { user } } = useContext(GlobalContext);
  const [uploading, setUploading] = useState(false)
  const cameraRef = useRef();

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
        ToastLong('Profile image updated')
        await userDetailsQuery.refetch()
      })
      .catch(err => {
        ToastLong(JSON.stringify(err?.response?.data))
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
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 0.2,
      });

      if (!result.canceled) {
        updateImage(result.assets[0]);
      }
    } catch (e) {
      const ans = await ImagePicker.requestMediaLibraryPermissionsAsync();
      Alert.alert('Error!!', JSON.stringify(e?.code))
    }
  };

  const openCamera = async () => {
    cameraRef.current.close()
    // No permissions request is necessary for launching the image library
    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 0.2,
      });

      if (!result.canceled) {
        updateImage(result.assets[0]);
      }
    } catch (e) {
      if (e?.code === 'ERR_MISSING_CAMERA_PERMISSION') {
        const ans = await ImagePicker.requestCameraPermissionsAsync();
      }
      Alert.alert('Error!!', JSON.stringify(e?.code))
    }
  };




  return (
    <Container flex={1} backgroundColor={"#FFFFFF"}>
      <Container marginTop={7} marginLeft={5}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Accounts</Text>
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
          <Container width={20} height={10} borderRadius={50}>
            {uploading ? (
              <View style={{ backgroundColor: '#eee', justifyContent: 'center', alignItems: 'center', width: 60, height: 60, borderRadius: 1000 }}>
                <ActivityIndicator size={35} color={Colors.appPrimaryBlue} />
              </View>
            ) : (
              <>
                {profileImage ? (
                  <Image style={{ width: 60, height: 60, borderRadius: 100, marginTop: 7 }} source={{ uri: `https://api.estateiq.ng/${profileImage}` }} fit="contain" />
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
        <Container width={50} height={10} marginLeft={3}>
          <Container width={67} height={5} verticalAlignment="center">
            <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>
              {user?.first_name} {user?.last_name}
            </Text>
          </Container>
          <Container height={8} verticalAlignment="center" width={67}>
            <Text
              style={{
                color: Colors.appTextGrey,
                fontSize: 14,
              }}
            >
              Manage your personal information, and control which information
              other people see and apps may access.
            </Text>
          </Container>
        </Container>
      </Container>
      <Container marginTop={10}>
        <Setting
          icon={
            <FontAwesome
              name="user-o"
              size={22}
              color={Colors.appPrimaryBlue}
            />
          }
          text={"Edit Profile"}
          onPress={() => props.navigation.navigate("editprofile")}
        />
      </Container>
      <Container marginTop={3}>
        <Setting
          icon={
            <SimpleLineIcons
              name="bell"
              size={22}
              color={Colors.appPrimaryBlue}
            />
          }
          text={"Notifications"}
          onPress={() => props.navigation.navigate("notifications")}
        />
      </Container>
      <Container marginTop={3}>
        <Setting
          icon={
            <Ionicons
              name="wallet-outline"
              size={22}
              color={Colors.appPrimaryBlue}
            />
          }
          text={"Transactions"}
        />
      </Container>
      {/* Linking.openURL('https://estateiq.ng/terms-and-conditions') */}
      <Container marginTop={3}>
        <Setting
          onPress={() => Linking.openURL('https://estateiq.ng/terms-and-conditions')}
          icon={
            <MaterialCommunityIcons
              name="shield-key-outline"
              size={22}
              color={Colors.appPrimaryBlue}
            />
          }
          text={"Terms and Conditions"}
        />
      </Container>
      <Container marginTop={3}>
        <Setting
          icon={
            <Feather name="phone" size={24} color={Colors.appPrimaryBlue} />
          }
          text={"Contact us"}
          onPress={() => setModalSeen(true)}
        />
      </Container>
      <TouchWrap onPress={() => setModalVisible(true)}>
        <Container direction="row" marginLeft={10} marginTop={10}>
          <Container>
            <SimpleLineIcons name="logout" size={24} color="red" />
          </Container>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Container marginLeft={5}>
              <Text style={{ color: "red" }}>Logout</Text>
            </Container>
          </TouchableOpacity>
        </Container>
      </TouchWrap>

      <Modal animationType="fade" visible={modalVisible} transparent>
        <Container
          flex={1}
          verticalAlignment="center"
          horizontalAlignment="center"
          backgroundColor={"rgba(52, 52, 52, 0.8)"}
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
              onPress={() => logout()(authDispatch)}
            >
              <LongButton
                text={"Yes, log out"}
                onPress={() => logout()(authDispatch)}
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
                No, go back
              </Text>
            </TouchWrap>
          </Container>
        </Container>
      </Modal>

      <Modal animationType="fade" visible={modalSeen} transparent>
        <Container
          flex={1}
          verticalAlignment="center"
          horizontalAlignment="center"
          backgroundColor={"rgba(52, 52, 52, 0.8)"}
        >
          <Container
            backgroundColor={"white"}
            height={35}
            width={90}
            borderRadius={7}
          >
            <Container
              width={85}
              height={3}
              horizontalAlignment="flex-end"
              marginTop={3}
            >
              <TouchWrap onPress={() => setModalSeen(false)}>
                <AntDesign name="close" size={24} color="red" />
              </TouchWrap>
            </Container>
            <Container marginTop={2} marginLeft={5}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Contact us
              </Text>
            </Container>
            <Container
              direction="row"
              verticalAlignment="center"
              marginTop={4}
              width={90} height={5}
            >
              <Container
                height={5}
                width={15}
                verticalAlignment="center"
                horizontalAlignment="center"
              >
                <Feather name="phone" size={24} color={Colors.appPrimaryBlue} />
              </Container>
              <Text style={{ color: Colors.appTextGrey, fontSize: 16 }}>
                Call us on {' '}
              </Text>
              <TouchWrap onPress={() => Linking.openURL(`tel:09090409121`)}>
                <Text style={{ color: Colors.appTextBlue, fontSize: 16 }}>
                  09090409121
                </Text>
              </TouchWrap>
            </Container>
            <Container
              direction="row"
              verticalAlignment="center"
              marginTop={4}
              width={90} height={5}
            >
              <Container
                height={5}
                width={15}
                verticalAlignment="center"
                horizontalAlignment="center"
              >
                <Feather name="mail" size={24} color={Colors.appPrimaryBlue} />
              </Container>
              <Text style={{ color: Colors.appTextGrey, fontSize: 16 }}>
                Email us at {' '}
              </Text>
              <TouchWrap onPress={() => Linking.openURL(`mailto:contact@estateiq.ng`)}>
                <Text style={{ color: Colors.appTextBlue, fontSize: 16 }}>
                  contact@estateiq.ng
                </Text>
              </TouchWrap>
            </Container>

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
export default Profilee;
