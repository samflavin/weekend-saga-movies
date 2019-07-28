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
            movie_id: this.props.reduxStore.genres.movie_id,
            title: this.props.reduxStore.genres.title,
            description: this.props.reduxStore.genres.description
        }
    }

    handleChangeFor = (propertyName, event) => {
        this.setState({
            newEdit: {
                 ...this.state.newEdit,
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
        <textarea  placeholder="Movie" 
                    onChange={(event) => this.handleChangeFor('title', event)}>Movie</textarea>

        
   
         <textarea placeholder="Description"type="text" 
        onChange={(event) => this.handleChangeFor('description', event)}></textarea>
         </form>

            </div>
        );
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStoreOnProps)(Details);