import React, { Component } from 'react';

import type { IRepository } from 'models/repository.model';

type PropType = {
  repository: IRepository;
};

export default class RepositoryResult extends Component<void, PropType, void> {
  render () {
    return (
      <div className="search-results__item">
        <h3>{ this.props.repository.name }</h3>
      </div>
    );
  }
}