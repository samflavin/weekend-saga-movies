import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

    handleClick = (event) => {
        this.props.history.push('/');
    }
    editMovie = (event) => {
        this.props.history.push('/');
    }

    state = {
        newEdit: {
            comments: ''
        }
    }

    handleChangeFor = (propertyName, event) => {
        this.setState({
            newFeeling: {
                ...this.state.newFeeling,
                [propertyName]: event.target.value
            }
        })
    }


    render() {
        //assign item to be concis

        return (
            <div className="App">
        <button>Cancel</button> 
        <button onClick={this.editMovie}>Save</button>
          
         <p>Edit</p>
         <form onSubmit="editMovie">
         <textarea></textarea>
         </form>

            </div>
        );
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStoreOnProps)(Details);