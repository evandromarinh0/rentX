import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface DateValueProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.secondary_background};
`;

export const Header = styled.View`
  width: 100%;
  height: 325px;
  background: ${({theme}) => theme.colors.header};
  justify-content: center;
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 30}px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.ArchivoSemiBold};
  font-size: ${RFValue(34)}px;

  margin-top: 24px;
`;

export const RentalPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 32px 0;
`;

export const DateInfo = styled.View`
  width: 30%;
`;

export const Date = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.ArchivoMedium};
  font-size: ${RFValue(10)}px;
`;

export const DateValue = styled.Text<DateValueProps>`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.InterMedium};
  font-size: ${RFValue(15)}px;

  ${({theme, selected}) => !selected && css`
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.text};
    padding-bottom: 5px;
  `};
`;


export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24,
    showsVerticalScrollIndicator: false
  }
})``;

export const Footer = styled.View`
  padding: 24px;
`;
