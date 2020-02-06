import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Header } from './components/Header';
import { theme } from './theme';

const App = styled.div`
  font-family: ${theme.fontFamily};
  max-width: 1200px;
  margin: 0 auto;
`;

function Application() {
  return (
    <App>
      <ThemeProvider theme={theme}>
      <Header />
      </ThemeProvider>
    </App>
  );
}

export default Application;
