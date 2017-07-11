import * as SearchActions from 'actions/search.actions';

import type { SearchAction } from 'actions/search.actions';
import type { IRepository } from 'models/repository.model';
import type { IOrganization } from 'models/organization.model';

export const getInitialState = () => {
  return Object.assign({}, {
    isSearching: false,
    results: [],
    text: ''
  });
};

export type SearchStateType = {
  isSearching: boolean;
  results: Array<IRepository | IOrganization>;
  text: string;
};

const reducer = (state: SearchStateType = getInitialState(), action: SearchAction) => {
  switch(action.type) {
    case SearchActions.SEARCH_TEXT_CHANGED:
      return Object.assign({}, state, {
        text: action.payload
      });
    default:
      return state;
  }
};

export default reducer;