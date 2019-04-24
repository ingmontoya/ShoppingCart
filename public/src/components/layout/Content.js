import React from 'react'
import ShopItem from "../shop/ShopItem";
import axios from 'axios'

class Content extends React.Component{
    constructor(){
        super();
        this.state = {
            products:[]
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/product/')
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
        )
    }
}

export default Content