import React, { Component } from 'react';

import  Repository from 'models/repository.model';

type PropType = {
  repository: Repository;
};

export default class RepositoryResult extends Component<void, PropType, void> {
  truncateText (text: string) : string {
    return text && text.length > 75 ? `${text.substr(0,75)}...` : text;
  }

  render () {
    return (
      <div className="search-results__item">
        <div className="card">
          <div className="card-header">
            <span>{ this.props.repository.name }</span>
            <span className="card-header__badge badge badge-default">Repository</span>
          </div>
          <div className="card-block">
            <h6 className="card-title">{ this.props.repository.login }</h6>
            <p className="card-text">{ this.truncateText(this.props.repository.description) }</p>
          </div>
        </div>
      </div>
    );
  }
}