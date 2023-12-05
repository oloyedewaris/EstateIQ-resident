import React, {useState, useEffect} from 'react';
import {Container, ImageWrap, TouchWrap} from '../helper';

import {Colors} from '../helper/constants';
import {H1, P} from '../helper/element';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {Fonts} from '../helper/fontSize';
import {AppIcons} from '../helper/images';
export const BookingCard = props => {
  return (
    <TouchWrap onPress={props.onPress}>
      <Container
        height={20}
        width={90}
        marginBottom={2}
        borderWidth={0.2}
        padding={5}
        borderRadius={5}
        backgroundColor={'#F9F9F9'}
        borderColor={Colors.appGrey}>
        <Container
          width={23}
          height={3}
          backgroundColor={
            props.status == 'PENDING'
              ? '#D5DBE1'
              : props.status == 'CONFIRMED'
              ? '#26BF44'
              : props.status == 'COMPLETED'
              ? '#017691'
              : '#f7938b'
          }
          borderRadius={15}
          verticalAlignment={'center'}
          horizontalAlignment={'center'}>
          <P
            color={
              props.status == 'COMPLETED'
                ? '#FFFFFF'
                : props.status == 'CANCELLED'
                ? '#FF3A2A'
                : Colors.appBlack
            }>
            {props.status}
          </P>
        </Container>
        <Container height={13} width={80} direction={'row'}>
          <Container height={13} width={60} marginTop={2}>
            <Container direction={'row'} horizontalAlignment={'space-between'}>
              <Container>
                <H1 size={Fonts.semiMedium}>{props.name}</H1>
              </Container>
              <Container>
                <H1 size={Fonts.semiMedium}>{props.price}</H1>
              </Container>
            </Container>
            <Container marginTop={1.5}>
              <P size={Fonts.small}>Barbers 9710</P>
            </Container>
            <Container>
              <P size={Fonts.small}>96 Asokoro BLVD, Ojota</P>
            </Container>
          </Container>
          <Container height={13} width={20} horizontalAlignment={'center'}>
            <Container>
              <P size={Fonts.small}>Today</P>
            </Container>
            <Container>
              <H1 size={Fonts.semiBig}>06</H1>
            </Container>
            <Container>
              <P size={Fonts.small}>09:00</P>
            </Container>
          </Container>
        </Container>
      </Container>
    </TouchWrap>
  );
};
