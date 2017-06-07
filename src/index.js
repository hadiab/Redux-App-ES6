import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import routes from './routes';
import './styles/styles.css';

const store = createStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, 
  document.getElementById('app')
);