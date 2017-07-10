import React, { Component } from 'react';

type PropType = {
  results: Array<any>;
};

export default class SearchResults extends Component<PropType, PropType, void> {
  static defaultProps: PropType;
  render () {
    return <div></div>;
  }
}

SearchResults.defaultProps = {
  results: []
};