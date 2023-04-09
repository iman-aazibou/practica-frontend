import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Views/App";
import { configureStore } from "@reduxjs/toolkit";
import allReducer from "./redux/reducers";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: allReducer,
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development mode
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
