import React from 'react';
import { mount } from 'enzyme';

import OrganizationResult from './organization-result.component';

describe('<OrganizationResult />', () => {
  test('It renders without throwing', () => {
    mount(<OrganizationResult />);
  });

  describe('Styles', () => {
    test('It has a ".search-results__item" class.', () => {
      const component = mount(<OrganizationResult />);
      expect(component.hasClass('search-results__item')).toBeTruthy();
    });
  });
});