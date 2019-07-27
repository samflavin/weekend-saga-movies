import React, { Component } from 'react';
import { connect } from 'react-redux';
import GalleryItem from '../GalleryItem/GalleryItem';

class Gallery extends Component {

    // Calls to saga to get movies from DB
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MOVIES' })
    }


    // Renders the entire app on the DOM
    render() {
        return (
            <div className="App">
                {this.props.reduxStore.movies.map(item => 
                        <GalleryItem key={item.id} item={item} history={this.props.history}/>
                 ) }
            </div>
        );
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStoreOnProps)(Gallery);