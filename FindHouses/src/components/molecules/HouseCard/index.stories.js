import styled from 'styled-components';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { HouseCard } from './index';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  padding: ${({ theme }) => theme.metrics.px(24)}px;
`;

const stories = storiesOf('HouseCard', module);

stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('HouseCard', () => {
  return (
    <HouseCard imgSource="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" />
  );
});
