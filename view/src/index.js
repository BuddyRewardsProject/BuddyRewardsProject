import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from "redux";
import setAuthorizationToken from './utils/setAuthorizationToken'
import jwt from 'jsonwebtoken'
import rootReducer from './rootReducer'
import { setUser } from './actions/authActions'
import { setStaff } from './actions/pinActions'
import axios from 'axios'
import App from './App';

import './assets/css/main.css';

import 'antd/dist/antd.css';

axios.defaults.baseURL = "http://localhost:3001/";
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

const branchToken = localStorage.getItem("branchToken");
if (branchToken) {
  const pinToken = localStorage.getItem("pinToken");
  if (pinToken) {
    console.log("pintoken")
    setAuthorizationToken(pinToken);
  } else {
    console.log("branchtoken")
    setAuthorizationToken(branchToken);
  }
  store.dispatch(setUser(jwt.decode(branchToken)))
}

const pinToken = localStorage.getItem("pinToken");
if (pinToken) {
  store.dispatch(setStaff(jwt.decode(pinToken)))
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

