import React from 'react';
import { mount } from 'enzyme';
import { RepositorySearch } from './repository-search.container';

describe('RespositorySearch', () => {

  describe('Initial State', () => {

    test('Props: { search: { isSearching: false, results: [] } }(', () => {
      const component = mount(<RepositorySearch />);

      expect(component.props()).toEqual({
        search: {
          isSearching: false,
          results: []
        }
      });

    });

  });

});