import "materialize-css/dist/css/materialize.min.css";
import "reactstrap";
import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import App from "./components/App";
import reduxThunk from "redux-thunk";
import "./assets/css/bootstrap.min.css";
import "./assets/css/agency.min.css";
import store from "./store";

// webpack materialize min css

//const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.querySelector("#root")
);
