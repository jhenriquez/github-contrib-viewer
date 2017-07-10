import React, { Component } from 'react';

import SearchBox from 'components/searchbox';
import SearchResults from 'components/search-results';

type DefaultPropType = {
  search: {
    isSearching: boolean;
    results: Array<any>;
    text: string;
  }
};

export class RepositorySearch extends Component<DefaultPropType, {}, void> {
  static defaultProps: DefaultPropType;

  render () {
    return (
      <div className="repository-search">
        <SearchBox />
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