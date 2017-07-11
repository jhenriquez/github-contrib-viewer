import reducer, { getInitialState as getSearchInitialState } from './search.reducer.js';
import * as SearchActions from 'actions/search.actions';

describe('Reducer: Search', () => {

  test('It returns the initial state when provided with an undefined value for it.', () => {
    const nextState = reducer(undefined, new SearchActions.SearchTextChanged(''));
    expect(nextState).toEqual(getSearchInitialState());
  });

  describe('SEARCH_TEXT_CHANGED', () => {
    test('It updates "text" attribute.', () => {
      const textUpdate = 'Some new Text';
      const nextState = reducer(getSearchInitialState(), new SearchActions.SearchTextChanged(textUpdate));
      expect(nextState.text).toBe(textUpdate);
    });
  });
});