import React from 'react';
import {Modal} from 'react-bootstrap'
import axios from 'axios'

class FormProduct extends React.Component {
    constructor(props, context) {
      super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.onChangeProductName=this.onChangeProductName.bind(this);
        this.onChangeProductPrice=this.onChangeProductPrice.bind(this);
        this.onChangeProductDescription=this.onChangeProductDescription.bind(this);
        this.onChangeProductImage=this.onChangeProductImage.bind(this);
        this.onChangeProductCategory=this.onChangeProductCategory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        show: false,
        productName:'',
        productPrice:'',
        productDescription:'',
        productImage:'',
        categoryname:''
      };
    }
    handleClose() {
        this.setState({ show: false });
    }
    
    handleShow() {
        this.setState({ show: true });

    }
    onChangeProductName(e) {
        this.setState({
            productName: e.target.value
        });
    }
    onChangeProductPrice(e) {
        this.setState({
            productPrice: e.target.value
        });
    }
    onChangeProductDescription(e) {
        this.setState({
            productDescription: e.target.value
        });
    }
    onChangeProductImage(e) {
        this.setState({
            productImage: e.target.value
        });
    }
    onChangeProductCategory(e) {
        this.setState({
            categoryname: e.target.value
        });
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

    onSubmit(e) {
        e.preventDefault();
        const newProduct = {
            productName: this.state.productName,
            productPrice: this.state.productPrice,
            productDescription: this.state.productDescription,
            categoryname:this.state.categoryname
        };
        console.log(newProduct);
        axios.post(this.checkHost()+'/product/create', newProduct)
            .then(res => console.log("DATOS = "+res.data))
            .catch(function(error){
            })
    }

  
    render() {
      return (
          <div>
            <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                        <label >Product name</label>
                            <input type="text" className="form-control" id="name" aria-describedby="nameHelp" name="productName" value={this.state.productName} onChange={this.onChangeProductName}/>
                        </div>
                        <div className="form-group">
                        <label >Product Price</label>
                            <input type="text" className="form-control" id="price" aria-describedby="nameHelp" name="ProductPrice" value={this.state.productPrice} onChange={this.onChangeProductPrice}/>
                        </div>
                        <div className="form-group">
                        <label >Product Description</label>
                            <input type="text" className="form-control" id="description" aria-describedby="nameHelp" name="productDescription"value={this.state.productDescription} onChange={this.onChangeProductDescription}/>
                        </div>
                        <div className="form-group">
                        <label >Product Category</label>
                        <select className="form-control" id="exampleFormControlSelect1" value={this.state.categoryname} onChange={this.onChangeProductCategory}>
                            <option>T-shirt</option>
                            <option>Mugs</option>
                        </select>
                        
                        </div>
                        
                        <button className="btn btn-primary">Add Product</button>
                    </form>              
                    </Modal.Body>
          </div>
      )
    }
  }
  export default FormProduct
  