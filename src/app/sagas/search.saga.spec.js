import { delay } from 'redux-saga';
import { put, apply, call, takeLatest } from 'redux-saga/effects';
import { onTextChanged, handleTextChanged, performSearch } from './search.saga';

import * as SearchActions from 'actions/search.actions';
import GithubService from 'services/github.service';

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

      test('On Success: It dispatches a PERFORM_SEARCH_SUCCESS action.');
      test('On Error: It dispatches a PERFORM_SEARCH_FAIL action.');
    });

  });

});