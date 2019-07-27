import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

    //Dispatch to rootSaga to get our movie details from DB
    componentDidMount() {
    // this.props.dispatch({ type: 'FETCH_DETAILS' })
    }

    // Renders the details of the movies clicked

    render() {
        //assign item to be concis

        return (
            <div className="App">
                <header>
                    <button>Back to List</button>
                    &nbsp;
                    <button>Edit</button>
                </header>
                <h1>Details</h1>
             
               {JSON.stringify(this.props.reduxStore.genres)}
          
            
            </div>
        );
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStoreOnProps)(Details);