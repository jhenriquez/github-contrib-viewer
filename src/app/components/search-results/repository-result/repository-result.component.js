import React, { Component } from 'react';

import  Repository from 'models/repository.model';

type PropType = {
  repository: Repository;
};

export default class RepositoryResult extends Component<void, PropType, void> {
  render () {
    return (
      <div className="search-results__item">
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">{ this.props.repository.name }</h4>
            <h6 className="card-subtitle mb-2 text-muted">{ this.props.repository.login }</h6>
            <p className="card-text">{ this.props.repository.description }</p>
          </div>
        </div>
      </div>
    );
  }
}