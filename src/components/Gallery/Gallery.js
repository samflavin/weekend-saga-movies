import React, { Component } from 'react';
import { connect } from 'react-redux';

class Gallery extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MOVIES' })
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
                            <img src={item.poster} alt={item.description}/>
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