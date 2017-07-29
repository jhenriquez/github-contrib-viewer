import { delay } from 'redux-saga';
import { put, takeLatest, call, apply, all } from 'redux-saga/effects';

import * as SearchActions from 'actions/search.actions';
import type { SearchAction } from 'actions/search.actions';
import GithubService from 'services/github.service';

const githubService = new GithubService();

export function* performSearch (action: SearchAction) : * {
  try {
    const results = yield apply(githubService, githubService.searchRepositories, [action.payload]);
    yield put(new SearchActions.PerformSearchSuccessAction(results));
  } catch(error) {
    yield put(new SearchActions.PerformSearchFailAction(error));
  }
}

export function* onTextChanged () : * {
  yield takeLatest(SearchActions.SEARCH_TEXT_CHANGED, handleTextChanged);
}

export function* handleTextChanged (action: SearchAction) : * {
  yield call(delay, 1300);
  yield put(new SearchActions.PerformSearchAction(
    typeof action.payload === 'string' ? action.payload : ''
  ));
}

export function* onPerformSearch () : * {
  yield takeLatest(SearchActions.PERFORM_SEARCH, performSearch);
}

export default function* SearchSaga () : * {
  yield all([
    onPerformSearch(),
    onTextChanged()
  ]);
}