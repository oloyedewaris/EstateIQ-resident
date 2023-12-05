import React, {useState, useEffect} from 'react';
import {Container, ImageWrap, TouchWrap} from '../helper';
import {
  Dimensions,
  ImageBackground,
  PixelRatio,
  SafeAreaView,
  View,
} from 'react-native';
import {Colors, RF, RR} from '../helper/constants';
import {H1, H2, P, PL} from '../helper/element';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {Fonts} from '../helper/fontSize';
import {AppIcons} from '../helper/images';
import {Image} from 'react-native';
import NumberFormat from 'react-number-format';
export const TransactionCard = props => {
  let name = `${props.name}`;
  if (name.length > 30) {
    name = `${name.slice(0, 10)}...`;
  }
  return (
    <TouchWrap onPress={props.onPress}>
      <Container
        width={90}
        verticalAlignment={'center'}
        horizontalAlignment={'space-around'}
        direction={'row'}>
        <Container height={7} direction={'row'}>
          <Container paddingLeft={5} verticalAlignment={'center'} width={20}>
            <View
              style={{
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
                shadowOffset: {
                  width: 9,
                  height: 9,
                },
                shadowOpacity: 0.12,

                shadowRadius: 10,
                borderRadius: RR(0),
              }}>
              <Image
                style={{
                  height: 40,
                  width: 40,
                  zIndex: 100,
                  borderRadius: RR(50),
                }}
                source={
                  props.image
                    ? {
                        uri: props.image,
                      }
                    : props.local
                }
                resizeMode={'cover'}
              />
            </View>
          </Container>
        </Container>

        <Container
          height={7}
          width={67}
          paddingRight={2}
          marginLeft={-2}
          paddingLeft={0}
          verticalAlignment={'center'}>
          <Container
            direction={'row'}
            horizontalAlignment={'space-between'}
            width={63}>
            <Container direction={'row'} width={30}>
              <Container direction={'row'}>
                <P color={Colors.appBlack} size={9}>
                  {name}
                </P>
              </Container>
            </Container>
            <Container
              width={30}
              // paddingLeft={5}
              horizontalAlignment={'flex-end'}>
              <Container>
                {props.amount ? (
                  <NumberFormat
                    value={props.amount ? props.amount : 0}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'\u20A6'}
                    fixedDecimalScale={true}
                    renderText={formattedValue => (
                      <P
                        color={
                          props.status == 'credit' ? '#34C759' : Colors.countRed
                        }
                        size={9}>
                        {formattedValue}
                      </P>
                    )} // <--- Don't forget this!
                  />
                ) : (
                  <P
                    color={
                      props.status == 'In Progress' ? 'FFB92D' : Colors.countRed
                    }
                    size={9}>
                    {props.status}
                  </P>
                )}
              </Container>
              <Container marginTop={1}>
                <PL color={Colors.appBlack} size={8}>
                  {props.to}
                </PL>
              </Container>
            </Container>
          </Container>
          <Container marginTop={-2}>
            <PL color={'#636263'} size={8}>
              {props.time}
            </PL>
          </Container>
        </Container>
      </Container>
    </TouchWrap>
  );
};
