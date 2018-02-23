import React from 'react';
import { Provider } from 'react-redux';

import { Header } from './components/Header';
import { YourNextTrip } from './components/YourTrip';
import { loadData } from './redux/actions';
import configureStore from './redux/store';

const store = configureStore();
store.dispatch(loadData());

const App = () => (
  <div className="App">
    <Header />
    <YourNextTrip />
  </div>
);

const WrappedApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

export default WrappedApp;
