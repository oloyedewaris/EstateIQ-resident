import React, {useState, useEffect} from 'react';
import {Container, TouchWrap} from '../helper';

import {Colors} from '../helper/constants';
import {H1} from '../helper/element';
import Octicons from 'react-native-vector-icons/Octicons';
import {Fonts} from '../helper/fontSize';
export const Settings = props => {
  return (
    <TouchWrap onPress={props.onPress}>
      <Container
        height={7}
        width={13}
        backgroundColor={Colors.appPrimary}
        borderRadius={13}
        horizontalAlignment={'center'}
        verticalAlignment={'center'}>
        <Octicons
          name="settings"
          size={Fonts.semiBig}
          color={Colors.appWhite}
        />
      </Container>
    </TouchWrap>
  );
};
