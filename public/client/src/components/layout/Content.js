import React from 'react'
import ShopItem from '../shop/ShopItems'

class Content extends React.Component{
    render(){
        return(
            <section className="content">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h2>CondorShop</h2>
                        <p className="copy-welcome">If you are part of this amazing community, you'll love this apparels.<br/>
                        <span className="copy-operators">(</span> you write code <span className="copy-operators">)</span>  <span className="copy-operators">?</span> buy <span className="copy-operators">:</span> buy anyway
                        </p>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    <ShopItem />
                                </div>
                                <div className="col-sm">
                                    <ShopItem />
                                </div>
                                <div className="col-sm">
                                    <ShopItem />
                                </div>
                                <div className="col-sm">
                                    <ShopItem />
                                </div>
                                <div className="col-sm">
                                    <ShopItem />
                                </div>
                                <div className="col-sm">
                                    <ShopItem />
                                </div>
                                
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