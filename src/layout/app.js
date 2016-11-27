import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { connect } from 'react-redux';

//components
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';
import ProjectWorkflowHeader from '../components/ProjectWorkflowHeader';
//import SearchBar from '../containers/SearchBar';
//import WeatherList from '../containers/WeatherList';
import Footer from '../components/Footer';
import '../sass/base.scss';

function App( { children } ) {
  let headerTitle="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
  return (
    <div>
      <Header />
      <div className="content" >
        <ProgressBar />
        <ProjectWorkflowHeader title="Project Information" description={headerTitle} />
        {children}
        {/*<SearchBar />
        <WeatherList />*/}
      </div>
      <Footer />
    </div>
  );
}

export default connect(
  state => ({
    default: "nothing yet"
  }),
  {  }
)( App );
