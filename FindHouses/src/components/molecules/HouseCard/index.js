import React from 'react';
import { CardTitle, CardHighLightText, CardDescription } from '../../atoms';
import {
  CardContainer,
  CardImage,
  TextContainer,
  TextContainerLeft,
  TextContainerRight,
} from './styles';

export const HouseCard = ({ imgSource }) => {
  return (
    <CardContainer>
      <CardImage source={{ uri: imgSource }} />
      <TextContainer>
        <TextContainerLeft>
          <CardTitle>Casa a Venda</CardTitle>
          <CardDescription>
            Rua Dr. Jeber Juabre, 145 - Bloco F Apto 102
          </CardDescription>
        </TextContainerLeft>
        <TextContainerRight>
          <CardHighLightText>U$ 200.000.00</CardHighLightText>
        </TextContainerRight>
      </TextContainer>
    </CardContainer>
  );
};
