import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import { 
  Container,
  Title
} from './styles';

interface ButtonProps extends RectButtonProperties {
  title: string;
  color?: string;
}

export function Button({ title, color, ...rest }: ButtonProps) {
  const theme = useTheme();

  return(
    <Container {...rest} color={color ? color : theme.colors.main}>
      <Title>{title}</Title>
    </Container>
  );
}