import React from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import { DatePicker } from '../../components/DatePicker';
import { useNavigation } from '@react-navigation/core';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import ArrowSvg from '../../assets/arrow.svg';

import { 
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  Date,
  DateValue,
  Content,
  Footer,
} from './styles';


export function Scheduling() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleRentalConfirm(){
    navigation.navigate('SchedulingDetails');
  }

  return(
    <Container>
      <StatusBar barStyle='light-content' translucent  backgroundColor='transparent' />
      <Header>
        <BackButton onPress={() => {}} color={theme.colors.shape} />
        <Title>Escolha uma{'\n'}data de início e {'\n'}fim de aluguel</Title>

        <RentalPeriod>
          <DateInfo>
            <Date>DE</Date>
            <DateValue selected={false}></DateValue>
          </DateInfo>
          
          <ArrowSvg />

          <DateInfo>
            <Date>ATÉ</Date>
            <DateValue selected={false}></DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <DatePicker />
      </Content>

      <Footer>
        <Button title='Confirmar' onPress={handleRentalConfirm} />
      </Footer>
    </Container>
  );
}