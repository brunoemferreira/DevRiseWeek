import styled from 'styled-components';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Button } from './index';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  padding: ${({ theme }) => theme.metrics.px(24)}px;
`;

const stories = storiesOf('Text', module);

stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Standard', () => {
  const value = text('TextButton', 'Aplicar');
  return <Button text={value} />;
});
