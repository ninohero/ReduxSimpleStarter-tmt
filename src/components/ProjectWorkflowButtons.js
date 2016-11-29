import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { Button, ButtonToolbar } from 'react-bootstrap';

export default class ProjectWorkflowButtons extends Component {
  constructor(props) {
    super(props);
  }
  nextStep(){

  }
  render() {
    return (
      <div className="workflow_buttons">

        <Button bsSize="large" bsClass="button-light-grey float-left">Cancel</Button>
        <Button bsClass="button-blue float-right"
          bsSize="large"
          onClick={this.nextStep}>Save & Proceed</Button>
        <Button bsSize="large" bsClass="button-light-grey float-right">Clear Form</Button>

      </div>
    )
  }
}
