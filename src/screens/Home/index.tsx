import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

import { 
  Container,
  Header,
  Content,
  TotalCars,
  CarList
} from './styles';

export function Home() {
  const carData = {
    brand: 'audi',
    name: 'RS 5 Coupé',
    thumbnail: 'https://cdn.jdpower.com/ChromeImageGallery/Expanded/Transparent/640/2019AUC29_640/2019AUC290001_640_01.png',
    rent: {
      period: 'ao dia',
      price: 340
    }
  }

  return(
    <Container>
      <StatusBar translucent barStyle='light-content' backgroundColor="transparent" />
      <Header>
        <Content>
          <Logo 
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </Content>
      </Header>
      
      <CarList 
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={item => String(item)}
        renderItem={({item: car}) => (<Car car={carData} />)}      
      />
    </Container>
  );
}