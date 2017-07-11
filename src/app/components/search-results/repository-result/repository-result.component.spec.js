import React from 'react';
import { mount } from 'enzyme';

import RepositoryResult from './repository-result.component';

import repository_mocks from 'mocks/repositories';

import Repository from 'models/repository.model';

describe('<RepositoryResult />', () => {
  const repository = new Repository(repository_mocks[0]);

  test('It renders without throwing', () => {
    mount(<RepositoryResult repository={ repository } />);
  });

  describe('Styles', () => {
    const component = mount(<RepositoryResult repository={ repository } />);
    expect(component.hasClass('search-results__item')).toBeTruthy();
  });
});