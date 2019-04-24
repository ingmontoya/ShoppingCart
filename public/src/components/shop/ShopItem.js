import React from 'react';


class ShopItem extends React.Component {
    render() {
        return (<div className="card">
            <img className="card-img-top" src={this.props.product.productimage} alt="Card cap" />
            <div className="card-body">
                <h5 className="card-title">{this.props.product.productname}</h5>
                <p className="card-text">{this.props.product.productprice}</p>
                <a href="/" className="btn btn-primary">Go</a>
            </div>
        </div>);
    }
}

export default ShopItem
