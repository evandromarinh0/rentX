import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { 
  Container,
  Content,
  Title,
  Message,
  Footer,
  OkButton,
  OkButtonText,
} from './styles';

export function SchedulingSuccess() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  function handleResetNavigation(){
    navigation.navigate('Home');
  }

  return(
    <Container>
      <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!</Title>
        <Message>
          Agora você só precisa ir{'\n'}
          até a concessionária da RentX{'\n'}
          pegar o seu automóvel.
        </Message>
      </Content>

      <Footer>
        <OkButton onPress={handleResetNavigation}>
          <OkButtonText>OK</OkButtonText>
        </OkButton>
      </Footer>
    </Container>
  );
}