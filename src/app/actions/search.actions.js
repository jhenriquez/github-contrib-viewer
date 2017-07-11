export const SEARCH_TEXT_CHANGED = '[Search] Text Changed';

export class SearchTextChanged {
  type: string;
  payload: string;

  constructor (payload: string) {
    this.type = SEARCH_TEXT_CHANGED;
    this.payload = payload;
  }
}

export type SearchAction = SearchTextChanged;