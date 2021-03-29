import React from 'react';
import { HouseCard } from '../../molecules';
import { HouseListContainer } from './styles';

export const HouseList = ({ data }) => {
  return (
    <HouseListContainer
      data={data}
      renderItem={() => <HouseCard />}
      keyExtractor={item => item.property_id}
    />
  );
};
