import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AppColors from '../helpers/colors';
import AppIcons from '../helpers/icons';
import {RF, RH, RW, RR} from '../helpers/resize';

import {H1, H2, P, Space, Container} from './TextComponets';
const Smallest = props => {
  return (
    <TouchableOpacity
      style={{
        height: RH(14.5),
        width: '30%',
        backgroundColor: props.bgColor,
        shadowColor: '#000',
        borderRadius: RR(5),
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 20,
      }}
      onPress={props.onPress}>
      <View
        style={{
          width: '29%',
          marginTop: RH(5),
          alignSelf: 'flex-end',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* <Entypo
          name="info-with-circle"
          size={14}
          color={props.color2 || AppColors.appTextGrey}
        /> */}
      </View>
      <View
        style={{
          width: '39%',
          marginTop: '-9%',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {props.active == 'Link' ? (
          <AntDesign name="link" size={25} color="#7A117C" />
        ) : props.active == 'Qrj' ? (
          <AntDesign name="qrcode" size={25} color="#7A117C" />
        ) : props.active == 'ScanMe' ? (
          <AntDesign name="file1" size={20} color="#FFFFFF" />
        ) : props.active == 'Account' ? (
          <MaterialIcons name="logout" size={25} color="#3168F4" />
        ) : props.active == 'Code' ? (
          <MaterialIcons name="phone-iphone" size={25} color="#3168F4" />
        ) : props.active == 'Pay' ? (
          <AntDesign name="qrcode" size={25} color="#1ABA8A" />
        ) : props.active == 'Cashback' ? (
          <FontAwesome name="money" size={25} color="#6F7173" />
        ) : props.active == 'bulb' ? (
          <Ionicons name="ios-bulb-sharp" size={25} color="#3168F4" />
        ) : props.active == 'wifi' ? (
          <Ionicons name="wifi" size={25} color="#3168F4" />
        ) : props.active == 't.v' ? (
          <FontAwesome name="television" size={25} color="#3168F4" />
        ) : props.active == 'card' ? (
          <FontAwesome name="credit-card" size={25} color="#3168F4" />
        ) : props.active == 'ball' ? (
          <FontAwesome5 name="volleyball-ball" size={25} color="#3168F4" />
        ) : props.active == 'gas' ? (
          <MaterialCommunityIcons
            name="gas-station"
            size={25}
            color="#ffffff"
          />
        ) : null}
      </View>
      <View
        style={{
          width: '90%',
          marginTop: RH(1),
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <H2 size={RF(4)} color={props.color || AppColors.appTextGrey}>
          {props.text}
        </H2>
      </View>
      <View
        style={{
          width: '90%',

          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <H2 size={RF(4)} color={props.color || AppColors.appTextGrey}>
          {props.text2}
        </H2>
      </View>
    </TouchableOpacity>
  );
};

export default Smallest;
