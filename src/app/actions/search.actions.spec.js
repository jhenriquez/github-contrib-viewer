import * as SearchActions from './search.actions';

describe('Actions: Search', () => {

  test('SEARCH_TEXT_CHANGED: payload is the text string.', () => {
    const searchText = "Some Search Value";
    expect(new SearchActions.SearchTextChanged(searchText)).toEqual(expect.objectContaining({
      type: SearchActions.SEARCH_TEXT_CHANGED,
      payload: "Some Search Value"
    }));
  });

});