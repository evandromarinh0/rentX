import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 101px;
  height: 92px;
  justify-content: center;
  align-items: center;

  background: ${({theme}) => theme.colors.primary_background};
  padding: 16px;
  margin-bottom: 8px;
`;

export const Name = styled.Text`
  font-family: ${({theme}) => theme.fonts.InterMedium};
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(13)}px;
`;