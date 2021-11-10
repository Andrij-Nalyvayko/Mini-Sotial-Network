import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router basename="Mini-Sotial-Network/">
    <App />,
  </Router>,
  document.getElementById('root'),
);
