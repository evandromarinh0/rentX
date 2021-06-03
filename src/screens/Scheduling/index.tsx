import React from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';

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
import { DatePicker } from '../../components/DatePicker';

export function Scheduling() {
  const theme = useTheme();

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
        <Button title='Confirmar' />
      </Footer>
    </Container>
  );
}