import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Container, ImageWrap } from "../helper/index";
import { AntDesign } from "@expo/vector-icons";
import { useQuery } from "react-query";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { AppIcons } from "../helper/images";
import { fetchNotifications } from "../api/notifications";

const Notifications = (props) => {
  const notificationQuery = useQuery(['fetchNotifications'], fetchNotifications)
  const notifications = notificationQuery?.data?.data

  return (
    <Container flex={1} backgroundColor={"#FFFFFF"}>
      <Container
        height={60}
        width={100}
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
          <AntDesign name="left" size={15} color="black" />
          <Text style={{ color: "black", paddingLeft: 5 }}>Back</Text>
        </TouchableOpacity>
        <Container marginLeft={5} marginTop={3}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
            Notifications
          </Text>
        </Container>
        {notificationQuery.isLoading ? (
          <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator color={Colors.appPrimaryBlue} size='large' />
          </View>
        ) : !notifications?.length ? (
          <>
            <Container height={40} width={70} marginLeft={15}>
              <ImageWrap source={AppIcons.lists} fit="contain" />
            </Container>
            <Container>
              <Text style={{ fontWeight: "bold", fontSize: 16, textAlign: "center" }}>
                You have no notifications yet!
              </Text>
            </Container>
          </>
        ) : (
          <>
            {notifications?.map(notif => (
              <Container
                id={notif.id}
                key={notif.id}
                verticalAlignment="center"
                horizontalAlignment="flex-start"
                marginTop={4}
                direction="row"
                paddingHorizontal={5}
                paddingVertical={1}
              >
                <Image style={{ width: 70, height: 70, marginRight: 15 }} resizeMode="contain" source={AppIcons.tolls} />
                <Text style={{ fontWeight: '600', fontSize: 18 }} >{notif.message}</Text>
              </Container>
            ))}
          </>
        )}
      </Container>
      <StatusBar style="auto" />
    </Container>
  );
};
export default Notifications;
