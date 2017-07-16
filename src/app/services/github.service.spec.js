import nock from 'nock';
import fetch from 'node-fetch';
import GithubService from './github.service';
import Repository from 'models/repository.model';
import Organization from 'models/organization.model';

import mock_repositories from 'mocks/github-repository-search-response-angular';
import mock_organizations from 'mocks/github-organization-search-response-angular';

describe('Service: Github', () => {

  beforeAll(() => {
    global.fetch = fetch;
  });

  const service = new GithubService();

  describe('#searchRepositories', () => {

    test('It resolves to an empty array when no query is provided', () => {
      const repositories = service.searchRepositories('');
      expect(repositories).resolves.toEqual([]);
    });

    test('It calls on the github repository search API.', () => {
      const request = nock('https://api.github.com:443', {"encodedQueryParams":true})
        .get('/search/repositories')
        .query({"q":"angular"})
        .reply(200, mock_repositories);

      service.searchRepositories('angular');

      request.done();
    });

    test('It resolves to an array of repository models object.', () => {
      const request = nock('https://api.github.com:443', {'encodedQueryParams':true})
        .get('/search/repositories')
        .query({"q":"angular"})
        .reply(200, mock_repositories);

      const expectedRepositories = mock_repositories.items.map((r) => new Repository(r));
      const repositories = service.searchRepositories('angular');

      request.done();

      expect(repositories).resolves.toEqual(expectedRepositories);
    });

  });

  describe('#searchOrganizations', () => {

    test('It resolves to an empty array when no is provided.', () => {
      const organizations = service.searchOrganizations('');
      expect(organizations).resolves.toEqual([]);
    });


    test('It calls on the github user search API, and queries for orgs only.', () => {
      const request = nock('https://api.github.com:443', {"encodedQueryParams":true})
        .get('/search/users')
        .query({'q': "angular", 'type': 'org'})
        .reply(200, mock_organizations);

      service.searchOrganizations('angular');

      request.done();
    });

    test('It resolves to an array of Organization models.', () => {
      const request = nock('https://api.github.com:443', {"encodedQueryParams":true})
        .get('/search/users')
        .query({'q': "angular", 'type': 'org'})
        .reply(200, mock_organizations);

      const orgs = service.searchOrganizations('angular');

      const orgsModels = mock_organizations.items.map(o => new Organization(o));

      expect(orgs).resolves.toEqual(orgsModels);

      request.done();
    });

  });

});