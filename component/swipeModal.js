import React, {useState, useEffect} from 'react';
import {Container, ImageWrap, TouchWrap} from '../helper';

import {Colors} from '../helper/constants';
import {H1} from '../helper/element';
import Entypo from 'react-native-vector-icons/Entypo';
import {Fonts} from '../helper/fontSize';
import {AppIcons} from '../helper/images';
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';
export const SwipeModal = props => {
  return (
    <SwipeUpDownModal
      modalVisible={props.visible}
      PressToanimate={props.animate}
      ContentModal={props.content}
      HeaderStyle={props.headerStyle}
      ContentModalStyle={props.contentStyle}
      HeaderContent={props.header}
      onClose={props.onClose}
    />
  );
};
