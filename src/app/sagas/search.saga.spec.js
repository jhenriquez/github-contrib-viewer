import { delay } from 'redux-saga';
import { put, apply, call, takeLatest } from 'redux-saga/effects';
import { onTextChanged, handleTextChanged, performSearch } from './search.saga';

import * as SearchActions from 'actions/search.actions';
import GithubService from 'services/github.service';

import Repository from 'models/repository.model';
import Organization from 'models/organization.model';

import mock_repositories from 'mocks/repositories';
import mock_organizations from 'mocks/organizations';

describe('Saga: Search', () => {

  describe('SEARCH_TEXT_CHANGED', () => {

    describe('onTextChanged', () => {
      test('It listens for SEARCH_TEXT_CHANGE dispatches a handleTextChanged taking always the latest.',  () => {
        const gen = onTextChanged();
        expect(gen.next().value).toEqual(takeLatest(SearchActions.SEARCH_TEXT_CHANGED, handleTextChanged));
      });
    });

    describe('handleTextChanged', () => {
      test('It waits 1300 seconds.', () => {
        const gen = handleTextChanged(new SearchActions.SearchTextChanged(''));
        expect(gen.next().value).toEqual(call(delay, 1300));
      });

      test('It dispatches a PERFORM_GITHUB_SEARCH event, with the payload from SEARCH_TEXT_CHANGED', () => {
        const searchText = 'Some Text';
        const gen = handleTextChanged(new SearchActions.SearchTextChanged(searchText));
        expect(gen.next().value).toEqual(call(delay, 1300));
        expect(gen.next().value).toEqual(put(new SearchActions.PerformSearchAction(searchText)));
      });
    });

    describe('onPerformSearch', () => {

      const githubService = new GithubService();

      test('It calls on the github service to search for the given payload.', () => {
        const searchText = 'Search Text';
        const gen = performSearch(new SearchActions.PerformSearchAction(searchText));
        expect(gen.next().value).toEqual(apply(githubService, githubService.search, [searchText]));
      });

      test('On Success: It dispatches a PERFORM_SEARCH_SUCCESS action.', () => {
        const repositories = mock_repositories.map(r => new Repository(r));
        const organizations = mock_organizations.map(o => new Organization(o));
        const items = repositories.concat(organizations);
        const searchText = 'Search Text';
        const gen = performSearch(new SearchActions.PerformSearchAction(searchText));
        expect(gen.next().value).toEqual(apply(githubService, githubService.search, [searchText]));
        expect(gen.next(items).value).toEqual(put(new SearchActions.PerformSearchSuccessAction(items)));
      });

      test('On Error: It dispatches a PERFORM_SEARCH_FAIL action.', () => {
        const searchText = 'Search Text';
        const gen = performSearch(new SearchActions.PerformSearchAction(searchText));
        expect(gen.next().value).toEqual(apply(githubService, githubService.search, [searchText]));
        const error = new Error('some error');
        expect(gen.throw(error).value).toEqual(put(new SearchActions.PerformSearchFailAction(error)));
      });
    });

  });

});