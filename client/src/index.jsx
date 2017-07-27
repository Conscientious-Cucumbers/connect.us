import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise'
import {Provider} from 'react-redux';
import App from './containers/App.jsx';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import allReducers from './reducers';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { getNotifications } from './actions/notificationActions';
import { resetNotificationRefresh } from './actions/socketActions';

let socket = io('http://localhost:3000');
let socketIoMiddleware = createSocketIoMiddleware(socket, ['socket/']);

injectTapEventPlugin();

const store = createStore(
  allReducers,
  applyMiddleware(thunk, promise, socketIoMiddleware)
);

store.subscribe(() => {
  if (store.getState().needsRefreshNotification) {
    store.dispatch(resetNotificationRefresh());
    store.dispatch(getNotifications());
  }
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>, document.getElementById('root'));
