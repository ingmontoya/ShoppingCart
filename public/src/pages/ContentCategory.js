import React from 'react'
import ShopItem from "../components/shop/ShopItem";
import axios from 'axios'
/*
*IMPORT COMPONENTS
*/
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import PageTittle from '../components/layout/PageTittle'
class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products:[], 
            productsbycategory:[]
        }
        console.log(props)
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
        axios.get(this.checkHost()+'/product/category/'+this.props.match.params.id)
            .then(response => {
                    this.setState({productsbycategory:response.data});
                })
            .catch(function (error){
                console.log("ERRORRRRRR "+error);
            })
    }
    productListbyCategory() {
        return this.state.productsbycategory.map(function(currentProduct){
            return <ShopItem product={currentProduct} key={currentProduct._id} />;
            
        })
    }
    
    render(){
        return(
            <div>
                <Header/>
                    <PageTittle />
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
                                                {this.productListbyCategory()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                <Footer />
            </div>      
        )
    }
}

export default Content