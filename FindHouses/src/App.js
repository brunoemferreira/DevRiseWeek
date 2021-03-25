import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SplashScreen } from './screens';
import { theme } from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SplashScreen />
    </ThemeProvider>
  );
};

export default App;
