import { delay } from 'redux-saga';
import { put, takeLatest, call, apply, all } from 'redux-saga/effects';

import * as SearchActions from 'actions/search.actions';
import type { SearchAction } from 'actions/search.actions';
import GithubService from 'services/github.service';

const githubService = new GithubService();

export function* performSearch (action: SearchAction) : * {
  yield apply(githubService, githubService.search, [action.payload]);
}

export function* onTextChanged () : * {
  yield takeLatest(SearchActions.SEARCH_TEXT_CHANGED, handleTextChanged);
}

export function* handleTextChanged (action: SearchAction) : * {
  yield call(delay, 1300);
  yield put(new SearchActions.PerformSearchAction(action.payload));
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