import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, combineReducers, createStore} from 'redux'
import employeeReducer from './store/employee-reducer';
import productsReducer from './store/product-reducer';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter } from "react-router-dom";
import authReducer from './store/auth-reducer';
// create a middleware



const datetime = store => next => action => {
  console.log('dispatched at ', new Date())
  let result = next(action)
  // console.log('next state', store.getState())
  return result
}

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const composedEnhancer = composeWithDevTools(
  // EXAMPLE: Add whatever middleware you actually want to use here
  applyMiddleware(datetime,logger, thunkMiddleware)
  // other store enhancers if any
)

  // store with reducer
// Create a Store - state container
const store = createStore(combineReducers({er:employeeReducer , pr:productsReducer, ar: authReducer}), composedEnhancer)
// const store = createStore(employeeReducer, composedEnhancer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
