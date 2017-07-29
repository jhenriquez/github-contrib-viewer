import React, { Component } from 'react';

import Organization from 'models/organization.model';

type PropType = {
  org: Organization;
};

export default class OrganizationResult extends Component<void, PropType, void> {
  render () {
    return (
      <div className="search-results__item">
        <div className="card">
          <div className="card-header">
            <span>{ this.props.org.login }</span>
            <span className="card-header__badge badge badge-danger">Organization</span>
          </div>
          <div className="card-block">
            <p className="card-text">{ this.props.org.description }</p>
          </div>
        </div>
      </div>
    );
  }
}