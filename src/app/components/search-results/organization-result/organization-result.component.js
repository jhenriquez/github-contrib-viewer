import React, { Component } from 'react';

import type { IOrganization } from 'models/organization.model';

type PropType = {
  org: IOrganization
};

export default class OrganizationResult extends Component<void, PropType, void> {
  render () {
    return (
      <div className="search-results__item">
        <h3>{ this.props.org.login }</h3>
      </div>
    );
  }
}