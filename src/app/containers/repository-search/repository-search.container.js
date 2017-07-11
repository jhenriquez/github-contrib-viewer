import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBox from 'components/searchbox';
import SearchResults from 'components/search-results';
import { getInitialState } from 'reducers/search.reducer';
import * as SearchActions from 'actions/search.actions';

import type { SearchStateType } from 'reducers/search.reducer';
import type { ApplicationState } from 'store/index';

type PropType = SearchStateType & {
  searchTextChanged?: string=>void
};

export class RepositorySearch extends Component<SearchStateType, PropType, void> {
  static defaultProps: SearchStateType;

  render () {
    return (
      <div className="repository-search">
        <SearchBox value={ this.props.text } onChange={ this.props.searchTextChanged  } />
        <SearchResults results={ this.props.results } />
      </div>
    );
  }
}

export const mapStateToProps = (state: ApplicationState) => state.search;

export const mapDispatchToProps = (dispatch: Function) => {
  return {
    searchTextChanged: (textUpdate: string) => {
      dispatch(new SearchActions.SearchTextChanged(textUpdate));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RepositorySearch);

RepositorySearch.defaultProps = getInitialState();