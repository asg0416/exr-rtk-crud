import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./shares/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./shares/theme";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/config/configureStore";
import { Provider } from "react-redux";
import ErrorHandler from "./shares/error/ErrorHandler";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ErrorHandler>
          <GlobalStyle />
          <App />
        </ErrorHandler>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
