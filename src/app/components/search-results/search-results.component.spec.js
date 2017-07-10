import React from 'react';
import { mount } from 'enzyme';
import SearchResults from './search-results.component';

describe('<SearchResults />', () => {
  test('it renders without throwing', () => {
    mount(<SearchResults />);
  });

  test('It defaults to an empty array.', () => {
    const component = mount(<SearchResults />);
    expect(component.props().results).toEqual([]);
  });
});