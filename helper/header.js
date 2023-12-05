/* eslint-disable no-alert */
import React, {useState, useEffect} from 'react';
import {Container, TouchWrap} from './index';
import {Colors, RF, RH, RW} from './constants';
import {H1, P, H2} from './element';
import Entypo from 'react-native-vector-icons/Entypo';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {Fonts} from './fontSize';
import Home from '../Home/home';
export const Header = props => {
  return (
    <Container horizontalAlignment={'center'}>
      <Container
        height={7}
        width={90}
        paddingTop={3}
        verticalAlignment={'center'}
        direction={'row'}
        horizontalAlignment={'space-between'}>
        {props.active == 'settings' ||
        props.active == 'AccountDetails' ||
        props.active == 'resetPassword' ||
        props.active == 'profile' ||
        props.active == 'Notification' ? (
          <TouchWrap onPress={props.back}>
            <Container>
              <Ionicons
                name="ios-arrow-back-sharp"
                size={Fonts.big}
                color={Colors.appDeepBlue}
              />
            </Container>
          </TouchWrap>
        ) : (
          <TouchWrap onPress={props.menu}>
            <Container>
              <Entypo name="menu" size={Fonts.big} color={Colors.appDeepBlue} />
            </Container>
          </TouchWrap>
        )}
        {props.active == 'profile' ? (
          <Container>
            <H2>Profile</H2>
          </Container>
        ) : null}

        <TouchWrap onPress={props.onPress}>
          {props.active == 'AccountDetails' ? (
            <Container>
              <MaterialIcons
                name="edit"
                size={Fonts.big}
                color={Colors.appDeepBlue}
              />
            </Container>
          ) : props.active == 'settings' ||
            props.active == 'AccountDetails' ||
            props.active == 'resetPassword' ||
            props.active == 'Home' ? (
            <Container>
              <Ionicons
                name="notifications-outline"
                size={Fonts.big}
                color={Colors.appDeepBlue}
              />
            </Container>
          ) : props.active == 'Notification' ? (
            <Container>
              <P color={Colors.appDeepBlue}>Clear All</P>
            </Container>
          ) : null}
        </TouchWrap>
      </Container>
    </Container>
  );
};

export default Header;
