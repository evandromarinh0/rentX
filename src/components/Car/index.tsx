import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { CarProps } from '../../types/types';
import { getAccessoryTypeIcon } from '../../utils/getAccessoryTypeIcon';

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

interface ICar extends RectButtonProperties {
  car: CarProps;
}

export function Car({ car, ...rest }: ICar) {
  const FuelIcon = getAccessoryTypeIcon(car.fuel_type);

  return(
    <Container {...rest}>
      <Details>
        <Brand>{car.brand}</Brand>
        <CarName>{car.name}</CarName>

        <About>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>{`R$ ${car.rent.price}`}</Price>
          </Rent>

          <PowerType>
            <FuelIcon />
          </PowerType>
        </About>
      </Details>

      <CarImage source={{ uri: car.thumbnail }} resizeMode='contain' />
    </Container>
  );
}

