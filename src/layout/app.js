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
//{ children }
export default class App extends Component {
  render () {
    // {children}
    return (
      <div>
        <Header />
        <div className="content" >
          {/* todo: make the progressbar only show if user is in the add project workflow */}
          <ProgressBar />
          <ProjectList defaultSearch="ooo" searchPlaceholder="Search Project List" />

        </div>
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
