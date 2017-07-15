import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise'
import {Provider} from 'react-redux';
import App from './components/App.jsx';
import allReducers from './reducers';

const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
