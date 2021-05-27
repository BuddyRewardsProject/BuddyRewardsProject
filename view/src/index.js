import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from "redux";
import setAuthorizationToken from './utils/setAuthorizationToken'
import jwt from 'jsonwebtoken'
import rootReducer from './rootReducer'
import { setUser } from './actions/authActions'
import axios from 'axios'
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import './asssets/css/main.css';
import "bootstrap/dist/js/bootstrap.min.js"
import 'antd/dist/antd.css';

axios.defaults.baseURL = "http://localhost:3001/";
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

const token = localStorage.getItem("token");
if (token) {
  setAuthorizationToken(token);
  store.dispatch(setUser(jwt.decode(token)))
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

