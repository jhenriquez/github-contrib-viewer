import React, { Component } from 'react';

type PropType = {
  value?: string;
  onChange?: Function;
};

export default class SearchBox extends Component<void, PropType, void> {

  onChange () {
    if (this.props.onChange) {
      this.props.onChange(this.props.value);
    }
  }

  render () {
    return (
      <div className="searchbox">
        <input
          className="searchbox__input"
          value={ this.props.value }
          onChange={ this.onChange.bind(this) }>
        </input>
      </div>
    );
  }
}