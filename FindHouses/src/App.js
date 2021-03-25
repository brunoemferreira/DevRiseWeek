import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SplashScreen } from './screens';
import { theme } from './styles/theme';
import StoryBook from '../storybook';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StoryBook />
    </ThemeProvider>
  );
};

export default App;
