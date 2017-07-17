import { throttle, put, takeEvery, takeLatest, apply } from 'redux-saga/effects';

import * as SearchActions from 'actions/search.actions';
import type { SearchAction } from 'actions/search.actions';
import GithubService from 'services/github.service';

const githubService = new GithubService();

export function* performSearch (action: SearchAction) : * {
  yield apply(githubService, githubService.search, [action.payload]);
}

export function* watchTextChanged () : * {
  yield takeEvery(SearchActions.SEARCH_TEXT_CHANGED , throttleSearchTextAction, new SearchActions.SearchTextChanged(''));
}

export function* throttleSearchTextAction (action: SearchAction) : * {
  yield throttle(400, action.type, handleTextChanged, action);
}

export function* handleTextChanged (action: SearchAction) : * {
  yield put(new SearchActions.PerformSearchAction(action.payload));
}

export function* watchPerformSearch () : * {
  yield takeLatest(SearchActions.PERFORM_SEARCH, performSearch, new SearchActions.SearchTextChanged(''));
}