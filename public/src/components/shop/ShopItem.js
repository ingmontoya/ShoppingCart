import React from 'react';
import {Link} from 'react-router-dom'

class ShopItem extends React.Component {
    render() {
        return (<div className="card">
            <Link to={"/DetailProduct/"+this.props.product._id}>
                <img className="card-img-top" src={this.props.product.productimage} alt="product" />
            </Link>
            <div className="card-body">
                <h5 className="card-title">{this.props.product.productname}</h5>
                <p className="card-text">{this.props.product.productprice}</p>
                <a href="/" className="btn btn-primary">Add to Cart</a>
            </div>
        </div>);
    }
}

export default ShopItem
