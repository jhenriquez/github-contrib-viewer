import React, { Component } from 'react';

import type { IRepository } from 'models/repository.model';
import type { IOrganization } from 'models/organization.model';

type PropType = {
  results: Array<IRepository | IOrganization>;
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