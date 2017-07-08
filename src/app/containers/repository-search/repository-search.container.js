import React, { Component } from 'react';

type DefaultPropType = {
  search: {
    isSearching: boolean;
    results: Array<any>;
  }
};

export class RepositorySearch extends Component<DefaultPropType, {}, void> {
  static defaultProps: DefaultPropType;

  render () {
    return <div></div>;
  }
}

RepositorySearch.defaultProps = {
  search: {
    isSearching: false,
    results: []
  }
};