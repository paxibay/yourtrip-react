import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import './index.css';

import App from './App';
import configureStore from './redux/store';
import { loadData } from './redux/actions';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
store.dispatch(loadData());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
