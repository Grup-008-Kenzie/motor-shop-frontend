import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";
import { RoutesMain } from "./routers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RoutesMain />
    </BrowserRouter>
  );
}

export default App;
