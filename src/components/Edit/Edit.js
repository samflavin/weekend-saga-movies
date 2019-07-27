import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

    handleClick = (event) => {
        this.props.history.push('/');
    }
    editMovie = (event) => {
        console.log(this.state.newEdit)
        event.preventDefault();
        this.props.dispatch({ type: 'EDIT_MOVIES', payload: this.state.newEdit})
        this.props.history.push('/');
    }
//fix state 
    state = {
        newEdit: {
            comments: '',
            movieTitle: ''
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
        <textarea  placeholder="Movie" value={this.state.newEdit.movieTitle}
                    onChange={(event) => this.handleChangeFor('movieTitle', event)}>Movie</textarea>

         <form>
   
         <textarea placeholder="Description"type="text" value={this.state.newEdit.comments}
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