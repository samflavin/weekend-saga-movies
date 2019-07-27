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
               
                {this.props.reduxStore.genres.map((item, i) =>
                    <ul key={i}>
                    <p>Genre: {item.name}</p>
                    <img src={item.poster} alt={item.description}/>
                    <li>{item.description}</li>
                    </ul>
                )}
                
          
            
            </div>
        );
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStoreOnProps)(Details);