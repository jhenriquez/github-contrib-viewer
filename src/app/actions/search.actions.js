export const SEARCH_TEXT_CHANGED = '[Search] Text Changed';
export const PERFORM_SEARCH = '[Search] Perform Search';
export const PERFORM_SEARCH_SUCCESS = '[Search] Perform Search Success';
export const PERFORM_SEARCH_FAIL = '[Search] Perform Search Fail';
export const DEFAULT = '[Search] Default';

import Repository from 'models/repository.model';
import Organization from 'models/organization.model';

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

export class PerformSearchSuccessAction {
  type: string;
  payload: Array<Repository | Organization>;
  constructor (payload: Array<Repository | Organization>) {
    this.type = PERFORM_SEARCH_SUCCESS;
    this.payload = payload;
  }
}

export class PerformSearchFailAction {
  type: string;
  payload: any;
  constructor (payload: any) {
    this.type = PERFORM_SEARCH_SUCCESS;
    this.payload = payload;
  }
}

export class DefaultAction {
  type: string;
  constructor () {
    this.type = DEFAULT;
  }
}

export type SearchAction = SearchTextChanged
                        | PerformSearchAction
                        | PerformSearchSuccessAction
                        | PerformSearchFailAction
                        | DefaultAction;