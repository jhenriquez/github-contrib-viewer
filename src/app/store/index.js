import { createStore, applyMiddleware } from 'redux';

import { default as reducers } from 'reducers/index';
import { getInitialState as getSearchInitialState } from 'reducers/search.reducer';
import classToPlainObject from 'middlewares/classToPlainObject';

import type { SearchStateType } from 'reducers/search.reducer';

export type ApplicationState = {
  search: SearchStateType;
};

export const getApplicationInitialState = () => {
  return Object.assign({}, {
    search: getSearchInitialState()
  });
};

export const configureStore = (initialState: ApplicationState = getApplicationInitialState()) => {
  return createStore(reducers, initialState, applyMiddleware(classToPlainObject));
};