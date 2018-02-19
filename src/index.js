import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import 'semantic-ui-css/semantic.min.css';
import './App.css';
import './index.css';

import App from './App';
import configureStore from './redux/store';
import { loadRoutes } from './redux/actions';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
store.dispatch(loadRoutes());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
