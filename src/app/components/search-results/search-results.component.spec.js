import React from 'react';
import { mount } from 'enzyme';
import SearchResults from './search-results.component';

describe('<SearchResults />', () => {
   test('it renders without throwing', () => {
      mount(<SearchResults />);
   });
});