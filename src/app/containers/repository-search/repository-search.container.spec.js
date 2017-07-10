import React from 'react';
import { mount } from 'enzyme';

import { RepositorySearch } from './repository-search.container';
import SearchBox from 'components/searchbox';
import SearchResults from 'components/search-results';

describe('RespositorySearch', () => {

  describe('Initial State', () => {

    test('Props: { search: { isSearching: false, results: [], text: "" } }(', () => {
      const component = mount(<RepositorySearch />);

      expect(component.props()).toEqual({
        search: {
          isSearching: false,
          results: [],
          text: ''
        }
      });

    });

    test('It renders a <SearchBox /> component.', () => {
      const component = mount(<RepositorySearch />);
      expect(component.find(SearchBox)).toHaveLength(1);
    });

    test('It renders a <SearchResults /> component', () => {
      const component = mount(<RepositorySearch />);
      expect(component.find(SearchResults)).toHaveLength(1);
    });
  });

});