import React from 'react';
//import { Link } from 'react-router-dom';

function NaujasSveikinimasComponent({ sveikinimas }) {
    return (
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="title"><b>Title</b></label>
                <input name="title" type="text" className="form-control" value={this.state.title} onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="image"><b>Image URL</b></label>
                <input name="image" type="text" className="form-control" value={this.state.image} onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="description"><b>Description</b></label>
                <input name="description" type="text" className="form-control" value={this.state.description} onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="price"><b>Price</b></label>
                <input name="price" type="text" className="form-control" value={this.state.price} onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="quantity"><b>Quantity</b></label>
                <input name="quantity" type="text" className="form-control" value={this.state.quantity} onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default NaujasSveikinimasComponent;