import React, {useState, useEffect} from 'react';
import {Container, TouchWrap} from '../helper';

import {Colors} from '../helper/constants';
import {H1} from '../helper/element';
import Entypo from 'react-native-vector-icons/Entypo';
import {Fonts} from '../helper/fontSize';
export const BookMark = props => {
  return (
    <TouchWrap onPress={props.onPress}>
      <Container
        height={7}
        width={13}
        borderWidth={0.5}
        borderRadius={13}
        backgroundColor={props.backgroundColor}
        borderColor={Colors.appGrey}
        horizontalAlignment={'center'}
        verticalAlignment={'center'}>
        <Entypo name="bookmark" size={Fonts.semiBig} color={Colors.appWhite} />
      </Container>
    </TouchWrap>
  );
};
