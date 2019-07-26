import React, { Component } from 'react';
import { connect } from 'react-redux';

class Gallery extends Component {

    // Calls to saga to get movies from DB
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MOVIES' })
    }

    // sends us to details route
    handleClick=(event)=>{
        console.log('you clicked', event)
 // this.props.dispatch({ type: 'FETCH_DETAILS', payload: {id: this.props.item.id} })
        this.props.history.push('/details');

    }

    // Renders the entire app on the DOM
    render() {
        return (
            <div className="App">
                {
                    this.props.reduxStore.movies.map(item => (
                        <div key={item.id}>
                            <p>{item.title}</p>
                            <p>{item.description}</p>
                            <img value={item.id} src={item.poster} alt={item.description} onClick={this.handleClick}/>
                            {/* <p>Show: {item.showname}</p> */}
                            {/* {JSON.stringify(this.props.reduxStore.characterList)} */}
                            {/* <SelectTag selected={item.tag_id} /> */}
                           
                        </div>
                    ))

                }
            </div>
        );
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStoreOnProps)(Gallery);