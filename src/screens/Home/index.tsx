import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { Car } from '../../components/Car';
import { CarProps } from '../../types/types';
import { Loading } from '../../components/Loading';
import api from '../../services/api';

import Logo from '../../assets/logo.svg';

import { 
  Container,
  Header,
  Content,
  TotalCars,
  CarList
} from './styles';

export function Home() {
  const navigation = useNavigation();
  const [cars, setCars] = useState<CarProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleNavigateToCarDetails(car: CarProps){
    navigation.navigate('CarDetails', { car });
  }

  useEffect(() => {
    try {
      async function getCars(){
        setIsLoading(true);
        const response = await api.get('/cars');
        setCars(response.data);
        setIsLoading(false);
      }
      getCars();
    } catch (error) {
      console.log(error)
    } 
  }, []);

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
            Total de {cars.length} carros
          </TotalCars>
        </Content>
      </Header>
      
      { isLoading ? (
        <Loading />
      ) : (
        <CarList 
          data={cars}
          keyExtractor={(car) => car.id}
          renderItem={({item: car}) => (
            <Car car={car} onPress={() => handleNavigateToCarDetails(car)} />
          )}      
        />
      )}
    </Container>
  );
}