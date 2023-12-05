/* eslint-disable no-alert */
import React, {useState, useEffect} from 'react';
import {Container, TouchWrap} from './index';
import {Colors, RF, RH, RW} from './constants';
import {H1, P} from './element';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Fonts} from './fontSize';
import Home from '../Home/home';
import Request from '../Home/request';
// import Trips from '../Home/trips';
import Wallet from '../Home/wallet';
// import Chat from '../Home/chat';
import {StatusBar} from 'react-native';
export const WalletPages = props => {
  const [active, setActive] = useState('Home');

  const req = () => {
    setActive('Request');
  };

  // { props
  //   ? props.route
  //     ? props.route.params
  //       ? props.route.params.value
  //         ? props.route.params.value
  //         : 'Home'
  //       : 'Home'
  //     : 'Home'
  //   : 'Home',}

  useEffect(() => {
    {
      setActive(
        props
          ? props.route
            ? props.route.params
              ? props.route.params.value
                ? props.route.params.value
                : 'Home'
              : 'Home'
            : 'Home'
          : 'Home',
      );
    }
  }, [props]);
  return (
    <Container heightPercent={'100%'} width={100}>
      <StatusBar
        translucent={true}
        backgroundColor={Colors.appPrimary}
        barStyle={'light-content'}
      />
      <Container height={90} width={100}>
        {active == 'Home' ? <Home /> : null}
        {active == 'Request' ? <Request /> : null}
        {active == 'Trip' ? <Trips /> : null}
        {active == 'Wallet' ? <Wallet /> : null}
        {active == 'Chat' ? <Chat /> : null}
      </Container>

      <Container
        heightPercent={'10%'}
        backgroundColor={'red'}
        width={100}
        paddingTop={2}
        direction={'row'}
        verticalAlignment={'flex-end'}>
        <TouchWrap onPress={() => setActive('Home')}>
          <Container
            height={10}
            width={20}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}>
            <Entypo
              name="home"
              size={Fonts.big}
              color={active == 'Home' ? Colors.appDeepBlue : Colors.appGrey}
            />

            <P color={active == 'Home' ? Colors.appDeepBlue : Colors.appGrey}>
              Home
            </P>
          </Container>
        </TouchWrap>

        <TouchWrap onPress={() => req()}>
          <Container
            height={10}
            width={20}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}>
            <FontAwesome
              name="user"
              size={Fonts.big}
              color={active == 'Request' ? Colors.appDeepBlue : Colors.appGrey}
            />

            <P
              color={active == 'Request' ? Colors.appDeepBlue : Colors.appGrey}>
              Request
            </P>
          </Container>
        </TouchWrap>

        <TouchWrap onPress={() => setActive('Trip')}>
          <Container
            height={10}
            width={20}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}>
            <Feather
              name="map-pin"
              size={Fonts.big}
              color={active == 'Trip' ? Colors.appDeepBlue : Colors.appGrey}
            />

            <P color={active == 'Trip' ? Colors.appDeepBlue : Colors.appGrey}>
              Trip
            </P>
          </Container>
        </TouchWrap>
        <TouchWrap onPress={() => setActive('Wallet')}>
          <Container
            height={10}
            width={20}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}>
            <Fontisto
              name="wallet"
              size={Fonts.big}
              color={active == 'Wallet' ? Colors.appDeepBlue : Colors.appGrey}
            />

            <P color={active == 'Wallet' ? Colors.appDeepBlue : Colors.appGrey}>
              Wallet
            </P>
          </Container>
        </TouchWrap>
        <TouchWrap onPress={() => setActive('Chat')}>
          <Container
            height={10}
            width={20}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}>
            <Ionicons
              name="ios-chatbox-ellipses-outline"
              size={Fonts.big}
              color={active == 'Chat' ? Colors.appDeepBlue : Colors.appGrey}
            />

            <P color={active == 'Chat' ? Colors.appDeepBlue : Colors.appGrey}>
              Chat
            </P>
          </Container>
        </TouchWrap>
      </Container>
    </Container>
  );
};

export default WalletPages;
