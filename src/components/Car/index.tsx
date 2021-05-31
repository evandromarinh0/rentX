import React from 'react';

import GasSvg from '../../assets/gasoline.svg';

import {
  Container,
  Details,
  Brand,
  CarName,
  About,
  Rent,
  Period,
  Price,
  PowerType,
  CarImage,
} from './styles';

interface Car {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number
  };
  thumbnail: string;
}

interface CarProps {
  car: Car;
}

export function Car({ car }: CarProps) {
  return(
    <Container>
      <Details>
        <Brand>{car.brand}</Brand>
        <CarName>{car.name}</CarName>

        <About>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>{`R$ ${car.rent.price}`}</Price>
          </Rent>

          <PowerType>
            <GasSvg />
          </PowerType>
        </About>
      </Details>

      <CarImage source={{ uri: car.thumbnail }} resizeMode='contain' />
    </Container>
  );
}

