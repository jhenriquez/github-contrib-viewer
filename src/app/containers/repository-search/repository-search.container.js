import React, { Component } from 'react';

import SearchBox from 'components/searchbox';
import SearchResults from 'components/search-results';

type PropType = {
  search: {
    isSearching: boolean;
    results: Array<any>;
    text: string;
  }
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
        <SearchResults />
      </div>
    );
  }
}

RepositorySearch.defaultProps = {
  search: {
    isSearching: false,
    results: [],
    text: ''
  }
};