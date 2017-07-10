import 'babel-polyfill';
import './root.css';

import React from 'react';
import reactDOM  from 'react-dom';

import { RepositorySearch } from 'containers/repository-search';

reactDOM.render(
  <RepositorySearch />,
  document.getElementById('content')
);

