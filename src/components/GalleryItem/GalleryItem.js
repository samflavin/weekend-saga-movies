import React, { Component } from 'react';

// GalleryItem is not getting anything from redux, getting props from parent
class GalleryItem extends Component {


    // sends us to details route
    handleClick = (event) => {
        console.log('you clicked', this.props.item.id)
        // this.props.dispatch({ type: 'FETCH_DETAILS', payload: {id: this.props.item.id} })
        this.props.history.push('/details');
    }

    render() {
        //define item to make code more concise
        let item = this.props.item;
        return (
            <div >
                <p>{item.title}</p>
                <p>{item.description}</p>
                <img value={item.id} src={item.poster} alt={item.description} onClick={this.handleClick} />
            </div>
        );
    }
}

export default GalleryItem;