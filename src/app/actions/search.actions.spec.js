import * as SearchActions from './search.actions';

import Repository from 'models/repository.model';
import Organization from 'models/organization.model';

import mock_repositories from 'mocks/repositories';
import mock_organizations from 'mocks/organizations';

describe('Actions: Search', () => {

  test('SEARCH_TEXT_CHANGED: payload is the text string.', () => {
    const searchText = "Some Search Value";
    expect(new SearchActions.SearchTextChanged(searchText)).toEqual(expect.objectContaining({
      type: SearchActions.SEARCH_TEXT_CHANGED,
      payload: "Some Search Value"
    }));
  });

  test('PERFORM_SEARCH_SUCCESS: payload is an array of Repositories and Organizations.', () => {
    const repositories = mock_repositories.map(r => new Repository(r));
    const organizations = mock_organizations.map(o => new Organization(o));

    expect(new SearchActions.PerformSearchSuccessAction(repositories.concat(organizations))).toEqual(expect.objectContaining({
      payload: repositories.concat(organizations)
    }));

  });

  test('PERFORM_SEARCH_FAIL: payload is whatever error results from execution.', () => {
    const error = new Error('Some error');
    expect(new SearchActions.PerformSearchFailAction(error)).toEqual(expect.objectContaining({ payload: error }));
  });

});