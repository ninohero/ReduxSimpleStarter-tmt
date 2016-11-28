import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { connect } from 'react-redux';

//components
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';
import ProjectWorkflowHeader from '../components/ProjectWorkflowHeader';
import ProjectList from '../containers/ProjectList';
import Footer from '../components/Footer';
import '../sass/base.scss';

export default class App extends Component {
  render () {
    return (
      <div>
        <Header />
          {this.props.children}
        <Footer />
      </div>
    )
  };
}

// export default connect(
//   state => ({
//     default: state
//   }),
//   {  }
// )( App );
