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

    describe('<SearchBox />', () => {

      test('It renders a <SearchBox /> component.', () => {
        const component = mount(<RepositorySearch />);
        expect(component.find(SearchBox)).toHaveLength(1);
      });

      test('It binds "value" prop to the its own "search.text" prop.', () => {
        const component = mount(<RepositorySearch />);
        component.setProps({ search: { text: 'Some value' } });
        const searchBox = component.find(SearchBox);
        expect(searchBox.props().value).toEqual("Some value");
      });

      test('It binds to the onChange event', () => {
        const component = mount(<RepositorySearch />);
        const searchBox = component.find(SearchBox);
        expect(searchBox.props().onChange).toBeDefined();
      });

    });

    describe('<SearchResults />', () => {
      test('It renders a <SearchResults /> component', () => {
        const component = mount(<RepositorySearch />);
        expect(component.find(SearchResults)).toHaveLength(1);
      });

      test('It binds "results" prop to its own "search.results" prop.', () => {
        const component = mount(<RepositorySearch />);
        component.setProps({ search: { results: [1,2,3] } });
        const searchResults = component.find(SearchResults);
        expect(searchResults.props().results).toEqual([1,2,3]);
      });
    });

  });

});