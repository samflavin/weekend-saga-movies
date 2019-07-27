import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

    handleClick = (event) => {
        this.props.history.push('/');
    }
    editMovie = (event) => {
        this.props.dispatch({ type: 'EDIT_MOVIES', payload: this.state.newEdit })
        this.props.history.push('/');
    }

    state = {
        newEdit: {
            comments: ''
        }
    }

    handleChangeFor = (propertyName, event) => {
        this.setState({
            newEdit: {
               // ...this.state.newEdit,
                [propertyName]: event.target.value
            }
        })
    }


    render() {
        //assign item to be concis

        console.log(this.state);

        return (
            <div className="App">
        <button>Cancel</button> 
        <button onClick={this.editMovie}>Save</button>
          
         <p>Edit</p>
         <form>
        <textarea type="text" value={this.state.newEdit.comments}
        onChange={(event) => this.handleChangeFor('comments', event)}></textarea>
         </form>

            </div>
        );
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStoreOnProps)(Details);