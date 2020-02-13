import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//import redux
import { Provider } from "react-redux"; // OHC อยากให้ทุก components เข้าถึง redux ได้
import { createStore , applyMiddleware } from "redux";
import reduxThunk from "redux-thunk"; //return เป็น function ได้ asynconouse ในการ update state
import reducers from "./reducers";
import logger from "redux-logger"


const store = createStore(reducers, {} , applyMiddleware(reduxThunk,logger));  //สร้าง store 

// bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
