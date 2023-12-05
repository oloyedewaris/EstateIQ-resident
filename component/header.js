import React, {useState, useEffect} from 'react';
import {Container, ImageWrap, TouchWrap} from '../helper';
import {Image} from 'react-native';
import {Colors, RF, RH, RW} from '../helper/constants';
import {H1, H2, P} from '../helper/element';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Fonts} from '../helper/fontSize';
import moment from 'moment'
import {AppIcons} from '../helper/images';
import NumberFormat from 'react-number-format';
export const Header = props => {
  return (
    <TouchWrap onPress={props.onPress}>
      <Container
        height={10}
        width={90}
        marginTop={3}
        marginBottom={2}
        direction={'row'}
        borderColor={Colors.appPrimary}>
        <Container width={70} height={10} marginTop={2}>
          <Container width={65} direction={'row'}>
            <Container marginTop={1}>
              <Feather name="sun" size={Fonts.extraBig} color={'#FFB92D'} />
            </Container>

            <Container marginLeft={3}>
              <H1 size={15}>Good day {props.name}</H1>
            </Container>
          </Container>

          <Container marginLeft={9}>
            <P color={Colors.appTextBlack} size={Fonts.semiBig}>
            {moment(new Date()).format('DD MMMM YYYY')}
            </P>
          </Container>
        </Container>

        <Container
          width={25}
          height={10}
          verticalAlignment={'center'}
          horizontalAlignment={'center'}>
          <Image
            style={{
              resizeMode: 'contain',
              height: RH(7),
              width: RW(11.5),
            }}
            source={props.source !=''?props.source :AppIcons.User}
          />
        </Container>
      </Container>
    </TouchWrap>
  );
};
