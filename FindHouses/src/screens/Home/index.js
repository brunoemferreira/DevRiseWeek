import React, { useEffect, useState } from 'react';
import { ScreenContainer, TopContainer, TitleContainer } from './styles';
import { Title, IconButton, Input, HouseList } from '../../components';
import { getHouseCall } from '../../services/calls';

export const HomeScreen = () => {
  const [houseListData, setHouseListData] = useState([]);

  const callGetHouses = async () => {
    const result = await getHouseCall();
    setHouseListData(result.properties ? result.properties : []);
    console.log(result);
  };

  useEffect(() => {
    callGetHouses();
  }, []);

  return (
    <ScreenContainer>
      <TopContainer>
        <TitleContainer>
          <Title>Encontre aqui seu imóvel</Title>
        </TitleContainer>

        <IconButton iconName="filter" />
      </TopContainer>

      <Input label="Localização" placeholder="Digite o endereço" />

      <HouseList data={houseListData} />
    </ScreenContainer>
  );
};
