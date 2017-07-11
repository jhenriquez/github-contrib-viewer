import React, { Component } from 'react';

import SearchBox from 'components/searchbox';
import SearchResults from 'components/search-results';
import { getInitialState } from 'reducers/search.reducer';

import type { SearchStateType } from 'reducers/search.reducer';


type PropType = {
  search: SearchStateType
};

export class RepositorySearch extends Component<PropType, PropType, void> {
  static defaultProps: PropType;

  /**
   * This function is a place holder. This should be no more than redux event dispatch.
   */
  onSearchBoxChange () { }

  render () {
    return (
      <div className="repository-search">
        <SearchBox value={ this.props.search.text } onChange={ this.onSearchBoxChange.bind(this)  } />
        <SearchResults results={ this.props.search.results } />
      </div>
    );
  }
}

RepositorySearch.defaultProps = {
  search: getInitialState()
};