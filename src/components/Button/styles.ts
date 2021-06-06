import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface RectButtonP extends RectButtonProperties {
  color: string;
}

export const Container = styled(RectButton)<RectButtonP>`
  width: 100%;
  height: 46px;
  align-items: center;
  justify-content: center;
  background: ${({ color }) => color};
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.InterMedium};
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.shape};
`;