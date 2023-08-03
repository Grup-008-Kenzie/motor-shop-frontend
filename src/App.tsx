import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";
import { RoutesMain } from "./routers";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RoutesMain />
    </BrowserRouter>
  );
}

export default App;
