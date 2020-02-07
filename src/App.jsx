import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { AppContext } from "./context/appContext";
import { Header } from "./components/Header";
import { theme } from "./theme";
import { Content } from "./components/Content";
import { useContentManager } from './components/useContentManager';

const App = styled.div`
  font-family: ${theme.fontFamily};
`;

function Application() {
  const content = useContentManager();
  return (
    <App>
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={content}>
          <Header />
          <Content />
        </AppContext.Provider>
      </ThemeProvider>
    </App>
  );
}

export default Application;
