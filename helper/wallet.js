import React, { useState, useEffect, useRef } from "react";
import { Avatar, Container, ImageWrap, TouchWrap } from "../helper";
import { AppIcons } from "../helper/images";
import { Colors, RH, RW, RR, RF } from "../helper/constants";
import { H1, H2, P, Button, TextInputBox } from "../helper/element";
import { Fonts } from "../helper/fontSize";
import NumberFormat from "react-number-format";
import { Header } from "../component/header";
import {
  Image,
  View,
  Text,
  RefreshControl,
  ScrollView,
  Share,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import Modal from "react-native-modal";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { axiosCalls } from "../helper/api";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Header2 } from "../component/header2";
import Toast from "react-native-toast-message";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { WalletDetails } from "../component/walletDetails";
import { RouteContext } from "../helper/route_context";
import Clipboard from "@react-native-community/clipboard";
import AntDesign from "react-native-vector-icons/AntDesign";
import { getData, storeData } from "../helper/storage";
import { ToastLong } from "../helper/toast";
export const Wallet = (props) => {
  const updateActive = useStoreActions(
    (actions) => actions.activePage.updateActive
  );
  const { userDetailsGlobal } = useStoreState((state) => ({
    userDetailsGlobal: state.userDetails.userInfo,
  }));
  const updateUserDeatils = useStoreActions(
    (actions) => actions.userDetails.updateUser
  );

  const { globalAmounts } = useStoreState((state) => ({
    globalAmounts: state.globalAmounts.amounts,
  }));
  const updateGlobalAmounts = useStoreActions(
    (actions) => actions.globalAmounts.updateAmounts
  );

  const virtualAccount = useStoreActions(
    (actions) => actions.virtualAccount.updateVirtualAccount
  );

  const { useVirtualAccount } = useStoreState((state) => ({
    useVirtualAccount: state.virtualAccount.account,
  }));

  const transactionInfo = useStoreActions(
    (actions) => actions.transactionInfo.updateTransaction
  );
  const { transactions } = useStoreState((state) => ({
    transactions: state.transactionInfo.transactions,
  }));
  const setHideEye = useStoreActions(
    (actions) => actions.hideAccount.updateHideAccount
  );
  const { hideAccount } = useStoreState((state) => ({
    hideAccount: state.hideAccount.hideEye,
  }));
  const navigation = useNavigation();
  const { setCurrentState } = React.useContext(RouteContext);
  const [bvnModal, setBvnModal] = useState(false);
  const [bvn, setBvn] = useState("");
  const [check2, setCheck2] = useState(false);
  const [active, setActive] = useState("wallet");
  const [userAddress, setUserAddress] = useState("");
  const [loading, setLoading] = useState(false);
  let [animateModal, setanimateModal] = useState(false);
  const [balance, setBalance] = useState(globalAmounts);
  let [userImageUrl, setUserImageUrl] = useState("");
  const [check, setCheck] = useState(false);
  const [checkPin, setCheckPin] = useState(false);

  let [quantities, setQuantities] = useState([
    {
      value: "3kg",
    },
    {
      value: "5kg",
    },
    {
      value: "7kg",
    },
    {
      value: "10kg",
    },
    {
      value: "13kg",
    },
    {
      value: "15kg",
    },
  ]);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `I use Cydene Express to Pay for my Energy & Utility bills. Join me  @${userAddress}  by downloading the app using  ${"qrs.ly/d8chict"} `,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const copyToClipboard = (value) => {
    try {
      Clipboard.setString(`${value}`);
      ToastLong("Copied");
    } catch (e) {
      console.warn("coping error", e);
    }
  };
  const getTrasactions = async () => {
    try {
      const userDetails = await getData("user");
      const all = JSON.parse(userDetails);
      // console.warn('llll', all.id);
      setLoading(true);
      let res = await axiosCalls(`/api/users/transactions/0/5`, "GET");
      if (res) {
        if (res.er) {
          // console.warn('error asactions', res);

          setLoading(false);
        } else {
          // console.warn('success>>oooo getTrasactions', res.data);

          transactionInfo(res.data);
          setLoading(false);
        }
      }
    } catch (e) {
      console.warn("error getting transactions", e);
    }
  };
  const staticAccount = async () => {
    try {
      if (userDetailsGlobal.wallet) {
        console.warn("thisssssss>>>", useVirtualAccount);
        console.warn("thisssssss", userDetailsGlobal.wallet.accountNumber);
        if (
          useVirtualAccount.accountNumber ||
          userDetailsGlobal.wallet.accountNumber
        ) {
          setActive("walletInformation");

          setBvnModal(false);
        } else {
          console.warn("true oooooo");
          setActive("walletInformation");
          setBvnModal(true);
        }
      } else {
        setBvnModal(false);
      }
    } catch (e) {
      console.warn("error for pumping out bvn", e);
    }
  };

  const submitBvn = async () => {
    try {
      if (bvn != "") {
        setLoading(true);
        const payLoad = {
          bvn: `${bvn}`,
        };
        console.warn("submit bvn Payload", payLoad);

        let res = await axiosCalls(
          "/api/wallet/generate-static-account-number",
          "POST",
          payLoad
        );
        if (res) {
          setBvnModal(false);
          setLoading(false);
          if (res.er) {
            setBvnModal(false);
            console.warn("error >>submit bvn", res.er);

            if (res.er.message) {
              ToastLong(`${res.er.message}`);
            }
            setLoading(false);
          } else {
            console.warn("succes submit bvn ", res);
            virtualAccount(res.data);
            setBvnModal(false);
            setCheck(true);
            updateLocalStorage(res.data);
            setLoading(false);
          }
        }
      } else {
        ToastLong(`Bvn cant be empty`);
      }
    } catch (e) {
      comnsole.warn("error getting purchase ", e);
    }
  };

  const updateLocalStorage = async (value) => {
    try {
      const save = await storeData("wallet", value);
      console.warn("wallet", value);
    } catch (e) {
      console.warn("error >>>>>>", e);
    }
  };

  useEffect(() => {
    // const unsubscribe = navigation.addListener('focus', () => {});
    getUserDetails();
    getWalletBallance();
    // manipulate();
    console.warn("transactions>> length>>>>>>>>>>>>", useVirtualAccount);
    // getTrasactions();
    console.warn("checking>>", userDetailsGlobal);

    console.warn("amount >>>", props.props);
  }, [navigation]);

  const goBack = () => {
    setActive("wallet");
  };

  const getUserDetails = async () => {
    try {
      const userDetails = await getData("user");
      const all = JSON.parse(userDetails);
      console.warn("userDetails all the user details>>>", all);
      if (all.wallet.address) {
        setUserAddress(all.wallet.address);
        setCheck(true);
      } else {
        setCheck(false);
      }
      if (all.wallet.hasPin) {
        setCheckPin(true);
      } else {
        setCheckPin(false);
      }
    } catch (e) {
      console.warn("eeeee", e);
    }
  };

  const getWalletBallance = async () => {
    setLoading(true);

    let res = await axiosCalls("/api/wallet/balance", "GET");
    if (res) {
      if (res.er) {
        console.warn("error", res.er.message);
        Toast.show({
          type: "error",
          position: "top",
          text1: "Error",
          text2: `${res.er.message}`,
          visibilityTime: 4000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 60,
        });
        setLoading(false);
      } else {
        console.warn("success>>oooo new amount oo", res.data.availableBalance);
        // setBalance(res.data.availableBalance);
        updateGlobalAmounts(res.data.availableBalance);
        setLoading(false);
      }
    }
  };

  const onRefresh = React.useCallback(() => {
    getWalletBallance();
    getUserDetails();
    console.warn("yessss");
  }, []);

  return (
    <Container flex={1} paddingTop={3.5}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
      >
        {/* <Header2 name={'Wallet'} count={3} type={'text'} /> */}
        {active == "wallet" || active == "manageWallet" ? (
          <Container>
            <TouchWrap onPress={() => goBack()}>
              <Container
                height={6}
                width={100}
                direction={"row"}
                verticalAlignment={"center"}
              >
                {active == "manageWallet" ? (
                  <Container height={5} width={10}>
                    <AntDesign
                      name="arrowleft"
                      size={25}
                      color={Colors.appTextBlack}
                    />
                  </Container>
                ) : null}

                <Container
                  paddingVertical={1}
                  width={active == "manageWallet" ? 80 : 100}
                  verticalAlignment={"center"}
                  horizontalAlignment={"center"}
                >
                  <H1 color={Colors.appTextBlack} size={20}>
                    Wallet
                  </H1>
                </Container>
              </Container>
            </TouchWrap>
            <Container
              height={5}
              width={100}
              marginTop={7}
              verticalAlignment={"center"}
              horizontalAlignment={"center"}
            >
              <P size={17} color={Colors.appTextBlack}>
                Available Balance
              </P>
            </Container>
            <Container
              height={5}
              width={100}
              direction={"row"}
              marginTop={0}
              horizontalAlignment={"center"}
            >
              <NumberFormat
                value={globalAmounts ? globalAmounts : 0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"\u20A6"}
                fixedDecimalScale={true}
                decimalScale={2}
                renderText={(formattedValue) => (
                  <P size={25} color={Colors.appTextBlack}>
                    {!hideAccount ? formattedValue : "*****"}
                  </P>
                )} // <--- Don't forget this!
              />

              <Container
                height={3}
                verticalAlignment={"center"}
                marginLeft={3}
                marginTop={0.7}
              >
                {!hideAccount ? (
                  <TouchWrap onPress={() => setHideEye(true)}>
                    <Ionicons
                      name="eye-off"
                      size={RF(14)}
                      color={Colors.appBlack}
                    />
                  </TouchWrap>
                ) : (
                  <TouchWrap onPress={() => setHideEye(false)}>
                    <Container marginTop={-1}>
                      <Ionicons
                        name="eye"
                        size={RF(14)}
                        color={Colors.appBlack}
                      />
                    </Container>
                  </TouchWrap>
                )}
              </Container>
            </Container>
          </Container>
        ) : null}

        {active == "wallet" ? (
          <Container>
            <Container
              height={50}
              width={100}
              marginTop={8}
              horizontalAlignment={"center"}
            >
              <WalletDetails
                name={"Manage Balance"}
                active={"wallet"}
                onPress={() => navigation.navigate("ManageBalance")}
              />
              <WalletDetails
                name={"Topup Balance"}
                active={"load"}
                onPress={() => navigation.navigate("LoadWallet")}
              />

              {transactions.length > 0 ? (
                <WalletDetails
                  name={"Send Money"}
                  active={"send"}
                  onPress={() => updateActive("SendMoney")}
                />
              ) : null}

              <WalletDetails
                name={"Share Username"}
                active={"share"}
                onPress={() => onShare()}
              />
            </Container>
          </Container>
        ) : active == "manageWallet" ? (
          <Container>
            <Container
              height={50}
              width={100}
              marginTop={8}
              horizontalAlignment={"center"}
            >
              <WalletDetails
                name={" rmation"}
                active={"wallet"}
                onPress={() => staticAccount()}
              />
              <WalletDetails
                name={check ? "Change Username" : "Create Username"}
                active={"editUser"}
                onPress={() => navigation.navigate("Handle", { value: check })}
              />

              <WalletDetails
                name={
                  checkPin ? "Change Transaction Pin" : "Create Transaction Pin"
                }
                active={"transactionPin"}
                onPress={() =>
                  navigation.navigate("TransactionPin", { value: checkPin })
                }
              />

              <WalletDetails
                name={"Reset Transaction Pin "}
                active={"resetTransactionPin"}
                onPress={() =>
                  navigation.navigate("ResetTransactionPin", { value: true })
                }
              />
            </Container>
          </Container>
        ) : (active == "walletInformation" &&
          userDetailsGlobal.wallet.accountNumber) ||
          useVirtualAccount.accountNumber ? (
          <Container>
            <Container height={60} width={100} horizontalAlignment={"center"}>
              <Container
                height={8}
                width={100}
                direction={"row"}
                verticalAlignment={"center"}
                horizontalAlignment={"space-around"}
              >
                <TouchWrap onPress={() => goBack()}>
                  <Container
                    height={7}
                    width={14}
                    marginLeft={-3}
                    verticalAlignment={"center"}
                    horizontalAlignment={"center"}
                  >
                    <AntDesign
                      name="arrowleft"
                      size={30}
                      color={Colors.appTextBlack}
                    />
                  </Container>
                </TouchWrap>
                <Container
                  paddingVertical={1}
                  width={70}
                  paddingLeft={8}
                  verticalAlignment={"center"}
                >
                  <H1 color={Colors.appUniqueblue} size={15}>
                    Account Details
                  </H1>
                </Container>
              </Container>
              {/* box */}
              <Container
                height={10}
                width={100}
                marginTop={4}
                horizontalAlignment={"center"}
              >
                <Container
                  paddingVertical={1}
                  width={100}
                  paddingLeft={5}
                  verticalAlignment={"center"}
                >
                  <P color={Colors.appTexttwo} size={15}>
                    Bank Name
                  </P>
                </Container>
                <Container
                  height={5}
                  width={90}
                  borderBottomWidth={0.7}
                  borderColor={"grey"}
                  direction={"row"}
                  horizontalAlignment={"space-between"}
                >
                  <Container
                    paddingVertical={1}
                    width={70}
                    horizontalAlignment={"flex-start"}
                  >
                    <H1 color={Colors.appTextBlue} size={13}>
                      {useVirtualAccount.bankName
                        ? useVirtualAccount.bankName
                        : userDetailsGlobal
                          ? userDetailsGlobal.wallet.bankName
                          : ""}
                    </H1>
                  </Container>
                  {/* copy */}
                </Container>
              </Container>
              {/* box2 */}
              <Container height={10} width={100} horizontalAlignment={"center"}>
                <Container
                  paddingVertical={1}
                  width={100}
                  paddingLeft={5}
                  verticalAlignment={"center"}
                >
                  <P color={Colors.appTexttwo} size={15}>
                    Account Name
                  </P>
                </Container>
                <Container
                  height={5}
                  width={90}
                  borderBottomWidth={0.7}
                  borderColor={"grey"}
                  direction={"row"}
                  horizontalAlignment={"space-between"}
                >
                  <Container
                    paddingVertical={1}
                    width={70}
                    horizontalAlignment={"flex-start"}
                  >
                    <H1 color={Colors.appTextBlue} size={13}>
                      {useVirtualAccount.accountName
                        ? useVirtualAccount.accountName
                        : userDetailsGlobal
                          ? userDetailsGlobal.wallet.accountName
                          : ""}
                    </H1>
                  </Container>
                  {/* copy */}
                </Container>
              </Container>
              {/* box3 */}
              <Container height={10} width={100} horizontalAlignment={"center"}>
                <Container
                  paddingVertical={1}
                  width={100}
                  paddingLeft={5}
                  verticalAlignment={"center"}
                >
                  <P color={Colors.appTexttwo} size={15}>
                    Account Number
                  </P>
                </Container>
                <Container
                  height={5}
                  width={90}
                  borderBottomWidth={0.55}
                  borderColor={"grey"}
                  direction={"row"}
                  horizontalAlignment={"space-between"}
                >
                  <Container
                    paddingVertical={1}
                    width={70}
                    horizontalAlignment={"flex-start"}
                  >
                    <H1 color={Colors.appTextBlue} size={13}>
                      {useVirtualAccount.accountNumber
                        ? useVirtualAccount.accountNumber
                        : userDetailsGlobal
                          ? userDetailsGlobal.wallet.accountNumber
                          : ""}
                    </H1>
                  </Container>
                  {/* copy */}
                  <TouchWrap
                    onPress={() =>
                      copyToClipboard(
                        useVirtualAccount.accountNumber
                          ? useVirtualAccount.accountNumber
                          : userDetailsGlobal
                            ? userDetailsGlobal.wallet.accountNumber
                            : ""
                      )
                    }
                  >
                    <Container
                      paddingVertical={1}
                      width={21}
                      paddingLeft={10}
                      verticalAlignment={"center"}
                      horizontalAlignment={"center"}
                    >
                      <P color={Colors.appTextBlack} size={15}>
                        copy
                      </P>
                    </Container>
                  </TouchWrap>
                </Container>
              </Container>
              {/* box 4 */}
              <Container height={10} width={100} horizontalAlignment={"center"}>
                <Container
                  paddingVertical={1}
                  width={100}
                  paddingLeft={5}
                  verticalAlignment={"center"}
                >
                  <P color={Colors.appTexttwo} size={15}>
                    Status
                  </P>
                </Container>
                <Container
                  height={5}
                  width={90}
                  borderBottomWidth={0.7}
                  borderColor={"grey"}
                  direction={"row"}
                  horizontalAlignment={"space-between"}
                >
                  <Container
                    paddingVertical={1}
                    width={70}
                    horizontalAlignment={"flex-start"}
                  >
                    <H1 color={Colors.appTextBlue} size={13}>
                      {useVirtualAccount.isActive
                        ? "Active"
                        : userDetailsGlobal.wallet.isActive
                          ? "Active"
                          : "Disabled"}
                    </H1>
                  </Container>
                  {/* copy */}
                  <TouchWrap>
                    <Container
                      paddingVertical={1}
                      width={21}
                      paddingLeft={10}
                      verticalAlignment={"center"}
                      horizontalAlignment={"center"}
                    >
                      <P color={Colors.appTextBlack} size={15}></P>
                    </Container>
                  </TouchWrap>
                </Container>
              </Container>
            </Container>
          </Container>
        ) : (
          <Container
            height={90}
            width={100}
            verticalAlignment="center"
            horizontalAlignment="center"
          >
            <Container>
              <H1>Wallet account not created!</H1>
            </Container>
            <Container>
              <P>enter your BVN to create wallet account</P>
            </Container>
          </Container>
        )}
      </ScrollView>
      <Modal
        isVisible={bvnModal}
        onBackButtonPress={() => setBvnModal(false)}
        // onBackdropPress={() => setBvnModal(false)}
        swipeThreshold={200}
        swipeDirection={["down"]}
        onSwipeComplete={() => setBvnModal(false)}
      >
        <Container
          flex={1}
          horizontalAlignment={"center"}
          verticalAlignment={"center"}
        >
          <Container
            width={80}
            marginLeft={-2.4}
            height={28}
            horizontalAlignment={"center"}
            verticalAlignment={"center"}
            backgroundColor={Colors.appBackground}
            borderRadius={20}
          >
            <Container
              height={5}
              marginTop={-4.5}
              marginBottom={2}
              width={15}
              horizontalAlignment={"center"}
              verticalAlignment={"center"}
              marginLeft={60}
            >
              <Container marginLeft={5}>
                <TouchWrap onPress={() => setBvnModal(false)}>
                  <MaterialIcons
                    name="cancel"
                    size={25}
                    color={Colors.countRed}
                  />
                </TouchWrap>
              </Container>
            </Container>
            <TextInputBox
              width={70}
              value={bvn}
              paddingLeft={20}
              placeholder="Enter your BVN"
              borderBottomWidth={0.8}
              maxLength={11}
              keyboardType={"number-pad"}
              returnKeyType={"done"}
              borderWidth={0.8}
              placeholderColor={"grey"}
              color={Colors.appBlack}
              borderLeftWidth={0.8}
              onChange={(value) => setBvn(value)}
            />

            <Container marginTop={5}>
              <Button
                width={40}
                height={5.5}
                size={12}
                loading={loading}
                borderRadius={10}
                backgroundColor={Colors.appPrimary}
                color={Colors.appWhite}
                text={"Submit"}
                onPress={() => submitBvn()}
              />
            </Container>
          </Container>
        </Container>
      </Modal>
    </Container>
  );
};
