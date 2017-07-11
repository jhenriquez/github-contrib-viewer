import React from 'react';
import { mount } from 'enzyme';

import OrganizationResult from './organization-result.component';

import organization_mocks from 'mocks/organizations';

import Organization from 'models/organization.model';

describe('<OrganizationResult />', () => {

  const mockOrganization = new Organization(organization_mocks[0]);

  test('It renders without throwing', () => {
    mount(<OrganizationResult org={mockOrganization} />);
  });

  describe('Styles', () => {
    test('It has a ".search-results__item" class.', () => {
      const component = mount(<OrganizationResult org={mockOrganization} />);
      expect(component.hasClass('search-results__item')).toBeTruthy();
    });
  });
});