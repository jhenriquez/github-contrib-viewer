import React from 'react';
import { mount } from 'enzyme';

import SearchResults from './search-results.component';

import Repository from 'models/repository.model';
import { RepositoryResult } from 'components/search-results';

import Organization from 'models/organization.model';
import { OrganizationResult } from 'components/search-results';

import repository_mocks from 'mocks/repositories.json';
import organizations_mocks from 'mocks/organizations.json';

describe('<SearchResults />', () => {
  test('it renders without throwing', () => {
    mount(<SearchResults />);
  });

  test('It defaults to an empty array.', () => {
    const component = mount(<SearchResults />);
    expect(component.props().results).toEqual([]);
  });

  describe('Styles', () => {
    test('It has a ".search-results" class', () => {
      const component = mount(<SearchResults />);
      expect(component.hasClass('search-results')).toBeTruthy();
    });
  });

  describe('<RepositoryResult /> || <OrganizationResult />', () => {

    test('It renders a <RepositoryResult /> when passed a Repository model.', () => {
      const component = mount(<SearchResults />);
      const results = [new Repository(repository_mocks[0])];
      component.setProps({ results: results });
      expect(component.find(RepositoryResult)).toHaveLength(1);
    });

    test('It renders an <OrganizationResult /> when passed an Organization model.', () => {
      const component = mount(<SearchResults />);
      const results = [new Organization(organizations_mocks[0])];
      component.setProps({ results: results });
      expect(component.find(OrganizationResult)).toHaveLength(1);
    });

    test('It binds the "repository" prop on <RepositoryResult /> to the result item.', () => {
      const component = mount(<SearchResults />);
      const repository = new Repository(repository_mocks[0]);
      const results = [repository];
      component.setProps({ results: results });
      const repositoryResult = component.find(RepositoryResult);
      expect(repositoryResult.props().repository).toBe(repository);
    });

    test('It binds the "org" prop on <OrganizationResult /> to the result item.', () => {
      const component = mount(<SearchResults />);
      const org = new Organization(organizations_mocks[0]);
      const results = [org];
      component.setProps({ results: results });
      const organizationResult = component.find(OrganizationResult);
      expect(organizationResult.props().org).toBe(org);
    });

    test('It renders a mixed result set of both components.', () => {
      const component = mount(<SearchResults />);

      const results = [
        new Organization(organizations_mocks[0]),
        new Repository(repository_mocks[0])
      ];

      component.setProps({ results: results });

      expect(component.find(OrganizationResult)).toHaveLength(1);

      expect(component.find(RepositoryResult)).toHaveLength(1);
    });

  });
});