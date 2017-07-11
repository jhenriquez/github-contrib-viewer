import React from 'react';
import { mount } from 'enzyme';
import RepositoryResult from './repository-result.component';

describe('<RepositoryResult />', () => {
  test('It renders without throwing', () => {
    mount(<RepositoryResult />);
  });
});