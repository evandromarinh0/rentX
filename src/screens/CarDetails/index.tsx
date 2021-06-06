import React from 'react';

import { StatusBar } from 'react-native';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/core';
import { CarProps } from '../../types/types';
import { getAccessoryTypeIcon } from '../../utils/getAccessoryTypeIcon';

import { 
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  CarName,
  Rent,
  Period,
  Price,
  Accessories,
  About,
  Footer
} from './styles';

interface Params {
  car: CarProps;
}

export function CarDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleRentalConfirm(){
    navigation.navigate('Scheduling');
  }

  function handleGoBack(){
    navigation.goBack();
  }

  return(
    <Container>
      <StatusBar barStyle='dark-content' backgroundColor="transparent" />
      <Header>
        <BackButton onPress={handleGoBack} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </CarImages>
      
      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <CarName>{car.name}</CarName>
          </Description>
          
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car.accessories.map(accessory => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryTypeIcon(accessory.type)} 
            />
          ))}
        </Accessories>

        <About>{car.about}</About>
      </Content>

      <Footer>
        <Button title="Escolher período do aluguel" onPress={handleRentalConfirm} />
      </Footer>
    </Container>
  );
}