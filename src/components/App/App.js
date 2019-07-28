import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Gallery from '../Gallery/Gallery';
import Details from '../Details/Details';
import Edit from "../Edit/Edit";
import { HashRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  // Renders the entire app on the DOM




  render() {
    return (
      <div className="App">
        <header>
        <h1>Movie List</h1>
        </header>
        <Router >
        <Route Gallery path="/" exact component={Gallery}/>
        <Route Details path="/details" component={Details}/>
        <Route Edit path="/edit" component={Edit}/>
        {/* <Route Details path="/details" component={Details} /> */}
      
        </Router >
      </div>
    );
  }
}

const putReduxStoreOnProps = (reduxStore) => ({
  reduxStore
})

export default connect(putReduxStoreOnProps)(App);
