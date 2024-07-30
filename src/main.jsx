import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.scss";
import { Provider } from "react-redux";
import {Store} from './Store.js'
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      
  <BrowserRouter>
  <App />
  </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
