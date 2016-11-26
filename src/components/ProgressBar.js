import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import './ProgressBar.scss';

export default class ProgressBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="progressBar">
        <ul>
          <li>General</li>
          <li>Resources</li>
          <li>Non-Resource Budget Elements</li>
          <li>Summary</li>
        </ul>
      </nav>
    )
  }
}
