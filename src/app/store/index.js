import { createStore, applyMiddleware } from 'redux';

import { default as reducers } from 'reducers/index';
import { getInitialState as getSearchInitialState } from 'reducers/search.reducer';
import classToPlainObject from 'middlewares/classToPlainObject';
import { composeWithDevTools } from 'redux-devtools-extension';

import type { SearchStateType } from 'reducers/search.reducer';

export type ApplicationState = {
  search: SearchStateType;
};

export const getApplicationInitialState = () : ApplicationState => {
  return Object.assign({}, {
    search: getSearchInitialState()
  });
};

export const configureStore = (initialState: ApplicationState = getApplicationInitialState()) : any => {
  return createStore(reducers, initialState, composeWithDevTools(
    applyMiddleware(classToPlainObject)
  ));
};