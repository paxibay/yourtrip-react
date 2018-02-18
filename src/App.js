import React, { Component } from 'react';
import { Header } from './components/Header';
import { NextTrip } from './components/NextTrip';

import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <NextTrip />
  </div>
);

export default App;
