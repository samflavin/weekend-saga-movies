import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

    //Dispatch to rootSaga to get our movie details from DB
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_DETAILS' })
    }

    // Renders the details of the movies clicked

    render() {
        return (
            <div className="App">
                <h1>Details</h1>
               <p>Hello there!</p>
            </div>
        );
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStoreOnProps)(Details);