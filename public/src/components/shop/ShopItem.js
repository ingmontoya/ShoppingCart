import React from 'react';
import {Link} from 'react-router-dom'
import {Modal, Button} from 'react-bootstrap'
import axios from 'axios'

class ShopItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.onChangeInCart=this.onChangeInCart.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
            this.state= {
               show: false,
               incart:''
            }
    }
    
    handleClose() {
        this.setState({ show: false });
    }
    handleShow() {
        this.setState({ show: true });
    }
    onChangeInCart(e) {
        this.setState({
            incart: e.target.value
        });
    }
    checkHost(){
        var host = document.location.hostname;
        var apiurl='';
        if(host==="localhost") 
             apiurl="http://localhost:8000" 
        else
             apiurl="http://https://condorshopping.herokuapp.com";
        return apiurl
      }
    onSubmit(e) {
        e.preventDefault();
        const incartObj=document.getElementById(this.props.product._id).value;
        axios.post(this.checkHost()+'/product/update/'+incartObj+'/'+document.getElementById('update').value)
            .then(res=>console.log("Datos "+res.data))
            .then(this.handleShow)
            .catch(function(err){
                console.log("Error aquí en el post de products"+err)
            })
    }
    
    render() {
        return (<div className="card">
            <Link to={"/DetailProduct/"+this.props.product._id}>
                <img className="card-img-top" src={this.props.product.productimage} alt="product" />
            </Link>
            <div className="card-body">
                <h5 className="card-title">{this.props.product.productname}</h5>
                <p className="card-text">{this.props.product.productprice}</p>
                <form onSubmit={this.onSubmit}>
                    <input type="hidden" id="update"value="true"/>
                    <button className="btn btn-primary" id={this.props.product._id} value={this.props.product._id}>Add Product</button>
                </form>
            </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton className="alert alert-success">
            <Modal.Title>Success</Modal.Title>
        </Modal.Header>
                <p className="text-center">Product Added - Have fun!</p>
        </Modal> 
        </div>);
    }
}

export default ShopItem
