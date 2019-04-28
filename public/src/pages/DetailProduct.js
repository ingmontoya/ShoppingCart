import React, { Component } from 'react';
import axios from 'axios'
/*
*IMPORT COMPONENTS
*/
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import PageTittle from '../components/layout/PageTittle'

import '../App.css';

class DetailProduct extends Component {
  constructor(props){
    super(props);
    this.state = {
        productname:  '', 
        productimage:''
    }
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
    axios.get(this.checkHost()+'/product/'+this.props.match.params.id)
        .then(response => {
                this.setState({
                  productname:response.data.productname, 
                  productimage:response.data.productimage, 
                  productdescription:response.data.productdescription,
                  productprice:response.data.productprice,
                  categoryname:response.data.productcategory.categoryname
                })
            })
        .catch(function (error){
            console.log(error);
        })
}
  render() {
    return (
      <div>
        <Header dataSearch={this.props.searchForm}/>
        <PageTittle />
        <section className="content">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="container">
                            <div className="row contact-titles">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                                <h2 className="">{this.state.productname}</h2>
                                <img className="card-img-top" src={this.state.productimage} alt="product" />
                                </div>
                    
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <h2>Description</h2>
                                <p>{this.state.productdescription}</p>
                                <p>Price: <strong>{this.state.productprice}</strong></p>
                                <p>Category: <b>{this.state.categoryname}</b></p>
                                <p><button className="btn btn-primary to-left">Add to Cart</button></p>


                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <Footer />
      </div>
    );
  }
}

export default DetailProduct;
