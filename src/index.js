import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AppContainer } from "./components/AppContainer";
import reducer from "./state";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);
