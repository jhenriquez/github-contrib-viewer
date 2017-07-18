import React, { Component } from 'react';

import RepositoryResult from './repository-result/repository-result.component';
import Repository from 'models/repository.model';

import OrganizationResult from './organization-result/organization-result.component';
import Organization from 'models/organization.model';

type PropType = {
  results: Array<Repository | Organization>;
};

export default class SearchResults extends Component<PropType, PropType, void> {
  static defaultProps: PropType;

  render () {
    return (
      <div className="search-results">
         {this.props.results.map((item) => {
            return item instanceof Repository ?
                    <RepositoryResult key={item.id} repository={item} /> :
                    item instanceof Organization ? <OrganizationResult key={item.id} org={item} /> : null;
          })}
      </div>
    );
  }
}

SearchResults.defaultProps = {
  results: []
};