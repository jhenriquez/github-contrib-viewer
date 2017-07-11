import 'babel-polyfill';
import './root.css';

import React from 'react';
import reactDOM  from 'react-dom';
import { Provider } from 'react-redux';

import RepositorySearch from 'containers/repository-search';
import { configureStore } from 'store/index';

reactDOM.render(
  <Provider store={ configureStore() }>
    <RepositorySearch />
  </Provider>,
  document.getElementById('content')
);

