import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { AppContext } from "./context/appContext";
import { Header } from "./components/Header";
import { theme } from "./utilities/theme";
import { Content } from "./components/Content";
import { useContentManager } from './hooks/useContentManager';

const App = styled.div`
  font-family: ${theme.fontFamily};
`;

/*
its fine for this small app but wrapping the whole
application in a context provider is not best practice.
In larger apps this will cause many unneccessary rerenders.
*/
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
