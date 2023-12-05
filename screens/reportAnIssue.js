import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Container, ImageWrap, TouchWrap } from "../helper/index";
import { AppIcons } from "../helper/images";
import { Button, H1 } from "../helper/element";
import AntDesign from "react-native-vector-icons/AntDesign";

import ReportCard from "../cards/reportCard";
import { useQuery } from "react-query";
import { fetchIssues } from "../api/reportIssue";
import { useState } from "react";
import { Colors } from "../helper/constants";

const ReportAnIssue = (props) => {
  const [status, setStatus] = useState('ALL')
  const issuesQuery = useQuery(['fetchIssues', status], () => fetchIssues(status));

  const issues = issuesQuery?.data?.data?.results

  return (
    <Container flex={1} backgroundColor={"#FFFFFF"}>

      <Container paddingHorizontal={8} marginTop={7}>
        <Text style={{ fontWeight: "500", fontSize: 16, marginTop: 10 }}>
          Report an Issue
        </Text>

        <Text
          style={{
            fontWeight: "400",
            fontSize: 15,
            marginTop: 20,
            color: "#616161",
          }}
        >
          Report issues and infractions directly to relevant estate official(s)
        </Text>
        <TouchWrap onPress={() => props.navigation.navigate('ReportIssueFill')}>
          <Text
            style={{
              color: "#1037B5",
              textAlign: "right",
              marginTop: 30,
              fontWeight: "700",
              fontSize: 16,
            }}
          >
            Log Issue
          </Text>
        </TouchWrap>
      </Container>

      <Container
        verticalAlignment="center"
        horizontalAlignment="space-between"
        marginTop={4}
        direction="row"
        backgroundColor={"#F2F4F6"}
        paddingHorizontal={8}
        paddingVertical={1}
      >
        <TouchableOpacity onPress={() => setStatus('ALL')}>
          <Text style={(status === 'ALL' && { borderBottomColor: Colors.appPrimaryBlue, borderBottomWidth: 1 })}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setStatus('PENDING')}>
          <Text style={(status === 'PENDING' && { borderBottomColor: Colors.appPrimaryBlue, borderBottomWidth: 1 })}>Pending</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setStatus('RESOLVED')}>
          <Text style={(status === 'RESOLVED' && { borderBottomColor: Colors.appPrimaryBlue, borderBottomWidth: 1 })}>Resolved</Text>
        </TouchableOpacity>
      </Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container paddingHorizontal={8} marginBottom={10}>

          {issuesQuery.isLoading ? (
            <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator color={Colors.appPrimaryBlue} size='large'/>
            </View>
          ) : !issues?.length ? (
            <>
              <Container height={40} width={80}>
                <ImageWrap source={AppIcons.lists} fit="contain" />
              </Container>
              <Container>
                <Text style={{ fontWeight: "bold", fontSize: 16, textAlign: "center" }}>
                  No issues!
                </Text>
              </Container>
            </>
          ) : (
            <>
              {issues?.map((issue, i) => (
                <ReportCard issue={issue} key={issue.id} />
              ))}
            </>
          )}
        </Container>
      </ScrollView>
    </Container>
  );
};
export default ReportAnIssue;
