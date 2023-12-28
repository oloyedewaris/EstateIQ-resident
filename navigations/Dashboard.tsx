import * as React from "react";
import { View, Platform } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Profilee from "../screens/profile";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "../screens/home";
import { Fontisto } from "@expo/vector-icons";
import AccessLog from "../screens/accessLog";
import { Colors } from "../helper/constants";
import ReportAnIssue from "../screens/reportAnIssue";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Tab = createBottomTabNavigator();

const profileOptions = {
  tabBarIcon: ({ focused }) => (
    <View
      style={{
        top: Platform.OS === "ios" ? 10 : 0,
      }}
    >
      <Feather
        name="settings"
        size={24}
        color={focused ? Colors.appPrimaryBlue : "gray"}
      />
    </View>
  ),
}

const homeOptions = {
  tabBarIcon: ({ focused }) => (
    <View
      style={{
        top: Platform.OS === "ios" ? 10 : 0,
      }}
    >
      <AntDesign
        name="home"
        size={22}
        color={focused ? Colors.appPrimaryBlue : "gray"}
      />
    </View>
  ),
}

const accessLogOptions = {
  tabBarIcon: ({ focused }) => (
    <View
      style={{
        top: Platform.OS === "ios" ? 10 : 0,
      }}
    >
      <MaterialCommunityIcons
        name="access-point"
        size={24}
        color={focused ? Colors.appPrimaryBlue : "gray"}
      />
    </View>
  ),
}

const reportOptions = {
  tabBarIcon: ({ focused }) => (
    <View
      style={{
        top: Platform.OS === "ios" ? 10 : 0,
      }}
    >
      <AntDesign
        name="warning"
        size={24}
        color={focused ? Colors.appPrimaryBlue : "gray"}
      />
    </View>
  ),
}

const generalOptions = ({ route }) => ({
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    display: "flex",
    position: "absolute",
    bottom: 0.9,
    left: 0,
    right: 0,
    elevation: 10,
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 55,
  },
  tabBarShowLabel: false,
  headerShown: false,
})

const Dashboard = () => {
  return (
    // @ts-ignore
    <Tab.Navigator screenOptions={generalOptions} >
      <Tab.Screen name="Home" component={Home} options={homeOptions} />
      <Tab.Screen name="Acces Log" component={AccessLog} options={accessLogOptions} />
      <Tab.Screen name="ReportAnIssue" component={ReportAnIssue} options={reportOptions} />
      <Tab.Screen name="Settings" component={Profilee} options={profileOptions} />
    </Tab.Navigator>
  );
};
export default Dashboard;
