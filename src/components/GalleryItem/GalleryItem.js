import React, { Component } from 'react';
import { connect } from 'react-redux';




// GalleryItem is not getting anything from redux, getting props from parent
class GalleryItem extends Component {


    // sends to details route
    handleClick = (event) => {
        console.log('you clicked', this.props.item.id);
        this.props.dispatch({ type: 'FETCH_DETAILS', payload: this.props.item.id});
        this.props.history.push('/details');

    }

   

    render() {
        //define item to make code more concise
        let item = this.props.item;
        return (
            <div className="grid-item">
                <p className="title">{item.title}</p>
                <p className="description">{item.description}</p>
                <img className="zoom" value={item.id} src={item.poster} alt={item.description} onClick={this.handleClick} />
            </div>
        );
    }
}
const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})


export default connect(putReduxStoreOnProps)(GalleryItem);
