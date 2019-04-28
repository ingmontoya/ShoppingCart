import React from 'react'
import ShopItem from "../shop/ShopItem";
import axios from 'axios'
import {Link} from 'react-router-dom'

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products:[],
            category:'t-shirt'
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
        axios.get(this.checkHost()+'/product/')
            .then(response => {
                    this.setState({products:response.data});
                })
            .catch(function (error){
                console.log(error);
            })
    }
    productList() {
        return this.state.products.map(function(currentProduct){
            return <ShopItem product={currentProduct} key={currentProduct._id} />;
            
        })
    }
    
    render(){
        return(
            <div className="home">
                    <section className="cat"> 
                        <div className="categories">
                            <div className="container">
                            <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <h2>Shop by Categories</h2>
                                        <div className="container">
                                            <div className="row category-img">
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                <Link to={"/ContentCategory/T-shirt"}>
                                                    <img  className="" src="/images/t-shirt.png"  alt="t-shirt category"/>
                                                    <h3>T-Shirts</h3>
                                                </Link>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                <Link to={"/ContentCategory/Mugs"}>
                                                    <img  src="/images/mug.png"  alt="t-shirt category"/>
                                                    <h3>Mugs</h3>
                                                </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <h2>CondorShop</h2>
                                    <p className="copy-welcome">If you are part of this amazing community, you'll love this apparels.<br/>
                                    <span className="copy-operators">(</span> you write code <span className="copy-operators">)</span>  <span className="copy-operators">?</span> buy <span className="copy-operators">:</span> buy anyway <span className="copy-operators">:)</span>
                                    </p>
                                    <div className="container">
                                        <div className="row">
                                                {this.productList()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
        </div>
        )
    }
}

export default Content