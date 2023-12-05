import React, {useState, useEffect, useRef} from 'react';
import {Avatar, Container, ImageWrap, TouchWrap} from '../helper';
import {AppIcons} from '../helper/images';
import {Colors, RH, RW, RR, RF} from '../helper/constants';
import {H1, H2, P, Button, TextInputBox, LinearButton} from '../helper/element';

export const Confirmation = props => {
  const [loading, setLoading] = useState(false);
  return (
    <Container
      flex={1}
      horizontalAlignment={'center'}
      verticalAlignment={'center'}>
      <Container
        width={80}
        marginLeft={-2.4}
        height={30}
        backgroundColor={Colors.appBackground}
        borderRadius={20}>
        {/* title     */}

        <Container
          width={80}
          paddingVertical={1}
          verticalAlignment={'center'}
          horizontalAlignment={'center'}>
          <H1 color={Colors.appTextBlack} size={20}>
            Transcation Confirmation
          </H1>
        </Container>

        {/* question */}

        <Container
          width={60}
          paddingVertical={1}
          verticalAlignment={'center'}
          horizontalAlignment={'center'}
          marginLeft={10}
          marginTop={2}>
          <H1 color={Colors.appTexttwo} textAlign={'center'} size={15}>
            {props.details}
          </H1>
        </Container>

        <Container
          width={80}
          height={7}
          marginTop={3}
          horizontalAlignment={'center'}
          verticalAlignment={'center'}
          direction={'row'}>
          <Button
            height={3.7}
            size={11}
            text={'Reject'}
            backgroundColor={'#BE3F45'}
            width={20}
          />
          <Container marginLeft={5}>
            <Button height={3.7} size={11} text={'Accept'} width={20} />
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
