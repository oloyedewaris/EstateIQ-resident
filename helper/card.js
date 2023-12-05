/* eslint-disable no-alert */
import React, {useState, useEffect} from 'react';
import {Container, TouchWrap} from './index';
import {Colors, RF, RH, RR, RW} from './constants';
import {H1, P, H2} from './element';
import Entypo from 'react-native-vector-icons/Entypo';
import {Platform, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

import {Fonts} from './fontSize';
import Home from '../Home/home';
export const Card = props => {
  return (
    <TouchWrap onPress={props.onPress}>
      {/* <Container
        height={13}
        borderRadius={15}
        elevation={5}
        shadowOpacity={1}
        shadowRadius={'black'}
        borderWidth={Platform.OS == 'ios' ? 0 : 0}
        verticalAlignment={'center'}
        horizontalAlignment={'center'}
        width={23}
        backgroundColor={props.bg || Colors.appWhite}> */}

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 10,
          height: RH(9),
          width: RW(19),
          borderRadius: RR(4),
          backgroundColor: 'white',
          shadowColor: '#470000',
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 0.2,
          elevation: Platform.OS == 'ios' ? 4 : 10,
          // background color must be set
          // invisible color
        }}>
        <Container>
          {props.active == 'data' ? (
            <Feather name="download" size={25} color={props.color} />
          ) : props.active == 'airtime' ? (
            <Octicons name="device-mobile" size={25} color={props.color} />
          ) : props.active == 'power' ? (
            <Octicons name="light-bulb" size={25} color={'#8DD6EE'} />
          ) : props.active == 'internet' ? (
            <AntDesign name="wifi" size={25} color={'#8DD6EE'} />
          ) : props.active == 'tv' ? (
            <Feather name="tv" size={25} color={'#00B3EF'} />
          ) : null}
        </Container>
        <Container marginTop={RR(0.3)}>
          <H2 color={Colors.appTextBlack} size={RR(5)}>
            {props.text}
          </H2>
        </Container>
      </View>
      {/* </Container> */}
    </TouchWrap>
  );
};

export default Card;
