import { put, takeEvery, throttle, apply } from 'redux-saga/effects';
import { watchTextChanged, handleTextChanged, throttleSearchTextAction, performSearch } from './search.saga';

import * as SearchActions from 'actions/search.actions';
import GithubService from 'services/github.service';

describe('Saga: Search', () => {

  describe('SEARCH_TEXT_CHANGED', () => {

    describe('watchTextChanged', () => {
      test('throttleSearchTextAction: it throttles handleTextChanged', () => {
        const searchTextChanged = new SearchActions.SearchTextChanged('Some Text');
        const gen = throttleSearchTextAction(searchTextChanged);
        expect(gen.next().value).toEqual(throttle(400, searchTextChanged.type, handleTextChanged, searchTextChanged));
      });

      test('It throttles (via throttleSearchTextAction helper) the search event', () => {
        const gen = watchTextChanged();
        expect(gen.next().value).toEqual(takeEvery(SearchActions.SEARCH_TEXT_CHANGED, throttleSearchTextAction, new SearchActions.SearchTextChanged('')));
      });
    });

    describe('handleTextChanged', () => {
      test('It dispatches a PERFORM_GITHUB_SEARCH event, with the payload from SEARCH_TEXT_CHANGED', () => {
        const searchText = 'Some Text';
        const gen = handleTextChanged(new SearchActions.SearchTextChanged(searchText));
        expect(gen.next().value).toEqual(put(new SearchActions.PerformSearchAction(searchText)));
      });
    });

    describe('performSearch', () => {

      const githubService = new GithubService();

      test('It calls on the github service to search for the given payload.', () => {
        const searchText = 'Search Text';
        const gen = performSearch(new SearchActions.PerformSearchAction(searchText));
        expect(gen.next().value).toEqual(apply(githubService, githubService.search, [searchText]));
      });

      test('On Success: It dispatches a PERFORM_SEARCH_SUCCESS action.');
      test('On Error: It dispatches a PERFORM_SEARCH_FAIL action.');
    });

  });

});