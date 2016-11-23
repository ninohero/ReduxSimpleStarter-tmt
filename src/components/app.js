import React, { Component } from 'react';
import Header from './Header';
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <WeatherList />
        <Footer />
      </div>
    );
  }
}
