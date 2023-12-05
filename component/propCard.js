
import {
  Text,
  Modal,
  TextInput,
} from "react-native";
import { Container, TouchWrap } from "../helper";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Modalbutton from "../component/modalButton";



export default function PropCard(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSeen, setModalSeen] = useState(false);
  const keyboardVerticalOffset = Platform.OS === "ios" ? 150 : 10;
  const [reminder, SetReminder] = useState();

  return (
    <Container direction="row" marginTop={2}>
      <TouchWrap onPress={props.onPress}>
        <Container
          padding={1}
          width={78}
          borderRadius={8}
          borderWidth={1}
          borderColor={"#2286FE"}
          direction={"row"}
        >
          <Container
            horizontalAlignment="center"
            verticalAlignment="center"
            marginLeft={2}
          >

          </Container>
          <Container direction="row" width={50}>
            <Container padding={1} paddingTop={1}>
              <Container
                padding={1}
                verticalAlignment="center"
                marginTop={-1}
                direction="row"
                width={70}
              >
                <Text style={{ fontSize: 14 }}>Name:</Text>
                <Text style={{ fontSize: 13, paddingLeft: 3, color: "gray" }}>
                  {props.name}
                </Text>
              </Container>
              <Container
                verticalAlignment="center"
                padding={0.7}
                marginTop={-1}
                width={62}
                direction="row"
              >
                <Text style={{ fontSize: 14 }}>Time:</Text>
                <Text style={{ fontSize: 13, paddingLeft: 3, color: "gray" }}>
                  {props.time}
                </Text>
              </Container>

              <Container
                verticalAlignment="center"
                padding={0.7}
                marginTop={-1}
                width={70}
                direction="row"
              >
                <Text style={{ fontSize: 14 }}>Dose:</Text>
                <Text style={{ fontSize: 13, paddingLeft: 3, color: "gray" }}>
                  {props.dose}
                </Text>
              </Container>

            </Container>
            <Container marginLeft={-23} marginTop={4}>
              <Container>
                <Text style={{ fontSize: 13, color: props.status == 'Completed' ? 'green' : props.status == 'Ignored' ? 'red' : "yellow" }}>{props.status}</Text>
              </Container>

            </Container>
          </Container>
        </Container>
      </TouchWrap>
      <TouchWrap onPress={props.delete}>
        <Container
          height={9}
          width={15}
          marginLeft={1}
          borderRadius={5}
          verticalAlignment="center"
          horizontalAlignment="center"
          direction="row"
        >
          <MaterialIcons name="delete-forever" size={23} color="gray" />
        </Container>
      </TouchWrap>


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        elevation={10}
      >
        <Container
          marginTop={55}
          horizontalAlignment="center"
          marginBottom={20}
        >
          <Container
            backgroundColor={"#E5E5E5"}
            padding={2}
            width={95}
            horizontalAlignment="center"
            borderRadius={8}
          >
            <Container
              height={7}
              width={15}
              borderRadius={50}
              backgroundColor={"white"}
              verticalAlignment="center"
              horizontalAlignment="center"
            >
              <Ionicons name="ios-warning" size={30} color="red" />
            </Container>
            <Container marginTop={1}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                Delete Medication
              </Text>
            </Container>
            <Container
              marginTop={2}
              direction="row"
              width={80}
              horizontalAlignment="center"
            >
              <Container padding={1} marginLeft={20}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 15, color: "black" }}
                >
                  Name:
                </Text>
              </Container>
              <Container padding={1} width={50} verticalAlignment="center">
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 14,
                    color: "gray",
                  }}
                >
                  malaria drug
                </Text>
              </Container>
            </Container>
            <Container direction="row" width={90} horizontalAlignment="center">
              <Container padding={1} marginLeft={20}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 15, color: "black" }}
                >
                  Dose:
                </Text>
              </Container>
              <Container padding={1} width={50} verticalAlignment="center">
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 14,
                    color: "gray",
                  }}
                >
                  2 in the morning
                </Text>
              </Container>
            </Container>

            <Container direction="row" width={90} horizontalAlignment="center">
              <Container padding={1} marginLeft={5}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 15, color: "black" }}
                >
                  Description:
                </Text>
              </Container>
              <Container padding={1} width={55} verticalAlignment="center">
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 14,
                    color: "gray",
                  }}
                >
                  this is the drug to be taken by this user
                </Text>
              </Container>
            </Container>
            <Container direction="row" marginTop={5}>
              <Container marginLeft={1}>
                <Modalbutton
                  color={"red"}
                  text={"back"}
                  onPress={() => setModalVisible(false)}
                />
              </Container>

              <Container marginLeft={20}>
                <Modalbutton
                  color={"#0174cf"}
                  text={"Delete"}
                  onPress={() => setModalVisible(false)}
                />
              </Container>
            </Container>
          </Container>
        </Container>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalSeen}
        elevation={10}
      >
        <Container marginTop={55} horizontalAlignment="center">
          <Container
            backgroundColor={"#E5E5E5"}
            padding={2}
            width={95}
            horizontalAlignment="center"
            borderRadius={10}
          >
            <Container marginTop={1}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                medication Details
              </Text>
            </Container>
            <Container marginTop={2} width={90} horizontalAlignment="center">
              <TextInput
                style={{
                  padding: 1,
                  width: "90%",

                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: "blue",
                  padding: 10,
                }}
                multiline={true}
                placeholder="cough syrub"
                placeholderTextColor={"gray"}
                editable={false}
              ></TextInput>
            </Container>

            <Container marginTop={2} width={90} horizontalAlignment="center">
              <TextInput
                style={{
                  padding: 1,
                  width: "90%",

                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: "blue",
                  padding: 10,
                }}
                multiline={true}
                placeholder="3"
                placeholderTextColor={"gray"}
                editable={false}
              ></TextInput>
            </Container>
            <Container marginTop={2} width={90} horizontalAlignment="center">
              <TextInput
                style={{
                  padding: 1,
                  width: "90%",

                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: "blue",
                  padding: 10,
                }}
                multiline={true}
                placeholder="this is the description of the drug used by tis user"
                placeholderTextColor={"gray"}
                editable={false}
              ></TextInput>
            </Container>
            <Container direction="row" marginTop={5}>
              <Container>
                <Container marginLeft={1}>
                  <Modalbutton
                    color={"green"}
                    text={"Edit"}
                    onPress={() => setModalSeen(false)}
                  />
                </Container>
              </Container>

              <Container marginLeft={20}>
                <Modalbutton color={"#0174cf"} text={"ok"} />
              </Container>
            </Container>
          </Container>
        </Container>
      </Modal>
    </Container>
  );
}
