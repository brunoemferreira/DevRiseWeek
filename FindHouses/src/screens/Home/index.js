import React from 'react';
import { ScreenContainer, TopContainer, TitleContainer } from './styles';
import { Title, IconButton, Input, HouseCard } from '../../components';

export const HomeScreen = () => {
  return (
    <ScreenContainer>
      <TopContainer>
        <TitleContainer>
          <Title>Encontre aqui seu imóvel</Title>
        </TitleContainer>

        <IconButton iconName="filter" />
      </TopContainer>
      <Input label="Localização" placeholder="Digite o endereço" />
      <HouseCard imgSource="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" />
    </ScreenContainer>
  );
};
