import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ProgressBar } from '../components/ProgressBar';
import { ProjectWorkflowHeader } from '../components/ProjectWorkflowHeader';
// actions
import { fetchWeather } from '../actions/index';

let staticText="lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom ";

class ProjectInfo extends Component {
  render() {
    return (
      <div className="container">
        <ProgressBar stage={1} />
        <ProjectWorkflowHeader title="ProjectInformation" description={description} />
      </div>
    )
  }
}
