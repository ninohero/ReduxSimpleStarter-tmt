import React, { Component } from 'react';

export default class ProjectWorkflowHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="header">
        <h1>{ this.props.title }</h1>
        <h5>{ this.props.description }</h5>
      </div>
    )
  }
}
