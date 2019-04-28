import React from 'react';
import axios from 'axios';
import CartItems from './CartItems';

class ShoppingCart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products:[]
        };
    }
    checkHost(){
        var host = document.location.hostname;
        var apiurl='';
        if(host==="localhost") 
             apiurl="http://localhost:8000" 
        else
             apiurl="https://condorshopping.herokuapp.com";
        return apiurl
      }
    componentDidMount() {
        axios.get(this.checkHost()+'/product/cart/true')
            .then(response => {
                    this.setState({products:response.data});
                })
            .catch(function (error){
                console.log("ERRORRRRRR "+error);
            })
    }
    productListCartItems() {
        return this.state.products.map(function(Product){
            return <CartItems product={Product} key={Product._id} />;
            
        })
    }
    render() {
        return (
            <div>
                <table className="container table">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                            {this.productListCartItems()}
                    </tbody>
                </table>
                
            </div>
       );
    }
}

export default ShoppingCart
