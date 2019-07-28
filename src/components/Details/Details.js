import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

    handleClick = (event) => {
        this.props.history.push('/');
    }
    editPage = (event) => {
        this.props.history.push('/edit');
    }

    render() {
        //assign item to be concis

        return (
            <div className="App">
                <header>
                    <button onClick={this.handleClick}>Back to List</button>
                    &nbsp;
                    <button onClick={this.editPage}>Edit</button>
                </header>
                <h1>Details</h1>
                    <div>
                    <p>Genre: {this.props.reduxStore.genres.name}</p>
                    <img src={this.props.reduxStore.genres.poster} alt={this.props.reduxStore.genres.description}/>
                    <p>{this.props.reduxStore.genres.description}</p>
                    </div>
                
                
          
            
            </div>
        );
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStoreOnProps)(Details);