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
          <div className="card-block">
            <h4 className="card-title">{ this.props.org.login }</h4>
            <p className="card-text">{ this.props.org.description }</p>
          </div>
        </div>
      </div>
    );
  }
}