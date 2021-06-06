import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.header};
  padding-top: 96px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding-bottom: 80px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.ArchivoSemiBold};
  margin-top: 40px;
`;

export const Message = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.text_detail};
  font-family: ${({theme}) => theme.fonts.InterRegular};
  text-align: center;
  margin-top: 16px;
  line-height: ${RFValue(25)}px;
`;


export const Footer = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 50px;
`;

export const OkButton = styled(RectButton)`
  width: 80px;
  height: 56px;
  background: ${({theme}) => theme.colors.dark_shape};

  align-items: center;
  justify-content: center;
`;

export const OkButtonText = styled.Text`
  font-family: ${({theme}) => theme.fonts.InterMedium};
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(15)}px;
`;
