import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { CarProps } from '../../types/types';

export const Container = styled.View`
  flex: 1;
  background: ${(({theme}) => theme.colors.primary_background)};
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;
  background: ${(({theme}) => theme.colors.header)};

  justify-content: flex-end;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 32px 24px;  
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${(({theme}) => theme.fonts.InterRegular)};
  color: ${(({theme}) => theme.colors.text)};
`;

export const CarList = styled(FlatList as new () => FlatList<CarProps>).attrs({
  contentContainerStyle: {
    padding: 24
  },
  showsVerticalScrollIndicator: false,
})``;