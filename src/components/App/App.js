import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Gallery from '../Gallery/Gallery';

class App extends Component {
  // Renders the entire app on the DOM




  render() {
    return (
      <div className="App">
        <h1>Movie List</h1>
        <Gallery />
        {JSON.stringify(this.props.reduxStore.movies
        )}
        <Route Details path="/details" component={Details} />
      </div>
    );
  }
}

const putReduxStoreOnProps = (reduxStore) => ({
  reduxStore
})

export default connect(putReduxStoreOnProps)(App);
