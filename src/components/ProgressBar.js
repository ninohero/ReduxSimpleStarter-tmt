import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import './ProgressBar.scss';

export default class ProgressBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-sm-8">
        <nav className="progressBar row">
          <ul>
            <li className="col-sm-2">General</li>
            <li className="col-sm-2">Resources</li>
            <li className="col-sm-2">Non-Resource Budget Elements</li>
            <li className="col-sm-2">Summary</li>
          </ul>
        </nav>
      </div>
    )
  }
}
