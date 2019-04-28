import React from "react"
import {NavLink} from 'react-router-dom'
import {Modal, Button} from 'react-bootstrap'
import FormProduct from "./FormProduct";
import ShoppingCart from '../shop/ShoppingCart'

class Header extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleShowCart = this.handleShowCart.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleCloseCart = this.handleCloseCart.bind(this);
            this.state= {
               show: false,
               showCart: false,
               searchValue:''
            }
    }
    handleClose() {
        this.setState({ show: false });
    }
    handleCloseCart() {
        this.setState({ showCart:false });
    }
    handleShow() {
        this.setState({ show: true });
    }
    handleShowCart() {
        this.setState({ showCart: true });
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark top-bar">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="/">
                        <img className="logo" src="/images/logo-dark.svg" alt="Condor Labs logo" />
                        <img className="logo" src="/images/logo-text-dark.svg" alt="Condor Labs logo" />
                    </a>
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <NavLink exact to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/contact">Contact us</NavLink>
                    </li>
                    </ul>
                </div>
                <form className="form-inline my-2 my-lg-0" onSubmit={this.Handlefind}>
                    <input className="form-control  search" type="search" placeholder=" " aria-label="Search"   name="searchValue"/>
                    <button className="btn  my-2 my-sm-0" type="submit"><i className="fa fa-search"></i> </button>
                </form>
                <ul className="navbar-nav pr-2 ml-2 mt-2 mt-lg-0">
                    <li className="mr-2"><a href="#" onClick={this.handleShow} id="cart" className="text-dark"><i className="fa fa-plus"></i> </a></li>
                    <li><a href="#" onClick={this.handleShowCart} id="formp" className="text-dark"><i className="fa fa-shopping-cart"></i></a></li>
                </ul>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <FormProduct />
                </Modal> 
                <Modal show={this.state.showCart} onHide={this.handleCloseCart}>
                <Modal.Header closeButton>
                <Modal.Title>ShoppingCart</Modal.Title>
                </Modal.Header>
                  <ShoppingCart />
                <Modal.Footer>
                    <Button variant="primary">Proceed to checkout</Button>
                </Modal.Footer>
                </Modal> 
            </nav>
        )
    }
}

export default Header
