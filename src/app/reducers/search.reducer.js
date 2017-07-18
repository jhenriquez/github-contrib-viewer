import * as SearchActions from 'actions/search.actions';

import type { SearchAction } from 'actions/search.actions';
import Repository from 'models/repository.model';
import Organization from 'models/organization.model';

export const getInitialState = () => {
  return Object.assign({}, {
    isSearching: false,
    results: [],
    text: ''
  });
};

export type SearchStateType = {
  isSearching: boolean;
  results: Array<Repository | Organization>;
  text: string;
};

const reducer = (state: SearchStateType = getInitialState(), action: SearchAction) => {
  switch(action.type) {
    case SearchActions.SEARCH_TEXT_CHANGED:
      return Object.assign({}, state, {
        text: typeof action.payload === 'string' ? action.payload : state.text
      });
    case SearchActions.PERFORM_SEARCH:
      return Object.assign({}, state, {
        isSearching: true
      });
    case SearchActions.PERFORM_SEARCH_FAIL:
      return Object.assign({}, state, {
        isSearching: false
      });
    case SearchActions.PERFORM_SEARCH_SUCCESS:
      return Object.assign({}, state, {
        isSearching: false,
        results: Array.isArray(action.payload) ? action.payload : state.results
      });
    default:
      return state;
  }
};

export default reducer;