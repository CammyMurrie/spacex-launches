import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Header } from './components/Header';
import { theme } from './theme';
import { Content } from './components/Content';

const App = styled.div`
  font-family: ${theme.fontFamily};
  max-width: 1024px;
  margin: 0 auto;
`;

function Application() {
  return (
    <App>
      <ThemeProvider theme={theme}>
      <Header />
      <Content />
      </ThemeProvider>
    </App>
  );
}

export default Application;
