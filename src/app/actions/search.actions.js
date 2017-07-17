export const SEARCH_TEXT_CHANGED = '[Search] Text Changed';
export const PERFORM_SEARCH = '[Search] Perform Search';

export class SearchTextChanged {
  type: string;
  payload: string;

  constructor (payload: string) {
    this.type = SEARCH_TEXT_CHANGED;
    this.payload = payload;
  }
}

export class PerformSearchAction {
  type: string;
  payload: string;

  constructor (payload: string) {
    this.type = PERFORM_SEARCH;
    this.payload = payload;
  }
}

export type SearchAction = SearchTextChanged
                        | PerformSearchAction;