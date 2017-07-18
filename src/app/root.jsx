import 'babel-polyfill';
import './root.css';

import React from 'react';
import reactDOM  from 'react-dom';
import { Provider } from 'react-redux';

import RepositorySearch from 'containers/repository-search';
import { configureStore, RunSagas } from 'store/index';

const store = configureStore();

RunSagas();

reactDOM.render(
  <Provider store={ store }>
    <RepositorySearch />
  </Provider>,
  document.getElementById('content')
);

